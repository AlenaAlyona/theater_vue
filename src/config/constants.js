/* eslint-disable */

export const layout = {
  ranks: ["rank1", "rank2", "rank3"],
  sections: [
    {
      name: "main hall",
      rows: [
        {
          row: "1",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank1" },
            { seat: "4", rank: "rank1" },
            { seat: "2", rank: "rank1" },
          ],
        },
        {
          row: "2",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank1" },
            { seat: "5", rank: "rank1" },
            { seat: "6", rank: "rank1" },
            { seat: "4", rank: "rank1" },
            { seat: "2", rank: "rank1" },
          ],
        },
        {
          row: "3",
          seats: [
            { seat: "1", rank: "rank2" },
            { seat: "3", rank: "rank2" },
            { seat: "5", rank: "rank2" },
            { seat: "6", rank: "rank2" },
            { seat: "4", rank: "rank2" },
            { seat: "2", rank: "rank2" },
          ],
        },
      ],
    },
    {
      name: "balcony",
      rows: [
        {
          row: "1",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank1" },
            { seat: "4", rank: "rank1" },
            { seat: "2", rank: "rank1" },
          ],
        },
        {
          row: "2",
          seats: [
            { seat: "1", rank: "rank1" },
            { seat: "3", rank: "rank1" },
            { seat: "5", rank: "rank1" },
            { seat: "6", rank: "rank1" },
            { seat: "4", rank: "rank1" },
            { seat: "2", rank: "rank1" },
          ],
        },
        {
          row: "3",
          seats: [
            { seat: "1", rank: "rank2" },
            { seat: "3", rank: "rank2" },
            { seat: "5", rank: "rank2" },
            { seat: "6", rank: "rank2" },
            { seat: "4", rank: "rank2" },
            { seat: "2", rank: "rank2" },
          ],
        },
      ],
    },
  ],
};

export const groups = [
  {
    id: "+31611111111",
    seats: [
      { section: "main hall", row: "1", seat: "4" },
      { section: "main hall", row: "1", seat: "2" },
      { section: "main hall", row: "2", seat: "2" },
      { section: "main hall", row: "2", seat: "4" },
    ],
  },

  {
    id: "+31622222222",
    seats: [
      { section: "main hall", row: "2", seat: "6" },
      { section: "main hall", row: "2", seat: "5" },
    ],
  },

  {
    id: "+31633333333",
    seats: [
      { section: "balcony", row: "3", seat: "6" },
      { section: "balcony", row: "3", seat: "5" },
      { section: "balcony", row: "3", seat: "3" },
    ],
  },
];

export const testProps = {
  name: "main hall",
  rows: [
    {
      row: "1",
      seats: [
        {
          seat: "1",
          rank: "rank1",
          group: "gr2",
          groupColor: "hsla(277,70%,40%,1)",
        },
        {
          seat: "3",
          rank: "rank1",
          group: "gr2",
          groupColor: "hsla(277,70%,40%,1)",
        },
        {
          seat: "4",
          rank: "rank1",
          group: "gr1",
          groupColor: "hsla(40,70%,40%,1)",
        },
        {
          seat: "2",
          rank: "rank1",
          group: "gr1",
          groupColor: "hsla(40,70%,40%,1)",
        },
      ],
    },
    {
      row: "2",
      seats: [
        { seat: "1", rank: "rank1" },
        { seat: "3", rank: "rank1" },
        { seat: "5", rank: "rank2" },
        { seat: "6", rank: "rank2" },
        { seat: "4", rank: "rank2" },
        { seat: "2", rank: "rank2" },
      ],
    },
  ],
  groups: [
    {
      id: "gr1",
      seats: [
        { section: "main hall", row: "1", seat: "4" },
        { section: "main hall", row: "1", seat: "2" },
      ],
      phone: "+31611111111",
      color: "hsla(40,70%,40%,1)",
    },
    {
      id: "gr2",
      seats: [
        { section: "main hall", row: "1", seat: "1" },
        { section: "main hall", row: "1", seat: "3" },
      ],
      phone: "+31622222222",
      color: "hsla(277,70%,40%,1)",
    },
  ],
};
