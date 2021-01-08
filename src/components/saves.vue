<template>
    <div>
        <h1>Opgeslagen websites voor later</h1>
        <div v-bind:key="save.id" v-for="save in saves">
            <h3>{{save.naam_site}}</h3>

        </div>
    </div>
</template>
<script>
export default {
    name: "Saves",
    props: ["saves"]
}
</script>
<style scoped>

</style>