<template>
    <div class="fill-height yellowCream d-flex justify-center align-center">
        <v-img
            contain
            max-width="860"
            src="/maintenance.jpg"
        ></v-img>
        <!-- <Registration /> -->
        <!-- <Landing v-if="!isLoggedIn" />
        <Dashboard v-else /> -->
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        components: {
            // Courses: () => import("@/components/courses/Courses"),
            // Signup: () => import("@/components/auth/signup")
        },
        data: () => ({
            
        }),
        computed: {
            ...mapState({
                authUser: state => state.authUser,
            }),
            ...mapGetters({
                isLoggedIn: 'isLoggedIn',
            }),
        },
        methods: {}
    };
</script>