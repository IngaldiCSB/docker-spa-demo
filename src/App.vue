<template>
  <div id="app">
    <button v-on:click="sendData()">SEND DATA TO BACKEND!</button>
    <div v-if="feature1Enabled()">
      FEATURE 1 IS ENABLED
    </div>
    <div v-if="feature2Enabled()">
      FEATURE 2 IS ENABLED
    </div>:
  </div>
</template>

<script>
import config from './config/config.json'
export default {
  name: 'app',
  components:
  {
  },
  methods:
  {
    sendData()
    {
      alert(`sending data to ${config.backendUrl}`)
    },
    feature1Enabled()
    {
      return config.feature1enabled === "true"
    },
    feature2Enabled()
    {
      return config.feature2enabled === "true"
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
