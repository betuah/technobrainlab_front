<template>
    <v-container class="">
        <v-snackbar
            v-model="alert"
            :timeout="3000"
            :color="notif.color"
            absolute
            right
            top
            rounded="pill"
        >
            <div class="d-flex flex-row py-1 rounded-xl">
                <v-icon>
                    {{ notif.icon }}
                </v-icon>
                <div class="text-body-2 ml-4">
                    {{ notif.message }}
                </div>
            </div>
            
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="white"
                    icon
                    v-bind="attrs"
                    @click="alert = false"
                >
                    <v-icon small>
                        close
                    </v-icon>
                </v-btn>
            </template>
        </v-snackbar>
        <v-card class="col-md-6 my-8 mx-auto pa-0 d-flex flex-column rounded-lg">
            <div class="title-backdrop d-flex flex-column flex-grow-1 rounded-t-lg bg-header-img">
                <div class="img-backdrop py-2 d-flex flex-column flex-grow-1 rounded-t-lg">
                    <div class="d-flex flex-row align-center">
                        <div class="px-4">
                            <span class="secondary--text text-subtitle-2 font-weight-medium text-uppercase">Cloud Computing</span>
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
                        <v-spacer></v-spacer>
                        <v-chip
                            class="white--text font-weight-bold text-subtitle-2 rounded-l-pill px-4 pl-5 py-4"
                            close-icon="cancel"
                            color="#fb7756"
                            small
                        >
                            <v-icon small class="mr-2">paid</v-icon>
                            <span class="">Rp 250.000,00</span>
                        </v-chip>
                    </div>
                    <span class="text-h4 font-weight-bold primary--text text-capitalize mt-8 px-4">AWS - Technical Fundamental</span>
                    <div class="d-flex flex-row flex-wrap text-caption brown--text text--lighten-1 px-4 text-justify">
                        Kursus ini untuk Anda yang mencari pemahaman mengenai Amazon Web Services (AWS) Cloud
                    </div>
                    <v-divider class="my-3 mx-4"></v-divider>
                    <div class="d-none d-md-flex flex-row mb-3 px-4">
                        <div class="d-flex flex-column flex-grow-1 flex-wrap secondary--text mr-2">
                            <div class="d-flex flex-row mb-1">
                                <v-icon small color="brown lighten-1">groups</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">{{participant}}/40</span>
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
                                <span class="ml-1 text-subtitle-2 brown--text text--lighten-3 font-weight-regular">(CoC)</span>
                            </div>
                            <div class="d-flex flex-row">
                                <v-icon small color="brown lighten-1">school</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">Workshop</span>
                            </div>
                        </div>
                        <div class="col-5 pa-0 d-flex flex-row flex-wrap flex-grow-1 flex-wrap secondary--text mx-2">
                            <div class="d-flex flex-row mb-1">
                                <v-icon small color="brown lighten-1">schedule</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">5</span>
                                <span class="ml-1 text-subtitle-2 brown--text text--lighten-3 font-weight-regular">Hari</span>
                            </div>
                            <v-spacer></v-spacer>
                            <div class="d-flex flex-row mb-1">
                                <v-icon small color="brown lighten-1">calendar_month</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">20 Des 2021</span>
                            </div>
                            <div class="d-flex flex-row mb-1 align-center">
                                <v-icon small color="brown lighten-1">book</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">6</span>
                                <span class="ml-1 text-subtitle-2 brown--text text--lighten-3 font-weight-regular">Modul</span>
                                <v-btn 
                                    relative
                                    text 
                                    color="blue" 
                                    plain 
                                    x-small 
                                    class="pa-0 ml-1" 
                                    href="https://www.dropbox.com/s/flotd7d3e7vp2da/aws-silabus-2021.pdf" 
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
                                <span class="ml-1 text-subtitle-2 font-weight-bold">{{participant}}/40</span>
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
                                <span class="ml-1 text-subtitle-2 font-weight-medium">20 Des 2021</span>
                            </div>
                        </div>
                        <v-spacer></v-spacer>
                        <div class="d-flex flex-column flex-grow-1 flex-wrap secondary--text">
                            <div class="d-flex flex-row mb-1">
                                <v-icon small>schedule</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-bold">5</span>
                                <span class="ml-1 text-subtitle-2 grey--text font-weight-regular">Hari</span>
                            </div>
                            <div class="d-flex flex-row mb-1 align-center">
                                <v-icon small color="brown lighten-1">book</v-icon>
                                <span class="ml-1 text-subtitle-2 font-weight-medium">6</span>
                                <span class="ml-1 text-subtitle-2 brown--text text--lighten-3 font-weight-regular">Modul</span>
                                <v-btn 
                                    relative
                                    text 
                                    color="blue" 
                                    plain 
                                    x-small 
                                    class="pa-0 ml-1" 
                                    href="https://www.dropbox.com/s/flotd7d3e7vp2da/aws-silabus-2021.pdf" 
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
                    <div class="d-flex flex-row justify-center align-center col-4 mx-auto">
                        <div class="mx-2">
                            <v-img
                                src="https://ucd9be752329eed7f9f6fa0cd04d.previews.dropboxusercontent.com/p/thumb/ABbt7QQOZUfsbZiEJRpBV6_EyCe1Zyr00TmPm4R8g2oITCQu7EOIIGl0iTvm5j3svaLdLbo_FKH3H0WdrNpDW6kH299p1bkY8_9NwFo1z0h-Qfs62j268y3Pe0L4EHq7kbLGfs-KjyZBXv2UyDrXKWIB7vFNBbvQcLKq8I1VuSAd7ALQD_LsB0eUd535ZdFbH7HcUulkQiekbS_dGye33_RRuoQn3D-xm14isZVgfvd6j20fZ9XG-8ThGYw_jW3FoH9UUOrI9UlehQMGCEzGnBG6G6DSEw6CLc6Qty9tqSaVpf086OEkNj7N1_HeZiJm4ar-MS0ehmoTeQ0nVQBoy5mwED_E4qCTuP0Rf2yiQxO-kC1bJNsCzCvBGyJ671kL4Pg/p.png"
                                
                                width="80"
                                contain
                            >
                        </v-img>
                        </div>
                        <div class="mx-2">
                            <v-img
                                src='https://uc9cc6c9ba9c75b51f4256631be2.previews.dropboxusercontent.com/p/thumb/ABZCPbh2EFCbPnTAEF5Tf_ow_0Db4YXg4nfT1PGaTI6WhbjpENxaNMUSREeoSLPXhpGHUjxTfh9VIBFQY66LglWykRXlOIn0R-d6FJICxx8OfDKu_7tnagGstSqw1vAmBAXBYDPQ_8ZuZez8exDZtGELtwUWwjKTtn4PPDTrE8JB88gPRmHHi8bOIQyx8vt3ICJQOrEcMzvXxVKjXddqnBaAZ4vEJ2CLBsd8Ij9UHVU6JO3kph8rCoJWJA4VLtQXYympQiGxhxbj14UFWjiyLSiAnhOJluApktndDO9KUvLB6uwPzkVKj9ICKBgJK6j_jU1JmiyOApg62qpxCGL_tPLsJL_whrRGUOpAIXWD36ihICBjbal0K6D5Z-XhgBQnqY8/p.png'
                                height="50"
                                width="50"
                                contain
                            >
                            </v-img>
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-center align-center grey--text">
                        <v-icon small color="cyan">info</v-icon>
                        <span class="ml-1 text-subtitle-2 font-weight-light align-self-center">Pendaftaran di tutup tgl</span>
                        <span class="ml-1 text-subtitle-2 secondary--text font-weight-bold">18 Des 2021</span>
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
                                hint="Jika kamu tidak memiliki nama belakang isi dengan '.'"
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

                    <div class="mb-6 mt-3">
                        <span class="font-weight-bold primary--text text-overline">Prasyarat</span>
                        <v-divider class=" "></v-divider>
                        <span class="text-caption font-weight-light ">Pastikan kamu sudah memenuhi beberapa syarat dalam mengikuti training ini :</span>
                        <div>
                            <v-checkbox
                                v-model="checkbox1"
                                class="text-caption"
                                :color="checkbox1 ? 'green' : 'primary'"
                                :rules="validateCheckbox"
                                dense
                                hide-details
                            >
                                <template v-slot:label>
                                    <div class="text-caption">
                                        <span class="font-weight-regular">Memahami dasar</span>
                                        <span class="secondary--text font-weight-bold ">Jaringan Komputer</span>
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-checkbox
                                v-model="checkbox2"
                                class="text-caption"
                                :color="checkbox1 ? 'green' : 'primary'"
                                :rules="validateCheckbox"
                                dense
                                hide-details
                            >
                                <template v-slot:label>
                                    <div class="text-caption">
                                        <span class="font-weight-regular">Memahami dasar</span>
                                        <span class="secondary--text font-weight-bold ">Administrasi Server</span>
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-checkbox
                                v-model="checkbox3"
                                class="text-caption"
                                :color="checkbox2 ? 'green' : 'primary'"
                                :rules="validateCheckbox"
                                dense
                                hide-details
                            >
                                <template v-slot:label>
                                    <div class="text-caption">
                                        <span class="font-weight-regular">Memiliki</span>
                                        <span class="secondary--text font-weight-bold">Laptop/PC</span>
                                    </div>
                                </template>
                            </v-checkbox>
                            <v-checkbox
                                v-model="checkbox4"
                                class="text-caption"
                                :color="checkbox3 ? 'green' : 'primary'"
                                :rules="validateCheckbox"
                                dense
                                hide-details
                            >
                                <template v-slot:label>
                                    <div class="text-caption">
                                        <span class="font-weight-regular">Memiliki</span>
                                        <span class="secondary--text font-weight-bold">Koneksi Internet</span>
                                    </div>
                                </template>
                            </v-checkbox>
                        </div>
                    </div>
                    
                    <span class="font-weight-bold primary--text text-overline">Investasi</span>
                    <v-divider></v-divider>
                    <span class="mb-3 mt-2 text-caption font-weight-light">Kamu dapat berinvestasi melalui :</span>
                    <div class="mb-5 d-flex">
                        <v-card elevation="2" class="col-md-10 pa-0 mx-md-auto d-flex flex-column rounded-lg">
                            <div class="d-flex flex-column px-4 py-2 bg-bank-img">
                                <span class="font-weight-bold text-body-2 text-md-subtitle-1 brown--text">MANDIRI (008)</span>
                                <span class="text-body-1 text-md-h6 primary--text font-weight-black my-3 my-md-2">1 6 4 . 0 0 0 2 3 6 7 . 3 4 2</span>
                                <div>
                                    <v-divider class="divider-dash mb-2 mt-1"></v-divider>
                                </div>
                                <span class="text-body-2 text-md-subtitle-1 text-uppercase font-weight-bold secondary--text">Koperasi Inovasi Bersama SEAMOLEC</span>
                            </div>
                            <div class="d-flex flex-row px-4 py-2 brown--text" style="border-top: 3px solid #6488D7">
                                <span class="my-auto text-uppercase font-weight-light">Jumlah</span>
                                <v-spacer></v-spacer>
                                <span class="text-h6 font-weight-black">Rp. 250.000</span>
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
                    <span class="white--text text-caption font-weight-bold">+62 812 9065 4582</span>
                </div>
                <div class="d-flex flex-column-reverse flex-md-row-reverse text-caption justify-center align-center white--text font-weight-light">
                    <div class="d-flex flex-row">
                        <v-divider vertical class="d-none d-md-flex white mr-1"></v-divider>
                        <span>Copyright @ &nbsp;</span>
                        <span>2021</span>
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
</template>

