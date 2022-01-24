const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    incCounter() {
      this.counter += 1;
    },
    decCounter() {
      this.counter -= 1;
    },
  },
}).mount("#app");
