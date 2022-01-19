<template>
    <div class="d-flex flex-column fill-height justify-center indigo lighten-5">
        <div class="d-flex flex-row mx-auto my-5">
            <v-img
                src="/technobrain-logo.png"
                contain
                width="150"
            >
            </v-img>
        </div>
        <v-card class="d-flex flex-column col-10 col-md-3 mx-auto px-5 rounded-lg">
            <div class="d-flex flex-column my-5">
                <span class="text-h5 font-weight-light cyan--text align-self-center">Login to you account</span>
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
                        dense
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
                        dense
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
                    <v-btn class="mt-5" block color="primary">Login</v-btn>
                </v-form>
            </div>
            <v-divider class="mx-5 mb-3"></v-divider>
            <div class="d-flex flex-row mx-5 mb-5 mt-1 text-body-2 justify-center align-center pa-2 rounded-lg" style="border: 1px solid grey">
                <span class="grey--text text-caption">Don't have an account ?</span>
                <v-btn class="pa-0 ml-1" :ripple="false" x-small text plain color="secondary">signup</v-btn>
            </div>
        </v-card>
        <div class="d-flex flex-row mx-auto my-5 text-caption grey--text text--darken-1 font-weight-light">
            Copyright @ 2021 by <span class="ml-1 font-weight-bold cyan--text text--darken-1">Technobrainlab.com</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
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