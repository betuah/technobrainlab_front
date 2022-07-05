<template>
    <v-main>
        <Appbar />
        <div class="tw-h-screen d-flex flex-column whiteSmoke">
            <Notif ref="notif" />
            <div class="d-flex flex-column mt-15 col-10 col-md-5 mx-auto px-5 rounded-lg">
                <div class="d-flex flex-column my-5">
                    <span class="text-h5 text-md-h4 font-weight-bold primary--text align-self-center">Daftar Akun Baru</span>
                    <span class="text-caption text-md-body-2 font-weight-light grey--text align-self-center text-center">Daftar sekarang dan Lengkapi pengetahuanmu bersama kami</span>
                </div>
                <v-divider class="mx-5"></v-divider>
                <div class="d-flex flex-column mx-5 my-5">
                    <v-form 
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        @submit.prevent="submitForm"
                    >
                        <div class="d-flex flex-row">
                            <v-text-field
                                v-model="data.firstName"
                                class="mr-3"
                                name="firstName"
                                color="primary"
                                prepend-inner-icon="account_circle"
                                :rules="rules.firstName"
                                label="Nama depan"
                                required
                                outlined
                            ></v-text-field>
                            <v-text-field
                                v-model="data.lastName"
                                name="lastName"
                                color="primary"
                                prepend-inner-icon="account_circle"
                                :rules="rules.lastName"
                                label="Nama Belakang"
                                hint="Kosongkan jika tidak memiliki nama belakang."
                                required
                                outlined
                                @click:append="passwordShow = !passwordShow"
                            ></v-text-field>
                        </div>
                        <div>
                            <v-text-field
                                v-model="data.email"
                                name="email"
                                color="primary"
                                prepend-inner-icon="email"
                                :rules="rules.email"
                                label="Alamat Email kamu"
                                required
                                outlined
                            ></v-text-field>
                            <v-text-field
                                v-model="data.password"
                                name="password"
                                color="primary"
                                prepend-inner-icon="lock"
                                :append-icon="passwordShow ? 'visibility' : 'visibility_off'"
                                :rules="rules.password"
                                :type="passwordShow ? 'text' : 'password'"
                                label="Password"
                                required
                                outlined
                                @click:append="passwordShow = !passwordShow"
                            >
                                <template v-slot:append>
                                    <div class="d-flex ma-0 pa-0">
                                        <v-btn icon x-small plain text :ripple="false" @click="passwordShow = !passwordShow">
                                            <v-icon>
                                                {{ passwordShow ? 'visibility' : 'visibility_off' }}
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                </template>
                            </v-text-field>
                            <v-text-field
                                v-model="data.passwordConfirm"
                                name="passwordConfirm"
                                color="primary"
                                prepend-inner-icon="lock"
                                :append-icon="passwordConfirmShow ? 'visibility' : 'visibility_off'"
                                :rules="rules.passwordConfirm"
                                :type="passwordConfirmShow ? 'text' : 'password'"
                                label="Konfirmasi Password"
                                required
                                outlined
                            >
                                <template v-slot:append>
                                    <div class="ma-0 pa-0">
                                        <v-btn icon x-small plain text :ripple="false" @click="passwordConfirmShow = !passwordConfirmShow">
                                            <v-icon>
                                                {{ passwordConfirmShow ? 'visibility' : 'visibility_off' }}
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                </template>
                            </v-text-field>
                        </div>

                        <div class="text-caption grey--text">
                            Dengan mendaftar, kamu setuju dengan
                            <v-btn class="pa-0 text-decoration-underline" :ripple="false" x-small text plain color="secondary">syarat dan ketentuan</v-btn>
                            yang berlaku ya.
                        </div>

                        <v-btn class="mt-5" block color="primary" dark type="submit" :loading="loading">
                            Daftar
                        </v-btn>

                        <div class="d-flex flex-row my-2 my-md-3 justify-center align-center">
                            <v-divider /> 
                            <span class="mx-2 text-caption grey--text">atau</span> 
                            <v-divider />
                        </div>

                        <v-btn class="text-capitalize" block dark color="secondary" @click="googleSignIn()">
                            <i class="fab fa-google mr-2"></i>
                            Masuk dengan Google
                        </v-btn>
                    </v-form>
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
            data: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                passwordConfirm: ''
            },
            rules: {
                firstName: [
                    v => !!v || 'Nama depan harus di isi.',
                ],
                lastName: [
                    v => !!v || 'Nama belakang harus di isi.',
                ],
                email: [
                    v => !!v || 'E-mail wajib di isi',
                    v => /.+@.+\..+/.test(v) || 'Format E-mail kamu tidak valid',
                ],
                password: [
                    v => !!v || 'Password harus di isi.',
                    v => v.length >= 8 || 'Minimal 8 Character atau lebih.',
                    v => /[A-Z]/.test(v) || 'Harus memiliki satu hurus kapital.',
                    v => /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(v) || 'Harus memiliki satu atau lebih special character.'
                ],
                passwordConfirm: [
                    v => !!v || 'Konfirmasi password kamu di sini.',
                    v => v === this.data.password || 'Password tidak sesuai.'
                ]
            },
            passwordShow: false,
            passwordConfirmShow: false,
        }
    },
    mounted () {
        if (this.$auth.loggedIn) {
            this.$router.push('/course')
        }
    },
    computed: {
        metered: () => {
            return this.password.length > 0
        }
    },
    methods: {
        async submitForm() {
            if (this.$refs.form.validate()) {
                try {
                    this.loading = true
                    const data = {
                        fullName: `${this.data.firstName} ${this.data.lastName}`,
                        email: this.data.email,
                        password: this.data.password
                    }

                    const regis = await this.$axios.post('/api/auth/signup',data)
                    if (regis) await this.$auth.loginWith('local', { data })
                    this.loading = false
                } catch (err) {
                    this.loading = false
                    this.$refs.notif.show('error', err.response ? err.response.data.message : err.message)
                }
            }
        },
        async googleSignIn() {
            try {
                await this.$auth.loginWith('google', { params: { prompt: "select_account" } })
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

    /* .v-text-field--outlined .v-label, .v-input__slot {
        font-size: 14px; */
        
        /* color: blueviolet; */
    /* } */

    /* .v-text-field--outlined .v-icon {
        font-size: 24px;
    } */

    /* .v-application--is-ltr .v-text-field .v-input__prepend-inner {
        padding-right: 14px;
    } */

    /* .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
        color: blue;
    } */

    /* .theme--light.v-text-field--outline:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot:hover{
        color: aqua;
    } */
</style>