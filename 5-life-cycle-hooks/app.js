const app = Vue.createApp({
  data() {
    return {
      title: "Test Title",
      itemList: [],
    };
  },
  beforeCreate() {
    console.log("beforeCreate Run...");
  },
  created() {
    console.log("created Run...");
    setTimeout(() => {
      this.itemList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    }, 2000);

    setTimeout(() => {
      this.title = "This is a new title.";
    }, 3000);
  },
  beforeMount() {
    console.log("beforeMount Run...");
  },
  mounted() {
    console.log("mounted Run...");
  },
  beforeUpdate() {
    console.log("beforeUpdate Run...");
  },
  updated() {
    console.log("updated Run...");
  },
  beforeUnmount() {
    console.log("beforeUnmount Run...");
  },
  unmounted() {
    console.log("unmounted Run...");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 5000);
