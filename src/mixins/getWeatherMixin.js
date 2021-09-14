import axios from "axios"

export default {
  data() {
    return {
      api_key: `${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`,
      weather: {},
      daily: {}
    }
  },
  created() {
    this.getWeather();
  },
  methods: {
    getWeather() {
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lon=2.159&lat=41.3888&units=metric&appid=${this.api_key}`)
      .then(response => {
        this.setResults(response.data);
        this.setDaily(response.data.daily.slice(0, 6))
      });
    },

    setResults (results) {
      this.weather = results
      console.log(results)
    },

    setDaily (results) {
      this.daily = results
    }
  }
}
