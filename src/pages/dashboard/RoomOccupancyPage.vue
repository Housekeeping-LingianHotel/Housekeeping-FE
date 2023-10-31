<template>
  <q-page class="container bg-white">
    <div class="tw-flex tw-items-center tw-justify-center">
      <occupancy-card></occupancy-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import OccupancyCard from 'src/components/OccupancyCard.vue';

export default {
  name: 'RoomOccupancyPage',
  components: { OccupancyCard },
  props: {},
};
</script>
