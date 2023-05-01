import pz from "../img/unit_pz2.png";
import t26_USSR from "../img/unit_t-26k.png";
import t34 from "../img/t34.png";
import pz3g from "../img/pz3gg.png";
import cellVeryHard from "../img/les.png"
import cellLight from "../img/field2.png"
import cellMiddle from "../img/field3.png"
import cellHard from "../img/fieldBust.png"
import cellveryMiddle from "../img/test1.png"
// import test from "../img/les.png"

export const sections = {
  hard:{
    img:cellHard, kef:1.5,  baseDefend: { tanks:0,  humans: 1 }
  
  },
  veryHard:{
      img: cellVeryHard, kef: 2, baseDefend: {tanks:1,humans:2}
  },
  light:{
    img:cellLight, kef:0.5
  },
  middle:{
    img:cellMiddle, kef:1
  },
  veryMiddle:{
      img: cellveryMiddle, kef: 1.5, baseDefend: { tanks: 1, humans: 1 }
  },
}

export const dataField = [
  {
    name: "column1",
        sections: [
            { id: 0, col: 1, row: 1, kef: sections.veryMiddle.kef, img: sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 1, col: 1, row: 2,  kef: sections.middle.kef, img:sections.middle.img ,baseDefend: sections.veryMiddle.baseDefend },
      { id: 2, col: 1, row: 3,  kef: sections.middle.kef, img:sections.middle.img },
      { id: 3, col: 1, row: 4, kef: sections.hard.kef, img:sections.hard.img},
      { id: 4, col: 1, row: 5, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 5, col: 1, row: 6, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend},
      { id: 6, col: 1, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 7, col: 1, row: 8, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend},


    ],
    kef: 1,
    type: 1,
  },
  {
    name: "column2",
    sections: [
      { id: 8, col: 2, row: 1,  kef: sections.middle.kef, img:sections.middle.img },
      { id: 9, col: 2, row: 2, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img,baseDefend: sections.veryMiddle.baseDefend },
      { id: 10, col: 2, row: 3,kef: sections.middle.kef, img:sections.middle.img},
      { id: 11, col: 2, row: 4, kef: sections.hard.kef, img:sections.hard.img,baseDefend: sections.hard.baseDefend },
      { id: 12, col: 2, row: 5, kef: sections.middle.kef, img:sections.middle.img },
      { id: 13, col: 2, row: 6, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 14, col: 2, row: 7, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 15, col: 2, row: 8, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },




    ],
    kef: 2,
    type: 2,
  },
  {
    name: "column3",
    sections: [
      { id: 16, col: 3, row: 1, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend},
      { id: 17, col: 3, row: 2,  kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 18, col: 3, row: 3, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend},
      { id: 19, col: 3, row: 4,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend},
      { id: 20, col: 3, row: 5,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend},
      { id: 21, col: 3, row: 6,  kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend},
      { id: 22, col: 3, row: 7,  kef: sections.middle.kef, img:sections.middle.img },
      { id: 23, col: 3, row: 8,  kef: sections.middle.kef, img:sections.middle.img },

    ],
    kef: 3,
    type: 1,
  },
  {
    name: "column4",
    sections: [
      { id: 24, col: 4, row: 1,kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend},
      { id: 25, col: 4, row: 2,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 26, col: 4, row: 3, kef: sections.middle.kef, img:sections.middle.img },
      { id: 27, col: 4, row: 4, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend},
      { id: 28, col: 4, row: 5, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend},
      { id: 29, col: 4, row: 6, kef: sections.middle.kef, img:sections.middle.img},
      { id: 30, col: 4, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 31, col: 4, row: 8, kef: sections.middle.kef, img:sections.middle.img },

    ],
    kef: 4,
    type: 2,
  },
  {
    name: "column5",
    sections: [
      { id: 32, col: 5, row: 1,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img , baseDefend: sections.veryMiddle.baseDefend},
      { id: 33, col: 5, row: 2, kef: sections.veryHard.kef, img:sections.veryHard.img,  baseDefend: sections.veryHard.baseDefend },
      { id: 34, col: 5, row: 3, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 35, col: 5, row: 4,  kef: sections.veryHard.kef, img:sections.veryHard.img,  baseDefend: sections.veryHard.baseDefend},
      { id: 36, col: 5, row: 5,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img  },
      { id: 37, col: 5, row: 6, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 38, col: 5, row: 7,  kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend  },
      { id: 39, col: 5, row: 8, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend},

    ],
    kef: 5,
    type: 1,
  },
  {
    name: "column6",
    sections: [
      { id: 40, col: 6, row: 1,kef: sections.light.kef, img:sections.light.img },
      { id: 41, col: 6, row: 2, kef: sections.light.kef, img:sections.light.img },
      { id: 42, col: 6, row: 3,kef: sections.light.kef, img:sections.light.img },
      { id: 43, col: 6, row: 4, kef: sections.light.kef, img:sections.light.img },
      { id: 44, col: 6, row: 5, kef: sections.light.kef, img:sections.light.img },
      { id: 45, col: 6, row: 6, kef: sections.light.kef, img:sections.light.img },
      { id: 46, col: 6, row: 7, kef: sections.light.kef, img:sections.light.img },
      { id: 47, col: 6, row: 8, kef: sections.light.kef, img:sections.light.img },

    ],
    kef: 6,
    type: 2,
  },
  {
    name: "column7",
    sections: [
      { id: 48, col: 7, row: 1, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 49, col: 7, row: 2, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 50, col: 7, row: 3, kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend},
      { id: 51, col: 7, row: 4, kef: sections.middle.kef, img:sections.middle.img },
      { id: 52, col: 7, row: 5, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 53, col: 7, row: 6,kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 54, col: 7, row: 7, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 55, col: 7, row: 8, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },

    ],
    kef: 7,
    type: 1,
  },
  {
    name: "column8",
    sections: [
      { id: 56, col: 8, row: 1,  kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 57, col: 8, row: 2, kef: sections.veryHard.kef, img:sections.veryHard.img, baseDefend: sections.veryHard.baseDefend },
      { id: 58, col: 8, row: 3, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 59, col: 8, row: 4, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 60, col: 8, row: 5,  kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend},
      { id: 61, col: 8, row: 6,  kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend},
      { id: 62, col: 8, row: 7,  kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend},
      { id: 63, col: 8, row: 8, kef: sections.middle.kef, img:sections.middle.img  },

    ],
    kef: 8,
    type: 2,
  },
  {
    name: "column9",
    sections: [
      { id:  64, col: 9, row: 1, kef: sections.middle.kef, img:sections.middle.img  },
      { id: 65, col: 9, row: 2, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 66, col: 9, row: 3, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend},
      { id: 67, col: 9, row: 4, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 68, col: 9, row: 5, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
      { id: 69, col: 9, row: 6, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 70, col: 9, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
      { id: 71, col: 9, row: 8, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },

    ],
    kef: 9,
    type: 1,
  },
  {
  name: "column10",
  sections: [
    { id: 72, col: 10, row: 1, kef: sections.middle.kef, img:sections.middle.img  },
    { id: 73, col: 10, row: 2, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
    { id: 74, col: 10, row: 3, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend},
    { id: 75, col: 10, row: 4, kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend},
    { id: 76, col: 10, row: 5, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img , baseDefend: sections.veryMiddle.baseDefend},
    { id: 77, col: 10, row: 6, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
    { id: 78, col: 10, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
    { id: 79, col: 10, row: 8, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },

  ],
  kef: 10,
  type: 2,
},

{
  name: "column11",
  sections: [
    { id: 80, col: 11, row: 1, kef: sections.middle.kef, img:sections.middle.img  },
    { id: 81, col: 11, row: 2, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
    { id: 82, col: 11, row: 3, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend},
    { id: 83, col: 11, row: 4, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
    { id: 84, col: 11, row: 5, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },
    { id: 85, col: 11, row: 6, kef: sections.hard.kef, img:sections.hard.img , baseDefend: sections.hard.baseDefend},
    { id: 86, col: 11, row: 7, kef: sections.hard.kef, img:sections.hard.img, baseDefend: sections.hard.baseDefend },
    { id: 87, col: 11, row: 8, kef: sections.veryMiddle.kef, img:sections.veryMiddle.img, baseDefend: sections.veryMiddle.baseDefend },

  ],
  kef: 11,
  type: 1,
},


];

export const mockActions = {
  move: "move",
  fire: "fire",
  fire_hard: "fire_hard",
  defend: "defend",
};

export const tanks = [
  {
    id: 1,
    name: "pz2-c",
    img: pz,
    type: "light",
    count: 3,
    actions: {
      move: 3,
      defend: 2,
      fire: {
        ammunition: 10,
        precision: [1, 2, 3],
        intensity: { light: [2, 3, 4], middle: [5, 6, 7], humans: [9, 10, 11] },
      },
    },
  },
  {
    id: 2,
    name: "pz3-g",
    img: pz3g,
    type: "middle",
    count: 3,
    actions: {
      move: 3,
      defend: 2,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: { light: [7, 8, 9], middle: [4, 5, 6], humans: [6, 8, 10] },
      },
    },
  },
  {
    id: 3,
    name: "t26",
    img: t26_USSR,
    type: "light",
    count: 3,
    actions: {
      move: 3,
      defend: 2,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: { light: [3, 4, 5], middle: [5, 6, 7], humans: [5, 7, 9] },
      },
    },
  },
  {
    id: 4,
    name: "t34",
    img: t34,
    type: "middle",
    count: 3,
    actions: {
      move: 2,
      defend: 2,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: {
          light: [9, 10, 11],
          middle: [8, 9, 10],
          humans: [7, 9, 11],
        },
      },
    },
  },
];

export const mockTanks = [
  {
    id: 1,
    name: tanks[1].name,
    img: tanks[1].img,
    team: 1,
    activeTank: true, //для дисэйбла огня
    count: 3,
    type: tanks[1].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 2 },
    coordinates: {
      row: 1,
      col: 2,
      top: 0,
      left: 0,
      type: 2,
    },
    actions: {
      move: 3,
      defend: 2,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: { light: [7, 8, 9], middle: [4, 5, 6], humans: [6, 8, 10] },
      },
    },
  },
  {
    id: 2,
    name: tanks[1].name,
    img: tanks[1].img,
    team: 1,
    activeTank: true,
    count: tanks[1].count,
    type: tanks[1].type,
    prevDeffStep: 0,
    afterStepData: { move: 2, defend: 2 },
    coordinates: {
      row: 1,
      col: 1,
      top: 0,
      left: 0,
      type: 1,
    },
    actions: {
      move: 3,
      defend: 2,
      fire: {
        ammunition: 10,
        precision: [1, 2, 3],
        intensity: { light: [7, 8, 9], middle: [4, 5, 6], humans: [6, 8, 10] },
      },
    },
  },
  {
    id: 3,
    name: tanks[0].name,
    img: tanks[0].img,
    team: 1,
    activeTank: true,
    count: tanks[0].count,
    type: tanks[0].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 2 },
    coordinates: {
      row: 8,
      col: 1,
      top: 0,
      left: 0,
      type: 1,
    },
    actions: {
      move: 3,
      defend: 2,
      fire: {
        ammunition: 10,
        precision: [1, 2, 3],
        intensity: { light: [5, 6, 7], middle: [2, 3, 4], humans: [9, 10, 11] },
      },
    },
  },
  {
    id: 4,
    name: tanks[3].name,
    img: tanks[3].img,
    team: 2,
    activeTank: true,
    count: tanks[3].count,
    type: tanks[3].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 3 },
    coordinates: {
      row: 1,
      col: 11,
      top: 0,
      left: 0,
      type: 1,
    },
    actions: {
      move: 3,
      defend: 3,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: { light: [9, 10, 11], middle: [8, 9, 10], humans: [7, 9, 11] },
      },
    },
  },
  {
    id: 5,
    name: tanks[2].name,
    img: tanks[2].img,
    team: 2,
    activeTank: true,
    count: tanks[2].count,
    type: tanks[2].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 1 },
    coordinates: {
      row: 7,
      col: 11,
      top: 0,
      left: 0,
      type: 1,
    },
    actions: {
      move: 3,
      defend: 1,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: { light: [3, 4, 5], middle: [5, 6, 7], humans: [5, 7, 9] },
      },
    },
  },
  {
    id: 6,
    name: tanks[2].name,
    img: tanks[2].img,
    team: 2,
    activeTank: true,
    count: tanks[2].count,
    type: tanks[2].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 1 },
    coordinates: {
      row: 8,
      col: 10,
      top: 0,
      left: 0,
      type: 2,
    },
    actions: {
      move: 3,
      defend: 1,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: { light: [3, 4, 5], middle: [5, 6, 7], humans: [5, 7, 9] },
      },
    },
  },
  {
    id: 7,
    name: tanks[0].name,
    img: tanks[0].img,
    team: 1,
    activeTank: true,
    count: tanks[0].count,
    type: tanks[0].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 1 },
    coordinates: {
      row: 8,
      col: 2,
      top: 0,
      left: 0,
      type: 2,
    },
    actions: {
      move: 3,
      defend: 1,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: { light: [3, 4, 5], middle: [5, 6, 7], humans: [5, 7, 9] },
      },
    },
  },
  {
    id: 8,
    name: tanks[2].name,
    img: tanks[2].img,
    team: 2,
    activeTank: true,
    count: tanks[2].count,
    type: tanks[2].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 1 },
    coordinates: {
      row: 6,
      col: 10,
      top: 0,
      left: 0,
      type: 2,
    },
    actions: {
      move: 3,
      defend: 1,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: { light: [3, 4, 5], middle: [5, 6, 7], humans: [5, 7, 9] },
      },
    },
  },
  {
    id: 9,
    name: tanks[2].name,
    img: tanks[2].img,
    team: 2,
    activeTank: true,
    count: tanks[2].count,
    type: tanks[2].type,
    prevDeffStep: 0,
    afterStepData: { move: 3, defend: 1 },
    coordinates: {
      row: 3,
      col: 11,
      top: 0,
      left: 0,
      type: 2,
    },
    actions: {
      move: 3,
      defend: 1,
      fire: {
        ammunition: 10,
        precision: [1, 2, 2],
        intensity: { light: [3, 4, 5], middle: [5, 6, 7], humans: [5, 7, 9] },
      },
    },
  },
];

// export const respawnTanksAfterMove = [

// ]
