<template>
  <div id="app">
    <main>
      <div class="weather-container" v-if="typeof weather !='undefined'">
        <div class="weather-current">
          <div class="weather"><icon :name="weather.current.weather[0].icon"></icon> {{ weather.current.weather[0].icon }}</div>

          <div class="location-box">
            <div class="location">{{ weather.timezone }}</div>
            <div class="temp">{{ Math.round(weather.current.temp) }}°C</div>
          </div>

          <div class="weather-box">
            <div>
              <ul>
                <li>Humidity: {{ weather.current.humidity }}%</li>
                <li>UVI: {{ weather.current.uvi }}</li>
                <li>Wind: {{ toTextualDescription(weather.current.wind_deg) }} {{ weather.current.wind_speed }}km/h</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="weather-forecast" v-for="days in daily" v-bind:key="days.id">
          <div>
            <ul>
              <li><icon :name="days.weather[0].icon"></icon>{{ days.weather[0].icon }}</li>
              <li><span class="forecast-day">{{ setDay(days.dt) }}</span></li>
              <li><span class="forecast-max">Max: {{ Math.round(days.temp.max) }}°C</span></li>
              <li><span class="forecast-min">Min: {{ Math.round(days.temp.min) }}°C</span></li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from "axios"
  import Icon from "@/components/Icon.vue"
  
  export default {
    name: "App",
    data() {
      return {
        api_key: '7f969b4e4cd395bbf697ef76cc218216',
        weather: {},
        daily: {}
      }
    },
    created() {
      this.getWeather();
    },
    components: {
      Icon
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
      },

      setDaily (results) {
        this.daily = results
        console.log(results);
      },

      setDay (timestamp) {
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        const date = new Date(timestamp * 1000);
        let weekday = days[date.getDay()];
        return weekday
      },

      toTextualDescription(degree){
        if (degree > 337.5) return 'N';
        if (degree > 292.5) return 'NW';
        if (degree > 247.5) return 'W';
        if (degree > 202.5) return 'SW';
        if (degree > 157.5) return 'S';
        if (degree > 122.5) return 'SE';
        if (degree > 67.5)  return 'E';
        if (degree > 22.5)  return 'NE';
        return 'Northerly';
      }
    }
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  main {
    padding: 1.5rem;
  }

  .weather-container {
    max-width: 900px;
    padding: 1.5rem;
    border-radius: 1rem;
    background: linear-gradient(180deg, #0668C2 0%, #1C0168 100%, rgba(68, 12, 158, 0) 100%), #C4C4C4;
  }

  .location-box {
    color: #FFF;

    .location {
      font-size: 1.375rem;
    }

    .temp {
      font-size: 1.25rem;
    }
  }

  .weather-box {
    text-align: left;

    ul li {
      color: #FFF;
      list-style: none;
      font-size: 0.938rem;
    }

    .temp {
      display: inline-block;
      padding: 0.625rem 1.563rem;

      color: #FFF;
      font-size: 6.375rem;
      font-weight: 900;
      text-shadow: 0.188rem 0.375rem rgba(0,0,0, 0.25);

      background-color: rgba(255,255,255, 0.25);
      border-radius: 1rem;
      margin: 1.875rem 0;

      box-shadow: 0.188rem 0.375rem rgba(0,0,0, 0.25);
    }
  }

  .weather-forecast {
    ul li {
      list-style: none;
      font-size: 0.75rem;
    }

    .forecast-day {
      color: #FFF;
      font-size: 0.938rem;
    }

    .forecast-max {
      color: #FF0000;
    }

    .forecast-min {
      color: #00FFFF;
    }
  }
</style>
