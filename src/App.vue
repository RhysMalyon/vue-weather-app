<template>
  <div id="app">
    <main>
      <weather-container />
    </main>
  </div>
</template>

<script>
  import WeatherContainer from './components/WeatherContainer.vue'
  
  export default {
    name: "App",
    components: {
      WeatherContainer,
    }
  };
</script>

<style lang="scss">
    @import './scss/layout.scss'
</style>
