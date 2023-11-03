<template>
  <q-page class="container bg-white flex tw-p-6">
    <card-component class="tw-w-full height-full-card">
      <div class="tw-flex justify-end">
        <button class="tw-mx-1">
          <q-icon
            name="fa-regular fa-square-check"
            class="tw-text-4xl"
            style="color: #069550"
          />
        </button>
        <button class="tw-mx-2">
          <q-icon
            name="fa-solid fa-print"
            class="tw-text-4xl"
            style="color: #069550"
          />
        </button>
      </div>

      <div class="tw-w-full tw-flex tw-gap-8">
        <div class="tw-flex tw-flex-col tw-gap-4">
          <div class="tw-flex tw-items-center tw-gap-4">
            <span class="tw-text-base tw-mr-5"> Room : </span>
            <q-input outlined v-model="text" color="blue" dense />
          </div>
          <div class="tw-flex tw-items-center tw-gap-4">
            <span class="tw-text-base"> To Room :</span>
            <q-input outlined v-model="text1" color="blue" dense />
          </div>
        </div>

        <div class="tw-flex tw-flex-col tw-gap-4">
          <div class="tw-flex tw-items-center tw-gap-4">
            <span class="tw-text-base"> Location: </span>
            <q-input outlined v-model="text2" color="blue" dense />
          </div>

          <div>
            <q-checkbox v-model="checkbox" color="blue" label="Show All Room" />
          </div>
        </div>

        <div class="tw-flex tw-flex-col tw-justify-between tw-pb-5">
          <div>
            <q-checkbox v-model="checkbox1" color="blue" label="Old Rooms" />
          </div>
          <div>
            <q-checkbox v-model="checkbox2" color="blue" label="Even Rooms " />
          </div>
        </div>

        <div class="tw-flex tw-flex-col -gap-1">
          <q-checkbox
            v-model="checkbox3"
            color="blue"
            label="Go to next page when floor changed"
          />
          <q-checkbox
            v-model="checkbox4"
            color="blue"
            label="Print whit 2 line space"
          />
          <q-checkbox
            v-model="checkbox5"
            color="blue"
            label="Auto Rooms Assignment"
          />
        </div>
      </div>
    </card-component>
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'src/components/CardComponent.vue';
import { ref } from 'vue';

export default {
  name: 'RoomMaidPage',
  components: { CardComponent },
  setup() {
    return {
      text: ref(''),
      text1: ref(''),
      text2: ref(''),
      checkbox: ref(false),
      checkbox1: ref(false),
      checkbox2: ref(false),
      checkbox3: ref(false),
      checkbox4: ref(false),
      checkbox5: ref(false),
    };
  },
};
</script>
