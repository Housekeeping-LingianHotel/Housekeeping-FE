<template>
  <q-layout view="lHh Lpr lFf">
    <q-header
      reveal
      bordered
      class="tw-text-black tw-px-4 tw-py-2 tw-bg-[rgba(97,97,97,1)]"
    >
      <q-toolbar>
        <q-toolbar-title class="tw-text-white tw-font-bold">
          Housekeeping Management System
        </q-toolbar-title>

        <!-- Icon BTNs -->
        <div>
          <q-btn round padding="8px" flat>
            <q-icon size="32px" color="white" name="o_notifications" />
          </q-btn>
          <q-btn round padding="8px" flat>
            <q-icon size="32px" color="white" name="o_email" />
          </q-btn>
          <q-btn round padding="8px" flat>
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
      class="tw-flex tw-flex-col"
    >
      <q-item class="tw-flex-1 tw-m-2">
        <q-item-section>
          <q-img src="/images/Lingian-Logo.png" />
        </q-item-section>
      </q-item>

      <q-scroll-area class="tw-flex-[2_2_0%]">
        <q-list>
          <!-- Menu List -->
          <template v-for="(menuItem, index) in menuList" :key="index">
            <q-item
              v-if="$route.name !== menuItem.name"
              class="tw-px-4 tw-py-0 tw-my-[2px]"
            >
              <q-btn
                align="left"
                class="tw-w-full tw-py-0 tw-px-4"
                no-caps
                unelevated
                @click="
                  router.push({
                    name: menuItem.name,
                  })
                "
              >
                <div class="tw-text-left tw-py-1 tw-px-0">
                  {{ menuItem.name }}
                </div>
              </q-btn>
            </q-item>

            <q-item v-else class="tw-px-4 tw-py-0 tw-my-[2px]">
              <q-btn
                align="left"
                class="tw-w-full tw-py-0 tw-px-4 tw-font-bold tw-bg-[rgba(230,246,236,1)] tw-text-[rgba(0,100,48,1)]"
                no-caps
                unelevated
              >
                <div class="tw-text-left tw-py-1 tw-px-0">
                  {{ menuItem.name }}
                </div>
              </q-btn>
            </q-item>
          </template>

          <!-- Report List -->
          <q-expansion-item
            class="tw-my-0 tw-mx-4 tw-font-medium"
            :class="{
              'tw-bg-[rgba(230,246,236,1)] tw-text-[rgba(0,100,48,1)] tw-font-bold':
                isActive,
            }"
            @update:model-value="toggleActive"
            label="Reports"
          >
            <q-list class="tw-bg-white">
              <template v-for="(reportItem, index) in reportList" :key="index">
                <q-item
                  v-if="$route.name !== reportItem.name"
                  class="tw-p-0 tw-my-0 tw-mx-2"
                >
                  <q-btn
                    align="left"
                    class="tw-w-full tw-py-0 tw-px-4 tw-text-black"
                    no-caps
                    unelevated
                    @click="
                      router.push({
                        name: reportItem.name,
                      })
                    "
                  >
                    <div class="tw-text-left tw-py-1">
                      {{ reportItem.name }}
                    </div>
                  </q-btn>
                </q-item>

                <q-item v-else class="tw-p-0 tw-my-0 tw-mx-2">
                  <q-btn
                    align="left"
                    class="tw-w-full tw-py-0 tw-px-4 tw-text-[rgba(0,100,48,1)] tw-font-bold"
                    no-caps
                    unelevated
                  >
                    <div class="tw-text-left tw-py-1">
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
        class="tw-py-4 tw-px-0"
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
