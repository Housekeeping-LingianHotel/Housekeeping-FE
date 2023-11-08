  <template>
    <q-page class="tw-container bg-white flex">
      <CardComponent class="tw-overflow-x-auto tw-overflow-y-auto tw-m-8 tw-w-full">
        <div class="tw-flex tw-flex-col tw-gap-2">
        <!-- Display Dropdown & Print Btn -->
        <div class="tw-w-full tw-flex tw-justify-between">
          <!-- Display Dropdown -->
          <div class="tw-flex tw-items-center tw-gap-4">
            <h6 class="tw-text-lg tw-font-bold">Display</h6>
            <q-btn-dropdown
              class="tw-w-52 justify-between-btn"
              align="left"
              dropdown-icon="expand_more"
              color="grey"
              label="All"
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

          <!-- Print Btn & squarecheck -->
          <div class="flex">
          <q-btn round padding="8px" flat>
            <q-icon size="40px" color="green" name="o_print" />
          </q-btn>

          <q-btn round padding="8px" flat>
          <q-icon
            size="40px"
            name="fa-regular fa-square-check"
            color="green"
          />
          </q-btn>
          </div>
        </div>

        <!-- Sorting Dropdown & From-To Input -->
        <div class="tw-flex tw-justify-between">
          <div class="tw-flex tw-items-center tw-gap-4">
            <h6 class="tw-text-lg tw-font-bold">Sorting</h6>
            <q-btn-dropdown
              class="tw-w-52 justify-between-btn"
              align="left"
              dropdown-icon="expand_more"
              color="grey"
              label="Room Number"
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

          <!-- From-To Input -->
          <div class="tw-flex tw-gap-8">
            <!-- From -->
            <div class="tw-flex tw-items-center tw-gap-4">
              <h6 class="tw-text-lg tw-font-bold">From :</h6>
              <date-input-component
                  @getDate="getFromDate"
                  @getFormattedDate="getFromFormattedDate"
                />
            </div>

            <!-- To -->
            <div class="tw-flex tw-items-center tw-gap-4">
              <h6 class="tw-text-lg tw-font-bold">To :</h6>
              <date-input-component
                  @getDate="getFromDate"
                  @getFormattedDate="getFromFormattedDate"
                />
            </div>
          </div>
        </div>
      </div>
        <TableComponent :columns="tableColumns1" :rows="tableRows1" class="tw-px-12 tw-py-4 tw-w-full"/>
  </CardComponent>
    </q-page>
  </template>
  <script lang="ts">
import { ref } from 'vue';
import CardComponent from 'src/components/CardComponent.vue';
import TableComponent from 'src/components/TableComponent.vue';
import { ColumnInterface } from 'src/types/table';
import DateInputComponent from 'src/components/DateInputComponent.vue';

const tableColumns1: ColumnInterface[] = [
  {
    name: 'room-no',
    label: 'Room No.',
    field: (row) => row.name,
    align: 'left',
    required: true,
    sortable: true,
  },
  {
    name: 'reason_room',
    label: 'Reason/ Room 0-0-0',
    field: 'reason_room',
    align: 'left',
    sortable: true,
  },
  {
    name: 'from',
    label: '0-0-0 From',
    field: 'from',
    align: 'left',
    sortable: true,
  },
  {
    name: 'until',
    label: '0-0-0 Until',
    field: 'until',
    align: 'left',
    sortable: true,
  },
  {
    name: 'id',
    label: 'ID',
    field: 'id',
    align: 'left',
    sortable: true,
  },
  {
    name: 'dept',
    label: 'Dept',
    field: 'dept',
    sortable: true,
    align: 'left',
  },
  {
    name: 'description',
    label: 'Description',
    field: 'description',
    sortable: true,
    align: 'left',
  },
];

const tableRows1 = [
  {
    name: '#212121',
    reason_room: '#212121',
    from: '10:00:02',
    until: '10:00:02',
    id: 'title subtitle',
    dept: 'title subtitle',
    description: 'title subtitle',
  },
  {
    name: '#424242',
    reason_room: '#424242',
    from: 'body',
    until: 'body',
    id: 'body',
    dept: 'body',
    description: 'body',
  },
  {
    name: '#616161',
    reason_room: '#616161',
    from: '10:00:02',
    until: '10:00:02',
    id: 'title subtitile',
    dept: 'title subtitle',
    description: 'title subtitle',
  },
  {
    name: '#001B3D',
    reason_room: '#001B3D ',
    from: 'title subtitle',
    until: 'title subtitle',
    id: 'title subtitle',
    dept: 'title subtitle',
    description: 'title subtitle',
  },
  {
    name: '#212121',
    reason_room: '#212121 ',
    from: '10:00:02',
    until: '10:00:02',
    id: 'body',
    dept: 'body',
    description: 'body',
  },
  {
    name: '#212121',
    reason_room: '#212121 ',
    from: '10:00:02',
    until: '10:00:02',
    id: 'title subtitle',
    dept: 'title subtitle',
    description: 'title subtitle',
  },
  {
    name: '#212121',
    reason_room: '#212121 ',
    from: '10:00:02',
    until: '10:00:02',
    id: 'title subtitle',
    dept: 'title subtitle',
    description: 'title subtitle',
  },
  {
    name: '#212121',
    reason_room: '#212121 ',
    from: '10:00:02',
    until: '10:00:02',
    id: 'title subtitle',
    dept: 'title subtitle',
    description: 'title subtitle',
  },
];

  export default {
    name: "OOOPage",
    components: { CardComponent, TableComponent, DateInputComponent },

    data() {
    return {
      tableColumns1,
      tableRows1,
    };
  },
  setup() {
    return {
      fromInput: ref(''),
      toInput: ref(''),
      fromDate: '',
      fromFormattedDate: '',
      toDate: '',
      toFormattedDate: '',
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