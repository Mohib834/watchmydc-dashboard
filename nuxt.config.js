export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  loading: false,
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/axios-accessor.ts'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://api.watchmydc.com/api',
    headers: {
      // Setting here for a while
      Authorization: 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik16azVRemszTlRsQ1FrSkVOREU1TXpoQ05qZzNSamN4TTBNek1VWkZOMEUxUkVaRlJFUkVNUSJ9.eyJpc3MiOiJodHRwczovL3dhdGNobXlkYy1kZXYuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVlOTcyYTIzZDk4NWViMGM3ZGRhNzk2YSIsImF1ZCI6WyJodHRwOi8vMC4wLjAuMDo1MDAwL2FwaSIsImh0dHBzOi8vd2F0Y2hteWRjLWRldi5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTkzNTMzNTAxLCJleHAiOjE1OTM2MTk5MDEsImF6cCI6InVuaXZuMDdsaGRBdzlkMjBZV3ZVODl0ZXYxZ1JTWjFEIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.qiX-j6GvF7-xDfRJztTdcKgzf9K7-u_Unnnhw9ewhPIW555M9VCVdWcfz-GeTX9VQVyuttlK9zvToYVwad7OFC3tm0ZMZioGCLpLFm3wpj8eSyFwl06MQ3B_d1VOQdIccq2JOvJCFMkjdhaBse_O17IM9MARMwnOROzSBG1BhSvNmDBEI1KzvZpWqPkO2tA4g-txpEP4mrdHVv7CYed7Yengab_DU6L2BsThHdmw9i2xd-9pBeSd-m3fYTK4_b7TGKYQk6WUO_GSbrpt87xwXsFSYLVo-2oguXWkCQohfAMUWn7vMh9pmXhEYQKAse3HAN9eKZu-KF8lfpv2YNgeNA'
    }
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    optionsPath: './vuetify.options.js'
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
};
