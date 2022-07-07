<template>
   <div class="tw-bg-[url('https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png')] fill-height tw-w-full tw-bg-cover tw-bg-repeat tw-bg-center">
      <div class="tw-backdrop-blur-sm tw-bg-white/80 tw-h-full">
         <Notif ref="notif" />
         <v-container class="d-flex flex-column">
            <v-card class="col-12 pa-0 col-md-7 d-flex flex-column rounded-lg tw-border-none tw-my-10 tw-mx-auto">
               <div class="d-flex flex-column flex-md-row indigo lighten-2 px-5 py-4 justify-start align-center">
                  <div class="d-flex flex-row align-center">
                     <v-btn small icon plain :ripple="false" color="white" @click="goBack()">
                        <v-icon small>
                           arrow_back_ios
                        </v-icon>
                     </v-btn>
                     <div class="d-flex flex-column ml-2 align-start">
                        <div class="d-flex flex-row mx-md-0 mt-5 mt-md-0 justify-center align-center">
                           <span class="font-weight-bold text-subtitle-1 light-blue--text text--lighten-5 mr-1">Certificate Template</span>
                           <!-- <span class="font-weight-light text-h5 light-blue--text text--lighten-5">Template</span> -->
                        </div>
                     </div>
                  </div>
                  <v-spacer></v-spacer>
                  <div class="d-flex flex-row mt-2 mt-md-0 flex-md-row mb-3 ma-md-0 justify-space-between justify-start align-center">
                     <v-btn small outlined color="white" class="mr-2" @click="save(courseData._id)">
                        Save
                     </v-btn>
                  </div>
                  <div class="d-flex flex-row mt-2 mt-md-0 flex-md-row mb-3 ma-md-0 justify-space-between justify-start align-center">
                     <v-btn small outlined color="white" class="mr-2" @click="preview(courseData._id)">
                        Preview
                     </v-btn>
                  </div>
               </div>
               <div class="pa-4 d-flex flex-column flex-md-row">
                  <div class="d-flex flex-column px-0 mx-2 mr-md-4">
                     <div class="mb-2 font-weight-bold text-subtitle-1 indigo--text text--lighten-2">Page 1 (Front Certificate)</div>
                     <div class="pa-0 py-2">
                        <v-text-field
                           v-model="formData.frontBackground"
                           label="Front Background"
                           class="rounded-lg text--caption"
                           placeholder="Image URL with extension .jpg are allowed."
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="mt-2 text-caption font-weight-bold primary--text">Participant Name</div>
                     <div class="d-flex flex-row py-4">
                        <v-text-field
                           v-model="formData.name.fontColor"
                           label="Font Color"
                           class="pa-0 pr-2 rounded-lg text--caption"
                           placeholder="Ex: #FFFFFF"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                        <v-text-field
                           v-model.number="formData.name.fontSize"
                           label="Font Size"
                           class="pa-0 pl-2 rounded-lg text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row px-0 py-4">
                        <v-select
                           v-model="formData.name.align"
                           label="Align"
                           dense
                           hide-details="auto"
                           color="primary"
                           :items="alignData"
                           required
                           class="pa-0 pr-2 rounded-lg text-caption"
                        >
                        </v-select>
                        <v-text-field
                           v-model.number="formData.name.x"
                           label="Position X"
                           class="pa-0 px-2rounded-lg text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                        <v-text-field
                           v-model.number="formData.name.y"
                           label="Position Y"
                           class="pa-0 pl-2 rounded-lg text--caption"
                           type="number"
                           placeholder="center."
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row">
                        <div class="align-seft-center">
                           <span class="text-caption font-weight-bold primary--text">QR Code</span>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="align-seft-center">
                           <span class="text-caption grey--text text--darken-2 font-weight-bold">Show</span>
                        </div>
                        <v-checkbox
                           v-model="formData.qrcodePage1.show"
                           hide-details
                           dense
                           class="pa-0 ma-0"
                           :ripple="false"
                        ></v-checkbox>
                     </div>
                     <div class="py-4">
                        <v-text-field
                           v-model="formData.qrcodePage1.url"
                           label="Code Data"
                           class="rounded-lg text--caption"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row py-4">
                        <v-select
                           v-model="formData.qrcodePage1.align"
                           label="Align"
                           dense
                           hide-details="auto"
                           color="primary"
                           :items="alignData"
                           required
                           class="col-6 pa-0 rounded-lg pr-2 text-caption"
                        >
                        </v-select>
                        <v-text-field
                           v-model.number="formData.qrcodePage1.size"
                           label="QR Image Size"
                           class="col-6 pa-0 rounded-lg pl-2 text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row py-4">
                        <v-text-field
                           v-model.number="formData.qrcodePage1.x"
                           label="Position X"
                           class="col-6 pa-0 rounded-lg pr-2 text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                        <v-text-field
                           v-model.number="formData.qrcodePage1.y"
                           label="Position Y"
                           class="col-6 pa-0 rounded-lg pl-2 text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row">
                        <div class="align-seft-center">
                           <span class="text-caption font-weight-bold primary--text">Certificate Number</span>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="align-seft-center">
                           <span class="text-caption grey--text text--darken-2 font-weight-bold">Show</span>
                        </div>
                        <v-checkbox
                           v-model="formData.certificateNumberPage1.show"
                           hide-details
                           dense
                           class="pa-0 ma-0"
                           :ripple="false"
                        ></v-checkbox>
                     </div>
                     <div class="d-flex flex-row py-4">
                        <v-text-field
                           v-model="formData.certificateNumberPage1.fontColor"
                           label="Font Color"
                           class="pr-2 rounded-lg text--caption"
                           placeholder="center."
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                        <v-text-field
                           v-model.number="formData.certificateNumberPage1.fontSize"
                           label="Font Size"
                           class="pl-2 rounded-lg text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row py-4">
                        <v-select
                           v-model="formData.certificateNumberPage1.align"
                           label="Align"
                           dense
                           hide-details="auto"
                           color="primary"
                           :items="alignData"
                           required
                           class="pa-0 pr-2 rounded-lg text-caption"
                        >
                        </v-select>
                        <v-text-field
                           v-model.number="formData.certificateNumberPage1.x"
                           label="Position X"
                           class="pa-0 px-2 rounded-lg text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                        <v-text-field
                           v-model.number="formData.certificateNumberPage1.y"
                           label="Position Y"
                           class="pa-0 pl-2 rounded-lg text--caption"
                           type="number"
                           placeholder="center."
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                  </div>
                  <div class="d-flex flex-column px-0 mx-2 ml-md-4">
                     <div class="mb-2 font-weight-bold text-subtitle-1 indigo--text text--lighten-2">Page 2 (Back Certificate)</div>
                     <div class="pa-0 py-2">
                        <v-text-field
                           v-model="formData.backBackground"
                           label="Back Background"
                           class="rounded-lg text--caption"
                           placeholder="Image URL with extension .jpg are allowed."
                           hint="Leave blank if not using the second page."
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row">
                        <div class="align-seft-center">
                           <span class="text-caption font-weight-bold primary--text">QR Code</span>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="align-seft-center">
                           <span class="text-caption grey--text text--darken-2 font-weight-bold">Show</span>
                        </div>
                        <v-checkbox
                           v-model="formData.qrcodePage2.show"
                           hide-details
                           dense
                           class="pa-0 ma-0"
                           :ripple="false"
                        ></v-checkbox>
                     </div>
                     <div class="py-4">
                        <v-text-field
                           v-model="formData.qrcodePage2.url"
                           label="Code Data"
                           class="rounded-lg text--caption"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row py-4">
                        <v-select
                           v-model="formData.qrcodePage2.align"
                           label="Align"
                           dense
                           hide-details="auto"
                           color="primary"
                           :items="alignData"
                           required
                           class="col-6 pa-0 rounded-lg pr-2 text-caption"
                        >
                        </v-select>
                        <v-text-field
                           v-model.number="formData.qrcodePage2.size"
                           label="QR Image Size"
                           class="col-6 pa-0 rounded-lg pl-2 text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row py-4">
                        <v-text-field
                           v-model.number="formData.qrcodePage2.x"
                           label="Position X"
                           class="col-6 pa-0 rounded-lg pr-2 text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                        <v-text-field
                           v-model.number="formData.qrcodePage2.y"
                           label="Position Y"
                           class="col-6 pa-0 rounded-lg pl-2 text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row">
                        <div class="align-seft-center">
                           <span class="text-caption font-weight-bold primary--text">Certificate Number</span>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="align-seft-center">
                           <span class="text-caption grey--text text--darken-2 font-weight-bold">Show</span>
                        </div>
                        <v-checkbox
                           v-model="formData.certificateNumberPage2.show"
                           hide-details
                           dense
                           class="pa-0 ma-0"
                           :ripple="false"
                        ></v-checkbox>
                     </div>
                     <div class="d-flex flex-row py-4">
                        <v-text-field
                           v-model="formData.certificateNumberPage2.fontColor"
                           label="Font Color"
                           class="pr-2 rounded-lg text--caption"
                           placeholder="center."
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                        <v-text-field
                           v-model.number="formData.certificateNumberPage2.fontSize"
                           label="Font Size"
                           class="pl-2 rounded-lg text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                     <div class="d-flex flex-row py-4">
                        <v-select
                           v-model="formData.certificateNumberPage2.align"
                           label="Align"
                           dense
                           hide-details="auto"
                           color="primary"
                           :items="alignData"
                           required
                           class="pa-0 pr-2 rounded-lg text-caption"
                        >
                        </v-select>
                        <v-text-field
                           v-model.number="formData.certificateNumberPage2.x"
                           label="Position X"
                           class="pa-0 px-2 rounded-lg text--caption"
                           type="number"
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                        <v-text-field
                           v-model.number="formData.certificateNumberPage2.y"
                           label="Position Y"
                           class="pa-0 pl-2 rounded-lg text--caption"
                           type="number"
                           placeholder="center."
                           dense
                           color="primary"
                           hide-details="auto"
                           required
                        >
                        </v-text-field>
                     </div>
                  </div>
               </div>
            </v-card>
         </v-container>

         <v-dialog
            v-model="dialog"
            :width="dialogWidth"
            class="rounded-lg"
         >
            <v-card height="90vh" class="tw-border-none">
               <iframe :src="objectUrl" width="100%" height="100%"></iframe>
            </v-card>
         </v-dialog>
      </div>
   </div>
