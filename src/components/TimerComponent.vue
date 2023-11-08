<template>
  <div
    class="tw-text-lg tw-font-bold tw-px-2 tw-text-white tw-bg-[rgba(255,0,0,1)]"
  >
    Time: {{ formattedTime }}
  </div>
</template>

<script lang="ts">
export default {
  name: 'TimerComponent',
  props: {
    timeInSeconds: Number,
  },
  data() {
    return {
      countDown: this.timeInSeconds || 3600,
    };
  },
  computed: {
    formattedTime() {
      const hours = Math.floor(this.countDown / 3600);
      const minutes = Math.floor((this.countDown % 3600) / 60);
      const seconds = this.countDown % 60;

      const formattedHours = String(hours).padStart(2, '0');
      const formattedMinutes = String(minutes).padStart(2, '0');
      const formattedSeconds = String(seconds).padStart(2, '0');

      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    },
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      }
    },
  },
  created() {
    this.countDownTimer();
  },
};
</script>
