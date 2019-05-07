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
    weaknesses: [
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
    weaknesses: [
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

describe('pokedexWeaknesses', () => {


  it('debería ser una función', () => {
    assert.equal(typeof pokedexWeaknesses, 'function');
  });


  it('debería retornar elemento "Dragonite" para filtrar por debilidad Ice"', () => {
    assert.deepEqual(window.pokedexWeaknesses(dataPoke, "Ice"), [{
      name: "Dragonite",
      num: "149",
      type: ["Dragon"],
      weaknesses: [
        "Ice",
        "Rock",
        "Dragon",
        "Fairy"
      ]
    }])

    it('debería retornar el elemento Caterpie", "Dragonite" y "Squirtle" para ordenar de la "A a la Z"', () => {
      assert.deepEqual(window.sortCode(dataPoke, "name","az"), [{

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
          weaknesses: [
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
          weaknesses: [
            "Electric",
            "Grass"
          ]
        }
      ])
    });
  })

  it('debería retornar el elemento "Squirtle","Dragonite" y " Caterpie",  para ordenar de la "Z a la A"', () => {
      assert.deepEqual(window.sortCode(dataPoke,"name", "za"), [{

          name: "Squirtle",
          num: "007",
          type: ["Water"],
          weaknesses: [
            "Electric",
            "Grass"
          ]
        },
        {
          name: "Dragonite",
          num: "149",
          type: ["Dragon"],
          weaknesses: [
            "Ice",
            "Rock",
            "Dragon",
            "Fairy"

          ]
        },
        {
        name: "Caterpie",
        num: "010",
        type: ["Bug"],
        weaknesses: [
          "Fire",
          "Flying",
          "Rock"
        ]
      },
     ])
  });
})
