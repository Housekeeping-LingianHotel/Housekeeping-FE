<template>
  <q-page class="tw-bg-white tw-flex tw-flex-col tw-gap-y-6 tw-py-4 tw-px-10">
    <div class="tw-flex tw-gap-x-10">
      <card-component class="tw-flex-1 tw-py-2 tw-px-4">
        <h6 class="tw-text-lg tw-font-semibold">Arrival & Departure</h6>
        <table class="tw-w-full tw-mx-4 tw-mt-2">
          <thead>
            <tr>
              <td></td>
              <td align="center">Room</td>
              <td align="center">Person</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(roomStat, index) in arrivalDeparture" :key="index">
              <td>{{ roomStat.name }}</td>
              <td align="center">
                <q-card
                  square
                  class="tw-w-14 tw-py-[2px] tw-grid tw-place-content-center tw-font-semibold"
                >
                  {{ roomStat.room }}
                </q-card>
              </td>
              <td align="center">
                <q-card
                  square
                  class="tw-w-14 tw-py-[2px] tw-grid tw-place-content-center tw-font-semibold"
                >
                  {{ roomStat.person }}
                </q-card>
              </td>
            </tr>
          </tbody>
        </table>
      </card-component>

      <card-component class="tw-flex-1 tw-py-2 tw-px-4">
        <h6 class="tw-text-lg tw-font-semibold">Housekeeping Activity</h6>
        <table class="tw-mx-auto tw-mt-2">
          <tbody>
            <tr v-for="(statItem, index) in houseKeepingActivity" :key="index">
              <td class="tw-pr-6">{{ statItem.name }}</td>
              <td align="center">
                <q-card
                  square
                  class="tw-w-14 tw-py-[2px] tw-grid tw-place-content-center tw-font-semibold"
                >
                  {{ statItem.value }}
                </q-card>
              </td>
            </tr>
          </tbody>
        </table>
      </card-component>
    </div>

    <card-component class="w-full tw-px-4 tw-py-2">
      <h6 class="tw-text-lg tw-font-semibold">Room Occupancy Overview</h6>
      <div class="tw-flex tw-mt-2">
        <table class="tw-w-full tw-mx-4 tw-mt-2 tw-flex-1">
          <thead>
            <tr>
              <td></td>
              <td align="center">Room</td>
              <td align="center">Person</td>
              <td align="center">%</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(roomStat, index) in roomOccupancy" :key="index">
              <td>{{ roomStat.name }}</td>
              <td align="center">
                <q-card
                  square
                  class="tw-w-14 tw-py-[2px] tw-grid tw-place-content-center tw-font-semibold"
                >
                  {{ roomStat.room }}
                </q-card>
              </td>
              <td align="center">
                <q-card
                  square
                  class="tw-w-14 tw-py-[2px] tw-grid tw-place-content-center tw-font-semibold"
                >
                  {{ roomStat.person }}
                </q-card>
              </td>
              <td align="center">
                <q-card
                  square
                  class="tw-w-14 tw-py-[2px] tw-grid tw-place-content-center tw-font-semibold"
                >
                  {{ roomStat.percentage }}
                </q-card>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="tw-flex-1 tw-flex tw-flex-col">
          <q-table
            square
            class="dashboard-table"
            separator="cell"
            title="Queueing Rooms"
            :rows="rows"
            :columns="columns"
            row-key="name"
            :rows-per-page-options="[0]"
          />

          <div class="tw-mt-4 flex tw-justify-between">
            <h4 class="tw-text-lg tw-font-bold">Off Market Rooms</h4>
            <q-card
              square
              class="tw-w-14 tw-py-[2px] tw-grid tw-place-content-center tw-font-semibold"
            >
              3
            </q-card>

            <div
              class="tw-text-lg tw-font-bold tw-px-2 tw-text-white tw-bg-[rgba(255,0,0,1)]"
            >
              Time: 07:47:47
            </div>
          </div>
        </div>
      </div>
    </card-component>
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import { arrivalDeparture, roomOccupancy } from 'src/data/room-stats';
import { houseKeepingActivity } from 'src/data/stats';
import { ColumnInterface } from 'src/types/table';

const columns: ColumnInterface[] = [
  {
    name: 'name',
    label: 'Room No',
    field: (row) => row.name,
    align: 'center',
    required: true,
    sortable: true,
  },
  {
    name: 'user-id',
    align: 'center',
    label: 'User Id',
    field: 'user_id',
    sortable: true,
  },
  {
    name: 'status',
    align: 'center',
    label: 'Status',
    field: 'status',
    sortable: true,
  },
];

const rows = [
  {
    name: '1',
    user_id: 1111,
    status: '-',
  },
  {
    name: '2',
    user_id: 1111,
    status: '-',
  },
  {
    name: '3',
    user_id: 1111,
    status: '-',
  },
  {
    name: '4',
    user_id: 1111,
    status: '-',
  },
  {
    name: '5',
    user_id: 1111,
    status: '-',
  },
  {
    name: '6',
    user_id: 1111,
    status: '-',
  },
  {
    name: '7',
    user_id: 1111,
    status: '-',
  },
  {
    name: '8',
    user_id: 1111,
    status: '-',
  },
];

export default {
  name: 'DashboardPage',
  components: { CardComponent },
  setup() {
    return {
      arrivalDeparture,
      houseKeepingActivity,
      roomOccupancy,
      rows,
      columns,
    };
  },
};
</script>

<style>
.dashboard-table {
  height: 320px;
}

.dashboard-table .q-table__top,
thead tr:first-child th {
  background-color: rgba(6, 149, 80, 1);
  color: white;
  font-weight: 600;
}

.dashboard-table tbody tr td {
  height: fit-content;
  padding: 8px;
}

.dashboard-table .q-table__top {
  padding: 8px 0;
}

.dashboard-table .q-table__title {
  font-size: 16px;
  font-weight: bold;
}

.dashboard-table thead tr th {
  position: sticky;
  z-index: 1;
}

.dashboard-table .q-table__bottom {
  display: none;
}

.dashboard-table thead tr:first-child th {
  top: 0;
}

.dashboard-table .q-table th {
  @apply tw-text-sm tw-border-r-2 tw-border-l-0 tw-border-white;
}

.dashboard-table .q-table__top {
  @apply tw-border-b-2 tw-border-white tw-text-center tw-flex tw-justify-center;
}
</style>
