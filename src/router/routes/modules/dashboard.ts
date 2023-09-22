import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Homeless',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: t('Dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('Analysis'),
      },
    },

       {
          path: 'homeless',
          name: 'Homeless',
         component: () => import('/@/views/dashboard/analysis/account/center/status.vue'),
           // component: () => import('/@/views/dashboard/workbench-1/index.vue'),

          meta: {
            // affix: true,
//             title: t('Homeless detail'),
          },
        },
  ],
};

export default dashboard;
