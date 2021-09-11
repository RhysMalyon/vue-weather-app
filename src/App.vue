<template>
  <div id="app">
    <main>
      <div class="weather-wrap" v-if="typeof weather !='undefined'">

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
          <div class="weather">{{ weather.current.weather[0].main }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "App",
    data() {
      return {
        api_key: '7f969b4e4cd395bbf697ef76cc218216',
        city: "Madrid",
        weather: {}
      }
    },
    created() {
      this.getWeather();
    },
    methods: {
      getWeather() {
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lon=2.159&lat=41.3888&units=metric&appid=${this.api_key}`)
        .then(response => {
          console.log(response.data);
          this.setResults(response.data);
        });
      },

      setResults (results) {
        this.weather = results
        console.log(this.weather.current.temp)
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #app {
    background: linear-gradient(180deg, #0668C2 0%, #1C0168 100%, rgba(68, 12, 158, 0) 100%), #C4C4C4;
  }

  main {
    min-height: 100vh;
    padding: 1.5rem;
  }

  .location-box {
    color: #FFF;
    font-size: 2rem;
    font-weight: 500;
  }

  .weather-box {
    text-align: left;

    ul li {
      color: #FFF;
      list-style: none;
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

    .weather {
      color: #FFF;
      font-size: 3rem;
      font-weight: 700;
      font-style: italic;
      text-shadow: 0.188rem 0.375rem rgba(0,0,0, 0.25);
    }
  }
</style>
