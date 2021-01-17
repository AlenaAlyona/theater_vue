<template>
  <div class="sectionContainer">
    <div class="sectionTitle">{{ section.name }}</div>
    <div>
      <div v-for="row in sortedRows.rows" :key="row.row">
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

  computed: {
    sortedRows: function() {
      const result = [...this.section.rows].sort((a, b) => a.row - b.row);
      result.forEach((row) => {
        row.seats = row.seats.sort((a, b) => a.seat - b.seat);
      });
      this.section.groups.forEach((group) => {
        group.seats.forEach((seat) => {
          result[seat.row - 1].seats[seat.seat - 1] = {
            ...result[seat.row - 1].seats[seat.seat - 1],
            group: group.id,
          };
        });
      });

      return { ...this.section, rows: result };
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
