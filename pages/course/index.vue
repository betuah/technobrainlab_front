<template>
    <v-main class="tw-h-full whiteSmoke tw-overflow-auto">
        <Appbar />
        <div class="d-flex flex-column">
            <div class="tw-h-48 primary">
                <div class="my-5 mt-13 d-flex flex-column justify-center align-center white--text">
                    <span class="tw-text-3xl md:tw-text-5xl tw-tracking-wider font-weight-black">Daftar Kursus </span>
                    <span class="tw-text-sm md:tw-text-base tw-tracking-wider font-weight-light">Tingkatkan kealianmu bersama intruktur terbaik kami</span>
                </div>
            </div>
            <div class="d-flex flex-column smokeWhite">
                <v-card elevation="5" class="mx-auto pa-3 col-10 col-md-5 rounded-lg tw-relative tw-bottom-10">
                    <div class="d-flex">
                        <v-text-field
                            label="Cari kursus"
                            prepend-inner-icon="search"
                            append-icon="filter_alt"
                            @click:append="filterHandller"
                            hide-details
                            outlined
                            dense
                            class="d-flex flex-grow-1 rounded-lg"
                        >
                        </v-text-field>
                    </div>
                    <v-divider :class="`${filter ? 'd-flex' : 'd-none'} my-3`"></v-divider>
                    <v-expand-transition>
                    <div v-show="filter" :class="`${filter ? 'd-flex' : 'd-none'} flex-column flex-md-row flex-md-grow justify-space-between my-1`">
                        <div class="mr-md-3">
                            <v-select
                                v-model="courseLevel"
                                :items="courseLevelItems"
                                label="Tingkatan"
                                outlined
                                dense
                                hide-details
                            ></v-select>
                        </div>
                        <div class="mr-md-3">
                            <v-select
                                v-model="coursePrograme"
                                :items="courseProgrameItems"
                                label="Program kursus"
                                outlined
                                dense
                                hide-details
                            ></v-select>
                        </div>
                        <div>
                            <v-select
                                v-model="courseCategory"
                                :items="courseCategoryItems"
                                label="Katagori"
                                outlined
                                dense
                                hide-details
                            ></v-select>
                        </div>
                    </div>
                    </v-expand-transition>
                </v-card>
                <div class="mx-auto d-flex flex-row tw-relative tw-bottom-6">
                    <v-chip-group v-model="courseType">
                        <v-chip v-for="(item, i) in courseTypeItems" :key="i" :value="item.id" filter class="pa-3 pa-md-5 text-caption text-md-body-1 font-weight-medium text-capitalize mr-4 rounded-lg white">
                            {{ item.title }}
                        </v-chip>
                    </v-chip-group>
                </div>
                <v-container>
                    <div class="md:tw-container tw-mx-auto tw-grid tw-grid-cols-1 tw-grid-flow-row tw-gap-5 md:tw-grid-cols-4 md:grid-flow-row md:tw-gap-5 md:tw-columns-4 pa-5">
                        <Course-Kursus />
                        <Course-Kursus />
                        <Course-Kursus />
                        <Course-Kursus />
                    </div>
                </v-container>
            </div>
        </div>
    </v-main>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        components: {
            // Courses: () => import("@/components/courses/Courses"),
            // Signup: () => import("@/components/auth/signup")
        },
        data: () => ({
            filter: false,
            courseType: 1,
            coursePrograme: null,
            courseCategory: null,
            courseLevel: null,
            courseTypeItems: [
                { id: 1, title: '🔥 Semua' }, { id: 2, title: '💝 Gratis' }, { id: 3, title: '💎 Premium' }
            ],
            courseCategoryItems: ['Cloud Computing', 'Networking', 'AR & VR', 'Mobile Programming', 'Fullstack'],
            courseProgrameItems: ['Belajar Mandiri', 'Workshop', 'Bootcamp Intensive'],
            courseLevelItems: ['Dasar', 'Pemula', 'Menengah', 'Mahir']
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
        methods: {
            filterHandller() {
                this.coursePrograme = null
                this.courseCategory = null
                this.courseLevel = null
                this.filter = !this.filter
            }
        }
    };
</script>