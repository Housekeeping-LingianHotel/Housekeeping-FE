<template>
  <div
    class="fixed flex items-center q-px-md q-py-sm"
    style="width: 100%; background: rgba(212, 228, 206, 1); gap: 8px"
  >
    <q-breadcrumbs
      v-if="!$route.path.startsWith('/admin/reports')"
      gutter="sm"
      style="font-weight: 500"
    >
      <q-breadcrumbs-el style="color: black; gap: 4px">
        <q-icon :name="icon" size="24px" />
        {{ $route.name?.toString() }}
      </q-breadcrumbs-el>
    </q-breadcrumbs>

    <q-breadcrumbs v-else gutter="sm" style="font-weight: 500">
      <q-breadcrumbs-el style="color: black; gap: 4px">
        <q-icon name="analytics" size="24px" />
        Reports
      </q-breadcrumbs-el>

      <q-breadcrumbs-el :label="$route.name?.toString()" />
    </q-breadcrumbs>
  </div>
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
