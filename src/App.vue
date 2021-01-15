<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{msg}}
    <Saves v-bind:saves="saves" v-on:del-save="deleteSave" />
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
        },
        {
          id: 2,
          naam_site: "Reddit r/entitledparents",
          site_url: "https://www.reddit.com/r/entitledparents/",
          omschrijving: "Een reddit pagina verhalen van mensen die in conflict raakten met (op zijn engels) entitleed parents (sommige zijn waarschijnlijk verzonnen)",
          bekeken: false
        }
      ]
    }
  },
  methods: {
    deleteSave(id) {
      this.saves = this.saves.filter(save => save.id !== id);
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
