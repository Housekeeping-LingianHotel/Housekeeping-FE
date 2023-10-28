<template>
  <q-page class="container bg-white">
    <page-subheading icon="task" />
    <div class="tw-flex tw-justify-between tw-gap-5 tw-p-8">
      <!-- <h1 class="tw-text-black tw-font-semibold tw-text-xl">Arrival</h1> -->
      <q-table
        title="Arrival"
        :rows="rows"
        :columns="columns"
        row-key="name"
        hide-pagination
        separator="none"
      />
      <!-- <h1 class="tw-text-black tw-font-semibold tw-text-xl">Departure</h1> -->
      <q-table
        title="Departure"
        :rows="rows"
        :columns="columns"
        row-key="name"
        hide-pagination
        separator="none"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import PageSubheading from 'src/components/PageSubheading.vue';
// import CardComponent from 'src/components/CardComponent.vue';

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Dessert (100g serving)',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: false,
  },
  {
    name: 'room',
    align: 'center',
    label: 'Room',
    field: 'calories',
    sortable: false,
  },
  { name: 'person', label: 'Person', field: 'fat', sortable: false },
];

const rows = [
  {
    name: 'Checked in today',
    calories: 159,
    fat: 6.0,
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
  },

  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
  },
];

export default {
  name: 'ArrivalPage',
  components: {
    PageSubheading,
    // CardComponent
  },
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
