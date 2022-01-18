<template>
    <v-container fill-height>
        <v-card elevation="3" class="col-12 mx-auto pa-0 rounded-lg">
            <div class="d-flex flex-column indigo lighten-2 pa-0">
                <div class="d-flex flex-column-reverse flex-md-row flex-md-row px-5 py-4">
                    <div class="d-flex flex-row mx-md-0 mt-5 mt-md-0 justify-center align-center">
                        <span class="font-weight-bold text-h5 light-blue--text text--lighten-5 mr-1">IoT</span>
                        <span class="font-weight-light text-h5 light-blue--text text--lighten-5">Data</span>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-row-reverse flex-md-row mb-3 ma-md-0 justify-space-between align-center">
                        <v-btn :loading="loading" color="white" icon class="white--text mr-md-2" @click="refreshData()">
                            <v-icon>
                                restore
                            </v-icon>
                        </v-btn>
                        <v-btn small color="white elevation-4" outlined class="white--text" @click="goBack()">
                            <v-icon left>
                                arrow_back
                            </v-icon>
                            KEMBALI
                        </v-btn>
                    </div>
                </div>
                <div class="col-12 px-5 pt-0 indigo lighten-3">
                    <v-text-field
                    v-model="search"
                    label="Cari"
                    append-icon="search"
                    dark
                    hide-details
                    ></v-text-field>
                </div>
            </div>
            <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                :loading="loading"
                loading-text="Mengambil data... Mohon Tunggu!"
                no-data-text="Data tidak tersedia."
                no-results-text="Data tidak ditemukan."
                class="grey--text"
            >
                <template v-slot:[`item.paymentStats`]="{ item }">
                    <v-chip
                        small
                        class="pa-3 white--text text-caption font-weight-light text-capitalize"
                        :color="item.paymentStats == '1' ? 'warning lighten-1' : ( item.paymentStats == '2' ? 'green lighten-1' : 'red lighten-1')"
                    >
                        {{ item.paymentStats == '1' ? 'Process' : ( item.paymentStats == '2' ? 'Accepted' : 'Reject') }}
                    </v-chip>
                </template>
                <template v-slot:[`item.completion`]="{ item }">
                    <v-chip
                        small
                        class="pa-3 white--text text-caption font-weight-light text-capitalize"
                        :color="item.completion == 0 ? 'warning lighten-1' : 'green lighten-1'"
                    >
                        {{ item.completion == 0 ? 'Not Complete' : 'Completed' }}
                    </v-chip>
                </template>
                <template v-slot:[`item.fullName`]="{ item }">
                    <span class="success--text font-weight-medium text-body-2 text-caption text-capitalize">{{item.fullName}}</span>
                </template>
                <template v-slot:[`item.courseType`]="{ item }">
                    <span class="grey--text font-weight-medium text-body-2 text-caption text-capitalize">{{item.courseType}}</span>
                </template>
                <template v-slot:[`item.title`]="{ item }">
                    <span class="success--text font-weight-medium text-body-2 text-caption text-capitalize">{{item.title}}</span>
                </template>
                <template v-slot:[`item.email`]="{ item }">
                    <span class="grey--text font-weight-medium text-body-2 text-caption">{{hideEmail(item.email)}}</span>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
        search: '',
        loading: false,
        headers: [
            { text: 'Full Name', value: 'fullName', class: "secondary--text font-weight-bold" },
            { text: 'Course', value: 'title', class: "" },
            { text: 'E-Mail', value: 'email', class: "" },
            { text: 'Payment Stats', value: 'paymentStats', class: "" },
            { text: 'Completion', value: 'completion', class: "secondary--text font-weight-bold" }
        ],
        desserts: [],
        editedIndex: -1,
        detailsItem: {},
        defaultItem: {
            fullName: '',
            code: 0,
        },
        }),
        async mounted() {
            await this.getData()
        },
        methods: {
            hideEmail(email) {
                return email.replace(/(.{2})(.*)(?=@)/,
                (gp1, gp2, gp3) => { 
                    const lastChar = gp1.slice(-2);
                    for(let i = 0; i < gp3.length - 2; i++) { 
                        gp2+= "*"; 
                    } return gp2 + lastChar; 
                });
            },
            async getData() {
                this.loading = true
                try {
                    const res  = await this.$axios.get(`/api/course/enroll/${process.env.NUXT_ENV_COURSE_IOT_ID}`)
                    console.log(res.data.data, process.env.NUXT_ENV_COURSE_IOT_ID)
                    this.desserts = res.data.data
                    this.loading = false
                } catch (e) {
                    console.log(e)
                    this.loading = false
                }
            },
            refreshData() {
                this.getData()
            },
            goBack() {
                this.$router.push('/iot')
            }
        }
    }
</script>