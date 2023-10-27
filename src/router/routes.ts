import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('layouts/BlankLayout.vue'),
    children: [{ path: '', component: () => import('pages/LoginPage.vue') }],
  },

  {
    path: '/admin',
    name: 'Admin',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('pages/admin/DashboardPage.vue'),
        props: true,
      },
      {
        path: 'arrival',
        name: 'Arrival & Departure Room',
        component: () => import('pages/admin/ArrivalPage.vue'),
        props: true,
      },
      {
        path: 'reports/room-maid',
        name: 'Room Maid Report',
        component: () => import('pages/admin/reports/RoomMaidPage.vue'),
      },
      {
        path: 'reports/auto-room-maid',
        name: 'Auto Room Maid Sheet',
        component: () => import('pages/admin/reports/AutoRoomMaidPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
