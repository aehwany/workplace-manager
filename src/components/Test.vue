<template>
    <div>
        <input type="text" v-model.trim="currentName">
        <input type="submit" @click="saveNameInDatabase">
    </div>
</template>

<script>
const firebaseConfig = require('../firebaseConfig')

export default {
    name: 'Test',
    data() {
        return {
            currentName: ''
        }
    },
    methods: {
        saveNameInDatabase() {
            firebaseConfig.testCollection.add({
                name: this.currentName
            })
        }
    }
}
</script>