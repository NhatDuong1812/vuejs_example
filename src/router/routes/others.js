export default [
  {
    path: '/access-control',
    name: 'access-control',
    component: () => import('@/views/extensions/acl/AccessControl.vue'),
    meta: {
      resource: 'ACL',
      action: 'read',
    },
  },
  {
    path: '/screen-check',
    name: 'screen-check',
    component: () => import('@/views/pages/checkuser/index.vue'),
    meta: {
      layout: 'full',
      resource: 'ACL',
      action: 'read',
    },
  },

]
