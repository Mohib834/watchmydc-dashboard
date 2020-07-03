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
  target: 'server',
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
      Authorization: 'bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik16azVRemszTlRsQ1FrSkVOREU1TXpoQ05qZzNSamN4TTBNek1VWkZOMEUxUkVaRlJFUkVNUSJ9.eyJpc3MiOiJodHRwczovL3dhdGNobXlkYy1kZXYuZXUuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVlOTcyYTIzZDk4NWViMGM3ZGRhNzk2YSIsImF1ZCI6WyJodHRwOi8vMC4wLjAuMDo1MDAwL2FwaSIsImh0dHBzOi8vd2F0Y2hteWRjLWRldi5ldS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTkzNzcxMTQ2LCJleHAiOjE1OTM4NTc1NDYsImF6cCI6InVuaXZuMDdsaGRBdzlkMjBZV3ZVODl0ZXYxZ1JTWjFEIiwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCJ9.Zk5S3CE3daoOd8ZKvVtRkyuw4kdsWOeIStJLL6UHCTXeI9PJnrcGOOYuN6KJGh0E3GKrREGI-DwRSWfrg5vEixZ35ilQmidLp1oTW5pnGniTZu5onQiZypX67ufaD1QQkaI5caygjsjtgCUiAaL0nZY4nBWMZVMASqa400GlbLnD8ZbZxNrfl0PRMG5mX9DXXXMocKRW1tMGp2m080wmAYbkJ67_Wb0BE6y5RUJSq3Ew1Od9Q6diTkJjnNl1Nxd_ZgYQ-o_rDsQc2ABvTj1jfWnqts3WirN-cWCz8RMb6VrGOko5vN8mPVPCOn9Ef5EvDRb47nnu9ssdiweHfGFo5A'
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
