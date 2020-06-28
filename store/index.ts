import { createDirectStore } from 'direct-vuex'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const { store, moduleActionContext } = createDirectStore({
  modules: {}
})

export { moduleActionContext, store }

export type AppStore = typeof store

declare module 'vuex' {
    interface Store<S> {
        direct: AppStore
    }
}
