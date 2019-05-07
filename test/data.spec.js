global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const dataPoke = [{

    name: "Caterpie",
    num: "010",
    type: ["Bug"],
    weaknesses: [
      "Fire",
      "Flying",
      "Rock"
    ]
  },
  {
    name: "Dragonite",
    num: "149",
    type: ["Dragon"],
    weaknesses : [
        "Ice",
        "Rock",
        "Dragon",
        "Fairy"
      
    ]
  },
  {
    name: "Squirtle",
    num: "007",
    type: ["Water"],
    weaknesses : [
      "Electric",
      "Grass"
  ]
  }

]

describe('pokedexType', () => {


  it('debería ser una función', () => {
    assert.equal(typeof pokedexType, 'function');
  });


  it('debería retornar elemento "Caterpie" para filtrar por tipo "Bug"', () => {
    assert.deepEqual(window.pokedexType(dataPoke, "Bug"), [{
      name: "Caterpie",
      num: "010",
      type: ["Bug"],
      weaknesses: [
        "Fire",
        "Flying",
        "Rock"
      ]

    }])
  });
})


describe('sortCode', () => {


  it('debería ser una función', () => {
    assert.equal(typeof sortCode, 'function');
  });


  it('debería retornar el elemento Caterpie", "Dragonite" y "Squirtle" para ordenar de la "A a la Z"', () => {
    assert.deepEqual(window.sortCode(dataPoke, "az"), [{

        name: "Caterpie",
        num: "010",
        type: ["Bug"],
        weaknesses: [
          "Fire",
          "Flying",
          "Rock"
        ]
      },
      {
        name: "Dragonite",
        num: "149",
        type: ["Dragon"],
        weaknesses : [
          "Ice",
          "Rock",
          "Dragon",
          "Fairy"
        
      ]
      },
      {
        name: "Squirtle",
        num: "007",
        type: ["Water"],
        weaknesses : [
          "Electric",
          "Grass"
      ]
      }
   ])
  });
})

it('debería retornar el elemento "Squirtle","Dragonite" y " Caterpie",  para ordenar de la "Z a la A"', () => {
  assert.deepEqual(window.sortCode(dataPoke, "za"), [{

    name: "Caterpie",
    num: "010",
    type: ["Bug"],
    weaknesses: [
      "Fire",
      "Flying",
      "Rock"
    ]
  },
  {
    name: "Dragonite",
    num: "149",
    type: ["Dragon"],
    weaknesses : [
      "Ice",
      "Rock",
      "Dragon",
      "Fairy"
    
  ]
  },
  {
    name: "Squirtle",
    num: "007",
    type: ["Water"],
    weaknesses : [
      "Electric",
      "Grass"
  ]
  }
    
 ])
});

