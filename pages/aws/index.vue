<template>
   <div class="tw-bg-[url('https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png')] fill-height tw-w-full tw-bg-cover tw-bg-repeat tw-bg-center">
      <div class="tw-backdrop-blur-sm tw-bg-white/30 tw-h-full">
         <v-container>
            <div class="tw-mt-5 pa-0 d-flex flex-column tw-shadow-lg tw-bg-white tw-rounded-2xl">
               <div class="tw-bg-[url('https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png')] tw-w-full tw-bg-cover tw-bg-top tw-rounded-2xl">
                  <div class="xs:tw-rounded-2xl xs:tw-backdrop-blur-sm xs:tw-bg-white/30 xs:tw-h-full pa-6">
                  <div class="col-12 col-md-7 pa-0 d-flex flex-column justify-center">
                     <span class="white--text text-h5 text-md-h4 font-weight-bold">Amazon Web Service - <span class="font-weight-light">Technical Fundamental</span></span>
                     <span class="white--text text-caption font-weight-light mt-3">Platform cloud paling komprehensif dan digunakan secara luas di dunia, menawarkan lebih dari 200 layanan unggulan yang lengkap dari pusat data secara global. Jutaan pelanggan termasuk beberapa startup dengan pertumbuhan tercepat, perusahaan terbesar, dan lembaga pemerintah terkemuka menggunakan AWS untuk memangkas biaya, menjadi lebih sigap, dan berinovasi lebih cepat.</span>
                     <div class="d-flex flex-row mt-1">
                        
                     </div>
                  </div>
                  </div>
               </div>
            </div>

            <div class="d-flex flex-column flex-column-reverse flex-md-row mt-3 mb-5">
               <div class="col-12 col-md-7 pa-0 d-flex flex-column mt-2 mt-md-0">
                  <div class="tw-shadow-lg tw-rounded-2xl tw-bg-white d-flex flex-column">
                     <div class="tw-bg-[url('https://blog.e-zest.com/hubfs/How%20to%20use%20AWS%20Backup%20service.png')] tw-w-full tw-bg-cover tw-bg-center tw-rounded-t-2xl pa-6 d-flex flex-column">
                        <span class="tw-text-white tw-font-bold tw-text-lg tw-tracking-widest">Pendaftaran</span>
                        <span class="text-caption white--text font-italic">*Pendaftaran akan di tutup pada tanggal <span class="font-weight-bold primary--text">12 Juni 2022</span>.</span>
                     </div>
                     <div>
                        <v-alert
                           :value="alert"
                           dismissible
                           border="top"
                           :color="notif.color"
                           :type="notif.type"
                        >
                           <!-- {{ notif.message }} -->
                           <span class="text-caption">{{ notif.message }}</span>
                        </v-alert>
                     </div>
                     <v-form 
                        ref="form"
                        v-model="valid"
                        class="d-flex flex-column px-4 px-md-8 py-5"
                        lazy-validation
                        @submit.prevent="submitForm"
                     >
                        <div class="d-flex flex-row align-center mb-1">
                           <span class="text-uppercase text-overline tw-tracking-widest mx-2">Biodata Peserta</span>
                           <v-divider></v-divider>
                        </div>
                        <div class="d-flex flex-column">
                              <div class="d-flex flex-md-row">
                                 <v-text-field
                                    v-model="firstName"
                                    class="mr-1 rounded-lg text--caption"
                                    name="firstName"
                                    dense
                                    color="primary"
                                    hide-details="auto"
                                    :rules="firstNameRules"
                                    required
                                    outlined
                                 >
                                    <template v-slot:label>
                                       <div class="text-caption">Nama Depan</div>
                                    </template>
                                    <template v-slot:prepend-inner>
                                       <div class="d-flex flex-row tw-h-6 align-center mr-1">
                                          <font-awesome-icon :icon="['fas','user']" class="tw-text-xs" />
                                       </div>
                                    </template>
                                 </v-text-field>
                                 <v-text-field
                                    v-model="lastName"
                                    class="ml-1 rounded-lg text--caption"
                                    name="lastName"
                                    dense
                                    color="primary"
                                    hide-details="auto"
                                    :rules="lastNameRules"
                                    hint="Tidak ada nama belakang isi '.'"
                                    required
                                    outlined
                                 >
                                    <template v-slot:label>
                                       <div class="text-caption">Nama Belakang</div>
                                    </template>
                                    <template v-slot:prepend-inner>
                                       <div class="d-flex flex-row tw-h-6 align-center mr-1">
                                          <font-awesome-icon :icon="['fas','user']" class="tw-text-xs" />
                                       </div>
                                    </template>
                                 </v-text-field>
                              </div>
                              <v-text-field
                                 v-model="email"
                                 name="email"
                                 dense
                                 hide-details="auto"
                                 color="primary"
                                 :rules="emailRules"
                                 class="rounded-lg mt-3 text--caption"
                                 required
                                 outlined
                              >
                                 <template v-slot:label>
                                    <div class="text-caption">Alamat Email</div>
                                 </template>
                                 <template v-slot:prepend-inner>
                                    <div class="d-flex flex-row tw-h-6 align-center mr-1">
                                       <font-awesome-icon :icon="['fas','envelope']" class="tw-text-xs" />
                                    </div>
                                 </template>
                              </v-text-field>
                              <v-text-field
                                 v-model="no_tlpn"
                                 name="no_tlpn"
                                 dense
                                 color="primary"
                                 hide-details="auto"
                                 class="rounded-lg mt-3 text-caption"
                                 :rules="no_tlpnRules"
                                 required
                                 outlined
                              >
                                 <template v-slot:label>
                                    <div class="text-caption">No Whatsapp Aktif</div>
                                 </template>
                                 <template v-slot:prepend-inner>
                                    <div class="d-flex flex-row tw-h-6 align-center mr-1">
                                       <font-awesome-icon :icon="['fas','address-book']" class="tw-text-xs" />
                                    </div>
                                 </template>
                              </v-text-field>
                              <v-text-field
                                 v-model="institution"
                                 name="institution"
                                 dense
                                 hide-details="auto"
                                 color="primary"
                                 :rules="institutionRules"
                                 class="rounded-lg mt-3 text-caption"
                                 required
                                 outlined
                              >
                                 <template v-slot:label>
                                    <div class="text-caption">Institusi</div>
                                 </template>
                                 <template v-slot:prepend-inner>
                                    <div class="d-flex flex-row tw-h-6 align-center mr-1">
                                       <font-awesome-icon :icon="['fas','building-columns']" class="tw-text-xs" />
                                    </div>
                                 </template>
                              </v-text-field>
                              <v-select
                                 v-model="status"
                                 name="status"
                                 dense
                                 hide-details="auto"
                                 outlined
                                 color="primary"
                                 item-text="status"
                                 item-value="status"
                                 :items="statusData"
                                 :rules="statusRules"
                                 required
                                 class="rounded-lg text-caption mt-3"
                              >
                                 <template v-slot:label>
                                    <div class="text-caption">Pekerjaan kamu saat ini</div>
                                 </template>
                                 <template v-slot:prepend-inner>
                                    <div class="d-flex flex-row tw-h-6 align-center mr-1">
                                       <font-awesome-icon :icon="['fas','briefcase']" class="tw-text-xs" />
                                    </div>
                                 </template>
                              </v-select>
                        </div>

                        <div class="d-flex flex-row align-center mt-3 mb-1">
                           <span class="text-uppercase text-overline tw-tracking-widest mx-2">Investasi</span>
                           <v-divider></v-divider>
                        </div>

                        <div class="d-flex flex-column mb-3">
                           <v-select
                              v-model="payment_type"
                              name="status"
                              dense
                              hide-details="auto"
                              outlined
                              color="primary"
                              item-text="payment_type"
                              item-value="id"
                              :items="payment_type_list"
                              :rules="paymentTypeRules"
                              required
                              class="rounded-lg text-caption"
                           >
                              <template v-slot:label>
                                 <div class="text-caption">Pilih metode pembayaran</div>
                              </template>
                              <template v-slot:prepend-inner>
                                 <div class="d-flex flex-row tw-h-6 align-center mr-1">
                                    <font-awesome-icon :icon="['fas','money-bill-transfer']" class="tw-text-xs" />
                                 </div>
                              </template>
                           </v-select>
                        </div>

                        <span class="tw-text-2xs font-italic secondary--text">*Cek email untuk mendapatkan informasi pembayaran dan invoice.</span>
                        
                        <v-divider class="my-3"></v-divider>

                        <div class="mb-5">
                              <v-btn
                                 :loading="loading"
                                 type="submit"
                                 block
                                 color="primary"
                                 class="text-caption text-capitalize rounded-lg"
                              >
                                 Daftar dan Enroll Kelas
                              </v-btn>
                        </div>
                     </v-form>
                  </div>
               </div>
               <div class="col-12 col-md-5 pa-0 d-flex flex-column pl-md-7">
                  <div class="tw-rounded-2xl tw-shadow-lg tw-bg-white pa-5 mb-3 secondary white--text d-flex flex-column">
                     <div class="d-flex flex-column mx-3">
                        <span class=""><span class="tw-italic tw-line-through">Rp 350.000</span> 60%</span>
                        <span class="text-h4 font-weight-black">Rp 50.000</span>
                     </div>
                  </div>
                  <div class="tw-rounded-2xl tw-shadow-lg tw-bg-white pa-5 mb-2">
                     <div class="d-flex flex-row align-center mx-3 my-3">
                        <v-divider></v-divider>
                        <span class="text-uppercase text-overline tw-tracking-widest mx-2">Rincian Pelatihan</span>
                        <v-divider></v-divider>
                     </div>
                     <div class="col-12 pa-0 d-flex flex-wrap mt-3">
                        <div class="col-4 pa-0 d-flex flex-column justify-center align-center tw-rounded-2xl">
                           <font-awesome-icon :icon="['fas','ranking-star']" class="tw-text-3xl secondary--text"/>
                           <span class="mt-1 tw-uppercase tw-text-xs tw-font-bold secondary--text text-center">Level Pemula</span>
                        </div>
                        <div class="col-4 pa-0 d-flex flex-column justify-center align-center tw-rounded-2xl">
                           <font-awesome-icon :icon="['fas','certificate']" class="tw-text-3xl secondary--text"/>
                           <span class="mt-1 tw-uppercase tw-text-xs tw-font-bold secondary--text text-center">Sertifikat</span>
                        </div>
                        <div class="col-4 pa-0 d-flex flex-column justify-center align-center tw-rounded-2xl">
                           <font-awesome-icon :icon="['fas','laptop-code']" class="tw-text-3xl secondary--text"/>
                           <span class="mt-1 tw-uppercase tw-text-xs tw-font-bold secondary--text text-center">100% Online</span>
                        </div>
                     </div>
                     <div class="col-12 pa-0 d-flex flex-wrap mt-5">
                        <div class="col-4 pa-0 d-flex flex-column justify-center align-center tw-rounded-2xl">
                           <font-awesome-icon :icon="['fas','cloud']" class="tw-text-3xl secondary--text"/>
                           <span class="mt-1 tw-uppercase tw-text-xs tw-font-bold secondary--text text-center">Akses Lab</span>
                        </div>
                        <div class="col-4 pa-0 d-flex flex-column justify-center align-center tw-rounded-2xl">
                           <font-awesome-icon :icon="['fas','language']" class="tw-text-3xl secondary--text"/>
                           <span class="mt-1 tw-uppercase tw-text-xs tw-font-bold secondary--text text-center">Bahasa Indonesia</span>
                        </div>
                        <!-- <div class="col-4 pa-0 d-flex flex-column justify-center align-center tw-rounded-2xl">
                           <font-awesome-icon :icon="['fas','star']" class="tw-text-3xl secondary--text"/>
                           <span class="mt-1 tw-uppercase tw-text-xs tw-font-bold secondary--text text-center">5.0</span>
                        </div> -->
                        <div class="col-4 pa-0 d-flex flex-column justify-center align-center tw-rounded-2xl">
                           <font-awesome-icon :icon="['fas','calendar-check']" class="tw-text-3xl secondary--text"/>
                           <span class="mt-1 tw-uppercase tw-text-xs tw-font-bold secondary--text text-center">20 - 24 Juni</span>
                        </div>
                     </div>
                     <v-divider class="my-3 mt-5 mx-3"></v-divider>
                     <!-- <div class="d-flex flex-row align-center justify-space-between mx-3 mt-2">
                        <div class="d-flex flex-row align-center">
                           <font-awesome-icon :icon="['fas','calendar-check']" class="tw-text-sm secondary--text"/>
                           <span class="text-subtitle-2 font-weight-bold ml-2 secondary--text">Pendaftaran Terakhir</span>
                        </div>
                        <span class="text-subtitle-2 font-weight-light">12 Juni 2022</span>
                     </div> -->
                  </div>
                  <div class="tw-rounded-2xl tw-shadow-lg tw-bg-white pa-5 my-2">
                     <div class="d-flex flex-row align-center mx-3">
                        <v-divider></v-divider>
                        <span class="text-uppercase text-overline tw-tracking-widest mr-2">Penyelenggara</span>
                        <v-divider></v-divider>
                     </div>
                     <div class="d-flex flex-row align-center justify-center">
                        <div class="col-6 d-flex flex-row align-center justify-center">
                           <v-img
                              src="/technobrain-logo.png"
                              height="40"
                              contain
                           >
                           </v-img>
                        </div>
                        <div class="col-6 d-flex flex-row align-center justify-center">
                           <v-img
                              src="/aws-logo.png"
                              height="35"
                              contain
                           >
                           </v-img>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </v-container>

         <v-dialog
            v-model="dialog"
            max-width="400"
            class="tw-bg-transparent"
         >
            <v-card class="tw-rounded-2xl rounded-lg tw-border-none">
               <div class="green d-flex flex-column align-center justify-center py-5 pt-8">
                  <font-awesome-icon :icon="['fas','circle-check']" class="tw-text-6xl tw-text-white" />
                  <span class="white--text tw-text-lg tw-tracking-wider tw-capitalize font-weight-bold mt-4">Berhasil Mendaftar</span>
               </div>
               <div class="pa-5 d-flex flex-column">
                  <span class="text-caption tw-text-justify">Silahkan <span class="font-weight-bold">cek email</span> untuk <span class="font-weight-bold">melengkapi pembayaran</span>.</span>
                  <span class="tw-text-xs font-italic mt-4">*Jika email tidak ditemukan, kamu dapat melihatnya di promotion, Sosial atau spam.</span>
                  <v-btn color="primary" block class="rounded-lg mt-4 font-weight-bold" @click="dialog = false">
                     Tutup
                  </v-btn>
               </div>
            </v-card>
         </v-dialog>
      </div>
   </div>
