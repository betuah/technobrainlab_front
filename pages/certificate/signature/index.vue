<template>
    <div class="tw-bg-[url('https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png')] fill-height tw-w-full tw-bg-cover tw-bg-repeat tw-bg-center">
        <div class="tw-backdrop-blur-sm tw-bg-white/80 tw-h-full">
            <div class="fill-height tw-border-2 d-flex flex-row justify-center align-center">
                <div class="d-flex flex-column flex-grow-1 justify-center align-center">
                    <v-card class="col-12 pa-0 col-md-4 tw-border-none rounded-lg">
                        <div class="d-flex flex-row indigo lighten-2 px-3 px-md-8 py-3 py-md-5 align-center">
                            <span class="text-md-h5 subtitle-1 font-weight-bold white--text mr-1">Certificate</span>
                            <span class="text-md-h5 subtitle-1 white--text">Signature</span>
                        </div>
                        <div class="d-flex flex-column justify-center align-center pa-5">
                            <span class="text-subtitle-2">Certificate was signin by :</span>
                            <span class="text-h5 font-weight-bold">Fazhar Restu Fauzi</span>
                            <span class="text-subtitle-2">CEO & Founder Technobrainlab</span>
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