<script setup>
import { ref, computed } from 'vue'
import { useDebouncedRef } from '../composable/useDebouncedRef'

const counter = ref(0)

// const config = useDebouncedRef({
//     title: 'Color',
//     bgColor: 'green'
// })

const text = useDebouncedRef({title: 'hello'})

// const bgColor = computed(() => {
//     counter.value ++
//     return config.value.bgColor
// })

</script>

<template>
    <!-- <h1>Reactivity Advanced</h1>
    <h2>Count: {{ counter }}</h2>
    <input type="color" v-model="config.bgColor">
    <div :style="{
        backgroundColor: bgColor
    }">
        {{ config.title }}
    </div> -->
    {{  text }}

    <input v-model="text.title" />
</template>


<style scoped>
div{
    height: 100px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

