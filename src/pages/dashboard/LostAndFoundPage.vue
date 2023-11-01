<template>
  <q-page
    class="container tw-bg-white tw-flex tw-flex-col tw-gap-8 tw-py-4 tw-px-6"
  >
    <!-- Top Side -->
    <div class="tw-h-fit tw-flex tw-gap-10">
      <!-- Pie Chart -->
      <div class="tw-flex tw-flex-1 tw-gap-8 tw-items-center">
        <div class="tw-flex-1">
          <Pie :data="data" :options="options" />
        </div>

        <div
          class="tw-flex tw-flex-col tw-h-[50%] tw-flex-1 tw-text-xl tw-font-medium"
        >
          <div class="tw-flex tw-flex-1 tw-gap-4 tw-items-center">
            <span
              class="tw-w-5 tw-h-5 tw-rounded-full tw-bg-[rgba(54,78,48,1)]"
            />
            Lost
          </div>

          <div class="tw-flex tw-flex-1 tw-gap-4 tw-items-center">
            <span
              class="tw-w-5 tw-h-5 tw-rounded-full tw-bg-[rgba(84,133,76,1)]"
            />
            Found
          </div>

          <div class="tw-flex tw-flex-1 tw-gap-4 tw-items-center">
            <span
              class="tw-w-5 tw-h-5 tw-rounded-full tw-bg-[rgba(139,170,132,1)]"
            />
            Progress
          </div>
        </div>
      </div>

      <!-- Found & Lost -->
      <div class="tw-flex tw-flex-1 tw-gap-4">
        <card-component class="tw-w-full">
          <div
            class="tw-flex tw-flex-col tw-h-full tw-gap-4 tw-px-8 tw-py-4 tw-justify-center"
          >
            <q-icon
              class="tw-p-[6px] tw-absolute tw-top-2 tw-left-2 tw-rounded-full tw-bg-[rgba(6,149,80,1)]"
              name="o_task_alt"
              color="white"
              size="20px"
            />
            <h1 class="tw-text-8xl tw-font-bold tw-text-center">6</h1>
            <h5 class="tw-text-3xl tw-font-bold tw-text-center">Found</h5>
          </div>
        </card-component>

        <card-component class="tw-w-full">
          <div
            class="tw-flex tw-flex-col tw-h-full tw-gap-4 tw-px-8 tw-py-4 tw-justify-center"
          >
            <q-icon
              class="tw-p-[6px] tw-absolute tw-top-2 tw-left-2 tw-rounded-full tw-bg-[rgba(6,149,80,1)]"
              name="o_cancel"
              color="white"
              size="20px"
            />
            <h1 class="tw-text-8xl tw-font-bold tw-text-center">7</h1>
            <h5 class="tw-text-3xl tw-font-bold tw-text-center">Lost</h5>
          </div>
        </card-component>
      </div>
    </div>

    <TableComponent :columns="columns" :rows="rows" />
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'vue-chartjs';
import TableComponent from 'src/components/TableComponent.vue';
import { ColumnInterface } from 'src/types/table';

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ['Lost', 'Found', 'Progress'],
  datasets: [
    {
      backgroundColor: [
        'rgba(54,78,48,1)',
        'rgba(84,133,76,1)',
        'rgba(139,170,132,1)',
      ],
      data: [40, 20, 8],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

const columns: ColumnInterface[] = [
  {
    name: 'number-date',
    label: 'Number Date',
    field: (row) => row.name,
    align: 'left',
    required: true,
    sortable: true,
  },
  {
    name: 'reference-number',
    label: 'Reference No.',
    field: 'reference_no',
    align: 'left',
    sortable: true,
  },
  {
    name: 'time',
    label: 'Time',
    field: 'time',
    align: 'left',
    sortable: true,
  },
  {
    name: 'room-no',
    label: 'Room No.',
    field: 'room_no',
    align: 'left',
    sortable: true,
  },
  { name: 'id', label: 'ID', field: 'id', align: 'left', sortable: true },
  {
    name: 'item-desc',
    label: 'Item Description',
    field: 'item_desc',
    sortable: true,
    align: 'left',
  },
  {
    name: 'reported-by',
    label: 'Reported By',
    field: 'reported_by',
    sortable: true,
    align: 'left',
  },
  {
    name: 'phone-no',
    label: 'Phone No.',
    field: 'phone_no',
    sortable: true,
    align: 'left',
  },
  {
    name: 'reported-date',
    label: 'Reported Date',
    field: 'reported_date',
    sortable: true,
    align: 'left',
  },
  {
    name: 'location',
    label: 'Location',
    field: 'location',
    sortable: true,
    align: 'left',
  },
];

const rows = [
  {
    name: '1',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
  {
    name: '2',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
  {
    name: '3',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
  {
    name: '4',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
  {
    name: '5',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
  {
    name: '6',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
  {
    name: '7',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
  {
    name: '8',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
  {
    name: '9',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
  {
    name: '10',
    reference_no: '#123123',
    time: '10:00:02',
    room_no: 12,
    id: '33124',
    item_desc: 'Gone',
    reported_by: 'Me',
    phone_no: '+62 813-1313-1313',
    reported_date: '10 Des 2023',
    location: 'Lobby',
  },
];

export default {
  name: 'LostAndFoundPage',
  components: { CardComponent, Pie, TableComponent },
  data() {
    return {
      data,
      options,
      columns,
      rows,
    };
  },
};
</script>
