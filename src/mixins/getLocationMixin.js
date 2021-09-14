import axios from "axios"

export default {
  data() {
    return {
      api_key: `${process.env.VUE_APP_OPEN_WEATHER_API_KEY}`,
      location: ''
    }
  },
  created() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=41.3888&lon=2.159&&appid=${this.api_key}`)
      .then(response => {
        this.setLocation(response.data[0]);
      })
    },
    
    setLocation (results) {
      this.location = results
    }
  }
}
