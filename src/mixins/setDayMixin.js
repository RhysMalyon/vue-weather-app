export default {
  methods: {
    setDay (timestamp) {
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      const date = new Date(timestamp * 1000);
      let weekday = days[date.getDay()];
      return weekday
    }
  }
}
