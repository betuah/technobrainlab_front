<template>
    <div class="fill-height bgGrey d-flex">
        <div class="mx-auto my-auto d-flex flex-column-reverse col-12">
            <div class="d-flex justify-center align-center flex-md-row flex-column mt-5 grey--text text-caption font-weight-light" style="border: solid 1">
                <span class="mr-1">Training Solution | Technobrain Sistema Copyright @</span>
                <span>{{new Date().getFullYear()}}</span>
            </div>

            <v-card class="col-10 col-md-3 mx-auto d-flex rounded-lg">
                <div class="d-flex flex-column justify-center align-center">
                    <v-img
                        src="/success-icon.png"
                        max-width="200"
                        contain
                    >
                    </v-img>
                    <span class="text-h5 primary--text font-weight-black mt-5">Berhasil</span>
                    <span class="text-caption tw-text-justify grey--text text-center mt-2">Silahkan <span class="font-weight-bold">cek email</span> untuk <span class="font-weight-bold">melengkapi pembayaran</span>.</span>

                    <div class="mt-4 d-flex flex-row justify-center align-center">
                        <v-btn @click="goBack()" color="primary" class="white--text text-caption font-weight-bold text-uppercase rounded-lg">Kembali</v-btn>
                    </div>
                    <span class="mx-5 mt-6 mb-4 tw-text-2xs font-italic mt-4 grey--text">*Jika email tidak ditemukan, kamu dapat melihatnya di promotion, Sosial atau spam.</span>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.push('/')
            }
        }
    };
</script>