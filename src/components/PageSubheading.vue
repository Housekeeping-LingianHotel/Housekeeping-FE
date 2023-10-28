<template>
  <q-breadcrumbs
    v-if="!$route.path.startsWith('/admin/reports')"
    gutter="sm"
    class="tw-font-medium tw-h-fit tw-w-full tw-py-3 tw-px-6 tw-bg-[rgba(212,228,206,1)]"
  >
    <q-breadcrumbs-el class="tw-gap-1">
      <q-icon :name="icon" size="24px" />
      {{ $route.name?.toString() }}
    </q-breadcrumbs-el>
  </q-breadcrumbs>

  <q-breadcrumbs
    v-else
    gutter="xs"
    class="tw-font-medium tw-h-fit tw-w-full tw-py-3 tw-px-6 tw-bg-[rgba(212,228,206,1)]"
  >
    <q-breadcrumbs-el class="tw-text-black tw-gap-1">
      <q-icon name="analytics" size="24px" />
      Reports
    </q-breadcrumbs-el>

    <q-breadcrumbs-el :label="$route.name?.toString()" />
  </q-breadcrumbs>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageSubheading',
  props: {
    icon: String,
  },
  setup() {
    return {};
  },
});
</script>
