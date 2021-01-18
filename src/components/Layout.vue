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
      let i = 1;
      const sectionsToDisplay = [...layout.sections].map((section) => {
        const groupInSection = groups.filter(
          (group) => group.seats[0].section === section.name
        );
        groupInSection.forEach((group) => {
          group.phone = group.id;
          group.id = "gr" + i++;
          group.color =
            "hsla(" + ~~(360 * Math.random()) + "," + "70%," + "40%,1)";
        });
        section.groups = groupInSection ? groupInSection : null;
        return section;
      });
      return sectionsToDisplay;
    },
  },
};
</script>

<style scoped>
.layoutContainer {
  width: 100%;
  margin-bottom: 5rem;
}
</style>
