const app = Vue.createApp({
  data() {
    return {
      search: "",
      itemList: ["apple", "pear", "cherry", "strawberry"],
    };
  },
  methods: {
    searchList() {},
  },
  computed: {
    filteredList() {
      return this.itemList.filter((item) => item.includes(this.search));
    },
  },
}).mount("#app");
