<template>
    <div>
        <!-- <h1>Opgeslagen websites voor later</h1> -->
        <div v-bind:key="save.id" v-for="save in saves">
            <SaveItem v-bind:save="save" v-on:del-save="$emit('del-save', save.id)" />

        </div>
    </div>
</template>
<script>
import SaveItem from './saveItem';
export default {
    name: "Saves",
    components: {
        SaveItem
    },
    props: ["saves"]
}
</script>
<style scoped>

</style>