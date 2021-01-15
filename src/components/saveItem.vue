<template>
    <div class="saved-item" v-bind:class="{'visited':save.bekeken}">
        <input type="checkbox" v-on:change="markVisited">
        <p>{{save.naam_site}}</p>
    </div>
</template>

<script>
export default {
    name: "SaveItem",
    props:["save"],
    methods: {
        markVisited() {
            this.save.bekeken = !this.save.bekeken;
        }
    }
}
</script>

<style scoped>
    .saved-item {
        background-color: lightgrey;
        padding: 1rem;
    }
    .visited {
        color: red;
        text-decoration: line-through;
    }
    .del {
        background-color: #ff0000;
        color: #ffffff;
        padding: 1.5rem 2rem;
        cursor: pointer;
        float: right;
    }
</style>