</template>

<script>
   import AlertConfirm from '../../../components/AlertConfirm.vue'

   export default {
      components: { AlertConfirm },
      data: () => ({
         dialog: false,
         loading: false,
         courseData: null,
         uri: process.env.NUXT_ENV_API_URL,
         notif: {
            type: 'success',
            color: 'success',
            icon: 'check_circle',
            message: ``
         },
         valid: true,
         alignData : ['left','center','right'],
         objectUrl: '',
         formData : {
            "certificateNumberPage1": {
               "show": false,
               "align": "left",
               "fontSize": 14,
               "fontColor": "#504C69",
               "x": 660,
               "y": 30
            },
            "certificateNumberPage2": {
               "show": true,
               "align": "center",
               "fontSize": 8,
               "fontColor": "#504C69",
               "x": 78,
               "y": 495
            },
            "name": {
               "align": "center",
               "fontSize": 35,
               "fontColor": "#504C69",
               "x": 0,
               "y": 250
            },
            "qrcodePage1": {
               "show": false,
               "url": "example",
               "align": "center",
               "size": 70,
               "x": 385,
               "y": 418
            },
            "qrcodePage2": {
               "show": true,
               "url": "https://technobrainlab.com/course/certificate/",
               "align": "center",
               "size": 80,
               "x": 385,
               "y": 418
            },
            "backBackground": "https://firebasestorage.googleapis.com/v0/b/technobrain-dev.appspot.com/o/certificates%2Faws-back.jpg?alt=media&token=d209a7dc-cc58-4282-95d7-831923109837",
            "frontBackground": "https://firebasestorage.googleapis.com/v0/b/technobrain-dev.appspot.com/o/certificates%2Fsertifikat_aws_2024_des__sig_front.png?alt=media&token=2862115d-84f3-4540-879a-d0c607a7f1d0"
         }
      }),
      async mounted() {
         console.log(this.$route.params.id)
         await this.getData(this.$route.params.id)
      },
      computed: {
         dialogWidth () {
         switch (this.$vuetify.breakpoint.name) {
            case 'xs': return '95%'
            case 'sm': return '95%'
            case 'md': return '70%'
            case 'lg': return '70%'
            case 'xl': return '70%'
         }
         },
      },
      methods: {
         async getData(id) {
            this.loading = true
            try {
               const res = await this.$axios.get(`${this.uri}/course/${id}`)
               this.courseData = res.data
               this.formData = { ...this.formData, ...res.data.certificate_template}
               this.loading = false
            } catch (e) {
               if ((e.response && e.response.data.code) == "ERR_DATA_EMPTY") {
                  this.desserts = []
               }
               this.loading = false
            }
         },
         async preview(courseId) {
            this.loading = true
            try {
               const bodyData = {
                  courseId,
                  template : this.formData,
               }

               const res = await this.$axios.post(`${this.uri}/certificate/template`, bodyData, { responseType: "blob" })
               const blob = new Blob([res.data], {type: 'application/pdf'})
               this.objectUrl = URL.createObjectURL(blob)
               this.dialog = true
               this.loading = false
            } catch (e) {
               if ((e.response && e.response.data.code) == "ERR_DATA_EMPTY") {
                  this.desserts = []
               }
               this.loading = false
            }
         },
         save(courseId) {
            this.loading = true
            const bodyData  = {
               courseId,
               template: this.formData
            }

            this.$axios.post(`${this.uri}/certificate/template/save`, bodyData)
               .then(async resData => {
                  this.$refs.notif.show('success', `${'Save template success.'}`)
                  await this.getData(courseId)
                  this.loading = false
               })
               .catch(e => {
                  this.$refs.notif.show('warning', `${'Failed Save template.'}`)
                  this.loading = false
               })
         },
         refreshData() {
            this.getData(this.$route.params.id)
         },
         goBack() {
            this.$router.push('/m4n4g3s')
         }
      }
   }
</script>