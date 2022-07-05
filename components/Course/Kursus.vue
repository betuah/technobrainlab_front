<template>
    <div>
        <v-hover v-slot="{ hover }">
        <v-card :elevation=" hover ? '8' : '3'" class="d-flex flex-column rounded-lg tw-border-hidden">
            <div class="d-flex flex-column">
                <v-img
                    :aspect-ratio="16/9"
                    src="https://www.ngli.in/wp-content/uploads/2021/06/AWS-Free.jpg" 
                    class="rounded-t-lg"
                >
                    <div class="tw-relative tw-h-full">
                        <NuxtLink :to="`/course/asdasd`">
                            <v-expand-transition>
                                <div v-if="hover" class="tw-h-full tw-relative">
                                    <div class="tw-h-full primary tw-opacity-75"></div>
                                    <div class="d-flex flex-column justify-center align-center tw-absolute tw-top-0 tw-right-0 tw-left-0 tw-bottom-0">
                                        <v-icon color="white" size="60">play_circle_outline</v-icon>
                                        <span class="white--text font-weight-medium">Lihat Kursus</span>
                                    </div>
                                </div>
                            </v-expand-transition>
                        </NuxtLink>
                        <div class="tw-absolute tw-top-0 tw-right-0 tw-left-0">
                            <v-chip
                                small color="light-blue" 
                                class="ma-2 rounded white--text text-overline font-weight-medium text-uppercase"
                            >
                                Kursus
                            </v-chip>
                        </div>
                    </div>
                </v-img>

                <div class="pa-3 d-flex flex-column">
                    <div class="d-flex flex-row align-center">
                        <span class="font-weight-light text-subtitle-2 secondary--text">Cloud Computing</span>
                        <v-spacer></v-spacer>
                        <v-btn small icon plain :ripple="false">
                            <v-icon color="secondary">favorite_border</v-icon>
                        </v-btn>
                    </div>
                    <NuxtLink :to="`/course/asdasd`">
                        <span class="text-body-1 font-weight-bold primary--text">Amazon Web Service - Technical Fundamental</span>
                    </NuxtLink>
                    <span class="text-caption font-weight-medium">Betuah Anugerah</span>
                    <div class="d-flex flex-row align-center">
                        <span class="tw-text-xs tw-font-bold yellow--text text--darken-3">4.5</span>
                        <v-rating
                            class="ma-0 pa-0 d-flex align-center justify-center"
                            color="yellow darken-3"
                            length="5"
                            readonly
                            dense
                            half-increments
                            :value="4.5"
                            size="13"
                        >
                        </v-rating>
                        <span class="tw-text-xs tw-font-light">(2K Ulasan)</span>
                    </div>
                    <NuxtLink :to="`/course/asdasd`">
                    <div class="d-flex flex-row mt-1 text-caption flex-wrap black--text font-weight-medium">
                        <div class="d-flex flex-row align-center mr-3 mb-1 ">
                            <v-icon size="15">play_circle_outline</v-icon>
                            <span class="ml-1">17 Modul</span>
                        </div>
                        <div class="d-flex flex-row align-center mr-3 mb-1">
                            <v-icon size="15">schedule</v-icon>
                            <span class="ml-1">32 Jam</span>
                        </div>
                        <div class="d-flex flex-row align-center mr-3 mb-1">
                            <v-icon size="15">leaderboard</v-icon>
                            <span class="ml-1">Dasar</span>
                        </div>
                    </div>
                    </NuxtLink>
                </div>
                <v-divider></v-divider>
                <div class="d-flex flex-row pa-2 px-4 tw-border-b-4 rounded-b-lg tw-border-solid tw-border-b-primary">
                    <span class="tw-text-lg tw-font-bold secondary--text">Rp. 250.000</span>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-row align-center text-caption font-weight-medium">
                        <v-icon size="15">people</v-icon>
                        <span class="ml-1">2.000</span>
                    </div>
                </div>
            </div>
        </v-card>
        </v-hover>
    </div>
</template>