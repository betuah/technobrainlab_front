<template>
    <div class="d-flex flex-column fill-height ma-0 pa-0 bgGrey">
        <Notif ref="notif" />
        <div class="d-flex flex-column my-3 my-md-10">
            <div class="d-flex flex-column my-5 my-md-10">
                <div class="d-flex justify-center align-center flex-md-row flex-column" style="border: solid 1">
                    <span class="primary--text text-h4 font-weight-black text-uppercase mr-2">Technobrain</span>
                    <span class="text-h4 font-weight-light grey--text">Certifications</span>
                </div>
                <div class="d-flex mx-10 mx-md-0 justify-center align-center">
                    <span class="text-caption text-center grey--text font-weight-light">Search your certification by all column title, course type, category or </span>
                </div>
            </div>

            <div class="d-flex flex-column mx-3 mx-md-0">
                <v-card elevation="3" class="col-12 col-md-8 mx-auto pa-0 rounded-lg">
                    <div class="d-flex flex-column indigo lighten-2 pa-0">
                        <div class="d-flex flex-row flex-md-row px-5 py-4">
                            <div class="d-flex flex-row mx-md-0 my-auto mt-md-0 justify-center align-center">
                                <span class="font-weight-bold text-h5 light-blue--text text--lighten-5">Certification</span>
                                <span class="font-weight-light text-h5 light-blue--text text--lighten-5 ml-1">Data</span>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="d-flex flex-md-row my-3 ma-md-0 justify-space-between align-center">
                                <v-btn :loading="loading" color="white" icon class="white--text" @click="refreshData()">
                                    <v-icon>
                                        restore
                                    </v-icon>
                                </v-btn>
                            </div>
                        </div>
                        <div class="d-flex px-5 pt-4 pb-3 pa-0 indigo lighten-3">
                            <v-text-field
                                v-model="search"
                                label="Cari"
                                append-icon="search"
                                dark
                                hide-details
                                placeholder="Search by Full Name, Email, Course Title, or Number"
                                dense
                            ></v-text-field>
                        </div>
                    </div>
                    <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :search="search"
                        :loading="loading"
                        loading-text="Loading data... Please wait!"
                        no-data-text="Sorry, your data was not found!"
                        no-results-text="Sorry, your data was not found!"
                        class="grey--text"
                    >
                        <template v-slot:[`item.fullName`]="{ item }">
                            <span class="success--text font-weight-medium text-body-2 text-caption text-capitalize">{{item.fullName}}</span>
                        </template>
                        <template v-slot:[`item.courseType`]="{ item }">
                            <span class="grey--text font-weight-medium text-body-2 text-caption text-capitalize">{{item.courseType}}</span>
                        </template>
                        <template v-slot:[`item.course`]="{ item }">
                            <span class="success--text font-weight-medium text-body-2 text-caption text-capitalize">{{item.course}}</span>
                        </template>
                        <template v-slot:[`item.email`]="{ item }">
                            <span class="grey--text font-weight-medium text-body-2 text-caption">{{hideEmail(item.email)}}</span>
                        </template>
                        <template v-slot:[`item.no`]="{ item }">
                            <span class="primary--text font-weight-bold text-body-2 text-caption text-capitalize">{{item.no}}</span>
                        </template>
                        <template v-slot:[`item.certificate`]="{ item }">
                            <div class="d-flex flex-md-row mb-3 ma-md-0 justify-center align-center">
                                <v-btn icon class="primary--text mr-md-2" @click="getCertificate(item.id, item.email)">
                                    <v-icon>
                                        description
                                    </v-icon>
                                </v-btn>
                            </div>
                        </template>
                    </v-data-table>
                </v-card>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        data: () => ({
            courseType: ["asd",'zxc'],
            courseTitle: [],
            search: '',
            loading: false,
            downloadLoading: false,
            pdfSrc: null,
            headers: [
                { text: 'Document Number', value: 'no', class: "secondary--text font-weight-bold" },
                { text: 'Full Name', align: 'start', value: 'fullName', class: "" },
                { text: 'Course Type', value: 'courseType', class: "" },
                { text: 'Course', value: 'course', class: "" },
                { text: 'E-Mail', value: 'email', class: "" },
                { text: 'Certificate', value: 'certificate', class: "secondary--text" }
            ],
            desserts: [],
            editedIndex: -1,
            detailsItem: {},
        }),
        computed: {
            ...mapState({
                certificate: state => state.certificate.data,
            })
        },
        async mounted() {
            await this.getData()
        },
        methods: {
            async getData() {
                this.loading = true
                try {
                    const res = await this.$axios.get(`/api/certificate/course/${process.env.NUXT_ENV_COURSE_META_2}`)
                    this.desserts = !res.code ? await Promise.all(res.data.data.map(item => { 
                        return {
                            id: item.id,
                            fullName: item.user.fullName,
                            email: item.user.email,
                            course: item.certificate.title,
                            courseType: item.course.courseType,
                            no: item.certificate.number,
                        }
                    })) : []
                    this.loading = false
                } catch (e) {
                    this.loading = false
                }
            },
            hideEmail(email) {
                return email.replace(/(.{2})(.*)(?=@)/,
                (gp1, gp2, gp3) => { 
                    const lastChar = gp1.slice(-2);
                    for(let i = 0; i < gp3.length - 2; i++) { 
                        gp2+= "*"; 
                    } return gp2 + lastChar; 
                });
            },
            getCertificate(id) {
                this.loading = true
                return this.$axios.get(`/api/certificate/${id}`, { responseType: "blob" })
                    .then(res => {
                        const blob = new Blob([res.data], {type: 'application/pdf'})
                        const objectUrl = URL.createObjectURL(blob)
                        this.loading = false
                        window.open(objectUrl, '_blank')
                    })
                    .catch(e => {
                        this.loading = false
                        this.$refs.notif.show('error', `${'Failed creating certificate.'}`)
                    })
            },
            refreshData() {
                this.getData()
            },
            goBack() {
                this.$router.push('/meta')
            }
        }
    }
</script>