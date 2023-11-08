<template>
  <q-page class="container bg-white flex">
  <CardComponent class="tw-overflow-x-auto tw-overflow-y-auto tw-m-8 tw-w-full bo">
    <!-- print logo -->
    <div class="tw-flex tw-justify-end tw-px-4">
      <q-btn round padding="8px" flat>
            <q-icon size="40px" color="green" name="o_print" />
          </q-btn> 
    </div>
    <table class=" tw-overflow-x-auto tw-overflow-y-auto tw-table tw-m-5 tw-shadow-md w-rounded-full tw-w-full">
        <thead>
          <tr>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
            <th class="tw-px-2 tw-py-2 tw-border-r-4 tw-border-white"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="tw-px-4 tw-py-4 tw-text-black tw-text-center">Data 1</td>
            <td class="tw-px-4 tw-py-4 tw-text-black tw-text-center">Data 2</td>
            <td class="tw-px-4 tw-py-4 tw-text-black tw-text-center">Data 3</td>
            <td class="tw-px-4 tw-py-4 tw-text-black tw-text-center">Data 4</td>
            <td class="tw-px-4 tw-py-4 tw-text-black tw-text-center">Data 5</td>
            <td class="tw-px-4 tw-py-4 tw-text-black tw-text-center">Data 6</td>
          </tr>
        </tbody>
      </table>  
  </CardComponent>
  </q-page>
</template>
<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';

export default {
    name: "RoomCountPage",
    components: { CardComponent,}
};
</script>
