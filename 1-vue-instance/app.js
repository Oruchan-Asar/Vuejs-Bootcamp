const app = Vue.createApp({
  data() {
    return {
      title: "Vue.js Bootcamp 1st day",
      content: "Lorem ipsum dolor sit amet...",
      url: "https://github.com/gkandemi/kablosuzkedi-vue3-bootcamp",
      coords: { x: 0, y: 0 },
    };
  },
  methods: {
    changeTitle(newTitle) {
      this.title = newTitle;
    },
    updateCoords(event) {
      this.changeTitle(`${event.x}, ${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
