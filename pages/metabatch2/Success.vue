<template>
    <div class="fill-height bgGrey d-flex">
        <div class="mx-auto my-auto d-flex flex-column-reverse col-12">
            <div class="d-flex justify-center align-center flex-md-row flex-column mt-5 grey--text text-caption font-weight-light" style="border: solid 1">
                <span class="mr-1">Training Solution | Technobrain Sistema Copyright @</span>
                <span>{{new Date().getFullYear()}}</span>
            </div>

            <v-card class="col-10 col-md-3 mx-auto d-flex rounded-lg">
                <div class="d-flex flex-column flex-grow-1 justify-center align-center my-10 mb-15">
                    <v-img
                        src="/success-icon.png"
                        max-width="200"
                        contain
                    >
                    </v-img>
                    <span class="text-h5 primary--text font-weight-black mt-5">Berhasil</span>
                    <span class="text-caption grey--text font-weight-light my-2 text-center">Terima Kasih data kamu telah tersimpan. Anda dapat melihat status data Anda pada tombol Cek Verifikasi yang terletak di bawah form pendaftara.</span>
                    
                    <div class="mt-5 d-flex flex-row justify-center align-center">
                        <v-btn @click="goBack()" class="primary--text mr-4">Kembali</v-btn>
                    </div>
                </div>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.push('/meta')
            }
        }
    };
</script>