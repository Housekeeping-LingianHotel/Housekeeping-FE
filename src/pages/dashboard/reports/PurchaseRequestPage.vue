<template>
  <q-page class="tw-p-8">
    <CardComponent class="tw-p-3">
      <div class="tw-mt-4 tw-flex tw-justify-start tw-overflow-hidden">
        <div class="tw-flex-column tw-max-w-full">
          <div>
            <label><b>Form Date</b></label>
            <label class="tw-ml-8"><b>:</b></label>
            <DateInputComponent class="tw-ml-6 tw-rounded-lg"/>

          </div>
          <div class="tw-mt-2">
            <label><b>To Date</b></label>
            <label class="tw-ml-12"><b>:</b></label>
           <DateInputComponent class="tw-ml-6 tw-rounded-lg"/>
          </div>
          <div class="tw-flex tw-flex-row tw-mt-2">
            <div class="tw-mt-1">
              <label><b>Departement</b></label>
              <label class="tw-ml-3"><b>:</b></label>
          </div>
          <q-input standout v-model="text" class="inputtext tw-ml-6" outlined color="grey" />
          </div>
        </div>

        <div class="tw-max-w-full">
          <div class="tw-flex tw-flex-col tw-ml-4">
            <q-checkbox v-model="teal" label="Exclude Outstanding" color="teal" dense class="tw-py-1" />
            <q-checkbox v-model="batu" label="Exclude Expired" color="teal" dense class="tw-py-1" />
            <q-checkbox v-model="kam" label="Exclude Approved" color="teal" dense class="tw-py-1"/>
            <q-checkbox v-model="amba" label="Exclude Rejected" color="teal" dense class="tw-py-1"/>
          </div>
        </div>
        <div class="tw-flex  ">
      
          <label for="select" class="tw-ml-5 tw-font-medium tw-mt-2">Status Of P/R</label>
         <q-btn-dropdown
                  class="tw-w-44 justify-between-btn date-btn tw-rounded-lg tw-h-10 tw-ml-2"
                  align="left"
                  dropdown-icon="expand_more"
                  no-caps
                  color="grey"
                  outline
                  label="Opened P/R"
                  
                >
                  <q-list>
                    <q-item clickable>Opened P/R</q-item>
                    <q-item clickable>Closed</q-item>
                    <q-item clickable>Cancel</q-item>

                  </q-list>
                </q-btn-dropdown>
    
        </div>
      </div>
      <div class="tw-mt-5">
        <div class="tw-flex justify-end">
          <q-btn
            class="tw-mx-1"
            icon="fa-regular fa-square-check"
            style="color: #069550"
            flat
            round
            size="23px"
            padding="5px"
          />

           <q-btn
            class="tw-mx-1"
            icon="o_print"
            style="color: #069550"
            flat
            round
            size="24px"
            padding="5px"
          />
        </div>
        <div class="tw-mt-6">
          <TableComponent
            :columns="dataColumns"
            :rows="dataRows"
            :hide-pagination="true"
          />
        </div>
      </div>
    </CardComponent>
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import TableComponent from 'src/components/TableComponent.vue';
import DateInputComponent from 'src/components/DateInputComponent.vue';
import {ref} from "vue"


export default {
  name: 'PurchaseRequestPage',
  components: { CardComponent, TableComponent, DateInputComponent, },
  setup() {
    return {
      teal: ref(true),
      batu: ref(true),
      kam: ref(true),
      amba: ref(true),
      text: ref(''),
      dataColumns,
      dataRows,
    };
  },
};

const dataColumns = [
  {
    name: 'pr-number',
    required: true,
    label: 'PR-Number',
    align: 'left',
    field: (row) => row.number,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: 'issudate',
    align: 'left',
    label: 'IssuDate',
    field: 'issudate',
    sortable: true,
  },
  {
    name: 'Required',
    align: 'left',
    label: 'Required',
    field: 'Required',
    sortable: true,
  },
  {
    name: 'ArtNo',
    align: 'left',
    label: 'ArtNo',
    field: 'Artno',
    sortable: true,
  },
  {
    name: 'Description',
    label: 'Description',
    field: 'description',
    sortable: true,
    align: 'left',
  },
  {
    name: 'Quantity',
    label: 'Quantity',
    field: 'quantity',
    align: 'left',
  },
  {
    name: 'd-unit',
    label: 'D-Unit',
    field: 'd-unit',
    align: 'left',
  },

  {
    name: 'Cont.',
    label: 'Cont.',
    field: 'Cont.',
    align: 'left',
  },
  {
    name: 'ID',
    label: 'ID',
    field: 'ID',
    align: 'left',
  },
  {
    name: 'PO-number',
    label: 'PO-number',
    field: 'PO-number',
    align: 'left',
  },
  {
    name: 'Date',
    label: 'Date',
    field: 'Date',
    align: 'left',
  },
  {
    name: 'AccountNo',
    label: 'Account No',
    field: 'accountno',
    align: 'left',
  },
  {
    name: 'Approvereject',
    label: 'Approve / Reject',
    field: 'aprrovereject',
    align: 'left',
  },
];

