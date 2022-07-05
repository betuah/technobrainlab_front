

<template>
    <div>
        <v-card class="d-flex flex-column rounded-lg tw-border-hidden ma-2">
            <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                    <div class="tw-relative d-flex flex-grow-1">
                        <NuxtLink :to="`/course/asdasd`">
                        <img 
                            class="tw-object-cover rounded-t-lg"
                            src="https://www.ngli.in/wp-content/uploads/2021/06/AWS-Free.jpg" 
                            alt=""
                        >
                        </NuxtLink>
                        <div class="tw-absolute tw-top-0 tw-left-0 tw-right-0 pa-2 d-flex flex-row flex-grow-1">
                            <v-chip 
                                small color="light-blue" 
                                class="rounded white--text text-overline font-weight-medium text-uppercase"
                            >
                                Kursus
                            </v-chip>
                            <v-spacer></v-spacer>
                            <!-- <v-btn small icon plain :ripple="false" color="grey" class="mr-1 rounded-lg">
                                <v-icon color="white">favorite_border</v-icon>
                            </v-btn> -->
                        </div>
                    </div>

                    <div class="pa-3 d-flex flex-column">
                        <div class="d-flex flex-row">
                            <span class="font-weight-light text-subtitle-2 secondary--text">Cloud Computing</span>
                            <v-spacer></v-spacer>
                            <v-btn x-small icon plain :ripple="false">
                                <v-icon color="grey">favorite_border</v-icon>
                            </v-btn>
                            <!-- <v-btn small icon plain :ripple="false" color="grey" class="mr-1 rounded-lg">
                                <v-icon color="white">favorite_border</v-icon>
                            </v-btn> -->
                        </div>
                        <NuxtLink :to="`/course/asdasd`">
                            <span class="text-h6 font-weight-bold primary--text">Amazon Web Service - Technical Fundamental</span>
                        </NuxtLink>
                        <span class="text-caption font-weight-medium">Betuah Anugerah</span>
                        <div class="d-flex flex-row align-center">
                            <span class="tw-text-sm tw-font-bold yellow--text text--darken-3">4.5</span>
                            <v-rating
                                class="mx-1"
                                color="yellow darken-3"
                                length="5"
                                readonly
                                dense
                                half-increments
                                :value="4.5"
                                small
                            >
                            </v-rating>
                            <span class="tw-text-sm tw-font-light">(2K Ulasan)</span>
                        </div>
                        <NuxtLink :to="`/course/asdasd`">
                        <div class="d-flex flex-row mt-1 text-caption flex-wrap black--text font-weight-medium">
                            <div class="d-flex flex-row align-center mr-3 mb-1 ">
                                <v-icon small>play_circle_outline</v-icon>
                                <span class="ml-1">17 Modul</span>
                            </div>
                            <div class="d-flex flex-row align-center mr-3 mb-1">
                                <v-icon small>schedule</v-icon>
                                <span class="ml-1">32 Jam</span>
                            </div>
                            <div class="d-flex flex-row align-center mr-3 mb-1">
                                <v-icon small>leaderboard</v-icon>
                                <span class="ml-1">Dasar</span>
                            </div>
                            <div class="d-flex flex-row align-center mr-3 black--text">
                                <v-icon small>people</v-icon>
                                <span class="ml-2">2.000</span>
                            </div>
                        </div>
                        </NuxtLink>
                    </div>
                </div>
                <v-divider></v-divider>
                <div class="d-flex flex-row pa-2 px-4 tw-border-b-4 rounded-b-lg tw-border-solid tw-border-b-primary">
                    <span class="tw-text-lg tw-font-bold secondary--text">Rp. 250.000</span>
                    <v-spacer></v-spacer>
                </div>
            </div>
        </v-card>
    </div>
</template>