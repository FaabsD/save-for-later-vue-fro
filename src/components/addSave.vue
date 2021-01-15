<template>
    <div>
        <form @submit="addSave">
            <input type="text" v-model="naam_site" name="naam_site" placeholder="Naam website">
            <input type="text" v-model="site_url" name="site_url" placeholder="bijv. http://facebook.com" >
            <textarea v-model="omschrijving" name="omschrijving" cols="30" rows="10" placeholder="Omschrijving"></textarea>
            <input type="submit" value="Opslaan" class="knop">
        </form>
    </div>
</template>
<script>
import uuid from 'uuid';
export default {
    name: "AddSave",
    data() {
        return {
            naam_site: '',
            site_url: '',
            omschrijving: ''
        }
    },
    methods: {
        addSave() {
            const newSave = {
                id: uuid.v4(),
                naam_site: this.naam_site,
                site_url: this.site_url,
                omschrijving: this.omschrijving,
                bekeken: false
            }
            // stuur naar parent
            this.$emit('add-save', newSave);
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }

    input[type="text"] {
        padding: .5rem;
    }
    input[type="submit"] {
        flex-shrink: 1;
    }
</style>