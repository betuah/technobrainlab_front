<template>
    <v-app 
        dark
        class="scrollBarHidden"
    >
        <!-- <Header /> -->
        <v-main>
            <nuxt />
        </v-main>
    </v-app>
</template>

<script>
export default {
    components: {
        // Example: () => import("@/components/Example")
    },
    head() {
        return {
            title: "Technobrain | Training Solution",
            meta: [
                {
                    hid: "AWS Training",
                    name: "Technobrain Training Form",
                    content: "Technobrain Training Solution AWS"
                }
            ]
        };
    },
    methods: {}
};
</script>

<style>
  /* Works on Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(197, 156, 122, 0.521) transparent;
    -ms-overflow-style: none;
  }

  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: rgba(139, 136, 134, 0.521);
    border-radius: 20px;
  }
</style>