<template>
    <div class="saved-item" v-bind:class="{'visited':save.bekeken}">
        <label>
            <input type="checkbox" v-on:change="markVisited">
            <span class="check"></span>
        </label>
        <img v-bind:src="save.afbeelding" alt="">
        <h2>{{save.naam_site}}</h2>
        <a v-bind:href="save.site_url">Link naar site</a>
        <p>{{save.omschrijving}}</p>
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
        justify-content: space-between;
        align-items: center;
        background-color: lightgrey;
        padding: 1rem;
    }
    .saved-item img{
        align-self: flex-end;
        width: 15%;
        height: 15%;
        object-fit: cover;
    }
    .saved-item h2 {
        color: aquamarine;
        text-shadow: 1px 0 3px #000000;
        line-height: 1.5;
    }
    .saved-item a {
        text-decoration: none;
        color: black;
        background-color: aquamarine;
        box-sizing: border-box;
        border-radius: 1rem;
        padding: .5rem;

    }
    .saved-item p {
        margin: .5rem 0 .5rem 0;
        line-height: 1.5;
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