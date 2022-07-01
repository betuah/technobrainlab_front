import colors from 'vuetify/es5/util/colors'
import themeColors from './color'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Technobrain Sistema',
    title: 'Technobrain Sistema',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js",
        type: "module"
      },
      {
        src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css',
    '@node_modules/@fortawesome/fontawesome-svg-core/styles.css',
    'video.js/dist/video-js.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    '@nuxt/postcss8',
    '@nuxtjs/moment'
  ],

  router: {
    base: '/aws/'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: false
  },

  proxy: {
    '/api/': { target: `${process.env.API_URL}`, pathRewrite: {'^/api/': '/api/v1/'}, changeOrigin: true },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: { customProperties: true },
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
        light: {...themeColors},
      }
    },
    defaultAssets: {
      font: {
        family: 'Roboto',
      },
      icons: 'md'
    },
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'accessToken',
          data: 'accessToken',
          global: true,
          maxAge: 1800,
          type: 'Bearer'
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: false
        },
        endpoints: {
          login: { url: '/api/auth/signin', method: 'post' },
          refresh: { url: '/api/auth/token', method: 'post' },
          logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/user', method: 'get' }
        },
        tokenRequired: true
      },
      google: {
        clientId: `${process.env.GOOGLE_CLIENT_ID}`,
        scope: ['profile', 'email'],
        codeChallengeMethod: '',
        responseType: 'code',
        endpoints: {
          token: `${process.env.API_URL}/api/v1/auth/google`,
          userInfo: `${process.env.API_URL}/api/v1/user`
        },
        token: {
          property: 'accessToken',
          data: 'accessToken',
          global: true,
          maxAge: 1800,
          type: 'Bearer'
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30
        }
      }
    },
    redirect: {
      login: '/login',
      home: '/course'
    },
    localStorage: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
