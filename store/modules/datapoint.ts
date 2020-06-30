import { defineModule } from 'direct-vuex';
import { moduleActionContext } from '../index';
import { DatapointState as State } from '../types/datapoint';

import { $axios } from '~/utils/api';

const datapoint = defineModule({
  state: ():State => ({

  }),
  getters: {

  },
  mutations: {
  },
  actions: {
    fetchTopDevices (context, payload: {
        metric: 'cpu' | 'memory' | 'disk' | 'interface-usage';
        duration: {startTime: string; endTime: string}
    }): Promise<Array<{}>> {
      const { rootGetters } = modActionContext(context);
      // Getting the selected organisation, site, datacenter name from the root store
      const { organisationName, siteName, dataCenterName } = rootGetters.userSystemSelection;
      return new Promise((resolve, reject) => {
        // fetching the data
        $axios.get(`/top-devices/${siteName}/${dataCenterName}/${payload.metric}`, {
          params: {
            StartTime: payload.duration.startTime,
            EndTime: payload.duration.endTime
          },
          headers: {
            organisationid: organisationName
          }
        })
          .then((res) => {
            resolve(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          });
      });
    }
  }
});

export default datapoint;

// For Action types.
// Refer Direct-vuex documentation.
const modActionContext = (context: any) => moduleActionContext(context, datapoint);
