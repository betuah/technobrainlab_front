<template>
    <v-card class="elevation-0 rounded-0">
        <v-app-bar
            color="white"
            elevation="3"
        >
            <v-app-bar-nav-icon class="d-flex d-md-none"></v-app-bar-nav-icon>

            <v-toolbar-title class="text-h6 text-md-h5 font-weight-black primary--text">
                Technobrain <span class="secondary--text">Lab</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="d-md-flex flex-md-row align-center">
                <v-hover v-slot="{ hover }">
                <NuxtLink to="/course">
                    <v-btn depressed plain text :ripple="false" :color="hover ? 'secondary' : 'black'" class="d-none d-md-flex mr-4 ma-0 pa-0 font-weight-black text-capitalize">Belajar 🕮</v-btn>
                </NuxtLink>
                </v-hover>
                <v-hover v-slot="{ hover }">
                <NuxtLink to="/mentor">
                    <v-btn depressed plain text :ripple="false" :color="hover ? 'secondary' : 'black'" class="d-none d-md-flex mr-4 ma-0 pa-0 font-weight-black text-capitalize">Instruktur 👨‍🏫</v-btn>
                </NuxtLink>
                </v-hover>
                <v-hover v-slot="{ hover }" v-if="$auth.loggedIn">
                <NuxtLink to="/mycourse" v-if="$auth.loggedIn">
                    <v-btn depressed plain text :ripple="false" :color="hover ? 'secondary' : 'black'" class="d-none d-md-flex mr-4 ma-0 pa-0 font-weight-black text-capitalize">Kursus Saya 📓</v-btn>
                </NuxtLink>
                </v-hover>
                <v-hover v-slot="{ hover }" v-if="$auth.loggedIn">
                    <v-btn icon plain :ripple="false" class="d-none d-md-flex">
                        <v-icon :color="hover ? 'secondary' : ''">notifications</v-icon>
                    </v-btn>
                </v-hover>
                <v-hover v-slot="{ hover }" v-if="$auth.loggedIn">
                    <v-btn icon plain :ripple="false" class="d-none d-md-flex">
                        <v-icon :color="hover ? 'secondary' : ''">favorite</v-icon>
                    </v-btn>
                </v-hover>
                <v-hover v-slot="{ hover }" v-if="$auth.loggedIn">
                    <v-badge
                        :value="badge[0].value > 0"
                        bordered
                        color="secondary"
                        content="2"
                        overlap
                        offset-x="20"
                        offset-y="20"
                    >
                        <v-btn icon plain :ripple="false" class="pa-0 ma-0 d-none d-md-flex">
                            <v-icon :color="hover ? 'secondary' : ''">shopping_cart</v-icon>
                        </v-btn>
                    </v-badge>
                </v-hover>
                <div class="d-none d-md-flex flex-row align-center ml-2" v-if="$auth.loggedIn">
                    <v-menu
                        rounded="lg"
                        offset-y
                    >
                        <template v-slot:activator="{ attrs, on }">
                            <v-avatar size="40" color="secondary" v-bind="attrs" v-on="on">
                                <img v-if="profilePics"
                                    :src="profilePics"
                                    :alt="$auth.user.name"
                                >
                                <span v-else class="white--text text-h6">
                                    {{ name }}
                                </span>
                            </v-avatar>
                        </template>

                        <div class="d-flex flex-column">
                            <div class="d-flex flex-row white pa-3 align-center">
                                <v-avatar size="50" color="secondary">
                                    <img v-if="profilePics"
                                        :src="profilePics"
                                        :alt="$auth.user.name"
                                    >
                                    <span v-else class="white--text text-h6">
                                        {{ name }}
                                    </span>
                                </v-avatar>
                                <div class="d-flex flex-column ml-2">
                                    <span class="font-weight-bold">{{ $auth.user.fullName }}</span>
                                    <span class="text-caption">{{ $auth.user.email }}</span>
                                </div>
                            </div>
                            <v-list dense>
                                <v-divider></v-divider>
                                <v-list-item-group
                                    v-for="itemGroup in itemsGroup"
                                    :key="itemGroup.key"
                                    color="primary"
                                >
                                    <div v-for="(item, i) in itemGroup.items" :key="i">
                                    <v-hover v-slot="{ hover }">
                                        <v-list-item 
                                            class="d-flex flex-row align-center"
                                            @click="linkTo(item.link)"
                                        >
                                            <v-icon :color="hover ? 'secondary' : 'grey'" small class="mr-2" v-text="item.icon"></v-icon>
                                            <v-list-item-title v-text="item.text" :class="hover && 'secondary--text'"></v-list-item-title>
                                            <v-spacer></v-spacer>
                                            <v-avatar v-if="item.badge"
                                                size="23"
                                                color="secondary"
                                            >
                                                <span class="white--text text-caption">2</span>
                                            </v-avatar>
                                        </v-list-item>
                                    </v-hover>
                                    </div>
                                    <v-divider></v-divider>
                                </v-list-item-group>
                            </v-list>
                        </div>
                    </v-menu>
                </div>
                <div v-else class="d-flex flex-row alight-center">
                    <NuxtLink to="/login">
                        <v-btn depressed color="red lighten-5" class="d-none d-md-flex text-capitalize font-weight-black secondary--text rounded-lg mr-4">Masuk</v-btn>
                    </NuxtLink>
                    <NuxtLink to="/signup">
                        <v-btn depressed color="secondary" class="text-capitalize rounded-lg" dark>Daftar Gratis</v-btn>
                    </NuxtLink>
                </div>
            </div>
        </v-app-bar>
    </v-card>
</template>

<script>

export default {
    data: () => ({
        badge: [
            { title: 'cart', value: 0}
        ],
        itemsGroup: [
            {
                key: 1,
                items: [
                    { key: 1, icon: "class", text: "Kursus Saya", link: "/mycourse"},
                    { key: 2, icon: "shopping_cart", text: "Keranjang Saya", link: "/cart"},
                    { key: 3, icon: "verified", text: "Sertifikat Saya", link: "/certificate"},
                    { key: 4, icon: "favorite", text: "Kursus Favorit Saya", link: "/wishlist"}
                ],
            },
            {
                key: 2,
                items: [
                    { key: 5, icon: "manage_accounts", text: "Pengaturan Akun", link: "/user/profile"},
                    { key: 6, icon: "history_edu", text: "Riwayat Pembelian", link: "/user/purchase-history"}
                ]
            },
            {
                key: 3,
                items: [
                    { key: 7, icon: "logout", text: "Keluar", link: "signOut"}
                ]
            }
        ]
    }),
    computed: {
        name () {
            const name = (this.$auth.user.fullName).toUpperCase()
            const length = name.length
            const split = name.split(" ")
            if(length > 1) {
                return `${split[0].charAt(0)}${split[1].charAt(0)}`
            } else {
                return `${split[0].charAt(0)}${split[0].charAt(split[0].length -1)}`
            }
        },
        profilePics () {
            const details = this.$auth.details !== undefined ? this.$auth.details : false
            const profilePics = details ? details : false
            return profilePics
        }
    },
    methods: {
        signIn() {
            this.$router.push('/signin')
        },
        signUp() {
            this.$router.push('/signup')
        },
        linkTo(link) {
            if (link === 'signOut') return this.$auth.logout()
            this.$router.push(link)
        },
        course() {
            this.$router.push('/course')
        }
    }
}
</script>
