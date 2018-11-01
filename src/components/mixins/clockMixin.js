export default {
  data() {
    return {
      time: null
    };
  },
  mounted() {
    this.setCurrentTime();
    this.clock();
  },
  methods: {
    clock() {
      setInterval(() => {
        this.setCurrentTime();
      }, 1000);
    },
    setCurrentTime() {
      const date = new Date();
      this.time = date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });
    }
  }
};
