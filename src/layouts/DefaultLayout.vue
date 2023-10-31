<template>
  <q-layout view="lHh Lpr lFf" class="tw-overflow-x-hidden">
    <q-header reveal bordered>
      <q-toolbar class="tw-text-black tw-px-4 tw-py-2 tw-bg-[rgba(97,97,97,1)]">
        <q-toolbar-title class="tw-text-white tw-font-bold">
          Housekeeping Management System
        </q-toolbar-title>

        <!-- Icon BTNs -->
        <div>
          <q-btn round padding="8px" flat>
            <q-icon size="32px" color="white" name="o_notifications" />
          </q-btn>
          <q-btn round padding="8px" flat>
            <q-icon size="32px" color="white" name="o_email" />
          </q-btn>
          <q-btn round padding="8px" flat>
            <q-icon size="32px" color="white" name="o_account_circle" />
          </q-btn>
        </div>
      </q-toolbar>

      <!-- Breadcrumbs -->
      <q-toolbar
        class="tw-font-medium tw-text-black tw-h-fit tw-w-full tw-py-3 tw-px-4 tw-bg-[rgba(212,228,206,1)]"
      >
        <q-breadcrumbs v-if="!$route.path.startsWith('/reports')" gutter="sm">
          <q-breadcrumbs-el class="tw-gap-1">
            <q-icon :name="$route.meta.icon" size="24px" />
            {{ $route.name?.toString() }}
          </q-breadcrumbs-el>
        </q-breadcrumbs>

        <q-breadcrumbs v-else gutter="xs">
          <q-breadcrumbs-el class="tw-text-black tw-gap-1">
            <q-icon name="analytics" size="24px" />
            Reports
          </q-breadcrumbs-el>

          <q-breadcrumbs-el :label="$route.name?.toString()" />
        </q-breadcrumbs>
      </q-toolbar>
    </q-header>

    <q-drawer
      :width="223"
      :breakpoint="400"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      bordered
      class="tw-flex tw-flex-col"
    >
      <q-item class="tw-m-2">
        <q-item-section>
          <q-img src="/images/Lingian-Logo.png" fit="contain" />
        </q-item-section>
      </q-item>

      <q-scroll-area class="tw-flex-[3_3_0%]">
        <q-list>
          <!-- Menu List -->
          <template v-for="(menu, index) in menus" :key="index">
            <q-item
              v-if="$route.name !== menu.name"
              class="tw-px-4 tw-py-0 tw-my-[2px]"
            >
              <q-btn
                align="left"
                class="tw-w-full tw-py-0 tw-px-4"
                no-caps
                unelevated
                @click="pushRoute({ name: menu.name })"
              >
                <div class="tw-text-left tw-py-1 tw-px-0">
                  {{ menu.name }}
                </div>
              </q-btn>
            </q-item>

            <q-item v-else class="tw-px-4 tw-py-0 tw-my-[2px]">
              <q-btn
                align="left"
                class="tw-w-full tw-py-0 tw-px-4 tw-font-bold tw-bg-[rgba(230,246,236,1)] tw-text-[rgba(0,100,48,1)]"
                no-caps
                unelevated
              >
                <div class="tw-text-left tw-py-1 tw-px-0">
                  {{ menu.name }}
                </div>
              </q-btn>
            </q-item>
          </template>

          <!-- Report List -->
          <q-expansion-item
            class="tw-my-0 tw-mx-4 tw-font-medium"
            :class="{
              'tw-bg-[rgba(230,246,236,1)] tw-text-[rgba(0,100,48,1)] tw-font-bold':
                isActive,
            }"
            @update:model-value="toggleActive"
            label="Reports"
          >
            <q-list class="tw-bg-white">
              <template v-for="(reportMenu, index) in reportMenus" :key="index">
                <q-item
                  v-if="$route.name !== reportMenu.name"
                  class="tw-p-0 tw-my-0 tw-mx-2"
                >
                  <q-btn
                    align="left"
                    class="tw-w-full tw-py-0 tw-px-4 tw-text-black"
                    no-caps
                    unelevated
                    @click="pushRoute({ name: reportMenu.name })"
                  >
                    <div class="tw-text-left tw-py-1">
                      {{ reportMenu.name }}
                    </div>
                  </q-btn>
                </q-item>

                <q-item v-else class="tw-p-0 tw-my-0 tw-mx-2">
                  <q-btn
                    align="left"
                    class="tw-w-full tw-py-0 tw-px-4 tw-text-[rgba(0,100,48,1)] tw-font-bold"
                    no-caps
                    unelevated
                  >
                    <div class="tw-text-left tw-py-1">
                      {{ reportMenu.name }}
                    </div>
                  </q-btn>
                </q-item>
              </template>
            </q-list>
          </q-expansion-item>
        </q-list>
      </q-scroll-area>

      <!-- Logout BTN -->
      <q-btn
        class="tw-py-4 tw-px-0"
        icon-right="o_logout"
        no-caps
        label="Logout"
        @click="router.push('/login')"
      />
    </q-drawer>

    <q-page-container>
      <Transition name="slide-fade" appear mode="out-in">
        <router-view :key="$route.fullPath" />
      </Transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from 'vue-router';
import { menus, reportMenus } from 'src/data/menus';

export default {
  name: 'DefaultLayout',
  setup() {
    const router = useRouter();

    return { router, isActive: false, menus, reportMenus };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    },
    pushRoute(path) {
      this.router.push(path);
    },
  },
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.77, 0, 0.18, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-3%);
  opacity: 0;
}
</style>
