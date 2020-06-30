import { defineModule } from 'direct-vuex';
import { moduleActionContext } from '../index';
import { OrganisationState as State, Organisation } from '../types/organisation';

import { $axios } from '~/utils/api';

const organisation = defineModule({
  state: ():State => ({
    organisations: null
  }),
  getters: {
    organisations (state:State) {
      return state.organisations;
    }
  },
  mutations: {
    SET_ORGANISATIONS (state:State, payload: Array<Organisation>) {
      state.organisations = payload;
    }
  },
  actions: {
    fetchOrganisations (context): Promise<void> {
      const { commit } = modActionContext(context);

      return new Promise((resolve, reject) => {
        $axios.get('/organisations')
          .then((res) => {
            commit.SET_ORGANISATIONS(res.data);
            resolve();
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    },
    fetchOrganisation (context, payload: { oid: string }): Promise<Organisation> {
      return new Promise((resolve, reject) => {
        $axios.get(`/organisations/${payload.oid}`)
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
            console.log(err);
          });
      });
    }
  }
});

export default organisation;

// For Action types.
// Refer Direct-vuex documentation.
const modActionContext = (context: any) => moduleActionContext(context, organisation);
