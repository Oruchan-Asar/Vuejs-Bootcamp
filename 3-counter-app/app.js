const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {},
  computed: {
    setCondition() {
      console.log("condition 1 run!");
      return this.counter > 5 ? "big" : "small";
    },
    setCondition2() {
      console.log("condition 2 run!");
      return this.counter2 > 5 ? "big" : "small";
    },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(oldValue + "=>" + newValue);
    },
    setCondition(newValue, oldValue) {
      console.log(oldValue + "=>" + newValue);
    },
  },
}).mount("#app");
