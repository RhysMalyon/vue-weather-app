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
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body {
    background: linear-gradient(to bottom left, rgba(168, 111, 57, 0.507) 0%, rgba(161, 106, 154, 0.507) 100%);
    min-height: 100vh;
  }

  main {
    padding: 1.5rem;
  }

  .weather-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 1.5rem;

    border-radius: 1rem;
    background: linear-gradient(180deg, #0668C2 0%, #1C0168 100%, rgba(68, 12, 158, 0) 100%), #C4C4C4;
    box-shadow: 0 0.3rem 0.3rem rgba(10,10,10,0.4);
  }

  .weather-current {
    color: #FFF;
    display: flex;

    .current-icon {
      width: 8rem;
      height: 8rem;
      padding-left: 0.75rem;
    }

    .current-content {
      line-height: 1.5rem;
      margin-left: 1.5rem;
    }

    .location {
      font-size: 1.375rem;
      margin-bottom: 0.25rem;
    }

    .temp {
      font-size: 1.25rem;
    }

    ul li {
      list-style: none;
      font-size: 0.938rem;
    }
  }

  .weather-forecast {
    display: flex;
    justify-content: space-between;
    text-align: center;
    
    padding-top: 1.25rem;

    .forecast-header {
      padding: 0.75rem;
    }

    .forecast-content {
      line-height: 1.25rem;
    }

    ul li {
      list-style: none;
      font-size: 0.75rem;
    }

    .forecast-day {
      color: #FFF;
      font-size: 0.938rem;
    }

    .forecast-icon {
      width: 4rem;
      height: 4rem;
      margin-top: 0.5rem;
    }

    .forecast-max {
      color: #FF0000;
    }

    .forecast-min {
      color: #00FFFF;
    }
  }

  @media (max-width: 636px) {
    .weather-forecast {
      flex-direction: column;
      justify-content: space-evenly;

      .forecast-responsive {
        display: flex;
      }

      .forecast-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
      }

      .forecast-content {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 50%;
      }

      .forecast-icon {
        margin-left: 0.5rem;
      }
    }
  }

  @media (max-width: 450px) {
    .weather-current {
      
      .weather {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .current-icon {
        width: 4rem;
        height: 4rem;
        padding-left: 0.75rem;
      }

      .current-content {
        line-height: 1.25rem;
      }

      .location {
        font-size: 1rem;
        margin-bottom: 0.25rem;
      }

      .temp {
        font-size: 1rem;
      }

      ul li {
        font-size: 0.8rem;
      }
    }
    
    .weather-forecast {
      .forecast-day {
        font-size: 0.75rem;
      }

      .forecast-icon {
        width: 2rem;
        height: 2rem;
      }

      .forecast-max {
        font-size: 0.75rem;
      }

      .forecast-min {
        font-size: 0.75rem;
      }
    }
  }
</style>
