export const state = () => ({
    data: [],
})

export const mutations = {
    STORE_CERTIFICATE_DATA(state, data) {
        state.data = data
    }
}

export const actions = {
    async getAll({commit}, data) {
        try {
            const res = await this.$axios.get('/api/certificate')
            await commit('STORE_CERTIFICATE_DATA', res.data.data)

            if (res.data.code === 'OK') return res.data.data
            else return { code: res.data.code , error: res.data.status}
        } catch (error) {
            return []
        }
        
    }
}

export const getters = {
    getData(state) {
        return state.data
    }
}