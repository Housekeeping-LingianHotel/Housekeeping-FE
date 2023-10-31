<template>
  <q-page class="tw-p-8">
    <div
      class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-gap-5 tw-items-center"
    >
      <CardComponent class="tw-p-5">
        <h1 class="tw-text-black tw-font-semibold tw-text-xl">Arrival</h1>
        <table>
          <thead>
            <tr>
              <td class="tw-opacity-0 tw-p-3">.</td>
              <td align="center" class="tw-px-3">Room</td>
              <td align="center" class="tw-p-3">Person</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tw-py-1 tw-px-3">Checked in Today</td>
              <td align="center">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">12</p>
              </td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">24</p>
              </td>
            </tr>
            <tr>
              <td class="tw-p-3">Arriving</td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">60</p>
              </td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">70</p>
              </td>
            </tr>
            <tr>
              <td class="tw-p-3">Total Arrival</td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">72</p>
              </td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">94</p>
              </td>
            </tr>
          </tbody>
        </table>
      </CardComponent>
      <CardComponent class="tw-p-5">
        <h1 class="tw-text-black tw-font-semibold tw-text-xl">Departure</h1>
        <table>
          <thead>
            <tr>
              <td class="tw-opacity-0 tw-p-3">.</td>
              <td align="center" class="tw-px-3">Room</td>
              <td align="center" class="tw-p-3">Person</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tw-py-1 tw-px-3">Departed Today</td>
              <td align="center">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">12</p>
              </td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">24</p>
              </td>
            </tr>
            <tr>
              <td class="tw-p-3">Departing</td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">60</p>
              </td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">70</p>
              </td>
            </tr>
            <tr>
              <td class="tw-p-3">Total Departure</td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">72</p>
              </td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">94</p>
              </td>
            </tr>
          </tbody>
        </table>
      </CardComponent>
    </div>
    <div class="tw-mt-10">
      <TableComponent :columns="dataColumns" :rows="dataRows" />
    </div>
  </q-page>
</template>

<script>
import CardComponent from 'src/components/CardComponent.vue';
import TableComponent from 'src/components/TableComponent.vue';

const dataColumns = [
  {
    name: 'room-number',
    required: true,
    label: 'Room Number',
    align: 'left',
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'room-status',
    align: 'left',
    label: 'Room Status',
    field: 'roomstatus',
    sortable: true,
  },
  {
    name: 'guest',
    label: 'Guest Name',
    field: 'guest',
    sortable: true,
    align: 'left',
  },
  { name: 'reserve', label: 'Reserve Name', field: 'reserve', align: 'left' },
  { name: 'arrival', label: 'Arrival', field: 'arrival', align: 'left' },
  { name: 'departure', label: 'Departure', field: 'departure', align: 'left' },
  {
    name: 'deptime',
    label: 'DepTime',
    field: 'deeptime',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: 'left',
  },
  {
    name: 'nation',
    label: 'Nation',
    field: 'nation',
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: 'left',
  },
];

const dataRows = [
  {
    name: '1',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
  {
    name: '2',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
  {
    name: '3',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
  {
    name: '4',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
  {
    name: '5',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
  {
    name: '6',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
  {
    name: '7',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
  {
    name: '8',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
  {
    name: '9',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
  {
    name: '10',
    roomstatus: 'Expected Departure',
    guest: 'Andi',
    reserve: 'PT.KAI',
    arrival: '11.00',
    departure: '06.00',
    deeptime: '06.06',
    nation: 'Indonesia',
  },
];

export default {
  name: 'ArrivalPage',
  components: { CardComponent, TableComponent },
  setup() {
    return {
      dataColumns,
      dataRows,
    };
  },
};
</script>

<style>
.shadow {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
