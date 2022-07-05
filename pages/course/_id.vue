<template>
    <v-main class="tw-h-full whiteSmoke tw-overflow-auto">
        <Appbar />
        <div 
            class="d-flex flex-column"
        >
            <div class="tw-bg-course-1 tw-bg-cover tw-bg-center tw-bg-fixed">
                <div class="tw-bg-gray-600/70 tw-backdrop-blur-md">
                    <v-container class="d-flex flex-column flex-md-row">
                        <div class="col-12 col-md-6 my-3 my-md-8 text-center text-md-start white--text">
                            <span class="text-h4 text-md-h3 font-weight-bold">Amazon Web Service - Technichal Fundamentals</span>
                            <p class="my-4 text-body-2 tw-text-left text-md-body-1">
                                It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.
                            </p>
                            <div class="d-flex flex-row justify-center justify-md-start">
                                <v-btn class="rounded-lg mr-3 text-caption text-md-body-2" outlined color="white">
                                    Overview
                                    <v-icon size="18" class="ml-1">play_circle_outline</v-icon>
                                </v-btn>
                                <v-btn class="rounded-lg primary--text text-caption text-md-body-2 font-weight-bold" color="white">
                                    Gabung Kelas
                                </v-btn>
                            </div>
                        </div>
                        <div class="col-12 col-md-6 my-md-5 d-flex align-center ">
                            <video-player :options="defaultOptions" />
                        </div>
                    </v-container>
                </div>
            </div>
            <v-card elevation="1" class="white rounded-0 pa-0 ma-0">
                <div class="container d-flex flex-column flex-md-row align-md-center px-6 py-0 py-md-3">
                    <div class="d-flex flex-row align-center my-3 my-md-0">
                        <v-avatar size="40" color="secondary">
                            <img v-if="profilePics"
                                :src="profilePics"
                            >
                            <span v-else class="white--text text-h6">
                                {{ name }}
                            </span>
                        </v-avatar>
                        <div class="d-flex flex-column ml-5">
                            <span class="text-body-2 font-weight-medium">Betuah Anugerah</span>
                            <span class="text-caption tw-font-light tw-text-gray-500">Instruktur</span>
                        </div>
                    </div>
                    <v-divider class="d-flex d-md-none"></v-divider>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-column justify-center align-center my-3 my-md-0">
                        <div class="d-flex flex-row">
                            <v-rating
                                class="ma-0 pa-0 d-flex align-center justify-center mr-1"
                                color="yellow darken-3"
                                length="5"
                                readonly
                                dense
                                half-increments
                                :value="4.5"
                                small
                            >
                            </v-rating>
                            <!-- <span class="tw-text-sm tw-font-medium yellow--text text--darken-3 mr-1">4.5</span> -->
                        </div>
                            <span class="text-caption">(4.500 Rating)</span>
                    </div>
                </div>
            </v-card>
            <div class="container d-flex flex-column">
                <div class="d-flex flex-row align-center mx-3">
                    <span class="text-uppercase text-overline tw-tracking-widest mr-2">Overview</span>
                    <v-divider></v-divider>
                </div>
                <div class="d-flex flex-column flex-md-row">
                    <div class="col-12 col-md-7">
                        <v-card class="tw-border-hidden rounded-lg mx-1">
                            <v-tabs class="rounded-lg" active-class="font-weight-bold rounded-lg" v-model="tab">
                                <v-tabs-slider></v-tabs-slider>
                                <v-tab :ripple="false" class="text-caption">Overview</v-tab>
                                <v-tab :ripple="false" class="text-caption">Kurikulum</v-tab>
                                <v-tab :ripple="false" class="text-caption">Diskusi</v-tab>
                                <v-tab :ripple="false" class="text-caption">Ulasan</v-tab>
                            </v-tabs>
                        </v-card>
                        <v-tabs-items v-model="tab" class="my-5">
                            <v-tab-item class="whiteSmoke pa-1">
                                <v-card class="rounded-lg">
                                    <div>
                                        <span>Deskripsi Kursus</span>
                                    </div>
                                    <div>
                                        This is the content of description
                                    </div>
                                </v-card>
                            </v-tab-item>
                            <v-tab-item class="whiteSmoke pa-1">
                                <v-expansion-panels multiple v-model="panel" class="rounded-lg" active-class="rounded-lg">
                                    <v-expansion-panel>
                                        <v-expansion-panel-header class="text-subtitle-2 font-weight-medium" expand-icon="arrow_drop_down">
                                            Course Overview
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                    <v-expansion-panel>
                                        <v-expansion-panel-header class="text-subtitle-2 font-weight-medium" expand-icon="arrow_drop_down">
                                            Getting Start with Amazon Web Services
                                        </v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </v-expansion-panel-content>
                                    </v-expansion-panel>
                                </v-expansion-panels>
                            </v-tab-item>
                        </v-tabs-items>
                    </div>
                    <div class="col-5">
                        <v-card class="pa-10">
                            Hellow world
                        </v-card>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </v-main>
</template>

<script>
export default {
    data: () => ({
        tab: null,
        panel: [0],
        profilePics: "https://i.pravatar.cc/1000?img=68",
        defaultOptions: {
            sources: [{
                src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                type: "video/mp4"
            }]
        }
    }),
}
</script>

<style>
</style>