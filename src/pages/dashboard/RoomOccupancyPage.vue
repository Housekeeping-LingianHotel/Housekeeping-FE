<template>
  <q-page class="container bg-white">
    <div class="tw-flex tw-items-center tw-justify-between tw-mt-16 tw-px-5">
      <occupancy-card
        v-for="data in cardData"
        :key="data.id"
        :title="data.title"
        :roomTotal="data.roomTotal"
        :personTotal="data.personTotal"
      ></occupancy-card>
    </div>
    <div class="tw-px-5">
      <div
        class="tw-mt-5 tw-w-full tw-border-[1px] tw-border-black tw-rounded-[20px]"
      >
        <CardComponent>
          <div class="flex tw-justify-between tw-items-center tw-px-5">
            <h1 class="tw-text-[28px] tw-font-semibold">Percentage</h1>
            <div class="tw-flex tw-items-center tw-gap-3">
              <q-select
                borderless
                v-model="model"
                transition-show="jump-up"
                transition-hide="jump-up"
                :options="options"
                label="Show by Month"
                label-color="dark-grey"
                color="grey"
                dropdown-icon="keyboard_arrow_down"
                style="width: 150px"
              />
            </div>
          </div>
          <div>
            <Bar :data="data" :options="optionsChart" :plugins="chartPlugins" />
          </div>
        </CardComponent>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';
import OccupancyCard from 'src/components/OccupancyCard.vue';
import CardComponent from 'src/components/CardComponent.vue';
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

const chartPlugins = [Legend, Title, Tooltip];

ChartJS.register(BarElement, CategoryScale, LinearScale);

const data = {
  labels: [
    'Oc.Room',
    'Com.Room',
    'HU.Room',
    'OOO.Room',
    'Inact.Room',
    'Est.Room',
  ],
  datasets: [{ data: [5, 0, 4, 15, 4, 14] }],
};

const optionsChart = {
  responsive: true,
  maintainAspectRatio: false,
};

const cardData = [
  {
    id: 1,
    title: 'Occupied Room',
    roomTotal: '01',
    personTotal: '02',
  },
  {
    id: 2,
    title: 'Complimentary Room',
    roomTotal: '02',
    personTotal: '01',
  },
  {
    id: 3,
    title: 'House Use Room',
    roomTotal: '03',
    personTotal: '04',
  },
  {
    id: 4,
    title: 'Out-Of-Order Room',
    roomTotal: '10',
    personTotal: '02',
  },
  {
    id: 5,
    title: 'Inactive Room',
    roomTotal: '09',
    personTotal: '04',
  },
  {
    id: 6,
    title: 'Estimated Occupied',
    roomTotal: '08',
    personTotal: '03',
  },
];

export default {
  name: 'RoomOccupancyPage',
  components: { OccupancyCard, CardComponent, Bar },
  setup() {
    return {
      cardData,
      model: ref(null),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
      chartPlugins,
    };
  },
  data() {
    return {
      data,
      optionsChart,
    };
  },
};
</script>

<style></style>
