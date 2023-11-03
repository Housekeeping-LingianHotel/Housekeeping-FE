<template>
  <q-page class="container bg-white flex">
    <CardComponent></CardComponent>
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';

export default {
    name: "TaskReportPage",
    components: { CardComponent }
};
</script>
