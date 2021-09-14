<template>
  <div class="weather-forecast">
    <div v-for="days in daily" v-bind:key="days.id">
      <ul>
        <div class="forecast-responsive">
          <div class="forecast-header">
            <li><span class="forecast-day">{{ setDay(days.dt) }}</span></li>
            <li><icon :name="days.weather[0].icon" class="forecast-icon"></icon></li>
          </div>
          <div class="forecast-content">
            <li><span class="forecast-max">{{ Math.round(days.temp.max) }}°C</span></li>
            <li><span class="forecast-min">{{ Math.round(days.temp.min) }}°C</span></li>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  import getWeatherMixin from "../mixins/getWeatherMixin"
  import setDayMixin from '../mixins/setDayMixin'

  export default {
    name: 'WeatherForecast',
    mixins: [getWeatherMixin, setDayMixin]
  }
</script>
