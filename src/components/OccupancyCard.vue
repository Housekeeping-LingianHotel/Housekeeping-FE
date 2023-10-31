<template>
  <CardComponent></CardComponent>
</template>
<script>
import { defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';

export default defineComponent({
  name: 'OccupancyCard',
  components: { CardComponent },
  props: {
    title: {
      type: String,
      required: true,
    },

    roomTotal: {
      type: String,
      default: '',
    },

    personTotal: {
      type: String,
      default: '#',
    },
  },
});
</script>
<style></style>