<script>
import { uuid } from 'vue-uuid';

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
        show1: false,
        show2: false,
        notif: {
            color: '',
            icon: '',
            message: ''
        },
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox5: false,
        checkbox4: false,
        validateCheckbox: [
            v => !!v || 'Nama depan wajib di isi',
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
        this.readFromRealtimeDb()
    },
    mounted() {
        this.readFromRealtimeDb()
    },
    methods: {
        showNotif(req, message) {
            switch (req) {
                case 'success':
                    this.notif = {
                        color: 'success',
                        icon: 'check_circle',
                        message: `${message}`
                    }
                    break;
                
                case 'info':
                    this.notif = {
                        color: 'light-blue',
                        icon: 'info',
                        message: `${message}`
                    }
                    break;

                case 'warning':
                    this.notif = {
                        color: 'warning',
                        icon: 'warning',
                        message: `${message}`
                    }
                    break;
                
                case 'error':
                    this.notif = {
                        color: 'error',
                        icon: 'error',
                        message: `${message}`
                    }
                    break;

                default:
                    this.notif = {
                        color: '',
                        icon: '',
                        message: ''
                    }
                    break;
            }
            this.alert = true
        },
        onPicsUpload (event) {
            this.paymentPics = event
        },
        async submitForm () {
            if (this.$refs.form.validate()) {
                this.loading        = true
                const id            = uuid.v4()
                const messageRef    = this.$fire.database.ref(`awsData`)
                const storageRef    = this.$fire.storage.ref(`awsPayments/${id}`)

                try {
                    await storageRef.put(this.paymentPics)
                    
                    const url = await storageRef.getDownloadURL()
                    const bodyData  = {
                        id: `${id}`,
                        fullName: `${this.firstName} ${this.lastName}`,
                        email: `${this.email}`,
                        no_tlpn: `${this.no_tlpn}`,
                        status: `${this.status}`,
                        paymentPics: `${url}`,
                        code: `1`
                    }

                    await messageRef.push({...bodyData})
                    this.loading = false
                    this.goVerivied()
                    this.showNotif('success', `Data berhasil di simpan. Terima Kasih`)
                } catch (e) {
                    this.showNotif('error', `${e.massage}`)
                    this.loading = false
                }
            }
        },
        async readFromRealtimeDb() {
            const dataArr = []
            const awsRef = this.$fire.database.ref().child('awsData')

            try {
                await awsRef.on('value', snapshot => {
                    snapshot.forEach((childSnapshot, key, arr) => {
                        // const childKey = childSnapshot.key;
                        dataArr.push(childSnapshot.val())
                        this.peserta = dataArr.filter(item => item.code === "2").length
                    })
                })
            } catch (e) {
                this.showNotif('error', `Ops... Maaf terjadi kesalahan pada server.`)
            }
        },
        goVerivied() {
            this.$router.push('/verification')
        }
    }
}
</script>

