<template>
  <div>
    <h3 class="title">Theater Layout</h3>
    <Layout v-bind:layout="layoutData" v-bind:groups="groupsData" />
  </div>
</template>

<script>
import Layout from "./components/Layout.vue";
import { layout, groups } from "./config/constants";

export default {
  name: "App",
  components: {
    Layout,
  },

  data() {
    return {
      layoutData: layout,
      groupsData: groups,
    };
  },
};
</script>

<style>
#app {
  font-family: Work Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  background-image: linear-gradient(
    -55deg,
    #6d3076,
    #ff5252 83%,
    #ff5852 88%,
    #ff6b52
  );
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  color: #fff;
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
  margin-top: 5rem;
  margin-bottom: 4rem;
  width: 100vw;
  text-align: center;
}
</style>
