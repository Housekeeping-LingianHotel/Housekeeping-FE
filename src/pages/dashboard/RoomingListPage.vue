<template>
  <q-page class="container bg-white flex tw-flex-col tw-gap-6 tw-py-6 tw-px-10">
    <!-- Card 1 -->
    <card-component class="tw-w-full" classname="tw-h-full tw-px-2">
      <!-- Filtering -->
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

          <!-- Print Btn -->
          <q-btn round padding="8px" flat>
            <q-icon size="32px" color="green" name="o_print" />
          </q-btn>
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
              <q-input
                class="input-height-fit"
                outlined
                color="black"
                v-model="fromInput"
              />
            </div>

            <!-- To -->
            <div class="tw-flex tw-items-center tw-gap-4">
              <h6 class="tw-text-lg tw-font-bold">To :</h6>
              <q-input
                class="input-height-fit"
                outlined
                color="black"
                v-model="toInput"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Main Table -->
      <div class="tw-mt-6">
        <table-component :columns="tableColumns1" :rows="tableRows1" />
      </div>
    </card-component>

    <!-- Card 2 -->
    <card-component class="tw-w-full">
      <div class="tw-flex tw-gap-4">
        <!-- Left Side -->
        <div class="tw-flex-[2_2_0%] tw-flex tw-flex-col tw-gap-4">
          <q-table
            rounded
            class="rooming-list-table"
            :rows="tableRows2"
            :columns="tableColumns2"
            row-key="name"
            :rows-per-page-options="[0]"
          />

          <div class="tw-flex tw-items-center tw-gap-4">
            <h6 class="tw-text-lg tw-font-bold">Reserve Name :</h6>
            <q-input
              class="input-height-fit"
              outlined
              color="black"
              v-model="toInput"
            />
          </div>
        </div>

        <!-- Right Side -->
        <div class="tw-flex-1">
          <!-- Comments Table -->
          <table class="tw-w-full">
            <thead>
              <tr>
                <th
                  class="tw-px-4 tw-py-3 !tw-bg-[rgba(6,37,149,1)] tw-text-left"
                >
                  Reservation Comment
                </th>
              </tr>
            </thead>
            <tbody class="tw-w-full tw-block tw-max-h-48 tw-overflow-y-auto">
              <tr
                v-for="(comment, index) in commentsData"
                :key="index"
                class="tw-w-full tw-table tw-table-fixed tw-border-collapse tw-border-b"
              >
                <td
                  class="tw-px-4 tw-py-3 tw-break-words tw-bg-[rgba(250,250,250,1)] hover:tw-bg-[rgba(240,240,240,1)]"
                >
                  {{ comment.comment }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </card-component>
  </q-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import CardComponent from 'src/components/CardComponent.vue';
import TableComponent from 'src/components/TableComponent.vue';
import { ColumnInterface } from 'src/types/table';

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
    name: 'cat',
    label: 'Cat',
    field: 'cat',
    align: 'left',
    sortable: true,
  },
  {
    name: 'room-status',
    label: 'Room Status',
    field: 'room_status',
    align: 'left',
    sortable: true,
  },
  {
    name: 'guest',
    label: 'Guest',
    field: 'guest',
    align: 'left',
    sortable: true,
  },
  {
    name: 'main-guest-name',
    label: 'Main Guest Name',
    field: 'main_guest_name',
    align: 'left',
    sortable: true,
  },
  {
    name: 'arr-time',
    label: 'ArrTime',
    field: 'arr_time',
    sortable: true,
    align: 'left',
  },
  {
    name: 'dep-time',
    label: 'DepTime',
    field: 'dep_time',
    sortable: true,
    align: 'left',
  },
  {
    name: 'reserve-name',
    label: 'Reserve Name',
    field: 'reserve_name',
    sortable: true,
    align: 'left',
  },
  {
    name: 'reservation',
    label: 'Reservation',
    field: 'reservation',
    sortable: true,
    align: 'left',
  },
];

const tableRows1 = [
  {
    name: '1',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
  {
    name: '2',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
  {
    name: '3',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
  {
    name: '4',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
  {
    name: '5',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
  {
    name: '6',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
  {
    name: '7',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
  {
    name: '8',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
  {
    name: '9',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
  {
    name: '10',
    cat: '#123123',
    room_status: '10:00:02',
    guest: 'John Doe',
    main_guest_name: 'Doe John',
    arr_time: '10:25:51',
    dep_time: '15:00:20',
    reserve_name: 'Dohn Joe',
    reservation: 'True',
  },
];

const tableColumns2: ColumnInterface[] = [
  {
    name: 'name',
    label: 'Arrival',
    field: (row) => row.name,
    align: 'left',
    required: true,
  },
  {
    name: 'depart',
    align: 'left',
    label: 'Depart',
    field: 'depart',
  },
  {
    name: 'room-no',
    align: 'left',
    label: 'Room No.',
    field: 'room_no',
  },
  {
    name: 'room-change',
    align: 'left',
    label: 'Room Change',
    field: 'room_change',
  },
  {
    name: 'comments',
    align: 'left',
    label: 'Comments',
    field: 'comments',
  },
];

const tableRows2 = [
  {
    name: 'Allotments',
    depart: 0,
    room_no: 0,
    room_change: 0,
    comments: 0,
  },
  {
    name: 'Avail After Allotm',
    depart: 270,
    room_no: 335,
    room_change: 332,
    comments: 12,
  },
  {
    name: 'Out-of Order',
    depart: 0,
    room_no: 0,
    room_change: 0,
    comments: 0,
  },
];

const commentsData = [
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis.',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis.',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis.',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis.',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis.',
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mattis.',
  },
];

export default {
  name: 'RoomingListPage',
  components: { CardComponent, TableComponent },
  data() {
    return {
      tableColumns1,
      tableColumns2,
      tableRows1,
      tableRows2,
      commentsData,
    };
  },
  setup() {
    return {
      fromInput: ref(''),
      toInput: ref(''),
    };
  },
};
</script>

<style>
/* Button */
.justify-between-btn .q-btn__content {
  justify-content: space-between;
  color: black;
}

/* Input */
.input-height-fit .q-field__control {
  height: fit-content;
  padding: 0;
}
.q-field__native {
  padding: 2px 8px;
}
.input-height-fit .q-field__control::after {
  height: 100%;
}

/* Table 2 */
.rooming-list-table thead tr:first-child th {
  background-color: rgba(6, 119, 205, 1);
  color: white;
  font-weight: 600;
  text-align: center;
  border: 1px solid rgba(185, 185, 185, 1);
  border-top: 0;
}

.rooming-list-table tbody tr:last-child td {
  border-bottom: 0;
}
.rooming-list-table thead tr th:last-child {
  border-right: 0;
}
.rooming-list-table thead tr th:first-child {
  border-left: 0;
}
.rooming-list-table tbody tr td:last-child {
  border-right: 0;
}
.rooming-list-table tbody tr td:first-child {
  border-left: 0;
}

.rooming-list-table tbody tr td {
  height: fit-content;
  padding: 12px 16px;
  background-color: rgba(131, 127, 124, 1);
  color: white;
  border: 1px solid rgba(185, 185, 185, 1);
}

.rooming-list-table .q-table__bottom {
  display: none;
}
</style>
