<template>
  <q-page class="tw-p-8">
    <CardComponent class="tw-p-3">
      <div class="tw-flex justify-end">
        <q-btn
            class="tw-mx-1"
            icon="fa-regular fa-square-check"
            style="color: #069550"
            flat
            size="24px"
            padding="0px"
          />

           <q-btn
            class="tw-mx-1"
            icon="o_print"
            style="color: #069550"
            flat
            size="24px"
            padding="0px"
          />
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
          <CardComponent class="tw-w-60 height-full-card">
            <h1 class="tw-text-black tw-font-semibold tw-text-xl">Display</h1>
            <div class="tw-mt-4">
              <DateInputComponent class="tw-rounded-lg tw-w-full" />
            </div>
            <div
              class="tw-flex tw-flex-col md:tw-flex-row tw-justify-start tw-mt-4 tw-px-3"
            >
              <div class="tw-w-10 tw-text-center">
                <q-btn
                  size="10px"
                  padding="1px"
                  flat 
                  icon="fa-solid fa-chevron-left"
                />
              </div>
              <div class="tw-w-10 tw-text-center">
                <q-btn
                  size="10px"
                  padding="1px"
                  flat
                  icon="fa-solid fa-chevron-right"
                />
              </div>
              <button class="tw-pl-20 ">
                <q-btn size="10px" flat padding="1px" icon="fa-solid fa-question" />
              </button>
            </div>
          </CardComponent>

          <CardComponent class="tw-w-60 height-full-card">
            <h1 class="tw-text-black tw-font-semibold tw-text-xl">Sorting :</h1>
            <div class="tw-mt-4">
              <q-btn-dropdown
                class="tw-w-full justify-between-btn date-btn tw-rounded-lg"
                align="left"
                dropdown-icon="expand_more"
                no-caps
                color="grey"
                outline
                :label="selectedColumn"
              >
                <q-list>
                  <q-item
                    clickable
                    v-for="column in dataColumns"
                    :key="column.name"
                    @click="handleColumnClick(column.name)"
                    persistent
                    >{{ column.name }}</q-item
                  >
                </q-list>
              </q-btn-dropdown>
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
import DateInputComponent from 'src/components/DateInputComponent.vue';
import { ref } from 'vue';

export default {
  name: 'DailyRoomPage',
  components: { CardComponent, TableComponent, DateInputComponent },
  setup() {
    const selectedColumn = ref(dataColumns.name);

    const handleColumnClick = (columnName) => {
      selectedColumn.value = columnName;
    };
    return {
      dataColumns,
      dataRows,
      handleColumnClick,
      selectedColumn,
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
