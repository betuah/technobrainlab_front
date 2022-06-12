<template>
    <v-container fill-height>
        <AlertConfirm ref="confirm"/>
        <ImageModal ref="image" />
        <Notif ref="notif" />

        <v-card elevation="3" class="col-12 mx-auto pa-0 rounded-lg tw-border-none">
            <div class="d-flex flex-column indigo lighten-2 pa-0">
                <div class="d-flex flex-column-reverse flex-md-row flex-md-row px-5 py-4">
                    <div class="d-flex flex-row mx-md-0 mt-5 mt-md-0 justify-center align-center">
                        <span class="font-weight-bold text-h5 light-blue--text text--lighten-5 mr-1">Participant</span>
                        <span class="font-weight-light text-h5 light-blue--text text--lighten-5">Data</span>
                    </div>
                    <v-spacer></v-spacer>
                    <div class="d-flex flex-row-reverse flex-md-row mb-3 ma-md-0 justify-space-between align-center">
                        <v-btn :loading="loading" color="white" icon class="white--text mr-md-2" @click="refreshData()">
                            <v-icon>
                                restore
                            </v-icon>
                        </v-btn>
                        <v-btn small color="white" outlined @click="goBack()">
                            <v-icon left>
                                arrow_back
                            </v-icon>
                            back
                        </v-btn>
                    </div>
                </div>
                <div class="d-flex align-end indigo px-5 py-3 pt-1 lighten-3">
                    <v-text-field
                        v-model="search"
                        label="Search anything"
                        append-icon="search"
                        dark
                        hide-details
                    ></v-text-field>
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-badge
                                bordered
                                color="success"
                                :content="selectedRows.length"
                                :value="(selectedRows.length)"
                                overlap
                            >
                                <v-btn 
                                    v-bind="attrs" 
                                    v-on="on" 
                                    :class="selectedRows.length > 0 ? 'd-flex ml-5 success--text' : 'd-none'" 
                                    color="white" 
                                    small
                                    @click="getAnyCertificate()"
                                >
                                    <v-icon color="green" small left>
                                        verified
                                    </v-icon>
                                    Generate
                                </v-btn>
                            </v-badge>
                        </template>
                        <span class="text-caption">Generate Certificate</span>
                    </v-tooltip>
                </div>
            </div>
            <v-data-table
                v-model="selectedRows"
                :headers="headers"
                :items="desserts"
                :search="search"
                :loading="loading"
                fixed-header
                multi-sort
                justify="space-around"
                loading-text="Mengambil data... Mohon Tunggu!"
                no-data-text="Data tidak tersedia."
                no-results-text="Data tidak ditemukan."
                class="grey--text tw-border-none"
            >
                <template v-slot:item="{ item }">
                    <tr :class="selectedRows.indexOf(item.id)>-1 ? 'blue lighten-5 rounded-0 white--text' : ''">
                        <td class="d-flex align-center" @click ="toggle(item.id)">
                            <span class="success--text font-weight-medium text-body-2 text-caption text-capitalize">{{item.participant.fullName}}</span>
                            <v-icon 
                                class="ml-2"
                                small
                                color="light-blue lighten-2" 
                                v-if="selectedRows.indexOf(item.id)>-1"
                            >
                                check
                            </v-icon>
                        </td>
                        <td @click ="toggle(item.id)">
                            <span class="success--text font-weight-medium text-body-2 text-caption text-capitalize">{{courseData.course_title}}</span>
                        </td>
                        <td @click ="toggle(item.id)">
                            <span class="grey--text font-weight-medium text-body-2 text-caption">{{item.participant.phone_number}}</span>
                        </td>
                        <td @click ="toggle(item.id)">
                            <span class="orange--text font-weight-medium text-body-2 text-caption">Rp. {{item.order.gross_amount}}</span>
                        </td>
                        <td @click ="toggle(item.id)">
                            <v-chip
                                small
                                class="pa-3 white--text text-caption font-weight-light text-capitalize"
                                :color="item.order.payment_status == '1' ? 'green lighten-1' : 'warning lighten-1'"
                            >
                                {{ item.order.payment_status == '1' ? 'Accept' : 'Pending' }}
                            </v-chip>
                        </td>
                        <!-- <td @click ="toggle(item.id)">
                            <v-chip
                                small
                                class="pa-3 white--text text-caption font-weight-light text-capitalize"
                                :color="item.completion == 0 ? 'warning lighten-1' : 'green lighten-1'"
                            >
                                {{ item.completion == 0 ? 'Not Complete' : 'Completed' }}
                            </v-chip>
                        </td> -->
                        <td>
                            <div class="d-flex flex-row justify-center align-center">
                                <!-- <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn 
                                            :class="selectedRows.length > 0 ? 'd-none' : 'd-flex'" 
                                            v-bind="attrs" 
                                            v-on="on" 
                                            small 
                                            icon
                                            @click="viewPayment(`${item.paymentPics}`)"
                                        >
                                            <v-icon small color="cyan">visibility</v-icon>
                                        </v-btn>
                                    </template>
                                    <span class="text-caption">View Payment</span>
                                </v-tooltip> -->
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn 
                                            :class="selectedRows.length > 0 ? 'd-none' : 'd-flex'" 
                                            v-bind="attrs" 
                                            v-on="on" 
                                            :disabled="item.order.payment_status == 1 ? true : false"
                                            small 
                                            icon
                                            @click="acceptPayment(`${item.order.id}`)"
                                        >
                                            <v-icon small color="green">check_circle</v-icon>
                                        </v-btn>
                                    </template>
                                    <span class="text-caption">Accept Payment</span>
                                </v-tooltip>
                                <!-- <v-tooltip bottom v-if="item.paymentStats == 1">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn 
                                            :class="selectedRows.length > 0 ? 'd-none' : 'd-flex'" 
                                            v-bind="attrs" 
                                            v-on="on" 
                                            small 
                                            icon
                                            @click="rejectPayment(`${item.id}`)"
                                        >
                                            <v-icon small color="warning">cancel</v-icon>
                                        </v-btn>
                                    </template>
                                    <span class="text-caption">Reject Payment</span>
                                </v-tooltip> -->
                                <!-- <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn 
                                            :class="selectedRows.length > 0 ? 'd-none' : 'd-flex'" 
                                            v-bind="attrs" 
                                            v-on="on" 
                                            small 
                                            icon
                                            @click="genCertificate(`${item.id}`)"
                                        >
                                            <v-icon small :color="item.completion == 0 ? 'grey' : 'green'">verified</v-icon>
                                        </v-btn>
                                    </template>
                                    <span class="text-caption">Generate Certificate</span>
                                </v-tooltip> -->
                                <!-- <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn v-bind="attrs" v-on="on" small icon @click="deleteParticipant(`${item.id}`)">
                                            <v-icon small color="red">delete</v-icon>
                                        </v-btn>
                                    </template>
                                    <span class="text-caption">Delete From Course</span>
                                </v-tooltip> -->
                            </div>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
    import AlertConfirm from '../components/AlertConfirm.vue'

    export default {
        components: { AlertConfirm },
        data: () => ({
            search: '',
            select: false,
            selectedRows: [],
            loading: false,
            headers: [
                { text: 'Full Name', value: 'course_title', class: "secondary--text font-weight-bold", sortable: false  },
                { text: 'Course', value: 'title', class: "", sortable: false },
                { text: 'No.Whatsapp', value: 'wa', class: "", sortable: false },
                { text: 'Gross Amount', value: 'gross_amount', class: "", sortable: false },
                { text: 'Payment Stats', value: 'paymentStats', class: "", sortable: false },
                // { text: 'Completion', value: 'completion', class: "secondary--text font-weight-bold", sortable: false },
                { text: 'Actions', value: 'actions', class: "secondary--text font-weight-bold", sortable: false }
            ],
            courseData: null,
            desserts: [],
            url: process.env.NUXT_ENV_API_URL,
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
            async viewPayment(uri) {
                this.$refs.image.show(uri)
            },
            async acceptPayment(id) {
                try {
                    this.loading = true
                    await this.$axios.post(`${this.url}/api/v1/order/paid`, { 
                        order_id: id,
                    })
                    this.$refs.notif.show('success', 'Delete data success!')
                    this.refreshData()
                } catch (error) {
                    this.$refs.notif.show('error', 'Failed to accept payment data!')
                    this.loading = false
                }
            },
            async rejectPayment(id) {
                const confirm = await this.$refs.confirm.show(
                    'Are you sure to reject this data ?',
                    'This user will be permanently reject!'
                )

                if (confirm) {
                    try {
                        this.loading = true
                        await this.$axios.post('/api/course/enroll/payment', { 
                            participantId: id,
                            paymentStats: 0 
                        })
                        this.$refs.notif.show('success', 'Delete data success!')
                        this.refreshData()
                    } catch (error) {
                        this.$refs.notif.show('error', 'Failed to accept payment data!')
                        this.loading = false
                    }
                }
            },
            async deleteParticipant(id) {
                const confirm = await this.$refs.confirm.show(
                    'Are you sure to delete this data ?',
                    'Your data will be permanently deleted!'
                )

                if (confirm) {
                    try {
                        this.loading = true
                        await this.$axios.delete(`/api/course/enroll/${id}`)
                        this.$refs.notif.show('success', 'Delete data success!')
                        this.alertConfirm = false
                        this.refreshData()
                    } catch (e) {
                        this.$refs.notif.show('error', `${e.response.data.code || 'Sorry your data cannot be delete.'}`)
                        this.alertConfirm = false
                        this.loading = false
                    }
                } else {
                    this.alertConfirm = false
                    this.loading = false
                }
            },
            async genCertificate(id) {
                try {
                    this.loading = true
                    await this.$axios.post(`/api/certificate/${id}`)
                    this.$refs.notif.show('success', 'Generate certificate successfully!')
                    this.alertConfirm = false
                    this.refreshData()
                } catch (e) {
                    this.$refs.notif.show('error', `${e.response.data.code || 'Failed to create certifite.'}`)
                    this.alertConfirm = false
                    this.loading = false
                }
            },
            async getAnyCertificate(courseId) {
                try {
                    this.loading = true
                    const bodyData = {
                        "courseId": `${courseId}`,
                        "participantData": [...this.selectedRows]
                    }

                    if (this.selectedRows.length > 0) {
                        await this.$axios.post(`/api/certificate/generate/any`, bodyData)
                        this.$refs.notif.show('success', 'Generate certificate successfully!')
                        this.alertConfirm = false
                        this.refreshData()
                    } else {
                        this.$refs.notif.show('info', 'No data selected!')
                    }
                } catch (e) {
                    this.$refs.notif.show('error', `${'Failed to create certificate.'}`)
                    this.alertConfirm = false
                    this.loading = false
                }
            },
            toggle(keyID) {
                if (this.selectedRows.includes(keyID)) {
                    this.selectedRows = this.selectedRows.filter(
                        selectedKeyID => selectedKeyID !== keyID
                    );
                } else {
                    this.selectedRows.push(keyID);
                }
            },
            async getData() {
                this.loading = true
                try {
                    const res  = await this.$axios.get(`${this.url}/api/v1/course/${process.env.NUXT_ENV_COURSE_AWS}`)
                    this.desserts = res.data.course_participant
                    console.log(res.data.course_participant);
                    this.courseData = res.data
                    this.loading = false
                } catch (e) {
                    console.log(e)
                    if ((e.response && e.response.data.code) == "ERR_DATA_EMPTY") {
                        this.desserts = []
                    }
                    this.loading = false
                }
            },
            refreshData() {
                this.getData()
            },
            goBack() {
                this.$router.push('/aws')
            }
        }
    }
</script>