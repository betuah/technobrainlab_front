<template>
    <div class="fill-height bgGrey">
        <Meta />
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