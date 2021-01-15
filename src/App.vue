<template>
  <div id="app">
    <Header/>
    <AddSave v-on:add-save="addSave" />
    {{msg}}
    <Saves v-bind:saves="saves" v-on:del-save="deleteSave" />
  </div>
</template>

<script>
import Header from './components/layout/header';
import Saves from './components/saves';
import AddSave from './components/addSave';

export default {
  name: 'App',
  components: {
    Header,
    Saves,
    AddSave
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
    },
    addSave(newSave) {
      this.saves = [...this.saves, newSave];
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
  .knop {
    display: block;
    border: none;
    background-color: aquamarine;
    color: whitesmoke;
    padding: .5rem 1rem;
    cursor: pointer;
  }
</style>
