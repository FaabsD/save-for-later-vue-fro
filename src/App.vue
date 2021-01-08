<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{msg}}
    <Saves v-bind:saves="saves" />
  </div>
</template>

<script>
import Saves from './components/saves';

export default {
  name: 'App',
  components: {
    Saves
  },
  data() {
    return{
      saves: [
        {
          id: 1,
          naam_site: "Reddit r/entitledparents",
          site_url: "https://www.reddit.com/r/entitledparents/",
          omschrijving: "Een reddit pagina verhalen van mensen die in conflict raakten met (op zijn engels) entitleed parents (sommige zijn waarschijnlijk verzonnen)",
          bekeken: false
        }
      ]
    }
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
