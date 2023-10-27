<template>
  <q-page class="container bg-grey row justify-center items-center">
    <CardComponent class="card q-py-md">
      <div class="">
        <div class="row item-center justify-center">
          <q-img
            src="../../public/images/Lingian-Logo.png"
            spinner-color="white"
            class="img"
          />
        </div>
        <div>
          <h5 class="text-h5 text-weight-medium text-center">
            Welcome to Housekeeping <br />
            Management System <br />
            <span class="text-weight-light">Lingian Hotel & Convention</span>
          </h5>
          <h5 class="text-h5 text-weight-light text-center"></h5>
          <div class="con">
            <q-input
              outlined
              type="text"
              label="Email"
              class="input q-mx-auto"
            />
            <q-input
              outlined
              type="password"
              label="Password"
              class="input q-mx-auto q-mt-md"
            />
          </div>
          <div class="forgot q-mx-auto">
            <p
              class="text-caption text-info text-weight-medium text-right q-py-sm"
            >
              Forgot Password?
            </p>
          </div>
          <div class="btn-con">
            <q-btn
              color="positive"
              label="Log In"
              class="btn"
              no-caps
              unelevated
              @click="router.push('/admin/dashboard')"
            />
          </div>
        </div>
      </div>
    </CardComponent>
  </q-page>
</template>

<script lang="ts">
import CardComponent from 'components/CardComponent.vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginPage',
  components: { CardComponent },

  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
});
</script>

<style>
.card {
  width: 488.25px;
  height: auto;
}
.input,
.forgot {
  width: 282.75px;
  border-radius: 8px;
  cursor: pointer;
}
.con {
  width: 100%;
}
.img {
  height: 168px;
  max-width: 168px;
}

.btn-con {
  width: 280px;
  margin: auto;
}
.btn {
  border-radius: 8px;
  width: 100%;
}
</style>
