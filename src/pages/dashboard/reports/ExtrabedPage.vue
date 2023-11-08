<template>
  <q-page class="container bg-white flex tw-flex-col tw-py-4 tw-px-10">
    <!-- BTNs -->
    <div class="tw-flex tw-justify-end">
      <q-btn round padding="8px" flat>
        <q-icon size="36px" color="green" name="o_check_box" />
      </q-btn>

      <q-btn round padding="8px" flat>
        <q-icon size="36px" color="green" name="o_print" />
      </q-btn>
    </div>

    <!-- Card -->
    <card-component class="tw-w-full" classname="tw-h-full">
      <div class="tw-px-4 tw-py-2 tw-flex tw-flex-col tw-gap-6">
        <!-- Filtering -->
        <div class="tw-flex tw-gap-8">
          <!-- From-To Date Input -->
          <table class="tw-flex-1">
            <tr class="tw-text-sm tw-font-bold">
              <td>
                <h6>From Date</h6>
              </td>
              <td class="tw-pr-4">:</td>
              <td>
                <date-input-component
                  @getDate="getFromDate"
                  @getFormattedDate="getFromFormattedDate"
                />
              </td>
            </tr>

            <tr class="tw-text-sm tw-font-bold">
              <td>
                <h6>To Date</h6>
              </td>
              <td class="tw-pr-4">:</td>
              <td>
                <date-input-component
                  @getDate="getToDate"
                  @getFormattedDate="getToFormattedDate"
                />
              </td>
            </tr>
          </table>

          <!-- Article For Dropdown -->
          <div class="tw-flex-1 tw-flex tw-items-center tw-gap-3">
            <h6 class="tw-text-sm tw-font-bold">Article For</h6>
            <h6 class="tw-text-sm tw-font-bold">:</h6>
            <q-btn-dropdown
              class="tw-h-fit tw-w-40 justify-between-btn black-text-btn"
              align="left"
              dropdown-icon="expand_more"
              color="grey"
              label="Extra Bed"
              no-caps
              outline
            >
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Photos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Videos</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Articles</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>

          <!-- Display Radios -->
          <div class="tw-flex-1 tw-flex tw-items-center tw-gap-4">
            <h6 class="tw-text-sm tw-font-bold">Display</h6>
            <div class="tw-flex tw-gap-2">
              <q-radio
                color="green"
                v-model="displayRadio"
                val="Detail"
                label="Detail"
                size="sm"
              />
              <q-radio
                color="green"
                v-model="displayRadio"
                val="Summary"
                label="Summary"
                size="sm"
              />
            </div>
          </div>
        </div>

        <!-- Table -->
        <div>
          <table-component :columns="tableColumns" :rows="tableRows" />
        </div>
      </div>
    </card-component>
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import DateInputComponent from 'src/components/DateInputComponent.vue';
import TableComponent from 'src/components/TableComponent.vue';
import { ColumnInterface } from 'src/types/table';
import { ref } from 'vue';

const tableColumns: ColumnInterface[] = [
  {
    name: 'name',
    label: 'Date',
    field: (row) => row.name,
    align: 'left',
    required: true,
    sortable: true,
  },
  {
    name: 'room-no',
    align: 'left',
    label: 'Room No.',
    field: 'room_no',
    sortable: true,
  },
  {
    name: 'used',
    align: 'left',
    label: 'Used',
    field: 'used',
    sortable: true,
  },
  {
    name: 'remain',
    align: 'left',
    label: 'Remain',
    field: 'remain',
    sortable: true,
  },
];

const tableRows = [
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
  {
    name: '10/02/03',
    room_no: '01',
    used: 0,
    remain: 10,
  },
];

export default {
  name: 'ExtrabedPage',
  components: { CardComponent, DateInputComponent, TableComponent },
  data() {
    return {
      tableColumns,
      tableRows,
    };
  },
  setup() {
    return {
      displayRadio: ref('Detail'),
      fromDate: '',
      fromFormattedDate: '',
      toFormattedDate: '',
      toDate: '',
    };
  },
  methods: {
    getFromDate(date: string) {
      this.fromDate = date;
      console.log('From date:', this.fromDate);
    },
    getFromFormattedDate(formattedDate: string) {
      this.fromFormattedDate = formattedDate;
      console.log('From formatted date:', this.fromFormattedDate);
    },
    getToDate(date: string) {
      this.toDate = date;
      console.log('To date:', this.toDate);
    },
    getToFormattedDate(formattedDate: string) {
      this.toFormattedDate = formattedDate;
      console.log('To formatted date:', this.toFormattedDate);
    },
  },
};
</script>

<style></style>
