<template>
  <div class="tableComp tw-mt-10">
    <q-table
      :rows="rows"
      :columns="columns"
      row-key="name"
      square
      :table-header-style="{
        backgroundColor: '#069550',
        color: '#ffffff',
        padding: '10px',
      }"
      :card-style="{ boxShadow: 'none' }"
      rows-per-page-label="Show"
    />
  </div>
</template>

<script>
export default {
  name: 'TableComponent',
  props: {
    columns: Array,
    rows: Array,
  },
};
</script>

<style>
.tableComp .q-table th {
  @apply tw-text-sm tw-border-r-4 tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-white;
}
.tableComp .q-table tbody td {
  font-size: 14px;
  border-right: 4px solid white;
}
.tableComp .q-table tbody tr:nth-child(even) {
  background-color: #fafafa;
}
.tableComp .q-table__bottom {
  @apply tw-inline-flex tw-justify-between tw-text-sm tw-border-2 tw-border-b-0 tw-border-l-0 tw-border-r-0 tw-border-[#069550] tw-bg-[#fafafa] tw-relative;
}
.tableComp .q-table__control:nth-child(2) {
  @apply tw-absolute;
}
.tableComp .q-table__bottom .q-btn .q-icon {
  @apply tw-text-3xl tw-text-[#069550];
}
.tableComp .disabled * {
  @apply tw-opacity-0;
}
</style>
