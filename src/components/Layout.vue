<template>
  <div class="layoutContainer">
    <div
      class="sectionName"
      v-for="section in layoutData.sections"
      :key="section.name"
    >
      <Section v-bind:section="section" />
    </div>
  </div>
</template>

<script>
import Section from "./Section.vue";
import { layout } from "../config/constants";

export default {
  name: "Layout",
  components: {
    Section,
  },
  data() {
    return {
      layoutData: layout,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