</template>

<script>
export default {
   data: () => ({
      loading: false,
      tab: null,
      dialog: false,
      alert: false,
      valid: true,
      menu: false,
      modal: false,
      order_data: null,
      statusData: [
         {
               statusId: 1,
               status: 'Pelajar'
         },
         {
               statusId: 2,
               status: 'Mahasiswa'
         },
         {
               statusId: 3,
               status: 'Guru'
         },
         {
               statusId: 4,
               status: 'Dosen'
         },
         {
               statusId: 5,
               status: 'Professional'
         }
      ],
      payment_type_list: [
         // {
         //    id: 'bank_transfer',
         //    payment_type: 'BCA Virtual Account (Dicek otomatis)'
         // },
         {
            id: 'manual',
            payment_type: 'Transfer BCA (Dicek manual)'
         },
      ],
      name: '',
      show1: false,
      show2: false,
      notif: {
         type: 'success',
         color: 'success',
         icon: 'check_circle',
         message: 'Success '
      },
      payment_type: '',
      paymentTypeRules: [
         v => !!v || 'Metode Pembayaran harus di isi',
      ],
      firstName: '',
      firstNameRules: [
         v => !!v || 'Nama depan wajib di isi',
      ],
      lastName: '',
      lastNameRules: [
         v => !!v || 'Nama belakang wajib di isi',
      ],
      email: '',
      emailRules: [
         v => !!v || 'E-mail wajib di isi',
         v => /.+@.+\..+/.test(v) || 'Format E-mail kamu tidak valid',
      ],
      no_tlpn: '',
      no_tlpnRules: [
         v => !!v || 'No. whatsapp wajib di isi',
      ],
      institution: '',
      institutionRules: [
         v => !!v || 'Nama instansi wajib di isi',
      ],
      status: '',
      statusRules: [
         v => !!v || 'Status wajib di isi',
      ],
      notif: {
         type: 'success',
         color: 'success',
         icon: 'check_circle',
         message: 'Success '
      },
   }),
   methods: {
      showNotif(req, message) {
         switch (req) {
            case 'success':
               this.notif = {
                  type: 'success',
                  color: 'success',
                  icon: 'check_circle',
                  message: `${message}`
               }
               break;
            
            case 'info':
               this.notif = {
                  type: 'info',
                  color: 'light-blue',
                  icon: 'info',
                  message: `${message}`
               }
               break;

            case 'warning':
               this.notif = {
                  type: 'warning',
                  color: 'warning',
                  icon: 'warning',
                  message: `${message}`
               }
               break;
            
            case 'error':
               this.notif = {
                  type: 'error',
                  color: 'error',
                  icon: 'error',
                  message: `${message}`
               }
               break;

            default:
               this.notif = {
                  type: '',
                  color: '',
                  icon: '',
                  message: ''
               }
               break;
         }
         this.alert = true
      },
      submitForm () {
         if (this.$refs.form.validate()) {
            this.loading = true

            const bodyData  = {
               first_name: `${this.firstName}`,
               last_name: `${this.lastName}`,
               email: `${this.email}`,
               phone_number: `${this.no_tlpn}`,
               profession: `${this.status}`,
               institution: `${this.institution}`,
               order_details : {
                  payment_type : `${this.payment_type}`,
                  bank : "bca",
                  items : [process.env.NUXT_ENV_COURSE_AWS]
               }
            }

            this.$axios.post('/api/order/create', bodyData)
               .then(resData => {
                  this.$router.push('/aws/success')
                  this.loading = false
               })
               .catch(e => {
                  console.log(e, 'bawah')
                  this.showNotif('warning', `${'Mohon maaf gagal mendaftar, mohon coba beberapa saat lagi atau hubungi admin.'}`)
                  this.loading = false
               })
         }
      }
   }
}
</script>