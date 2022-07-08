<template>
    <div class="tw-bg-[url('https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png')] fill-height tw-w-full tw-bg-cover tw-bg-repeat tw-bg-center">
        <div class="tw-backdrop-blur-sm tw-bg-white/80 tw-h-full">
            <div class="fill-height tw-border-2 d-flex flex-row justify-center align-center">
                <div class="d-flex flex-column flex-grow-1 justify-center align-center">
                    <v-card class="col-12 pa-0 col-md-6 tw-border-none rounded-lg">
                        <div class="d-flex flex-row indigo lighten-2 px-3 px-md-8 py-3 py-md-5 align-center">
                            <span class="text-md-h5 subtitle-1 font-weight-bold white--text mr-1">Certificate</span>
                            <span class="text-md-h5 subtitle-1 white--text">Validation</span>
                            <v-spacer></v-spacer>
                            <v-btn v-if="certifiedData !== null" small color="white" outlined :ripple="false" class="rounded-lg text-caption font-weight-bold" @click="getCertificate(certifiedData.course.id, certifiedData.participant)">
                                Download
                            </v-btn>
                        </div>
                        <v-progress-linear
                            v-if="loading"
                            indeterminate
                            color="primary"
                        ></v-progress-linear>
                        
                        <div v-if="valid !== null && valid == false" class="col-8 col-md-5 my-10 d-flex flex-row justify-center align-center mx-auto pa-3 tw-border-2 tw-border-red-500 rounded-lg">
                            <span class="red--text text-center text-h5 font-weight-bold">Certificate Invalid!</span>
                        </div>

                        <div v-if="certifiedData !== null" class="d-flex flex-column pa-3 pa-md-8">
                            <div class="d-flex d-column flex-md-row col-12 ma-0 pa-0 align-center">
                                <div class="d-flex flex-row col-4 ma-0 pa-0 text-caption text-md-subtitle-2 font-weight-bold align-center">
                                    <span>Certificate Number</span>
                                    <v-spacer></v-spacer>
                                    <span>:</span>
                                </div>
                                <div class="col-8 ma-0 pa-0 text-caption text-md-subtitle-2 pl-2 align-center">
                                    {{certifiedData.certificateId}}
                                </div>
                            </div>
                            <v-divider class="my-3"></v-divider>
                            <div class="d-flex flex-row col-12 ma-0 pa-0 align-center">
                                <div class="d-flex flex-row col-4 ma-0 pa-0 text-caption text-md-subtitle-2 font-weight-bold align-center">
                                    <span>Full Name</span>
                                    <v-spacer></v-spacer>
                                    <span>:</span>
                                </div>
                                <div class="col-8 ma-0 pa-0 text-caption text-md-subtitle-2 pl-2 align-center">
                                    {{certifiedData.customer.fullName}}
                                </div>
                            </div>
                            <v-divider class="my-3"></v-divider>
                            <div class="d-flex flex-row col-12 ma-0 pa-0 align-center">
                                <div class="d-flex flex-row col-4 ma-0 pa-0 text-caption text-md-subtitle-2 font-weight-bold align-center">
                                    <span>Course Title</span>
                                    <v-spacer></v-spacer>
                                    <span>:</span>
                                </div>
                                <div class="col-8 ma-0 pa-0 text-caption text-md-subtitle-2 pl-2 tw-truncate align-center">
                                    {{certifiedData.course.course_title}}
                                </div>
                            </div>
                            <v-divider class="my-3"></v-divider>
                            <div class="d-flex flex-row col-12 ma-0 pa-0 align-center">
                                <div class="d-flex flex-row col-4 ma-0 pa-0 text-caption text-md-subtitle-2 font-weight-bold align-center">
                                    <span>Conducted On</span>
                                    <v-spacer></v-spacer>
                                    <span>:</span>
                                </div>
                                <div class="col-8 ma-0 pa-0 text-caption text-md-subtitle-2 pl-2 align-center">
                                    {{$moment(certifiedData.course.course_start).format('DD MMMM YYYY')}} - {{$moment(certifiedData.course.course_end).format('DD MMMM YYYY')}}
                                </div>
                            </div>
                            <v-divider class="my-3"></v-divider>
                            <div class="d-flex flex-row col-12 ma-0 pa-0 align-center">
                                <div class="d-flex flex-row col-4 ma-0 pa-0 text-caption text-md-subtitle-2 font-weight-bold align-center">
                                    <span>Created</span>
                                    <v-spacer></v-spacer>
                                    <span>:</span>
                                </div>
                                <div class="col-8 ma-0 pa-0 text-caption text-md-subtitle-2 pl-2 align-center">
                                    {{$moment(certifiedData.createdAt).format('DD MMMM YYYY')}}
                                </div>
                            </div>
                            <v-divider class="my-3"></v-divider>
                            <div class="d-flex flex-row col-12 ma-0 pa-0 align-center justify-center">
                                <div class="d-flex flex-row col-4 ma-0 pa-0 text-caption text-md-subtitle-2 font-weight-bold align-center">
                                    <span>Status</span>
                                    <v-spacer></v-spacer>
                                    <span>:</span>
                                </div>
                                <div class="col-8 ma-0 pa-0 text-caption text-md-subtitle-2 pl-2">
                                    <v-btn small color="success" outlined :ripple="false" class="rounded-lg font-weight-bold align-center">
                                        valid
                                    </v-btn>
                                </div>
                            </div>
                            <v-divider class="mt-3"></v-divider>
                        </div>
                    </v-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            pdfSrc: 1,
            uri: process.env.NUXT_ENV_API_URL,
            certifiedData: null,
            loading: false,
            valid: null
        }),
        computed: {
            // src: () => { return this.pdfSrc }
        },
        async mounted() {
            this.valid = null
            await this.getData(this.$route.params.participantId)
        },
        methods: {
            async getData(id) {
                this.loading = true
                try {
                    const res = await this.$axios.get(`${this.uri}/certificate/check/${id}`)
                    if (res.status == 200) {
                        const resData = res.data
                        if (resData !== null) {
                            this.valid = true
                        } else {
                            this.valid = false
                        }
                        this.certifiedData = resData
                    } 

                    this.loading = false
                } catch (e) {
                    this.valid = false
                    this.loading = false
                }
            },     
            getCertificate(courseId, participantId) {
                this.loading = true
                this.$axios.get(`${this.uri}/certificate/print/${courseId}/${participantId}`, { responseType: "blob" })
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
        }
    }
</script>