<template>
   <div class="tw-bg-[url('https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png')] fill-height tw-w-full tw-bg-cover tw-bg-repeat tw-bg-center">
      <div class="tw-backdrop-blur-sm tw-bg-white/80 tw-h-full">
         <v-container fill-height>
               <AlertConfirm ref="confirm"/>
               <ImageModal ref="image" />
               <Notif ref="notif" />

               <v-card elevation="3" class="col-12 mx-auto pa-0 rounded-lg tw-border-none">
                  <div class="d-flex flex-column indigo lighten-2 pa-0">
                     <div class="d-flex flex-column-reverse flex-md-row flex-md-row px-5 py-4">
                           <div class="d-flex flex-column">
                              <div class="d-flex flex-row mx-md-0 mt-5 mt-md-0 justify-start align-center">
                                 <span class="font-weight-bold text-h5 light-blue--text text--lighten-5 mr-1">Manages Course</span>
                              </div>
                              <span class="text-caption white--text">Course panel Admin for create delete and update courses of <span class="font-weight-bold">Technobrain</span>.</span>
                           </div>
                           <v-spacer></v-spacer>
                           <div class="d-flex flex-row-reverse flex-md-row mb-3 ma-md-0 justify-space-between align-center">
                              <v-btn :loading="loading" color="white" icon class="white--text mr-md-2" @click="refreshData()">
                                 <v-icon>
                                       restore
                                 </v-icon>
                              </v-btn>
                              <v-btn small outlined color="white" class="mr-2">
                                 Add Course
                              </v-btn>
                           </div>
                     </div>
                     <div class="d-flex align-end indigo px-5 py-3 pt-1 lighten-3">
                           <v-text-field
                              v-model="search"
                              label="Search"
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
                     :loading="loading"
                     :search="search"
                     hide-default-header
                     fixed-header
                     multi-sort
                     justify="space-around"
                     loading-text="Mengambil data... Mohon Tunggu!"
                     no-data-text="Data tidak tersedia."
                     no-results-text="Data tidak ditemukan."
                     class="grey--text tw-border-none text-cation"
                  >
                     <template v-slot:[`item.course_title`]="{ item }">
                        <div class="d-flex flex-column my-4">
                           <span class="text-caption">Course ID : {{item.course_id}}</span>
                           <NuxtLink :to="`/m4n4g3s/course/${item.id}`">
                              <span  class="tw-text-base font-weight-bold indigo--text text--lighten-2 md:tw-text-lg tw-truncate hover:tw-underline hover:tw-decoration-grey">{{ item.course_title }}</span>
                           </NuxtLink>
                           <div class="d-flex flex-row text-caption">
                              <span>{{$moment(item.course_start).format("DD MMM YYYY")}}</span>
                              <span class="mx-1">-</span>
                              <span>{{$moment(item.course_end).format("DD MMM YYYY")}}</span>
                              <span class="mx-2">&#8226;</span>
                              <span>Created</span>
                              <span class="ml-1">{{$moment(item.createdAt).fromNow()}}</span>
                           </div>
                        </div>
                     </template>
                     <template v-slot:[`item.course_category`]="{ item }">
                        <div class="d-flex flex-column">
                           <span class="text-caption">Course Category</span>
                           <span class="tw-text-base font-weight-bold primary--text">{{item.course_category}}</span>
                        </div>
                     </template>
                     <template v-slot:[`item.course_price`]="{ item }">
                        <div class="d-flex flex-column">
                           <span class="text-caption">Course Price</span>
                           <span class="tw-text-base font-weight-bold primary--text">Rp {{item.course_price}}</span>
                        </div>
                     </template>
                     <template v-slot:[`item.certificate_template`]="{ item }">
                        <div class="d-flex flex-column">
                           <span class="text-caption">Preview Certificate</span>
                           <v-btn small outlined color="primary lighten-1" class="text-caption white--text rounded-lg font-weight-bold" @click="previewCertificate(item.id)">
                              <v-icon small class="mr-1">visibility</v-icon>
                              show
                           </v-btn>
                        </div>
                     </template>
                     <template v-slot:[`item.actions`]="{ item }">
                        <div class="d-flex flex-column">
                           <span class="text-caption">Action</span>
                           <div class="d-flex flex-row justify-start align-center">
                              <v-tooltip bottom>
                                 <template v-slot:activator="{ on, attrs }">
                                       <v-btn 
                                          v-bind="attrs" 
                                          v-on="on" 
                                          small 
                                          icon
                                          @click="editCourse(`${item.id}`)"
                                       >
                                          <v-icon small color="green">edit</v-icon>
                                       </v-btn>
                                 </template>
                                 <span class="text-caption">Edit</span>
                              </v-tooltip>
                              <v-tooltip bottom>
                                 <template v-slot:activator="{ on, attrs }">
                                       <v-btn v-bind="attrs" v-on="on" small icon @click="deleteCourse(`${item.id}`)">
                                          <v-icon small color="red">delete</v-icon>
                                       </v-btn>
                                 </template>
                                 <span class="text-caption">Delete</span>
                              </v-tooltip>
                           </div>
                        </div>
                     </template>
                  </v-data-table>
               </v-card>
         </v-container>
      </div>
   </div>
</template>

<script>
   import AlertConfirm from '../../components/AlertConfirm.vue'
   import JsonExcel from "vue-json-excel";

   export default {
      components: { AlertConfirm, JsonExcel },
      data: () => ({
         search: '',
         select: false,
         selectedRows: [],
         loading: false,
         headers: [
               { text: 'course_title', value: 'course_title', class: "secondary--text font-weight-bold", sortable: false  },
               { text: 'category', value: 'course_category', class: "", sortable: false },
               { text: 'price', value: 'course_price', class: "secondary--text font-weight-bold", sortable: false },
               { text: 'certificate', value: 'certificate_template', class: "", sortable: false },
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
         courseId: process.env.NUXT_ENV_COURSE_AWS,
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
      computed: {
         searchByName() {
               return this.desserts.map(val => val).filter(items => items.fullName.toLowerCase().includes(this.search.toLowerCase()))
         }
      },
      methods: {
         previewCertificate(id) {
            this.$router.push(`/m4n4g3s/certificate/${id}`)
         },
         async editCourse(id) {
            alert(id)
         },
         async deleteCourse(id) {
               const confirm = await this.$refs.confirm.show(
                  'Are you sure to delete this data ?',
                  'Your data will be permanently deleted!'
               )

               if (confirm) {
                  try {
                     console.log(id)
                     this.loading = true
                     await this.$axios.delete(`${this.uri}/course/${id}`,)
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
                  const res  = await this.$axios.get(`${this.uri}/course`)
                  this.desserts = res.data
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
      }
   }
</script>