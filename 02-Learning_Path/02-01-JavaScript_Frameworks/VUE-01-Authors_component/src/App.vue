<template>
  <Authors />
</template>

<script>
import Authors from "./components/Authors.vue";
export default {
    name: "App",
    components: {
        Authors,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
