<template>
  <div class="sectionContainer">
    <div class="sectionTitle">{{ section.name }}</div>
    <div class="sectionLayout">
      <table>
        <thead>
          <tr>
            <th class="thRow">row</th>
            <th colspan="5">seats</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in dataToDisplay.rows" :key="row.row">
            <th scope="row" class="sectionRow">{{ row.row }}</th>
            <div class="seatsRow">
              <td
                v-bind:style="booked(seat)"
                v-for="seat in row.seats"
                :key="seat.seat"
                class="sectionSeat"
              >
                {{ seat.group }}
              </td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: ["section"],

  computed: {
    dataToDisplay: function() {
      const result = [...this.section.rows];
      this.section.groups.forEach((group) => {
        group.seats.forEach((seatInGroup) => {
          const row = result[seatInGroup.row - 1];
          row.seats.forEach((seat) => {
            if (seat.seat === seatInGroup.seat) {
              seat.group = group.id;
              seat.groupColor = group.color;
            }
          });
        });
      });

      return { ...this.section, rows: result };
    },
  },
  methods: {
    booked: function(seat) {
      if (Object.prototype.hasOwnProperty.call(seat, "group")) {
        return {
          background: `${seat.groupColor}`,
        };
      } else if (seat.rank === "rank1") {
        return {
          background: "#e1dde0",
        };
      } else if (seat.rank === "rank2") {
        return {
          background: "#9C9C9C",
        };
      }
    },
  },
};
</script>

<style scoped>
.sectionContainer {
  width: 40%;
  margin: auto;
  margin-bottom: 2rem;
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

table {
  width: 100%;
  padding: 1rem 0;
}

.thRow {
  width: 4rem;
  padding-left: 0;
}

.sectionRow {
  width: 4rem;
  height: 2rem;
  margin: auto;
}

.seatsRow {
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  flex-shrink: 1;
  flex-wrap: wrap;
}

.sectionSeat {
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  color: #202530;
  display: flex;
  margin: 0.7rem;
}
</style>