<style>
    .title-backdrop {
        background: rgba(231, 231, 231, 0.5);
        height: 100%;

        /* backdrop-filter: blur(1px); */
        width: 100%;
    }

    .bg-header-img {
        background-image: url('https://image.freepik.com/free-vector/flat-design-abstract-background_23-2149116123.jpg');
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
        background-image: url('https://image.freepik.com/free-vector/flat-design-abstract-background_23-2149116123.jpg');
        background-position: center;
        background-repeat: repeat;
        background-size: cover;
        position: relative;
        width: 100%;
    }

    .bg-footer-img {
        background-image: url('https://ucb1a17d1aa188bb1d6af3dae079.previews.dropboxusercontent.com/p/thumb/ABazrBeGdC7p6vJl_uq60n7o-v4BmuTJ9XnnNK9E_8DZU4k7-Wy-qZneun1KGY8McfR3kTM3JQgwLbXQsPy0Ltd2IIUk22Zm1d3c8yL-eHRFyzRu6UfT-GrP75oTS7QqwptNeEnjKIjRefkt-9J7bytuLOa2_kXDPu8qWLI1vgvsNxScy90VdGkJ3KVXUsjl0YnGgo30_HOmZFzfR2uqcf_1lhjcImdfYq2qLOvTbNmoqd3ogURkFv1AkivHppeLr4tkE8PUw9ChUMFPRP3PJwI93ky4qoQfRARZe4oH0IQuaEETG2XnuQtEdYiFMNfWlXCHvQt-uEAbpj3sj3hPvthwSYwEeV4WheibN3KLfZedXLJcbYmuFwoZiISle5y_rDs/p.png');
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