<template>
  <q-page class="container bg-white flex">
    <div class="container tw-m-8 tw-overflow-auto tw-overflow-x-hidden tw-rounded-xl tw-border tw-border-gray-300">
      <div class="tw-flex justify-end">
          <button class="tw-mx-1">
            <q-icon
              name="fa-regular fa-square-check"
              class="tw-text-4xl tw-py-2"
              style="color: #069550"
            />
          </button>
          <button class="tw-mx-2">
            <q-icon
              name="fa-solid fa-print"
              class="tw-text-4xl tw-px-1"
              style="color: #069550"
            />
          </button>
        </div>
      <div class="tw-flex">
        <p class="tw-font-bold tw-text-1xl tw-ml-5 tw-mt-5">Display</p>
        <select class="tw-ml-2 tw-w-24 tw-mt-5 tw-border-separate tw-rounded-md tw-border tw-border-gray-300 tw-font-bold">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      <div class="tw-flex tw-justify-between">
        <div class="tw-flex"> 
        <p class="tw-font-bold tw-text-1x1 tw-ml-5 tw-mt-5">Sorting</p>
        <select class="tw-ml-2 tw-mt-5 tw-w-24 tw-rounded-md tw-border tw-border-gray-300 tw-font-bold">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div class="tw-flex">
        <p class="tw-font-bold tw-text-1x1">From</p>
        <input type="text" name="from" id="from" class="tw-bg-gray-100 tw-h-6 tw-font-bold tw-rounded-md tw-border tw-border-gray-300 tw-h-5 tw-py-1 tw-mx-2 text-black font-semibold placeholder-gray-400 placeholder-opacity-100 md:placeholder-opacity-0">
        <p class="tw-font-bold tw-text-1x1">To</p>
        <input type="text" name="from" id="from" class="tw-bg-gray-100 tw-h-6 tw-font-bold tw-rounded-md tw-border tw-border-gray-300 tw-h-5 tw-py-1 tw-mx-2 text-black font-semibold placeholder-gray-400 placeholder-opacity-100 md:placeholder-opacity-0">
      </div>
        </div>
      <table class="tw-table tw-m-5 tw-rounded-full">
        <thead>
          <tr>
            <th class="tw-px-11 tw-py-2">Room No</th>
            <th class="tw-px-11 tw-py-2">Reason/ Room 0-0-0</th>
            <th class="tw-px-11 tw-py-2">0-0-0 Until</th>
            <th class="tw-px-16 tw-py-2">ID</th>
            <th class="tw-px-16 tw-py-2">Dept</th>
            <th class="tw-px-16 tw-py-2">Description</th>
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
    </div>
  </q-page>
</template>

<script lang="ts">
export default {
  name: 'OOOPage',
};
</script>
