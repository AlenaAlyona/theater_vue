<template>
  <div class="layoutContainer">
    <div v-if="sectionsToDisplay">
      <div
        class="sectionName"
        v-for="section in sectionsToDisplay"
        :key="section.name"
      >
        <Section v-bind:section="section" />
      </div>
    </div>
  </div>
</template>

<script>
import Section from "./Section.vue";
import { layout, groups } from "../config/constants";

export default {
  name: "Layout",
  components: {
    Section,
  },

  computed: {
    sectionsToDisplay: function() {
      const sectionsToDisplay = [...layout.sections].map((section) => {
        const groupInSection = groups.filter(
          (group) => group.seats[0].section === section.name
        );

        section.groups = groupInSection ? groupInSection : null;
        return section;
      });
      return sectionsToDisplay;
    },
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
