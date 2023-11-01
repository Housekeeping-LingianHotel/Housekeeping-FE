<template>
  <q-page class="tw-p-8">
    <div
      class="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-gap-5 tw-items-center"
    >
      <CardComponent v-for="datas in cardData" :key="datas.id" class="tw-p-5">
        <h1 class="tw-text-black tw-font-semibold tw-text-xl">
          {{ datas.name }}
        </h1>
        <table>
          <thead>
            <tr>
              <td class="tw-opacity-0 tw-p-3">.</td>
              <td align="center" class="tw-px-3">Room</td>
              <td align="center" class="tw-p-3">Person</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in datas.dataName" :key="item.id">
              <td class="tw-py-1 tw-px-3">
                {{ item.name }}
              </td>
              <td align="center">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">
                  {{ item.room }}
                </p>
              </td>
              <td align="center" class="tw-p-3">
                <p class="shadow tw-w-[111px] tw-py-1 tw-font-semibold">
                  {{ item.person }}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </CardComponent>
    </div>
    <div class="tw-mt-10">
      <TableComponent
        :columns="dataColumns"
        :rows="dataRows"
        :hide-pagination="false"
      />
    </div>
  </q-page>
</template>

<script>
import CardComponent from 'src/components/CardComponent.vue';
import TableComponent from 'src/components/TableComponent.vue';

const cardData = [
  {
    id: 1,
    name: 'Arrival',
    dataName: [
      {
        id: 1,
        name: 'Checked in Today',
        room: '12',
        person: '24',
      },
      {
        id: 2,
        name: 'Arriving',
        room: '60',
        person: '70',
      },
      {
        id: 3,
        name: 'Total Arrival',
        room: '72',
        person: '94',
      },
    ],
  },
  {
    id: 2,
    name: 'Departure',
    dataName: [
      {
        id: 1,
        name: 'Departed Today',
        room: '12',
        person: '24',
      },
      {
        id: 2,
        name: 'Departing',
        room: '60',
        person: '70',
      },
      {
        id: 3,
        name: 'Total Departure',
        room: '72',
        person: '94',
      },
    ],
  },
];

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
      cardData,
    };
  },
};
</script>

<style>
.shadow {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
