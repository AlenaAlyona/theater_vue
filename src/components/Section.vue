<template>
  <div class="sectionContainer">
    <div class="sectionTitle">{{ sectionData.name }}</div>
    <div>
      <div v-for="row in sortedRows" :key="row.row">
        <strong> {{ row.row }}</strong>
        <div v-for="seat in row.seats" :key="seat.seat">{{ seat.seat }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: ["section"],
  data() {
    return {
      sectionData: this.section,
    };
  },
  computed: {
    sortedRows: function() {
      const sortedRows = [...this.sectionData.rows].sort(
        (a, b) => a.row - b.row
      );
      sortedRows.forEach((row) => {
        row.seats = row.seats.sort((a, b) => a.seat - b.seat);
      });
      return sortedRows;
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
