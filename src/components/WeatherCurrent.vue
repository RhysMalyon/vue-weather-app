<template>
  <div class="weather-current">
    <div class="weather"><icon :name="weather.current.weather[0].icon" class="current-icon"></icon></div>
    <div class="current-content">
      <div class="location">{{ location.name }}, {{ location.country }}</div>
      <div class="temp">{{ Math.round(weather.current.temp) }}°</div>
      <ul>
        <li>Humidity: {{ weather.current.humidity }}%</li>
        <li>UVI: {{ weather.current.uvi }}</li>
        <li>Wind: {{ degreeToDirection(weather.current.wind_deg) }} {{ Math.round(weather.current.wind_speed * 3.6) }}km/h</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import degreeToDirectionMixin from "../mixins/degreeToDirectionMixin"
  import getLocationMixin from "../mixins/getLocationMixin"
  import getWeatherMixin from "../mixins/getWeatherMixin"

  export default {
    name: 'WeatherCurrent',
    mixins: [degreeToDirectionMixin, getLocationMixin, getWeatherMixin]
  }
</script>

<style lang="scss">
  @import '../scss/weather-current.scss'
</style>
