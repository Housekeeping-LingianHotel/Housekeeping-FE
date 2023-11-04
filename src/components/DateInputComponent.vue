<template>
  <q-btn-dropdown
    class="tw-w-fit justify-between-btn date-btn"
    align="left"
    dropdown-icon="expand_more"
    icon="calendar_today"
    color="grey"
    :label="formattedDate"
    no-caps
    outline
  >
    <q-date
      v-model="inputtedDate"
      @change="formatDate"
      color="green"
      today-btn
    />
  </q-btn-dropdown>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DateInputComponent',
  setup() {
    return {
      inputtedDate: ref('2023/01/01'),
      formattedDate: ref(''),
    };
  },
  mounted() {
    this.formatDate();
  },
  watch: {
    inputtedDate(newDate) {
      this.inputtedDate = newDate;
      this.formatDate();
    },
  },
  methods: {
    formatDate() {
      const date = new Date(this.inputtedDate);
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      };
      this.formattedDate = date.toLocaleDateString('en-gb', options);

      this.$emit('getDate', this.inputtedDate);
      this.$emit('getFormattedDate', this.formattedDate);
    },
  },
});
</script>

<style>
.date-btn {
  padding: 0 4px 0px 8px;
}
.date-btn .q-btn__content {
  color: black;
}
.date-btn .q-btn__content .on-left {
  color: rgba(22, 167, 92, 1);
}
</style>
