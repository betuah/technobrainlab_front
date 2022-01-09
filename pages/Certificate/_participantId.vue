<template>
    <div></div>
</template>

<script>
    export default {
        data: () => ({
            pdfSrc: 1
        }),
        computed: {
            // src: () => { return this.pdfSrc }
        },
        async mounted() {
            await this.getCertificate()
        },
        methods: {            
            getCertificate() {
                this.downloadLoading = true
                return this.$axios.get(`/api/certificate/${this.$route.params.participantId}`, { responseType: "blob" })
                    .then(res => {
                        const blob = new Blob([res.data], {type: 'application/pdf'})
                        const objectUrl = URL.createObjectURL(blob)
                        this.downloadLoading = false
                        window.open(objectUrl)
                        // URL.revokeObjectURL(objectUrl)
                    })
                    .catch(e => {
                        this.downloadLoading = false
                        console.log(e)
                    })
            }
        }
    }
</script>