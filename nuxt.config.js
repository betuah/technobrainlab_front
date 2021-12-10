import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Techno Brain',
    title: 'Techno Brain',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // target: 'static',
  telemetry: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBjMer6rSbGydI8rWUOg1qgJrm42hQ6ke4",
          authDomain: "technobrain-8b329.firebaseapp.com",
          databaseURL: "https://technobrain-8b329-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "technobrain-8b329",
          storageBucket: "technobrain-8b329.appspot.com",
          messagingSenderId: "881361801573",
          appId: "1:881361801573:web:e81cea2716aa6c2c79518c",
          measurementId: "${config.measurementId}"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false, // default
          },
          firestore: false,
          functions: false,
          storage: true,
          database: true,
          messaging: false,
          performance: false,
          analytics: false,
          remoteConfig: false
        }
      }
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  proxy: {
    '/api/': { target: `${process.env.API_URL}`, pathRewrite: {'^/api/': ''}, changeOrigin: true },
    '/apiv2/': { target: `${process.env.API_EXAM_URL}`, pathRewrite: {'^/apiv2/': ''}, changeOrigin: true }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue,
          accent: colors.grey,
          secondary: colors.amber,
          info: colors.teal,
          warning: colors.amber,
          error: colors.deepOrange,
          success: colors.green
        },
        light: {
          // primary: '#fb7756',
          // secondary: '#1ac0c6',
          accent: '#8c9eff',
          error: '#b71c1c',
          primary: '#6488D7',
          primaryLight1: '#BDCFF6',
          secondary: '#F06C7C',
          bgGrey: '#F4F6F8'
        },
      }
    },
    options: {
      customProperties: true,
    },
    defaultAssets: {
      font: {
        family: 'Roboto' 
      },
      icons: 'md'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
