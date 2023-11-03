<template>
  <q-page class="tw-p-8">
    <CardComponent class="tw-p-3">
      <div class="tw-flex justify-end">
        <button class="tw-mx-1">
          <q-icon
            name="fa-regular fa-square-check"
            class="tw-text-4xl" 
            style="color: #069550"
          />
        </button>
        <button class="tw-mx-2">
          <q-icon
            name="fa-solid fa-print"
            class="tw-text-4xl"
            style="color: #069550"
          />
        </button>
      </div>
      <div class="tw-mt-6">
        <TableComponent
          :columns="dataColumns"
          :rows="dataRows"
          :hide-pagination="true"
        />
      </div>

      <div
        class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-gap-5 tw-items-center tw-mt-8"
      >
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
          <CardComponent class="tw-w-80 height-full-card">
            <h1 class="tw-text-black tw-font-semibold tw-text-xl">Display</h1>
            <div class="tw-mt-4">
              <input
                type="date"
                id="tanggal"
                name="tanggal"
                class="tw-border tw-rounded-xl tw-py-2 tw-px-3 tw-mt-1 tw-w-full"
              />
            </div>
            <div
              class="tw-flex tw-flex-col md:tw-flex-row tw-justify-start tw-gap-5 tw-mt-4 tw-px-3"
            >
              <q-card class="tw-w-10 tw-text-center">
                <button>
                  <q-icon name="fa-solid fa-chevron-left" />
                </button>
              </q-card>
              <q-card class="tw-w-10 tw-text-center">
                <button>
                  <q-icon name="fa-solid fa-chevron-right" />
                </button>
              </q-card>

              <button class="tw-pl-44">
                <q-icon name="fa-solid fa-question" />
              </button>
            </div>
          </CardComponent>

          <CardComponent class="tw-w-80 height-full-card">
            <h1 class="tw-text-black tw-font-semibold tw-text-xl">Sorting :</h1>
            <div class="tw-mt-4">
              <select
                
                class="tw-border tw-rounded-lg tw-py-2 tw-px-3 tw-mt-1 tw-w-full"
              >
                <option
                  v-for="column in dataColumns"
                  :key="column.name"
                  :value="column.name"
                >
                  {{ column.label }}
                </option>
              </select>
            </div>
          </CardComponent>
        </div>
        <div class="tw-flex tw-flex-col md:tw-flex-row tw-gap-4">
          <CardComponent class="tw-flex-2 height-full-card">
            <textarea
              class="tw-w-full tw-h-44 tw-p-0 tw-border-none tw-outline-none tw-resize-none overflow-auto"
            ></textarea>
          </CardComponent>
          <CardComponent class="tw-flex-2 height-full-card">
            <textarea
              class="tw-w-full tw-h-44 tw-p-0 tw-border-none tw-outline-none tw-resize-none overflow-auto"
            ></textarea>
          </CardComponent>
        </div>
      </div>
    </CardComponent>
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import TableComponent from 'src/components/TableComponent.vue';

export default {
  name: 'DailyRoomPage',
  components: { CardComponent, TableComponent },
  setup() {
    return {
      dataColumns,
      dataRows,
    };
  },
};

const dataColumns = [
  {
    name: 'room-no',
    required: true,
    label: 'Room no',
    align: 'left',
    field: (row) => row.number,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'Cat',
    align: 'left',
    label: 'Cat',
    field: 'cat',
    sortable: true,
  },
  {
    name: 'l',
    align: 'left',
    label: 'l',
    field: 'l',
    sortable: true,
  },
  {
    name: 'status',
    align: 'left',
    label: 'St',
    field: 'stat',
    sortable: true,
  },
  {
    name: 'Roomtype',
    label: 'Room Type',
    field: 'roomtype',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Sun',
    label: 'Sun',
    field: 'sunday',
    align: 'left',
  },
  {
    name: 'mod',
    label: 'Mon',
    field: 'monday',
    align: 'left',
  },

  {
    name: 'tue',
    label: 'Tue',
    field: 'tuesday',
    align: 'left',
  },
  {
    name: 'wed',
    label: 'Wed',
    field: 'wednesday',
    align: 'left',
  },
  {
    name: 'thu',
    label: 'Thu',
    field: 'thursday',
    align: 'left',
  },
  {
    name: 'fri',
    label: 'Fri',
    field: 'friday',
    align: 'left',
  },
  {
    name: 'sat',
    label: 'Sat',
    field: 'saturday',
    align: 'left',
  },
];

const dataRows = [
  {
    number: '#212224',
    cat: 'Ambatublow',
    l: 'wad',
    stat: '10:05:21',
    roomtype: 'Suite',
    sunday: 'Available',
    monday: 'Available',
    tuesday: 'Occupied',
    wednesday: 'Available',
    thursday: 'Occupied',
    friday: 'Available',
    saturday: 'Available',
  },
  {
    number: '#212225',
    cat: 'Ambatublow',
    l: 'wad',
    stat: '10:06:21',
    roomtype: 'Standard',
    sunday: 'Available',
    monday: 'Occupied',
    tuesday: 'Available',
    wednesday: 'Occupied',
    thursday: 'Available',
    friday: 'Occupied',
    saturday: 'Available',
  },
  {
    number: '#212226',
    cat: 'Ambatublow',
    l: 'wad',
    stat: '10:07:21',
    roomtype: 'Deluxe',
    sunday: 'Occupied',
    monday: 'Available',
    tuesday: 'Occupied',
    wednesday: 'Available',
    thursday: 'Occupied',
    friday: 'Available',
    saturday: 'Occupied',
  },
  {
    number: '#212227',
    cat: 'Ambatublow',
    l: 'wad',
    stat: '10:08:21',
    roomtype: 'Single',
    sunday: 'Available',
    monday: 'Occupied',
    tuesday: 'Available',
    wednesday: 'Occupied',
    thursday: 'Available',
    friday: 'Occupied',
    saturday: 'Available',
  },
  {
    number: '#212228',
    cat: 'Ambatublow',
    l: 'wad',
    stat: '10:09:21',
    roomtype: 'Double',
    sunday: 'Available',
    monday: 'Occupied',
    tuesday: 'Available',
    wednesday: 'Occupied',
    thursday: 'Available',
    friday: 'Occupied',
    saturday: 'Available',
  },
];
</script>
<style>
.shadow {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.q-table th {
  @apply tw-text-sm tw-border-r-4 tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-white;
}
.q-table tbody td {
  font-size: 14px;
  border-right: 4px solid white;
}
.q-table tbody tr:nth-child(even) {
  background-color: #fafafa;
}
.q-table__bottom {
  @apply tw-inline-flex tw-justify-between tw-text-sm tw-border-2 tw-border-b-0 tw-border-l-0 tw-border-r-0 tw-border-[#069550] tw-bg-[#fafafa] tw-relative;
}
.q-table__control:nth-child(2) {
  @apply tw-absolute;
}
.q-table__bottom .q-btn .q-icon {
  @apply tw-text-3xl tw-text-[#069550];
}
.disabled * {
  @apply tw-opacity-0;
}
</style>
