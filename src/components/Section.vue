<template>
  <div class="sectionContainer">
    <div class="sectionTitle">{{ sectionData.name }}</div>
    <div>
      <div v-for="row in sortedRowsSeats" :key="row.row">
        <strong> {{ row.row }}</strong>
        <!-- 
        <div>{{ row.seats.seat }}</div> -->
        <div v-for="seat in sortedSeats" :key="seat">{{ seat }}</div>
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
    sortedRowsSeats: function() {
      const sortedRows = [...this.sectionData.rows].sort(
        (a, b) => a.row - b.row
      );
      // const sortedRowsAndSeats = sortedRows.map((row) => {
      //   row.seats = row.seats.sort((a, b) => a.seat - b.seat);
      // });
      return sortedRows;
    },
    sortedSeats: function() {
      const rows = this.sortedRowsSeats;
      const sortedSeats = rows.map((row) => {
        row.seats.sort((a, b) => a.seat - b.seat);
      });
      return sortedSeats;
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
