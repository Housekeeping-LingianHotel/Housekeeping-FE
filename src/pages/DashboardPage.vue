<template>
  <q-page class="container bg-white flex">
    <!-- Heading -->
    <div
      class="fixed flex items-center q-px-md q-py-sm"
      style="width: 100%; background: rgba(212, 228, 206, 1); gap: 8px"
    >
      <q-icon size="24px" name="dashboard" />
      {{ $route.name }}
    </div>
  </q-page>
</template>

<script lang="ts">
export default {
  name: 'DashboardPage',
};
</script>
