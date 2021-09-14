<template>
  <div class="weather-container">
    <weather-current />
    <weather-forecast />
  </div>
</template>

<script>
  import WeatherCurrent from './WeatherCurrent.vue'
  import WeatherForecast from './WeatherForecast.vue'

  export default {
    name: 'WeatherContainer',
    components: {
      WeatherCurrent,
      WeatherForecast,
    }
  }
</script>

<style lang="scss">
  @import '../scss/weather-container.scss'
</style>
