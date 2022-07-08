<template>
    <div class="tw-bg-[url('https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png')] fill-height tw-w-full tw-bg-cover tw-bg-repeat tw-bg-center">
        <div class="tw-backdrop-blur-sm tw-bg-white/80 tw-h-full">
            <div class="d-flex flex-column fill-height">
                <div class="d-flex justify-center align-center flex-md-row flex-column my-md-10" style="border: solid 1">
                    <span class="primary--text text-h4 font-weight-black text-uppercase mr-2">Technobrain</span>
                    <span class="text-h4 font-weight-light grey--text">Certifications</span>
                </div>
                <div class="col-12 col-md-8 mx-md-auto">
                    <v-card elevation="2" class="col-12 pa-0 rounded-lg tw-border-none">
                        <div class="d-flex flex-column indigo lighten-2 pa-0">
                            <div class="d-flex flex-row flex-md-row px-5 py-4 align-center">
                                <v-btn small icon plain :ripple="false" color="white" @click="goBack()">
                                    <v-icon small>
                                        arrow_back_ios
                                    </v-icon>
                                </v-btn>
                                <div class="d-flex flex-column ml-2 align-start">
                                    <div class="d-flex flex-row mx-md-0 mt-md-0 justify-center align-center">
                                        <span class="font-weight-bold text-h5 light-blue--text text--lighten-5">{{courseData ? courseData.course_title : ''}}</span>
                                    </div>
                                    <div class="d-flex flex-row text-caption white--text">
                                        <span>{{$moment(courseData ? courseData.course_start : '').format("DD MMM YYYY")}}</span>
                                        <span class="mx-1">-</span>
                                        <span>{{$moment(courseData ? courseData.course_end : '').format("DD MMM YYYY")}}</span>
                                    </div>
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
                                    label="Search"
                                    append-icon="search"
                                    dark
                                    hide-details
                                    placeholder="Search all"
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
                            <template v-slot:[`item.certificateNumber`]="{ item }">
                                <span class="grey--text font-weight-bold text-body-2 text-caption text-capitalize">{{item.certificateNumber}} {{item}}</span>
                            </template>
                            <template v-slot:[`item.fullName`]="{ item }">
                                <span class="success--text font-weight-bold text-body-2 text-caption text-capitalize">{{item.fullName}}</span>
                            </template>
                            <template v-slot:[`item.email`]="{ item }">
                                <span class="grey--text font-weight-medium text-body-2 text-caption">{{hideEmail(item.email)}}</span>
                            </template>
                            <template v-slot:[`item.action`]="{ item }">
                                <div class="d-flex flex-md-row mb-3 ma-md-0 justify-start align-center">
                                    <v-btn small outlined color="success" class="success--text text-caption mr-md-2 rounded-lg" @click="getCertificate(courseData._id, item.id, item.certificateId)">
                                        <v-icon x-small class="mr-1">
                                            description
                                        </v-icon>
                                        show
                                    </v-btn>
                                </div>
                            </template>
                            <template v-slot:[`item.validation`]="{ item }">
                                <div class="d-flex flex-md-row mb-3 ma-md-0 justify-start align-center">
                                    <v-btn small outlined color="primary" class="primary--text text-caption mr-md-2 rounded-lg" @click="checkValidation(item.certificateId)">
                                        <v-icon x-small class="mr-1">
                                            description
                                        </v-icon>
                                        check
                                    </v-btn>
                                </div>
                            </template>
                        </v-data-table>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        data: () => ({
            search: '',
            loading: false,
            downloadLoading: false,
            pdfSrc: null,
            headers: [
                { text: 'Certificate Number', value: 'certificateNumber', class: "secondary--text font-weight-bold" },
                { text: 'Full Name', value: 'fullName', class: "secondary--text font-weight-bold" },
                { text: 'E-Mail', value: 'email', class: "" },
                { text: 'Certificate', value: 'action', class: "secondary--text" },
                { text: 'Validation', value: 'validation', class: "secondary--text" }
            ],
            desserts: [],
            courseData: null,
            editedIndex: -1,
            detailsItem: {},
            uri: process.env.NUXT_ENV_API_URL,
        }),
        computed: {
            ...mapState({
                certificate: state => state.certificate.data,
            })
        },
        async mounted() {
            await this.getData(this.$route.params.course)
        },
        methods: {
            async getData(id) {
                this.loading = true
                try {
                    const res = await this.$axios.get(`${this.uri}/certificate/course/${id}`)
                    if (res.status == 200) {
                        const resData = res.data
                        this.courseData = resData
                        this.desserts = await Promise.all(resData.course_participant.map(i => {
                            return {
                                id: i.id,
                                course: resData.course_title,
                                fullName: i.participant_id.fullName,
                                email: i.participant_id.email,
                                certificateNumber: i.certificate.certificateId,
                                certificateId: i.certificate.id
                            }
                        }))
                    } 

                    this.loading = false
                } catch (e) {
                    alert(e)
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
            getCertificate(courseId, participantId, certificateId) {
                this.loading = true
                const data = {
                    courseId,
                    participantId,
                    certificateId,
                }

                return this.$axios.post(`${this.uri}/certificate/print`, data , { responseType: "blob" })
                    .then(res => {
                        const blob = new Blob([res.data], {type: 'application/pdf'})
                        const objectUrl = URL.createObjectURL(blob)
                        this.loading = false
                        window.open(objectUrl, '_blank')
                    })
                    .catch(e => {
                        this.loading = false
                        console.log(e)
                    })
            },
            refreshData() {
                this.getData(this.$route.params.course)
            },
            checkValidation(id) {
                this.$router.push(`/certificate/check/${id}`)
            },
            goBack() {
                this.$router.back()
            }
        }
    }
</script>