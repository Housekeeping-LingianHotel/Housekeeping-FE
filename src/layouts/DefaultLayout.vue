<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      reveal
      bordered
      class="text-black q-px-sm q-py-xs"
      style="background: rgba(97, 97, 97, 1)"
    >
      <q-toolbar>
        <q-toolbar-title
          style="color: rgba(255, 255, 255, 1); font-weight: bold"
        >
          Housekeeping Management System
        </q-toolbar-title>

        <!-- Icon BTNs -->
        <div>
          <q-btn padding="4px 10px" flat>
            <q-icon size="32px" color="white" name="o_notifications" />
          </q-btn>
          <q-btn padding="4px 10px" flat>
            <q-icon size="32px" color="white" name="o_email" />
          </q-btn>
          <q-btn padding="4px 10px" flat>
            <q-icon size="32px" color="white" name="o_account_circle" />
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="223"
      :breakpoint="400"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      style="display: flex; flex-direction: column"
    >
      <q-item style="flex: 1 1 0%; margin: 8px">
        <q-item-section>
          <q-img src="../../public/images/Lingian-Logo.png" />
        </q-item-section>
      </q-item>

      <q-scroll-area style="flex: 2 2 0%">
        <q-list>
          <!-- Menu List -->
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              v-if="$route.name !== menuItem.name"
              style="padding: 0px 16px; margin: 2px 0"
            >
              <q-btn
                align="left"
                style="width: 100%; padding: 0 16px"
                no-caps
                unelevated
                @click="
                  router.push({
                    name: menuItem.name,
                  })
                "
              >
                <div style="text-align: left; padding: 4px 0">
                  {{ menuItem.name }}
                </div>
              </q-btn>
            </q-item>

            <q-item v-else style="padding: 0 16px; margin: 2px 0">
              <q-btn
                align="left"
                style="
                  width: 100%;
                  padding: 0 16px;
                  background: rgba(230, 246, 236, 1);
                  color: rgba(0, 100, 48, 1);
                  font-weight: bold;
                "
                no-caps
                unelevated
              >
                <div style="text-align: left; padding: 4px 0">
                  {{ menuItem.name }}
                </div>
              </q-btn>
            </q-item>
          </template>

          <!-- Report List -->
          <q-expansion-item
            style="margin: 0 16px; font-weight: 500"
            :class="{ 'active-expansion': isActive }"
            @update:model-value="toggleActive"
            label="Reports"
          >
            <q-list style="background-color: white">
              <template v-for="(reportItem, index) in reportList" :key="index">
                <q-item
                  v-if="$route.name !== reportItem.name"
                  style="padding: 0; margin: 0px 8px"
                >
                  <q-btn
                    align="left"
                    style="width: 100%; padding: 0 16px; color: black"
                    no-caps
                    unelevated
                    @click="
                      router.push({
                        name: reportItem.name,
                      })
                    "
                  >
                    <div style="text-align: left; padding: 4px 0">
                      {{ reportItem.name }}
                    </div>
                  </q-btn>
                </q-item>

                <q-item v-else style="padding: 0; margin: 0px 16px">
                  <q-btn
                    align="left"
                    style="
                      width: 100%;
                      padding: 0 16px;
                      color: rgba(0, 100, 48, 1);
                      font-weight: bold;
                    "
                    no-caps
                    unelevated
                  >
                    <div style="text-align: left; padding: 4px 0">
                      {{ reportItem.name }}
                    </div>
                  </q-btn>
                </q-item>
              </template>
            </q-list>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>

      <!-- Logout BTN -->
      <q-btn
        style="padding: 16px 0"
        icon-right="o_logout"
        no-caps
        label="Logout"
      ></q-btn>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: 'DefaultLayout',
  data() {
    const menuList = [
      {
        path: '/dashboard',
        name: 'Dashboard',
      },
      {
        path: '/arrival',
        name: 'Arrival & Departure Room',
      },
      {
        path: '/cleaned',
        name: 'Cleaned Room',
      },
      {
        path: '/dirty',
        name: 'Dirty Room',
      },
      {
        path: '/room-occupancy',
        name: 'Room Occupancy Overview',
      },
      {
        path: '/status',
        name: 'Status',
      },
      {
        path: '/ooo',
        name: 'O-O-O and Off Market Rooms',
      },
      {
        path: '/rooming-list',
        name: 'Rooming List',
      },
      {
        path: '/discrepancy',
        name: 'Discrepancy',
      },
      {
        path: '/lost-found',
        name: 'Lost & Found',
      },
    ];

    const reportList = [
      {
        path: '/reports/room-maid',
        name: 'Room Maid Report',
      },
      {
        path: '/reports/auto-room-maid',
        name: 'Auto Room Maid Sheet',
      },
      {
        path: '/reports/daily-room',
        name: 'Daily Room Usage',
      },
      {
        path: '/reports/reservation-room',
        name: 'Reservation Room Plan',
      },
      {
        path: '/reports/room-count',
        name: 'Room Count Sheet',
      },
      {
        path: '/reports/room-plan',
        name: 'Room Plan',
      },
      {
        path: '/reports/task-report',
        name: 'Task Report List',
      },
      {
        path: '/reports/guest-preference',
        name: 'Guest Preference List',
      },
      {
        path: '/reports/vip-list',
        name: 'VIP List',
      },
      {
        path: '/reports/room-change',
        name: 'Room Change Report',
      },
      {
        path: '/reports/monthly-room',
        name: 'Monthly Room Occupancy Forecast',
      },
      {
        path: '/reports/extrabed-availabilty',
        name: 'Extrabed Availabilty',
      },
      {
        path: '/reports/stock-onhand',
        name: 'Stock Onhand List',
      },
      {
        path: '/reports/purchase-request',
        name: 'Purchase Request',
      },
    ];

    return {
      isActive: false,
      menuList,
      reportList,
    };
  },
  setup() {
    const router = useRouter();

    return { router };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.active-expansion {
  background-color: rgba(230, 246, 236, 1) !important;
  color: rgba(0, 100, 48, 1) !important;
  font-weight: bold !important;
}
</style>
