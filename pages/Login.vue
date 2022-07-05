<template>
    <v-main>
        <Appbar />
        <div class="tw-h-screen d-flex flex-column whiteSmoke tw-overflow-y-auto">
            <Notif ref="notif" />
            <div class="d-flex flex-column my-auto col-10 col-md-5 mx-auto px-5 rounded-lg">
                <div class="d-flex flex-column my-5">
                    <span class="text-h5 text-md-h4 font-weight-bold primary--text align-self-center">Masuk Ke Akun Kamu</span>
                    <span class="text-caption text-md-body-2 font-weight-light grey--text align-self-center text-center">Hai, Selalmat datang kembali. Masuk di sini dengan akun kamu.</span>
                </div>
                <v-divider class="mx-5"></v-divider>
                <div class="d-flex flex-column mx-5 my-5">
                    <v-form 
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        @submit.prevent="submitForm"
                    >
                        <v-text-field
                            v-model="email"
                            name="email"
                            color="primary"
                            prepend-inner-icon="email"
                            :rules="emailRules"
                            label="Alamat Email kamu"
                            required
                            outlined
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            name="password"
                            color="primary"
                            prepend-inner-icon="lock"
                            :append-icon="passwordShow ? 'visibility' : 'visibility_off'"
                            :rules="passwordRules"
                            :type="passwordShow ? 'text' : 'password'"
                            label="Password"
                            required
                            outlined
                            @click:append="passwordShow = !passwordShow"
                        ></v-text-field>
                        <div class="d-flex flex-row justify-center align-center">
                            <v-checkbox
                                v-model="remember"
                                class="ma-0 pa-0"
                                :color="remember ? 'green' : 'primary'"
                                dense
                                hide-details
                            >
                                <template v-slot:label>
                                    <div class="text-caption font-weight-regular">
                                        Remember Me
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-spacer></v-spacer>
                            <v-btn class="text-capitalize text-caption text-light" :ripple="false" x-small text plain color="grey darken-3">Forgot password ?</v-btn>
                        </div>
                        <v-btn class="mt-5" block color="primary" type="submit" :loading="loading">
                            Login
                        </v-btn>
                        <div class="d-flex flex-row my-2 my-md-3 justify-center align-center">
                                <v-divider /> 
                                <span class="mx-2 text-caption grey--text">atau</span> 
                                <v-divider />
                            </div>
                        <v-btn class="mt-2" block dark color="secondary" @click="googleSignIn()">
                            <i class="fab fa-google mr-2"></i>
                            Sign in with google
                        </v-btn>
                    </v-form>
                </div>
                <v-divider class="mx-5 mb-3"></v-divider>
                <div class="d-flex flex-row pa-3 mx-5 mb-5 mt-1 text-body-2 justify-center align-center pa-2 rounded-lg grey--text text-caption" style="border: 1px solid grey">
                    <span class="">Belum punya akun ? <NuxtLink to="/signup" class="secondary--text font-weight-bold">Gabung sekarang</NuxtLink></span>
                </div>
            </div>
        </div>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            valid: true,
            remember: false,
            email: '',
            emailRules: [
                v => !!v || 'E-mail wajib di isi',
                v => /.+@.+\..+/.test(v) || 'Format E-mail kamu tidak valid',
            ],
            password: '',
            passwordShow: false,
            passwordRules: [
                v => !!v || 'E-mail wajib di isi',
            ],
        }
    },
    mounted () {
        if (this.$auth.loggedIn) {
            this.$router.push('/course')
        }
    },
    methods: {
        async submitForm() {
            if (this.$refs.form.validate()) {
                try {
                    this.loading = true
                    const data = {
                        signInAs: 'user',
                        email: this.email,
                        password: this.password
                    }

                    await this.$auth.loginWith('local', { data })
                    this.loading = false
                } catch (err) {
                    console.log(err)
                    this.loading = false
                    this.$refs.notif.show('error', 'Email or username not match!')
                }
            }
        },
        async googleSignIn() {
            try {
                await this.$auth.loginWith('google', { params: { prompt: "select_account" }})
            } catch (error) {
                this.$refs.notif.show('error', error.response ? error.response.data.message : error.message)
            }
        }
    }
}
</script>

<style>
    /* .v-text-field--outlined fieldset {
        border-color: rgb(0, 0, 255);
    } */

    /* .v-text-field--outlined fieldset:hover {
        border-color: rgb(0, 0, 255);
    } */

    .v-text-field--outlined .v-label, .v-input__slot {
        font-size: 14px;
        
        /* color: blueviolet; */
    }

    .v-text-field--outlined .v-icon {
        font-size: 18px;
    }

    .v-application--is-ltr .v-text-field .v-input__prepend-inner {
        padding-right: 7px;
    }

    /* .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
        color: blue;
    } */

    /* .theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover{
        color: aqua;
    } */
</style>