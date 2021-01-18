<template>
  <div class="sectionContainer">
    <div class="sectionTitle">{{ section.name }}</div>
    <div class="sectionLayout">
      <p>row</p>
      <p>seat</p>
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
.sectionContainer {
  width: 60%;
  margin: auto;
}

.sectionTitle {
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

.sectionLayout {
  border: 1px solid #fff;
  justify-content: center;
  width: 100%;
}
</style>
