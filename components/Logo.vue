<template>
    <div class="logo">
        <NLink to="/">
            <v-img
                :src="require('@/static/logo.png')"
                alt="logo"
            />
        </NLink>
    </div>
</template>

<script>
    export default {
        name: "Logo",

        data() {
            return {};
        },
    };
</script>

<style>
    .logo {
        max-width: 15%;
        height: auto;
    }
</style>