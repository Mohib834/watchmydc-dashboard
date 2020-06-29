import colors from 'vuetify/es5/util/colors'

import AlertIcon from '@/components/icons/Alert.vue'
import BellIcon from '@/components/icons/Bell.vue'
import AdministrationIcon from '@/components/icons/Administration.vue'
import BranchesIcon from '@/components/icons/Branches.vue'
import DashboardIcon from '@/components/icons/Dashboard.vue'
import DatabaseIcon from '@/components/icons/Database.vue'
import FireIcon from '@/components/icons/Fire.vue'
import LogoIcon from '@/components/icons/Logo.vue'
import MagnifyIcon from '@/components/icons/Magnify.vue'
import PlusIcon from '@/components/icons/Plus.vue'
import QuestionCircleIcon from '@/components/icons/QuestionCircle.vue'
import ReconciliationIcon from '@/components/icons/Reconciliation.vue'
import SettingsIcon from '@/components/icons/Settings.vue'
import StarIcon from '@/components/icons/Star.vue'
import SystemIcon from '@/components/icons/System.vue'
import ReportIcon from '@/components/icons/Report.vue'
import EditIcon from '@/components/icons/Edit.vue'
import ReloadIcon from '@/components/icons/Reload.vue'
import FullscreenIcon from '@/components/icons/Fullscreen.vue'
import ClockCircleIcon from '@/components/icons/ClockCircle.vue'

export default {
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#1F92A9',
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  icons: {
    values: {
      logo: {
        component: LogoIcon
      },
      alert: {
        component: AlertIcon
      },
      bell: {
        component: BellIcon
      },
      administration: {
        component: AdministrationIcon
      },
      branches: {
        component: BranchesIcon
      },
      dashboard: {
        component: DashboardIcon
      },
      database: {
        component: DatabaseIcon
      },
      fire: {
        component: FireIcon
      },
      magnify: {
        component: MagnifyIcon
      },
      plus: {
        component: PlusIcon
      },
      questionCircle: {
        component: QuestionCircleIcon
      },
      reconciliation: {
        component: ReconciliationIcon
      },
      settings: {
        component: SettingsIcon
      },
      star: {
        component: StarIcon
      },
      system: {
        component: SystemIcon
      },
      report: {
        component: ReportIcon
      },
      edit: {
        component: EditIcon
      },
      reload: {
        component: ReloadIcon
      },
      fullscreen: {
        component: FullscreenIcon
      },
      clockcircle: {
        component: ClockCircleIcon
      }
    }
  }
}
