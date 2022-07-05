<template>
    <v-footer
        padless
    >
        <v-col
            class="text-center primary"
            cols="12"
        >
            <div class="d-flex flex-row justify-center align-center">
                <v-btn
                    class="mx-2 white--text"
                    icon
                >
                    <ion-icon name="logo-twitter"></ion-icon>
                </v-btn>
                <v-btn
                    class="mx-2 white--text"
                    icon
                >
                    <ion-icon name="logo-linkedin"></ion-icon>
                </v-btn>
                <v-btn
                    class="mx-2 white--text"
                    icon
                >
                    <ion-icon name="logo-instagram"></ion-icon>
                </v-btn>
                <v-btn
                    class="mx-2 white--text"
                    icon
                >
                    <ion-icon name="logo-youtube"></ion-icon>
                </v-btn>
            </div>
            <v-divider dark class="my-2 mb-3"></v-divider>
            <span class="white--text text-caption">
                © Copyright - Technobrain {{ new Date().getFullYear() }} - Build with ❤️
            </span>
        </v-col>
    </v-footer>
</template>