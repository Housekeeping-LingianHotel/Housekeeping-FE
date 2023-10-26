<template>
  <q-card class="my-card">
    <q-card-section>
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
  border-radius: 15px;
}
</style>
