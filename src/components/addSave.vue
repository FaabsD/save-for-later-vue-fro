<template>
    <div>
        <form @submit="addSave">
            <input type="text" v-model="naam_site" name="naam_site" placeholder="Naam website">
            <input type="text" v-model="site_url" name="site_url" placeholder="bijv. http://facebook.com" >
            <input type="text" v-model="afbeelding" name="afbeelding" placeholder="Link naar afbeelding">
            <textarea v-model="omschrijving" name="omschrijving" cols="30" rows="10" placeholder="Omschrijving"></textarea>
            <input type="submit" value="Opslaan" class="knop">
        </form>
    </div>
</template>
<script>
import {v4 as uuidv4} from 'uuid';
export default {
    name: "AddSave",
    data() {
        return {
            naam_site: '',
            site_url: '',
            afbeelding: '',
            omschrijving: ''
        }
    },
    methods: {
        addSave(e) {
            e.preventDefault();
            const newSave = {
                id: uuidv4(),
                naam_site: this.naam_site,
                site_url: this.site_url,
                afbeelding: this.afbeelding,
                omschrijving: this.omschrijving,
                bekeken: false
            }
            // stuur naar parent
            this.$emit('add-save', newSave);

            this.naam_site = '';
            this.site_url = '';
            this.afbeelding = '';
            this.omschrijving = '';
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