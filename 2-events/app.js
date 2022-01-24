const app = Vue.createApp({
  data() {
    return {
      content: null,
    };
  },
  methods: {
    takeContentOfInput(event) {
      this.content = event.target.value;
    },
  },
}).mount("#app");
