<template>
    <div>
        <h3>New quote</h3>
        <button @click="counter++">Increase!</button>
        <p>{{ counter }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0
        };
    }
}
</script>

<style scoped>

</style>
