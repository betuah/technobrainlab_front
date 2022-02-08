<template>
    <div class="fill-height bgGrey">
    <v-container class="">
        <Notif ref="notif" />

        <v-card class="tw-border-0 tw-border-hidden col-md-8 my-8 mx-auto pa-0 d-flex flex-column rounded-lg">
            <div class="title-backdrop d-flex flex-column flex-grow-1 rounded-t-lg bg-header-img">
                <div class="img-backdrop py-2 d-flex flex-column flex-grow-1 rounded-t-lg">
                    <div class="d-flex flex-row align-center">
                        <div class="px-4">
                            <span class="secondary--text text-subtitle-2 font-weight-medium text-uppercase">Design</span>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex flex-row justify-center align-center px-4">
                            <v-rating
                                v-model="rating"
                                color="yellow darken-3"
                                background-color="grey darken-1"
                                empty-icon="$ratingFull"
                                half-increments
                                dense
                                hover
                                small
                            ></v-rating>
                            <div class="text-size mt-1 yellow--text text--darken-3">(0)</div>
                        </div>
                    </div>
                    <div class="d-flex flex-row mt-1">
                        <v-chip
                            class="white--text pa-3 font-weight-medium ml-4 align-self-center"
                            close-icon="cancel"
                            color="cyan"
                            small
                        >
                            <v-icon small class="mr-1">bar_chart</v-icon>
                            <span class="">Beginner</span>
                            
                        </v-chip>
                        <v-chip
                            class="white--text pa-3 font-weight-medium ml-1 align-self-center"
                            close-icon="cancel"
                            color="green lighten-1"
                            small
                        >
                            <v-icon small class="mr-1">history_edu</v-icon>
                            <span class="">Online</span>
                            
                        </v-chip>
                        <v-spacer></v-spacer>
                        <v-chip
                            class="white--text font-weight-bold text-subtitle-2 rounded-l-pill px-4 pl-5 py-4"
                            close-icon="cancel"
                            color="#fb7756"
                            small
                        >
                            <v-icon small class="mr-2">paid</v-icon>
                            <span class="">Rp 150.000,00</span>
                        </v-chip>
                    </div>
                    <span class="text-h5 font-weight-bold primary--text text-capitalize mt-8 px-4">Dasar Teknis teknologi XR untuk Metaverse (pemula/tingkat dasar)</span>
                    <v-divider class="my-3 mx-4"></v-divider>
                    <div class="d-none d-md-flex flex-row mb-3 px-4">
                        <div class="d-flex flex-column flex-grow-1 flex-wrap secondary--text mr-2">
                            <div class="d-flex flex-row mb-1">
                                <v-icon small color="brown lighten-1">groups</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">{{participant}} / 90</span>
                                <span class="ml-1 text-subtitle-2 brown--text text--lighten-3 font-weight-regular">Peserta</span>
                            </div>
                            <div class="d-flex flex-row">
                                <v-icon small color="brown lighten-1">language</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">Bahasa Indonesia</span>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-grow-1 flex-wrap secondary--text mx-2">
                            <div class="d-flex flex-row mb-1">
                                <v-icon small color="brown lighten-1">verified</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">Sertifikat</span>
                            </div>
                            <div class="d-flex flex-row">
                                <v-icon small color="brown lighten-1">school</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">Workshop</span>
                            </div>
                        </div>
                        <div class="col-5 pa-0 d-flex flex-row flex-wrap flex-grow-1 flex-wrap secondary--text mx-2">
                            <div class="d-flex flex-row mb-1">
                                <v-icon small color="brown lighten-1">schedule</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">2</span>
                                <span class="ml-1 text-subtitle-2 brown--text text--lighten-3 font-weight-regular">Hari (3 Jam/hari)</span>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="d-flex flex-row mb-1">
                                <v-icon small color="brown lighten-1">calendar_month</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">9 - 10 Feb 2022</span>
                            </div>
                            <div class="d-flex flex-row mb-1 align-center">
                                <v-icon small color="brown lighten-1">book</v-icon>
                                <span class="ml-1 text-subtitle-2 brown--text text--lighten-3 font-weight-regular">Silabus</span>
                                <v-btn 
                                    relative
                                    text 
                                    color="blue" 
                                    plain 
                                    x-small 
                                    class="pa-0 ml-1" 
                                    href="https://www.dropbox.com/s/ns1wxfi23fxlwvw/Workshop%20Dasar%20Teknis%20teknologi%20XR%20untuk%20Metaverse%20%28pemulatingkat%20dasar%29.pdf" 
                                    target="_blank"
                                >
                                    (download silabus)
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex d-md-none flex-row mb-3 px-4">
                        <div class="d-flex flex-column flex-grow-1 flex-wrap secondary--text">
                            <div class="d-flex flex-row mb-1">
                                <v-icon small>groups</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-bold">{{participant}} / 90</span>
                                <span class="ml-1 text-subtitle-2 grey--text font-weight-regular">Peserta</span>
                            </div>
                            <div class="d-flex flex-row mb-1">
                                <v-icon small>school</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-bold">Workshop</span>
                            </div>
                            <div class="d-flex flex-row mb-1">
                                <v-icon small>language</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-bold">Bahasa Indonesia</span>
                            </div>
                            <div class="d-flex flex-row mb-1">
                                <v-icon small color="brown lighten-1">calendar_month</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">9 - 10 Feb 2022</span>
                            </div>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex flex-column flex-grow-1 flex-wrap secondary--text">
                            <div class="d-flex flex-row mb-1">
                                <v-icon small>schedule</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-bold">2</span>
                                <span class="ml-1 text-subtitle-2 grey--text font-weight-regular">Hari</span>
                            </div>
                            <div class="d-flex flex-row mb-1 align-center">
                                <v-icon small color="brown lighten-1">book</v-icon>
                                <span class="ml-1 text-subtitle-2 brown--text text--lighten-3 font-weight-regular">Silabus</span>
                                <v-btn 
                                    relative
                                    text 
                                    color="blue" 
                                    plain 
                                    x-small 
                                    class="pa-0 ml-1" 
                                    href="https://firebasestorage.googleapis.com/v0/b/technobrain-dev.appspot.com/o/assets%2FWrokshop%20Dasar%20Teknis%20teknologi%20XR%20untuk%20Metaverse%20(pemula%20tingkat%20dasar).pdf?alt=media&token=6642bc7b-d731-404e-8842-c5393916a42f" 
                                    target="_blank"
                                >
                                    (download silabus)
                                </v-btn>
                            </div>
                            <div class="d-flex flex-row mb-1">
                                <v-icon small>verified</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-bold">Sertifikat</span>
                                <span class="ml-1 text-subtitle-2 grey--text font-weight-regular">(CoC)</span>
                            </div>
                        </div>
                    </div>
                    <v-divider class="my-3 mx-4"></v-divider>
                    <div class="d-flex flex-row flex-wrap text-caption brown--text text--lighten-1 px-4 text-justify">
                        Extended Reality (XR) adalah istilah umum yang mengacu pada semua gabungan
                        lingkungan, interaksi nyata dan virtual yang dihasilkan oleh teknologi komputer, dan
                        didalamnya termasuk teknologi Augmented Reality (AR), Virtual Reality (VR), Mixed
                        Reality (MR). Pada era Metaverse kebutuhan penunjang untuk pengembangan konten
                        media berbasis XR sangat diperlukan, dibutuhkan SDM yang memiliki keahlian di bidang
                        ini, diharapkan setelah mengikuti program ini, peserta dapat mengembangkan potensi
                        dan keahlian dalam pembuatan konten berbasis teknologi XR
                    </div>
                    <v-divider class="my-3 mx-4"></v-divider>
                </div>
            </div>
            <v-progress-linear
                class="ma-0 pa-0"
                :active="loading"
                :indeterminate="loading"
                relative
                top
                color="secondary"
            ></v-progress-linear>
            
            <div class="d-flex flex-column px-5 pt-5 mx-auto">
                <div class="d-flex flex-column mb-5">
                    <span class="text-center text-h5 font-weight-bold primary--text text--lighten-1">Daftar Sekarang</span>
                    <span class="text-center text-caption font-weight-light grey--text">Daftarkan dirimu & lengkapi pengetahuanmu bersama kami</span>
                    <span class="text-center text-caption font-weight-light secondary--text font-weight-bold">Pendaftaran di tutup pada tgl 8 pukul 21:00 WIB </span>
                    <div class="d-flex flex-row justify-center align-center col-4 my-2 mx-auto">
                        <div class="mx-2">
                            <v-img
                                src="/technobrain-logo.png"
                                width="80"
                                contain
                            >
                        </v-img>
                        </div>
                        <div class="mx-2">
                            <v-img
                                src='/uapic-logo.png'
                                width="50"
                                contain
                            >
                            </v-img>
                        </div>
                    </div>
                </div>

                <span class="font-weight-bold primary--text text-overline">Personal Data</span>
                <v-divider class="mb-3 mb-5"></v-divider>
                <v-form 
                    ref="form"
                    v-model="valid"
                    class="d-flex flex-column"
                    lazy-validation
                    @submit.prevent="submitForm"
                >
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-md-row">
                            <v-text-field
                                v-model="firstName"
                                class="mr-2"
                                name="firstName"
                                dense
                                color="primary"
                                prepend-inner-icon="assignment_ind"
                                :rules="firstNameRules"
                                label="Nama depan"
                                required
                                outlined
                            ></v-text-field>
                            <v-text-field
                                v-model="lastName"
                                class="ml-2"
                                name="lastName"
                                dense
                                color="primary"
                                prepend-inner-icon="assignment_ind"
                                :rules="lastNameRules"
                                label="Nama belakang"
                                hint="Tidak ada nama belakang isi '.'"
                                required
                                outlined
                            ></v-text-field>
                        </div>
                        <v-text-field
                            v-model="email"
                            name="email"
                            dense
                            color="primary"
                            prepend-inner-icon="email"
                            :rules="emailRules"
                            label="Alamat Email kamu"
                            required
                            outlined
                        ></v-text-field>
                        <v-text-field
                            v-model="no_tlpn"
                            name="no_tlpn"
                            dense
                            color="primary"
                            prepend-inner-icon="phone"
                            :rules="no_tlpnRules"
                            label="No. Whatsapp"
                            hint="Nomor whatsapp aktif Contoh: +62 812 1122 3344"
                            required
                            outlined
                        ></v-text-field>
                        <v-select
                            v-model="status"
                            name="status"
                            dense
                            outlined
                            color="primary lighten-1"
                            item-text="status"
                            item-value="status"
                            :items="statusData"
                            :rules="statusRules"
                            label="Pekerjaan kamu saat ini"
                            prepend-inner-icon="school"
                            required
                        ></v-select>
                    </div>

                    <span class="font-weight-bold primary--text text-overline">Investasi</span>
                    <v-divider></v-divider>
                    <span class="mb-3 mt-2 text-caption font-weight-light">Kamu dapat berinvestasi melalui :</span>
                    <div class="mb-5 d-flex">
                        <v-card elevation="2" class="tw-border-hidden col-md-10 pa-0 mx-md-auto d-flex flex-column rounded-lg">
                            <div class="d-flex flex-column px-4 py-2 bg-bank-img">
                                <span class="font-weight-bold text-body-2 text-md-subtitle-2 brown--text">MANDIRI (008)</span>
                                <span class="text-body-1 text-md-h6 primary--text font-weight-black my-3 my-md-2">1 6 4 . 0 0 0 2 3 6 7 . 3 4 2</span>
                                <div>
                                    <v-divider class="divider-dash mb-2 mt-1"></v-divider>
                                </div>
                                <span class="text-body-2 text-md-subtitle-2 text-uppercase font-weight-bold secondary--text">Koperasi Inovasi Bersama SEAMOLEC</span>
                            </div>
                            <div class="d-flex flex-row px-4 py-4 brown--text" style="border-top: 3px solid #6488D7">
                                <span class="my-auto text-uppercase font-weight-light">Jumlah</span>
                                <v-spacer></v-spacer>
                                <span class="font-weight-black">Rp. 150.000</span>
                            </div>
                        </v-card>
                    </div>
                    <div>
                        <v-file-input
                            dense
                            outlined
                            color="cyan lighten-1"
                            :rules="paymentPicsRules"
                            accept="image/png, image/jpeg"
                            placeholder="Unggah Bukti Transfer"
                            prepend-icon=""
                            prepend-inner-icon="photo_camera"
                            show-size
                            label="Unggah Bukti Transfer"
                            required
                            @change="onPicsUpload"
                        ></v-file-input>
                    </div>

                    <v-divider class="mb-5"></v-divider>
                    <div class="mb-5">
                        <v-btn
                            :loading="loading"
                            type="submit"
                            block
                            color="primary"
                        >
                            Daftar
                        </v-btn>
                    </div>
                </v-form>

            </div>
            <div class="d-flex flex-column pa-5 primary bg-footer-img">
                <div class="d-flex flex-row justify-center mb-4">
                    <v-btn outlined small color='white' @click="goVerivied()">CEK VERIFIKASI DATA</v-btn>
                </div>
                <div class="mx-auto mb-2">
                    <span class="white--text text-caption">WA :&nbsp;</span>
                    <span class="white--text text-caption font-weight-bold">+62 857-2018-7909</span>
                </div>
                <div class="d-flex flex-column-reverse flex-md-row-reverse text-caption justify-center align-center white--text font-weight-light">
                    <div class="d-flex flex-row">
                        <v-divider vertical class="d-none d-md-flex white mr-1"></v-divider>
                        <span>Copyright @ &nbsp;</span>
                        <span>{{new Date().getFullYear()}}</span>
                    </div>
                    <div class="d-flex flex-row mb-2 mb-md-0">
                        <span>Technobrain Sistema &nbsp;</span>
                        <v-divider vertical class="white mr-1"></v-divider>
                        <span>Training Solution &nbsp;</span>
                    </div>
                    
                </div>
            </div>
        </v-card>
    </v-container>
    </div>
