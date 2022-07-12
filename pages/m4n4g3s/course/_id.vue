<template>
   <div class="tw-bg-[url('https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png')] fill-height tw-w-full tw-bg-cover tw-bg-repeat tw-bg-center">
      <div class="tw-backdrop-blur-sm tw-bg-white/80 tw-h-full">
         <v-container fill-height>
               <AlertConfirm ref="confirm"/>
               <ImageModal ref="image" />
               <Notif ref="notif" />

               <v-card elevation="3" class="col-12 mx-auto pa-0 rounded-lg tw-border-none">
                  <div class="d-flex flex-column indigo lighten-2 pa-0">
                     <div class="d-flex flex-column flex-md-row flex-md-row px-5 py-4 justify-start align-center">
                        <div class="d-flex flex-row align-center">
                           <v-btn small icon plain :ripple="false" color="white" @click="goBack()">
                              <v-icon small>
                                 arrow_back_ios
                              </v-icon>
                           </v-btn>
                           <div class="d-flex flex-column ml-2 align-start">
                              <div class="d-flex flex-row mx-md-0 mt-5 mt-md-0 justify-center align-center">
                                 <span class="font-weight-bold text-h5 light-blue--text text--lighten-5 mr-1">{{courseData ? courseData.course_title : ''}}</span>
                                 <span class="font-weight-light text-h5 light-blue--text text--lighten-5"></span>
                              </div>
                              <div class="d-flex flex-row text-caption white--text">
                                 <span class="">Course ID : {{courseId}}</span>
                                 <span class="mx-2">&#8226;</span>
                                 <span>{{$moment(courseData ? courseData.course_start : '').format("DD MMM YYYY")}}</span>
                                 <span class="mx-1">-</span>
                                 <span>{{$moment(courseData ? courseData.course_end : '').format("DD MMM YYYY")}}</span>
                              </div>
                           </div>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex flex-row mt-2 mt-md-0 flex-md-row mb-3 ma-md-0 justify-space-between justify-start align-center">
                           <v-btn :loading="loading" color="white" icon class="white--text mr-md-2" @click="refreshData()">
                              <v-icon>
                                 restore
                              </v-icon>
                           </v-btn>
                           <v-btn small outlined color="white" class="mr-2" @click="gotoCertificateList()">
                              Certificate List
                           </v-btn>
                           <v-btn small outlined color="white" class="mr-2" @click="importDialog = true">
                              Import Participant
                           </v-btn>
                           <v-btn small outlined color="white" class="mr-2">
                              <json-excel
                                    class   = "text-caption"
                                    :data   = "desserts"
                                    :fields = "exportHeader"
                                    worksheet = "Participant Data"
                                    name = "aws-technical-fundamental-data.xls"
                              >
                                    Download
                              </json-excel>
                           </v-btn>
                        </div>
                     </div>
                     <div class="d-flex indigo px-5 py-3 pt-1 lighten-3">
                           <v-text-field
                              v-model="search"
                              label="Search"
                              append-icon="search"
                              dark
                              hide-details
                           ></v-text-field>
                     </div>
                     <div v-if="selectedRows.length > 0" class="d-flex flex-row justify-end indigo lighten-4 py-4 pt-4 pr-5">
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
                                       :class="selectedRows.length > 0 ? 'd-flex ml-5 success--text text-capitalize font-weight-bold rounded-lg' : 'd-none'" 
                                       color="white" 
                                       small
                                       @click="resendPayment()"
                                    >
                                       <v-icon color="green" small left>
                                          receipt_long
                                       </v-icon>
                                       Re-send Payment
                                    </v-btn>
                              </v-badge>
                           </template>
                           <span class="text-caption">Resend payment info</span>
                        </v-tooltip>
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
                                       :class="selectedRows.length > 0 ? 'd-flex ml-5 success--text text-capitalize font-weight-bold rounded-lg' : 'd-none'" 
                                       color="white" 
                                       small
                                       @click="markCompleteAny()"
                                    >
                                       <v-icon color="green" small left>
                                          verified
                                       </v-icon>
                                       Mark Complete
                                    </v-btn>
                              </v-badge>
                           </template>
                           <span class="text-caption">Mark Complete</span>
                        </v-tooltip>
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
                                       :class="selectedRows.length > 0 ? 'd-flex ml-5 success--text text-capitalize font-weight-bold rounded-lg' : 'd-none'" 
                                       color="white" 
                                       small
                                       @click="sendCertificate()"
                                    >
                                       <v-icon color="green" small left>
                                          send
                                       </v-icon>
                                       Send Certificate
                                    </v-btn>
                              </v-badge>
                           </template>
                           <span class="text-caption">Send Certificate Via Email</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                           <template v-slot:activator="{ on, attrs }">
                              <v-badge
                                    bordered
                                    color="error"
                                    :content="selectedRows.length"
                                    :value="(selectedRows.length)"
                                    overlap
                              >
                                    <v-btn 
                                       v-bind="attrs" 
                                       v-on="on" 
                                       :class="selectedRows.length > 0 ? 'd-flex ml-5 white--text text-capitalize font-weight-bold rounded-lg' : 'd-none'" 
                                       color="red" 
                                       small
                                       @click="deleteParticipant()"
                                    >
                                       <v-icon color="white" small left>
                                          delete
                                       </v-icon>
                                       Delete
                                    </v-btn>
                              </v-badge>
                           </template>
                           <span class="text-caption">Delete participant</span>
                        </v-tooltip>
                     </div>
                  </div>

                  <v-data-table
                     v-model="selectedRows"
                     :headers="headers"
                     :items="desserts"
                     :loading="loading"
                     :search="search"
                     fixed-header
                     multi-sort
                     show-select
                     justify="space-around"
                     loading-text="Mengambil data... Mohon Tunggu!"
                     no-data-text="Data tidak tersedia."
                     no-results-text="Data tidak ditemukan."
                     class="grey--text tw-border-none text-cation"
                  >
                     <template v-slot:[`item.completion`]="{ item }">
                           <v-chip
                              small
                              class="pa-3 white--text text-caption font-weight-medium text-capitalize"
                              :color="item.completion == '1' ? 'info' : 'red lighten-1'"
                           >
                              {{ item.completion == '1' ? 'Complete' : 'Uncomplete' }}
                           </v-chip>
                     </template>
                     <template v-slot:[`item.payment_status`]="{ item }">
                           <v-chip
                              small
                              class="pa-3 white--text text-caption font-weight-medium text-capitalize"
                              :color="item.payment_status == '1' ? 'green lighten-1' : 'warning lighten-1'"
                           >
                              {{ item.payment_status == '1' ? 'Accept' : 'Pending' }}
                           </v-chip>
                     </template>
                     <template v-slot:[`item.actions`]="{ item }">
                           <div class="d-flex flex-row justify-center align-center">
                              <v-tooltip bottom>
                                 <template v-slot:activator="{ on, attrs }">
                                       <v-btn 
                                          :class="selectedRows.length > 0 ? 'd-none' : 'd-flex'" 
                                          v-bind="attrs" 
                                          v-on="on"
                                          small 
                                          icon
                                          @click="acceptPayment(item.order_id_ref, item.payment_status)"
                                       >
                                          <v-icon small :color="item.payment_status == 0 ? 'green' : 'grey'">paid</v-icon>
                                       </v-btn>
                                 </template>
                                 <span class="text-caption">Accept Payment</span>
                              </v-tooltip>
                              <v-tooltip bottom>
                                 <template v-slot:activator="{ on, attrs }">
                                       <v-btn 
                                          :class="selectedRows.length > 0 ? 'd-none' : 'd-flex'" 
                                          v-bind="attrs" 
                                          v-on="on" 
                                          :disabled="item.payment_status == 0 ? true : false"
                                          small 
                                          icon
                                          @click="markComplete(item.participant_id, item.completion)"
                                       >
                                          <v-icon small :color="item.completion == 0 ? 'green' : 'grey'">verified</v-icon>
                                       </v-btn>
                                 </template>
                                 <span class="text-caption">Mark Complete</span>
                              </v-tooltip>
                           </div>
                     </template>
                  </v-data-table>
               </v-card>
         </v-container>
      </div>

      <import-csv :dialog.sync="importDialog" :multiple="false" @filesUploaded="importCsv($event)" />
   </div>
