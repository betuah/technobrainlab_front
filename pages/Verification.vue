<template>
    <v-container fill-height>
        <v-card elevation="3" class="col-12 col-md-8 mx-auto pa-0 rounded-lg">
            <div class="text-uppercase d-flex flex-column indigo lighten-2 pa-0">
                <div class="d-flex flex-column-reverse flex-md-row flex-md-row px-5 py-4">
                    <div class="d-flex flex-row mx-md-0 mt-5 mt-md-0 justify-center align-center">
                        <span class="font-weight-light text-h5 light-blue--text text--lighten-5 mr-1">Verifikasi</span>
                        <span class="font-weight-bold text-h5 light-blue--text text--lighten-5">Peserta</span>
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
                <template v-slot:[`item.code`]="{ item }">
                    <v-chip
                        small
                        class="pa-3 white--text text-caption text-capitalize"
                        :color="item.code === '1' ? 'warning lighten-1' : ( item.code === '2' ? 'green lighten-1' : 'red lighten-1')"
                    >
                        {{ item.code === '1' ? 'Process' : ( item.code === '2' ? 'Verified' : 'Reject') }}
                    </v-chip>
                </template>
                <template v-slot:[`item.fullName`]="{ item }">
                    <span class="primary--text font-weight-medium text-body-2 text-caption text-capitalize">{{item.fullName}}</span>
                </template>
                <!-- <template v-slot:[`item.email`]="{ item }">
                    <span class="font-weight-light text-caption">{{item.email}}</span>
                </template> -->
                <!-- <template v-slot:[`item.status`]="{ item }">
                    <span class="font-weight-light text-caption">{{item.status}}</span>
                </template> -->
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
            {
                text: 'Nama Lengkap',
                align: 'start',
                value: 'fullName',
                class: "secondary--text font-weight-bold"
            },
            // { text: 'E-Mail', value: 'email', class: "" },
            // { text: 'Pekerjaan', value: 'status', class: "" },
            { text: 'Status', value: 'code', class: "success--text font-weight-bold" }
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
            async getData() {
                this.loading = true
                const dataArr = []
                const awsRef = this.$fire.database.ref('awsData')
                try {
                    const snapshot = await awsRef.once('value')
                    snapshot.forEach((element, index, array) => {
                        console.log(element.key, index, array)
                        dataArr.push(element.val())
                        this.desserts = dataArr
                    });
                    this.loading = false
                } catch (e) {
                    alert(e)
                    this.loading = false
                }
            },
            refreshData() {
                this.getData()
            },
            goBack() {
                this.$router.push('/')
            }
        }
    }
</script>