</template>

<script>
import { uuid } from 'vue-uuid'
const courseId = `${process.env.NUXT_ENV_COURSE_META_2}`

export default {
    data: () => ({
        participant: 0,
        rating: 5,
        loading: false,
        alert: false,
        valid: true,
        menu: false,
        modal: false,
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
        name: '',
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
        status: '',
        statusRules: [
            v => !!v || 'Status wajib di isi',
        ],
        paymentPics: [],
        paymentPicsRules: [
            v => !!v || 'Wajib mengunggah bukti pembayaran.',
            value => !value || value.size < 300000 || 'Ukuran gambar tidak boleh lebih dari 300 Kb!',
        ]
    }),
    computed: {
        // validateCheckbox () {
        //     return [this.selectedValues.length > 0 || "Persyaratan ini wajib kamu penuhi."]
        // }
    },
    created() {
        const db        = this.$fire.firestore
        const courseRef = db.doc(`courses/${courseId}`)
        const query     = db.collection('participant').where('course', '==', courseRef).where('paymentStats', '!=', 0)
        query.onSnapshot(querySnapshot => {
            this.participant = querySnapshot.size
        })
    },
    methods: {
        onPicsUpload (event) {
            this.paymentPics = event
        },
        async submitForm () {
            const storageRef = this.$fire.storage.ref(`payments/${uuid.v4()}`)

            if (this.$refs.form.validate()) {
                this.loading = true
                
                try {
                    const bodyData  = {
                        fullName: `${this.firstName} ${this.lastName}`,
                        email: `${this.email}`,
                        phone: `${this.no_tlpn}`,
                        profilePics: null,
                        profession: `${this.status}`,
                        institution: `${this.institution}`,
                        address: null
                    }

                    await storageRef.put(this.paymentPics)
                    const uri = await storageRef.getDownloadURL()

                    this.$axios.post('/api/users', bodyData)
                    .then(resData => {
                        const enrollData = {
                            courseId,
                            userId: resData.data.data.userId,
                            paymentPics: uri
                        }

                        this.$axios.post('/api/course/enroll', enrollData )
                        .then(resSecData => {
                            this.loading = false
                            this.$refs.notif.show('success', 'Data berhasil di simpan. Terima Kasih.')
                            this.$refs.form.reset()
                            this.$router.push('/meta/success')
                        }).catch(e => {
                            const error = e.response.data
                            this.loading = false
                            if (error.code === 'ERR_DATA_EXIST') return this.$refs.notif.show('warning', `Maaf, Email sudah terdaftar.`) 
                            if (error.code === 'ERR_DATA_LIMIT') return this.$refs.notif.show('warning', `Maaf, Quota pendaftaran sudah penuh.`)
                            this.$refs.notif.show('warning', `${e.massage ? e.message : 'Mohon maaf gagal mendaftar, mohon coba beberapa saat lagi atau hubungi admin.'}`)
                        })
                    })
                    .catch(e => {
                        this.$refs.notif.show('warning', `${e.massage ? e.message : 'Mohon maaf gagal mendaftar, mohon coba beberapa saat lagi atau hubungi admin.'}`)
                        this.loading = false
                    })
                } catch (e) {
                    console.log(e)
                    this.$refs.notif.show('error', `${e.massage}`)
                    this.loading = false
                }
            }
        },
        goVerivied() {
            this.$router.push('/metabatch2/verification')
        }
    }
}
</script>

