<template>
    <div class="fill-height">
        <Appbar />

        <div class="primaryLight1 d-flex flex-column-reverse flex-md-row pa-4 pa-md-15">
            <div class="d-flex flex-column justify-center text-center text-md-left col-md-6">
                <div class="text-h5 text-md-h3 text-capitalize font-weight-bold">
                    <span class="primary--text font-weight-black">TechnoBrain</span>
                    <span class="font-weight-medium">bring <br>a</span>
                    <span class="secondary--text">wonderful</span>
                    <span class="font-weight-medium">futures</span>
                </div>
                <p class="text-caption text-md-body-1 font-weight-light my-2">
                    <span class="secondary--text font-weight-medium">TechnoBrain</span>
                    is a digital learning platform will bring you to meet the best courses and instructors to improve your skill and abilities for a wonderful future</p>
                <div class="my-2">
                    <v-btn :small="this.$vuetify.breakpoint.name == 'xs' ? true : false" color="secondary" class="text-capitalize">Signup for free</v-btn>
                </div>
            </div>
            <v-spacer></v-spacer>
            <div class="d-flex flex-grow-1 full-width align-center justify-sm-center justify-md-end">
                <v-img
                    contain
                    :max-height="imageHeight"
                    :max-width="imageWidth"
                    src="/img-main.png"
                ></v-img>
            </div>
        </div>

        <v-container>
            <div class="d-flex flex-grow-1 mx-auto pa-0 my-0 rounded-lg">
                <div class="d-flex flex-grow-1 flex-column flex-md-row justify-space-between align-md-center" >
                    <div class="d-none d-md-flex flex-grow-1 col-md-2 pa-0">
                        <v-select
                            :items="paidData"
                            label="Sort"
                            value=""
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </div>
                    <div class="d-flex flex-grow-1 my-3 mx-md-3 justify-space-between">
                        <v-text-field
                            label="Cari apa saja"
                            prepend-inner-icon="search"
                            hide-details
                            outlined
                            dense
                            class="d-flex flex-grow-1 mr-3"
                        ></v-text-field>
                        <v-btn icon color="grey" class="text-capitalize"><v-icon>filter_alt</v-icon></v-btn>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-grow-1 flex-column">
                <div class="d-flex flex-gro justify-space-between my-1">
                    <div>
                        <v-select
                            :items="paidData"
                            label="Category"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </div>
                    <div>
                        <v-select
                            :items="courseTypeData"
                            label="Course Type"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </div>
                    <div>
                        <v-select
                            :items="courseLevel"
                            label="Level"
                            outlined
                            dense
                            hide-details
                        ></v-select>
                    </div>
                </div>
            </div>
        </v-container>
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
            paidData: ['Premium', 'Free'],
            courseCategory: [],
            courseTypeData: ['Online', 'Offline'],
            courseLevel: ['Beginner', 'Elementary', 'Intermediete', 'Advanced']
        }),
        computed: {
            ...mapState({
                authUser: state => state.authUser,
            }),
            ...mapGetters({
                isLoggedIn: 'isLoggedIn',
            }),
            size() {return this.$vuetify.breakpoint.name},
            imageHeight () {
                let size
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': size = '200'; break;
                    case 'sm': size = '350'; break;
                    case 'md': size = '300'; break;
                    case 'lg': size = '300'; break;
                    case 'xl': size = '300'; break;
                }

                return size
            },
            imageWidth () {
                let size
                switch (this.$vuetify.breakpoint.name) {
                    case 'md':
                            size = '480'
                        break;
                
                    default:
                            size = '350'
                        break;
                }

                return size
            },
        },
        methods: {}
    };
</script>