const dataRows = [
  {
    number: 101,
    issudate: '2023-11-15',
    Required: 'Yes',
    Artno: 'D234',
    description: 'Product D',
    quantity: 7,
    'd-unit': 'lbs',
    'Cont.': 'Container 4',
    ID: 1011,
    'PO-number': 'PO-011',
    Date: '2023-11-16',
    accountno: 'ACC-011',
    aprrovereject: 'Approve',
  },
  {
    number: 102,
    issudate: '2023-11-17',
    Required: 'No',
    Artno: 'E567',
    description: 'Product E',
    quantity: 12,
    'd-unit': 'kg',
    'Cont.': 'Container 5',
    ID: 1012,
    'PO-number': 'PO-012',
    Date: '2023-11-18',
    accountno: 'ACC-012',
    aprrovereject: 'Reject',
  },
  {
    number: 103,
    issudate: '2023-11-19',
    Required: 'Yes',
    Artno: 'F890',
    description: 'Product F',
    quantity: 20,
    'd-unit': 'oz',
    'Cont.': 'Container 6',
    ID: 1013,
    'PO-number': 'PO-013',
    Date: '2023-11-20',
    accountno: 'ACC-013',
    aprrovereject: 'Approve',
  },
  {
    number: 104,
    issudate: '2023-11-21',
    Required: 'Yes',
    Artno: 'G123',
    description: 'Product G',
    quantity: 9,
    'd-unit': 'g',
    'Cont.': 'Container 7',
    ID: 1014,
    'PO-number': 'PO-014',
    Date: '2023-11-22',
    accountno: 'ACC-014',
    aprrovereject: 'Approve',
  },
  {
    number: 105,
    issudate: '2023-11-23',
    Required: 'No',
    Artno: 'H456',
    description: 'Product H',
    quantity: 15,
    'd-unit': 'lbs',
    'Cont.': 'Container 8',
    ID: 1015,
    'PO-number': 'PO-015',
    Date: '2023-11-24',
    accountno: 'ACC-015',
    aprrovereject: 'Reject',
  },
  {
    number: 106,
    issudate: '2023-11-25',
    Required: 'Yes',
    Artno: 'I789',
    description: 'Product I',
    quantity: 18,
    'd-unit': 'kg',
    'Cont.': 'Container 9',
    ID: 1016,
    'PO-number': 'PO-016',
    Date: '2023-11-26',
    accountno: 'ACC-016',
    aprrovereject: 'Approve',
  },
  {
    number: 107,
    issudate: '2023-11-27',
    Required: 'Yes',
    Artno: 'J012',
    description: 'Product J',
    quantity: 6,
    'd-unit': 'oz',
    'Cont.': 'Container 10',
    ID: 1017,
    'PO-number': 'PO-017',
    Date: '2023-11-28',
    accountno: 'ACC-017',
    aprrovereject: 'Approve',
  },
  {
    number: 108,
    issudate: '2023-11-29',
    Required: 'No',
    Artno: 'K345',
    description: 'Product K',
    quantity: 11,
    'd-unit': 'g',
    'Cont.': 'Container 11',
    ID: 1018,
    'PO-number': 'PO-018',
    Date: '2023-11-30',
    accountno: 'ACC-018',
    aprrovereject: 'Reject',
  },
  {
    number: 109,
    issudate: '2023-12-01',
    Required: 'Yes',
    Artno: 'L678',
    description: 'Product L',
    quantity: 14,
    'd-unit': 'lbs',
    'Cont.': 'Container 12',
    ID: 1019,
    'PO-number': 'PO-019',
    Date: '2023-12-02',
    accountno: 'ACC-019',
    aprrovereject: 'Approve',
  },
  {
    number: 110,
    issudate: '2023-12-03',
    Required: 'No',
    Artno: 'M901',
    description: 'Product M',
    quantity: 8,
    'd-unit': 'kg',
    'Cont.': 'Container 13',
    ID: 1020,
    'PO-number': 'PO-020',
    Date: '2023-12-04',
    accountno: 'ACC-020',
    aprrovereject: 'Reject',
  },
];
</script>
<style>
.shadow {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.q-table th {
  @apply tw-text-sm tw-border-r-4 tw-border-t-0 tw-border-l-0 tw-border-b-0 tw-border-white;
}
.q-table tbody td {
  font-size: 14px;
  border-right: 4px solid white;
}
.q-table tbody tr:nth-child(even) {
  background-color: #fafafa;
}
.q-table__bottom {
  @apply tw-inline-flex tw-justify-between tw-text-sm tw-border-2 tw-border-b-0 tw-border-l-0 tw-border-r-0 tw-border-[#069550] tw-bg-[#fafafa] tw-relative;
}
.q-table__control:nth-child(2) {
  @apply tw-absolute;
}
.q-table__bottom .q-btn .q-icon {
  @apply tw-text-3xl tw-text-[#069550];
}
.disabled * {
  @apply tw-opacity-0;
}
.inputtext .q-field__control{
  width: 182px;
  height: 33px;
}

</style>
