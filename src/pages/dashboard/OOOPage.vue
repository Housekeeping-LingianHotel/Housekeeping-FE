  <template>
    <q-page class="tw-container bg-white flex">
      <CardComponent class="tw-overflow-x-auto tw-overflow-y-auto tw-m-8">
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
        <TableComponent>
          
        </TableComponent>
        <table class="tw-table tw-m-5 tw-shadow-md w-rounded-full">
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
  </CardComponent>
    </q-page>
  </template>

  <script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import TableComponent from 'src/components/TableComponent.vue';

  export default {
    name: "OOOPage",
    components: { CardComponent, TableComponent }
};
  </script>