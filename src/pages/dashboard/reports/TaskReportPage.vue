<template>
  <q-page class="container bg-white flex">
    <div class="tw-container tw-overflow-x-auto tw-overflow-y-auto tw-shadow-md tw-m-8 tw-rounded-xl tw-border tw-border-gray-300">

    </div>
    <card-component>

    </card-component>
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';

export default {
    name: "TaskReportPage",
    components: { CardComponent }
};
</script>