</template>

<script>
   import AlertConfirm from '../../../components/AlertConfirm.vue';
   import JsonExcel from "vue-json-excel";
   import ImportCsv from '~/components/ImportCsv.vue';
   import Papa from 'papaparse';

   export default {
      components: { AlertConfirm, JsonExcel, ImportCsv },
      data: () => ({
         importDialog: false,
         search: '',
         select: false,
         selectedRows: [],
         loading: false,
         csvFile: [],
         csvData: [],
         parsed: false,
         headers: [
               { text: 'Full Name', value: 'fullName', class: "secondary--text font-weight-bold", sortable: false  },
               { text: 'Institution', value: 'institution', class: "", sortable: false },
               { text: 'email', value: 'email', class: "secondary--text font-weight-bold", sortable: false },
               { text: 'No.Whatsapp', value: 'phone_number', class: "", sortable: false },
               { text: 'Profession', value: 'profession', class: "", sortable: false },
               { text: 'Payment Stats', value: 'payment_status', class: "", sortable: true },
               { text: 'Completion', value: 'completion', class: "", sortable: true },
               { text: 'Actions', value: 'actions', class: "secondary--text font-weight-bold", sortable: false }
         ],
         exportHeader: {
               'Full Name': 'fullName',
               'Institution': 'institution',
               'Email' : 'email',
               'No.whatsapp' : 'phone_number',
               'Gross Amount' : 'gross_amount',
               'Payment Status' : 'payment_status'
         },
         courseData: null,
         desserts: [],
         uri: process.env.NUXT_ENV_API_URL,
         courseId: '',
         editedIndex: -1,
         detailsItem: {},
         defaultItem: {
               fullName: '',
               code: 0,
         },
      }),
      async mounted() {
         this.courseId  = this.$route.params.id
         await this.getData(this.$route.params.id)
      },
      computed: {
         searchByName() {
               return this.desserts.map(val => val).filter(items => items.fullName.toLowerCase().includes(this.search.toLowerCase()))
         }
      },
      methods: {
         async importCsv(files) {
            this.csvFile = files[0];
            this.parseFile();
         },
         parseFile(){
            Papa.parse( this.csvFile, {
               header: false,
               skipEmptyLines: true,
               complete: function( results ) {
                  this.csvData = results.data.map(e => {
                     return {
                        "email" : e[1],
                        "fullName" : e[0],
                        "phone_number" : e[2],
                        "profession" : e[3],
                        "institution" : e[4],
                        "order_details" : {
                           "payment_type" : "manual",
                           "bank" : "bca",
                           "items" : [this.$route.params.id],
                           "payment_status": Number(e[5])
                        }
                     }
                  });
                  this.parsed = true;
                  this.import()
               }.bind(this)
            } );
         },
         async import() {
            try {
               this.loading = true
               const bodyData = { 
                  courseId: this.$route.params.id, 
                  data: this.csvData,
               }
               await this.$axios.post(`${this.uri}/order/create/many`, bodyData)
               this.$refs.notif.show('success', 'Import Participant success!')
               this.refreshData()
            } catch (error) {
               this.$refs.notif.show('error', 'Failed to Import Participant data!')
               this.loading = false
            }
         },
         async viewPayment(uri) {
               this.$refs.image.show(uri)
         },
         async acceptPayment(id, payment_status) {
               try {
                  this.loading = true
                  await this.$axios.post(`${this.uri}/order/paid`, { 
                     order_id: id,
                     paid: payment_status
                  })
                  this.$refs.notif.show('success', 'Confirmation Payment success!')
                  this.refreshData()
               } catch (error) {
                  this.$refs.notif.show('error', 'Failed to accept payment data!')
                  this.loading = false
               }
         },
         async deleteParticipant() {
            this.loading = true
            const confirm = await this.$refs.confirm.show(
               'Are you sure to delete this data ?',
               'Your data will be permanently deleted!'
            )

            if (confirm) {
               try {
                  const bodyData = {
                     "courseId": this.$route.params.id,
                     "participantId": this.selectedRows.map(i => i.participant_id)
                  }
                  
                  await this.$axios.post(`${this.uri}/course/delete/participant`, bodyData)
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
         async resendPayment() {
            const bodyData = {
               "order_id": this.selectedRows.map(i => i.order_id_ref)
            }

            try {
               this.loading = true
               await this.$axios.post(`${this.uri}/order/resend`, bodyData)
               this.$refs.notif.show('success', 'Mail sended!')
               this.alertConfirm = false
               this.refreshData()
            } catch (e) {
               this.$refs.notif.show('error', `${e.response.data.code || 'Sent mail order failed.'}`)
               this.alertConfirm = false
               this.loading = false
            }
         },
         async sendCertificate() {
            alert('ok')
         },
         async markComplete(id, completion) {
            const bodyData = {
               "course_id": `${this.courseData._id}`,
               "participant_id": [id]
            }

            try {
               this.loading = true
               if (completion == 1) {
                  await this.$axios.post(`${this.uri}/course/uncompletion`, bodyData)
               } else {
                  await this.$axios.post(`${this.uri}/course/completion`, bodyData)
               }
               this.$refs.notif.show('success', 'Mark complete successfully!')
               this.alertConfirm = false
               this.refreshData()
            } catch (e) {
               this.$refs.notif.show('error', `${e.response.data.code || 'Failed to mark complete.'}`)
               this.alertConfirm = false
               this.loading = false
            }
         },
         async markCompleteAny() {
            try {
               this.loading = true
               const bodyData = {
                  "course_id": `${this.courseData._id}`,
                  "participant_id": this.selectedRows.map(i => i.participant_id)
               }

               if (this.selectedRows.length > 0) {
                  await this.$axios.post(`${this.uri}/course/completion`, bodyData)
                  this.$refs.notif.show('success', 'Mark complete successfully!')
                  this.alertConfirm = false
                  this.refreshData()
               } else {
                  this.$refs.notif.show('info', 'No data selected!')
               }
            } catch (e) {
               this.$refs.notif.show('error', `${'Failed to mark complete.'}`)
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
         async getData(id) {
            this.loading = true
            try {
               const res  = await this.$axios.get(`${this.uri}/course/${id}`)
               this.desserts = res.data.course_participant.map(items => {
                  return {
                        participant_id: items.id,
                        user_id: items.participant.id,
                        ...items.participant,
                        order_id_ref: items.order.id,
                        ...items.order,
                        gross_amount: "Rp. " + items.order.gross_amount,
                        completion: items.completion != null || items.completion != undefined ? items.completion : 0
                  }
               })
               this.courseData = res.data
               this.loading = false
            } catch (e) {
               if ((e.response && e.response.data.code) == "ERR_DATA_EMPTY") {
                  this.desserts = []
               }
               this.loading = false
            }
         },
         refreshData() {
            this.getData(this.courseId)
         },
         gotoCertificateList() {
            this.$router.push(`/certificate/${this.courseData._id}`)
         },
         goBack() {
            this.$router.push('/m4n4g3s')
         }
      }
   }
</script>