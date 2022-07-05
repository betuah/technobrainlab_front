<template>
    <v-card class="d-flex flex-column rounded-lg tw-border-hidden ma-2">
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
                        small color="orange" 
                        class="rounded white--text text-overline font-weight-medium text-uppercase"
                    >
                        Webinar
                    </v-chip>
                </div>
            </div>

            <div class="pa-3 d-flex flex-column">
                <div class="d-flex flex-row">
                    <span class="text-caption font-weight-bold secondary--text">20 - 23 Maret 2022</span>
                </div>
                <NuxtLink :to="`/course/asdasd`">
                    <span class="text-h6 font-weight-bold primary--text">Amazon Web Service - Technical Fundamental</span>
                </NuxtLink>
                <div class="d-flex flex-row">
                    <span class="text-caption mr-1">Oleh : </span>
                    <span class="text-caption font-weight-medium">Betuah Anugerah</span>
                </div>
                <NuxtLink :to="`/course/asdasd`">
                <p class="mt-1 font-weight-regular text-caption grey--text tw-line-clamp-4">
                    Pelajari berbagai jalur yang tersedia sebagai Software Developer dari sudut pandang developer ahli yang sudah meniti karier di bidangnya.
                </p>
                <div class="d-flex flex-row align-center text-caption black--text font-weight-medium">
                    <div class="d-flex flex-row align-center mr-3 ">
                        <v-icon small>location_on</v-icon>
                        <span class="ml-1">Online</span>
                    </div>
                    <div class="d-flex flex-row align-center mr-3">
                        <v-icon small>schedule</v-icon>
                        <span class="ml-1">2 Hari</span>
                    </div>
                    <div class="d-flex flex-row align-center mr-3">
                        <v-icon small>people</v-icon>
                        <span class="ml-2">0 / 100</span>
                    </div>
                </div>
                </NuxtLink>
            </div>
        </div>
        <v-divider></v-divider>
        <div class="d-flex flex-row pa-2 px-4 tw-border-b-4 rounded-b-lg tw-border-solid tw-border-b-primary">
            <span class="tw-text-lg tw-font-bold secondary--text">Rp. 250.000</span>
            <v-spacer></v-spacer>
            <span class="text-caption align-self-center font-weight-normal">7 Hari lagi</span>
        </div>
    </v-card>
</template>