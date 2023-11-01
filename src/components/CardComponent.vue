<template>
  <div class="container">
    <q-card
      class="my-card tw-rounded-[20px] tw-border-[1px] tw-border-[#00000033]"
    >
      <q-card-section class="tw-h-full">
        <slot></slot>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardComponent',
  props: {
    classname: String,
  },
});
</script>

<style>
.container .my-card {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
