import { createDirectStore } from 'direct-vuex';
import Vue from 'vue';
import Vuex from 'vuex';
import { RootState } from 'store/types/root';

// Modules
import organisation from './modules/organisation';
import datapoint from './modules/datapoint';

Vue.use(Vuex);

const { store, moduleActionContext } = createDirectStore({
  modules: {
    organisation,
    datapoint
  },
  state: ():RootState => ({
    userSystemSelection: {
      organisationName: '',
      dataCenterName: '',
      siteName: ''
    }
  }),
  getters: {
    userSystemSelection (state:RootState) {
      return state.userSystemSelection;
    }
  },
  mutations: {
    SET_SYSTEM_SELECTION (state:RootState, payload: {key: 'organisationName' | 'siteName' | 'dataCenterName'; value:string}) {
      state.userSystemSelection[payload.key] = payload.value;
    }
  }
});

export { moduleActionContext, store };

export type AppStore = typeof store

declare module 'vuex' {
    interface Store<S> {
        direct: AppStore
    }
}
