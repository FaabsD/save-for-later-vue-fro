<template>
    <div class="saved-item" v-bind:class="{'visited':save.bekeken}">
        <label>
            <input type="checkbox" v-on:change="markVisited">
            <span class="check"></span>
        </label>
        <p>{{save.naam_site}}</p>
        <button @click="$emit('del-save', save.id)" class="del">x</button>
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
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        background-color: lightgrey;
        padding: 1rem;
    }
    .visited {
        color: red;
        text-decoration: line-through;
    }
    .del {
        border: none;
        border-radius: 1rem;
        background-color: #ff0000;
        color: #ffffff;
        box-sizing: border-box;
        display: block;
        padding: .5rem;
        width: 25%;
        cursor: pointer;
        float: right;
    }
    label{
        align-self: flex-start;
    }
    input[type="checkbox"]{
        visibility: hidden;
    }
    input[type="checkbox"]:checked ~ .check::after{
        content: "\1F609";
        display: inline-block;
        vertical-align: middle;
        line-height: normal;
        height: 100%;
    }
    .check{
        text-decoration: none;
        align-self: flex-start;
        display: block;
        box-sizing: border-box;
        background-color: white;
        width: 2rem;
        height: 2rem;
        border: 1px solid black;
        padding: 0;
    } 
    .check::after{
        font-size: 1.5rem;
        text-align: center;
        width: 100%;
        height: 100%;
        content: "";
    }
</style>