<style>
    .v-text-field--outlined .v-label, .v-input__slot {
        font-size: 14px;
        
        /* color: blueviolet; */
    }

    .v-text-field--outlined .v-icon {
        font-size: 20px;
    }

    .v-application--is-ltr .v-text-field .v-input__prepend-inner {
        padding-right: 7px;
    }

    .title-backdrop {
        background: rgba(231, 231, 231, 0.5);
        height: 100%;

        /* backdrop-filter: blur(1px); */
        width: 100%;
    }

    .bg-header-img {
        background-image: url('/bg-img.jpg');
        background-position: center;
        background-repeat: repeat;
        background-size: cover;
        position: relative;
        width: 100%;
    }

    .img-backdrop {
        background: rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(2px);
        height: 100%;
        width: 100%;
    }

    .bg-bank-img {
        background-image: url('/bg-img.jpg');
        background-position: center;
        background-repeat: repeat;
        background-size: cover;
        position: relative;
        width: 100%;
    }

    .bg-footer-img {
        background-image: url('/footer-img.png');
        background-position: center;
        background-repeat: repeat;
        background-size: cover;
        position: relative;
        width: 100%;
    }

    .absolute-div {
        position: absolute;
    }


    .divider-dash {
        border-top: 2px dashed black;
    }

    .text-size {
        font-size: 12px;
    }
    
</style>