<template>
  <div class="card tw-bg-secondary tw-text-black tw-rounded-2xl">
    <h1 class="tw-text-center tw-font-bold tw-text-xs tw-p-1">{{ title }}</h1>
    <table class="tw-w-full">
      <thead
        class="tw-border-t-2 tw-border-b-2 tw-border-black tw-text-[10px] tw-font-light"
      >
        <tr>
          <td align="center" class="tw-border-r-2 tw-border-black">Room</td>
          <td align="center">Person</td>
        </tr>
      </thead>
      <tbody class="tw-text-4xl tw-font-extrabold">
        <tr>
          <td align="center" class="tw-border-r-2 tw-border-black">
            {{ roomTotal }}
          </td>
          <td align="center">{{ personTotal }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OccupancyCard',
  props: {
    title: {
      type: String,
      default: 'loading',
      required: true,
    },

    roomTotal: {
      type: String,
      default: '0',
      required: true,
    },

    personTotal: {
      type: String,
      default: '0',
      required: true,
    },
  },
});
</script>
<style>
.card {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 146px;
}
</style>
