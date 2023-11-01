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
  </q-page>
</template>

<script lang="">
import OccupancyCard from 'src/components/OccupancyCard.vue';

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
  components: { OccupancyCard },
  setup() {
    return {
      cardData,
    };
  },
};
</script>
