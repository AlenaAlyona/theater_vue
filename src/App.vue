<template>
  <div class="container">
    <h3 class="title">Theater Layout</h3>
    <Layout />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
#app {
  font-family: Work Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: linear-gradient(
    -55deg,
    #6d3076,
    #ff5252 83%,
    #ff5852 88%,
    #ff6b52
  );
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  overflow: auto;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  text-size-adjust: 100%;
}

.title {
  font-size: 4rem;
  line-height: 1;
  font-weight: 600;
  text-transform: lowercase;
  margin: 0;
  color: #fff;
  margin-top: 8rem;
  margin-bottom: 4rem;
}
</style>
