<template>
    <div class="pa-0">
        <v-app-bar
            class="pa-0 ma-0"
            elevation="0"
            style="border-top: 3px solid var(--v-primary-base)"
        >
            <div class="d-flex flex-grow-1 justify-space-between">
                <v-app-bar-nav-icon class="d-md-none"></v-app-bar-nav-icon>

                <div class="d-flex flex-row align-center">
                    <span class="text-h6 font-weight-black primary--text mr-2">Technobrain</span>
                    <v-divider vertical class="d-none d-md-flex"></v-divider>
                    <span class="d-none d-md-flex text-h7 font-weight-light grey--text ml-2 text-capitalize">Digital learning platform</span>
                </div>

                <div class="d-flex flex-row align-center">
                    <v-btn :ripple="false" small text plain class="text-capitalize font-weight-black">Masuk</v-btn>
                    <span class="d-none d-md-flex text-h5 font-weight-light mr-3 grey--text">/</span>
                    <v-btn depressed small color="secondary" class="d-none d-md-flex text-capitalize rounded-pill" dark>Daftar Gratis</v-btn>
                </div>
            </div>
        </v-app-bar>
    </div>
</template>