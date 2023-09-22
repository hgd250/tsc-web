import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const homeless: AppRouteModule = {
  path: '/homeless',
  name: 'Management',
  component: LAYOUT,
  meta: {
    orderNo: 3,
    icon: 'ion:git-compare-outline',
    title: t('Data Management'),
  },
  children: [
    {
      path: 'homeless',
      name: 'Homeless Management',
      component: () => import('/@/views/dashboard/homeless/HomelessMMTable.vue'),
      meta: {
        // affix: true,
        title: t('Homeless Management'),
      },
    },
    {
    path: 'origination',
    name: 'Origination Managemen',
    component: () => import('/@/views/dashboard/homeless/ORIMMTable.vue'),
    meta: {
      // affix: true,
      title: t('Origination Managemen'),
    },
  },
    {
    path: 'navigator',
    name: 'Navigator Managemen',
    component: () => import('/@/views/dashboard/homeless/NavMMTable.vue'),
    meta: {
      // affix: true,
      title: t('Navigator Managemen'),
    },
  },
    /*  {
      path: 'import',
      name: 'Import History Data',
    component: () => import('/@/views/dashboard/homeless/index.vue'),
      meta: {
        // affix: true,
        title: t('Import History Data'),
      },

      },*/
  ],
};

export default homeless;
