export default [
  // 以下为业务管理start
  {
    path: 'business',
    name: 'business',
    component: () => import('../page/business/business')
  },
  {
    path: 'BusinessWarn',
    name: 'BusinessWarn',
    component: () => import('../page/business/BusinessWarn')
  },
  {
    path: 'BusinessNote',
    name: 'BusinessNote',
    component: () => import('../page/business/BusinessNote')
  },
  {
    path: 'BusinessMore',
    name: 'BusinessMore',
    component: () => import('../page/business/BusinessMore')
  },
  {
    path: 'BusinessCnki',
    name: 'BusinessCnki',
    component: () => import('../page/business/BusinessCnki')
  },
  {
    path: 'BusinessApproval',
    name: 'BusinessApproval',
    component: () => import('../page/business/BusinessApproval'),
    redirect: '/BusinessApproval/order',
    children: [
      {
        path: 'order',
        name: 'ApprovalOrder',
        component: () => import('../page/business/Approval/order')
      },
      {
        path: 'drawback',
        name: 'ApprovalDrawback',
        component: () => import('../page/business/Approval/drawback')
      },
      {
        path: 'received',
        name: 'ApprovalReceivedr',
        component: () => import('../page/business/Approval/received')
      },
      {
        path: 'wipe',
        name: 'ApprovalWipe',
        component: () => import('../page/business/Approval/wipe')
      },
      {
        path: 'work',
        name: 'ApprovalWork',
        component: () => import('../page/business/Approval/work')
      }
    ]
  }
  // 以上为业务管理stop
]
