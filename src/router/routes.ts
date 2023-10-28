import { RouteRecordRaw } from 'vue-router';

// Layout
import BlankLayout from 'layouts/BlankLayout.vue';
import DefaultLayout from 'layouts/DefaultLayout.vue';

// Other
import LoginPage from 'pages/LoginPage.vue';

// Dashboard
import DashboardPage from 'pages/dashboard/DashboardPage.vue';
import ArrivalPage from 'pages/dashboard/ArrivalPage.vue';
import CleanedRoomPage from 'pages/dashboard/CleanedRoomPage.vue';
import DirtyRoomPage from 'pages/dashboard/DirtyRoomPage.vue';
import RoomOccupancyPage from 'pages/dashboard/RoomOccupancyPage.vue';
import StatusPage from 'pages/dashboard/StatusPage.vue';
import OOOPage from 'pages/dashboard/OOOPage.vue';
import RoomingListPage from 'pages/dashboard/RoomingListPage.vue';
import DiscrepancyPage from 'pages/dashboard/DiscrepancyPage.vue';
import LostAndFoundPage from 'pages/dashboard/LostAndFoundPage.vue';

// Dashboard -> Reports
import RoomMaidPage from 'pages/dashboard/reports/RoomMaidPage.vue';
import AutoRoomMaidPage from 'pages/dashboard/reports/AutoRoomMaidPage.vue';
import DailyRoomPage from 'pages/dashboard/reports/DailyRoomPage.vue';
import ReservationPage from 'pages/dashboard/reports/ReservationPage.vue';
import RoomCountPage from 'pages/dashboard/reports/RoomCountPage.vue';
import RoomPlanPage from 'pages/dashboard/reports/RoomPlanPage.vue';
import TaskReportPage from 'pages/dashboard/reports/TaskReportPage.vue';
import GuestPreferencePage from 'pages/dashboard/reports/GuestPreferencePage.vue';
import VIPPage from 'pages/dashboard/reports/VIPPage.vue';
import RoomChangePage from 'pages/dashboard/reports/RoomChangePage.vue';
import MonthlyRoomPage from 'pages/dashboard/reports/MonthlyRoomPage.vue';
import ExtrabedPage from 'pages/dashboard/reports/ExtrabedPage.vue';
import StockOnhandPage from 'pages/dashboard/reports/StockOnhandPage.vue';
import PurchaseRequestPage from 'pages/dashboard/reports/PurchaseRequestPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: BlankLayout,
    children: [{ path: '/login', component: LoginPage }],
  },

  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: DashboardPage,
        meta: { icon: 'dashboard' },
      },
      {
        path: '/arrival',
        name: 'Arrival & Departure Room',
        component: ArrivalPage,
        meta: { icon: 'task' },
      },
      {
        path: '/cleaned',
        name: 'Cleaned Room',
        component: CleanedRoomPage,
        meta: { icon: 'dashboard' },
      },
      {
        path: '/dirty',
        name: 'Dirty Room',
        component: DirtyRoomPage,
        meta: { icon: 'dashboard' },
      },
      {
        path: '/room-occupancy',
        name: 'Room Occupancy Overview',
        component: RoomOccupancyPage,
        meta: { icon: 'dashboard' },
      },
      {
        path: '/status',
        name: 'Status',
        component: StatusPage,
        meta: { icon: 'dashboard' },
      },
      {
        path: '/ooo',
        name: 'O-O-O and Off Market Rooms',
        component: OOOPage,
        meta: { icon: 'dashboard' },
      },
      {
        path: '/rooming-list',
        name: 'Rooming List',
        component: RoomingListPage,
        meta: { icon: 'dashboard' },
      },
      {
        path: '/discrepancy',
        name: 'Discrepancy',
        component: DiscrepancyPage,
        meta: { icon: 'dashboard' },
      },
      {
        path: '/lost-found',
        name: 'Lost & Found',
        component: LostAndFoundPage,
        meta: { icon: 'dashboard' },
      },

      // Reports
      {
        path: '/reports/room-maid',
        name: 'Room Maid Report',
        component: RoomMaidPage,
      },
      {
        path: '/reports/auto-room-maid',
        name: 'Auto Room Maid Sheet',
        component: AutoRoomMaidPage,
      },
      {
        path: '/reports/daily-room',
        name: 'Daily Room Usage',
        component: DailyRoomPage,
      },
      {
        path: '/reports/reservation-room',
        name: 'Reservation Room Plan',
        component: ReservationPage,
      },
      {
        path: '/reports/room-count',
        name: 'Room Count Sheet',
        component: RoomCountPage,
      },
      {
        path: '/reports/room-plan',
        name: 'Room Plan',
        component: RoomPlanPage,
      },
      {
        path: '/reports/task-report',
        name: 'Task Report List',
        component: TaskReportPage,
      },
      {
        path: '/reports/guest-preference',
        name: 'Guest Preference List',
        component: GuestPreferencePage,
      },
      {
        path: '/reports/vip-list',
        name: 'VIP List',
        component: VIPPage,
      },
      {
        path: '/reports/room-change',
        name: 'Room Change Report',
        component: RoomChangePage,
      },
      {
        path: '/reports/monthly-room',
        name: 'Monthly Room Occupancy Forecast',
        component: MonthlyRoomPage,
      },
      {
        path: '/reports/extrabed-availabilty',
        name: 'Extrabed Availabilty',
        component: ExtrabedPage,
      },
      {
        path: '/reports/stock-onhand',
        name: 'Stock Onhand List',
        component: StockOnhandPage,
      },
      {
        path: '/reports/purchase-request',
        name: 'Purchase Request',
        component: PurchaseRequestPage,
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
