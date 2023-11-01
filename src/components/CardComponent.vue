<template>
  <q-card class="my-card tw-rounded-[20px] tw-border-[1px]">
    <q-card-section class="tw-h-full">
      <slot></slot>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',
});
</script>

<style>
.my-card {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-color: rgba(0, 0, 0, 0.2);
}
</style>
