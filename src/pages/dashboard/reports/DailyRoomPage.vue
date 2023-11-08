<template>
  <div class="dailyRoom">
    <q-page class="tw-p-8">
      <CardComponent class="tw-p-3">
        <div class="tw-flex justify-end">
          <q-btn
            class="tw-mx-1"
            icon="fa-regular fa-square-check"
            style="color: #069550"
            flat
            round
            size="23px"
            padding="5px"
          />

           <q-btn
            class="tw-mx-1"
            icon="o_print"
            style="color: #069550"
            flat
            round
            size="24px"
            padding="5px"
          />
        </div>
        <div class="tw-mt-6">
          <q-table
            :rows="rows"
            :columns="columns"
            row-key="name"
            square
            :card-style="{ boxShadow: 'none' }"
            hide-pagination
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
                class="tw-flex tw-flex-col md:tw-flex-row tw-justify-start tw-gap-5 tw-mt-4 tw-px-3"
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
                <button class="tw-pl-20">
                  <q-btn
                    size="10px"
                    flat
                    padding="1px"
                    icon="fa-solid fa-question"
                  />
                </button>
              </div>
            </CardComponent>

            <CardComponent class="tw-w-60 height-full-card">
              <h1 class="tw-text-black tw-font-semibold tw-text-xl">
                Sorting :
              </h1>
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
                      v-for="column in columns"
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
            <CardComponent class="tw-flex-1 height-full-card">
              <textarea
                class="tw-w-full tw-h-44 tw-p-0 tw-border-none tw-outline-none tw-resize-none overflow-auto"
              ></textarea>
            </CardComponent>
            <CardComponent class="tw-flex-1 height-full-card">
              <textarea
                class="tw-w-full tw-h-44 tw-p-0 tw-border-none tw-outline-none tw-resize-none overflow-auto"
              ></textarea>
            </CardComponent>
          </div>
        </div>
      </CardComponent>
    </q-page>
  </div>
</template>

<script>
import CardComponent from 'src/components/CardComponent.vue';
import DateInputComponent from 'src/components/DateInputComponent.vue';
import { ref } from 'vue';

export default {
  name: 'DailyRoomPage',
  components: { CardComponent, DateInputComponent },
  setup() {
    const selectedColumn = ref(columns.name);

    const handleColumnClick = (columnName) => {
      selectedColumn.value = columnName;
    };
    return {
      selectedColumn,
      columns,
      rows,
      handleColumnClick,
    };
  },
};

const columns = [
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
    name: 'status',
    align: 'left',
    label: 'Room Status',
    field: 'stat',
    sortable: true,
  },
  {
    name: 'guest',
    label: 'Guest',
    field: 'guest',
    sortable: true,
    align: 'left',
  },
  {
    name: 'MainGuestName',
    label: 'Main Guest Name',
    field: 'mainguest',
    align: 'left',
  },
  {
    name: 'arrtime',
    label: 'ArrTime',
    field: 'arrival',
    align: 'left',
  },

  {
    name: 'deptime',
    label: 'DepTime',
    field: 'deptime',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: 'left',
  },
  {
    name: 'reservename',
    label: 'Reserve Name',
    field: 'ReserveName',
    align: 'left',
  },
  {
    name: 'reservation',
    label: 'Reservation',
    field: 'reservation',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: 'left',
  },
];

const rows = [
  {
    number: '#212219',
    cat: 'Ambatublow',
    stat: '10:00:21',
    guest: 'DreamxBull',
    mainguest: 'Ambatukum',
    arrival: '11.00',
    departure: '06.00',
    deptime: '06.06',
    ReserveName: 'Dreamybull',
    reservation: 'yes',
  },
  {
    number: '#212220',
    cat: 'Ambatublow',
    stat: '10:01:21',
    guest: 'DreamyDog',
    mainguest: 'Ambatukum',
    arrival: '11.30',
    departure: '06.30',
    deptime: '06.36',
    ReserveName: 'Dreamydog',
    reservation: 'yes',
  },
  {
    number: '#212221',
    cat: 'Ambatublow',
    stat: '10:02:21',
    guest: 'DreamyCat',
    mainguest: 'Ambatukum',
    arrival: '12.00',
    departure: '07.00',
    deptime: '07.06',
    ReserveName: 'Dreamycat',
    reservation: 'yes',
  },
  {
    number: '#212222',
    cat: 'Ambatublow',
    stat: '10:03:21',
    guest: 'DreamyBird',
    mainguest: 'Ambatukum',
    arrival: '12.30',
    departure: '07.30',
    deptime: '07.36',
    ReserveName: 'Dreamybird',
    reservation: 'yes',
  },
  {
    number: '#212223',
    cat: 'Ambatublow',
    stat: '10:04:21',
    guest: 'DreamyFish',
    mainguest: 'Ambatukum',
    arrival: '01.00',
    departure: '08.00',
    deptime: '08.06',
    ReserveName: 'Dreamyfish',
    reservation: 'yes',
  },
];
</script>
<style>
.shadow {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.dailyRoom .q-table th {
  @apply tw-text-sm tw-border-r-4 tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-white;
}
.dailyRoom .q-table tbody td {
  font-size: 14px;
  border-right: 4px solid white;
}
.dailyRoom .q-table tbody tr:nth-child(even) {
  background-color: #fafafa;
}
.dailyRoom .q-table__bottom {
  @apply tw-inline-flex tw-justify-between tw-text-sm tw-border-2 tw-border-b-0 tw-border-l-0 tw-border-r-0 tw-border-[#069550] tw-bg-[#fafafa] tw-relative;
}
.dailyRoom .q-table__control:nth-child(2) {
  @apply tw-absolute;
}
.dailyRoom .q-table__bottom .q-btn .q-icon {
  @apply tw-text-3xl tw-text-[#069550];
}
.dailyRoom .disabled * {
  @apply tw-opacity-0;
}
</style>
