export const state = () => ({
    authUser: null,
})

export const getters = {
    getData(state) {
        return state.authUser
    },

    isLoggedIn: (state) => {
        try {
            return state.authUser.uid !== null
        } catch {
            return false
        }
    }
}

export const mutations = {
    RESET_STORE: (state) => {
        Object.assign(state, {authUser: null})
    },

    ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser, claims }) {
        if (!authUser) {
            state.authUser = null
        } else {
            const { uid, email, emailVerified, displayName, photoURL } = authUser
            state.authUser = {
                uid,
                displayName,
                email,
                emailVerified,
                photoURL: photoURL || null,
                isAdmin: claims.custom_claim
            }
        }
    },
    
    SET_AUTH_USER: (state, { authUser }) => {
        state.authUser = {
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName
        }
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }, ctx) {
        // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'
    
        /** Get the VERIFIED authUser on the server */
        if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
            const { allClaims: claims, ...authUser } = ctx.res.locals.user
        
            console.info(
                'Auth User verified on server-side. User: ',
                authUser,
                'Claims:',
                claims
            )
        
            await dispatch('onAuthStateChanged', {
                authUser,
                claims,
            })
        }
    },

    async onAuthStateChangedAction({ commit }, { authUser, claims }) {
        if (!authUser) {
            commit('RESET_STORE')
            return
        }
        if (authUser && authUser.getIdToken) {
            try {
                const idToken = await authUser.getIdToken(true)
                console.info('idToken', idToken)
            } catch (e) {
                console.error(e)
            }
        }
        commit('SET_AUTH_USER', { authUser })
    }
}