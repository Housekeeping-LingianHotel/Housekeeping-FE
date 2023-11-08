<template>
  <q-page class="container bg-white flex tw-flex-col tw-gap-10">
    <card-component class="tw-flex tw-mx-auto tw-m-10">
      <h1 class="tw-text-4xl tw-font-bold">Guest Preference</h1>
      <h6 class="tw-text-lg tw-font-semibold">Add Guest Freference</h6>
      <table class="tw-w-full tw-mx-4 tw-mt-2">
        <tbody>
          <tr>
            <td>
              <div class="tw-w-full tw-flex tw-gap-8">
                <div class="tw-flex tw-flex-col tw-gap-4">
                  <div class="tw-flex tw-items-center tw-gap-1">
                    <span class="tw-text-base tw-mr-2"> Room No : </span>
                    <q-input outlined v-model="text" dense />
                  </div>
                  <div class="tw-flex tw-items-center tw-gap-4">
                    <span class="tw-text-base"> Date :</span>
                    <q-date v-model="selectedDate" landscape />
                  </div>
                  <div class="tw-flex tw-items-center tw-gap-4">
                    <span class="tw-text-base tw-mr-5"> Time :</span>
                    <q-input outlined v-model="text" dense />
                  </div>
                  <div class="tw-flex tw-items-center tw-gap-4">
                    <span class="tw-text-base"> Remark :</span>
                    <q-input outlined v-model="text" dense />
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <br />
          <tr>
            <td class="tw-flex tw-justify-center">
              <div class="tw-flex tw-flex-row tw-gap-2">
                <q-btn push color="grey" text-color="primary" label="Ok" />

                <q-btn push color="grey" text-color="primary" label="Print" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </card-component>
    <tr>
      <td>
        <div class="tw-flex tw-items-center tw-gap-4 tw-ml-8">
          <span class="tw-text-base tw-mr-1"> Room : </span>
          <q-input class="tw-w-12" outlined v-model="text" dense />
        </div>
      </td>
    </tr>
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import { ref } from 'vue';
export default {
  components: { CardComponent },
  name: 'GuestPreferencePage',
  data() {
    return {
      text: ref(''),
      checkbox: ref(false),
      selectedDate: ref('2023-11-01'),
    };
  },
};
</script>
