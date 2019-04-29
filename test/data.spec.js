global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');


describe('codePoke', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof codePoke.filter, 'function');
  });

  it('debería retornar "Charmander, Bulbasaur, Pikachu" para "Fire"', () => {
    assert.equal(codePoke.filter("Fire"),"Charmander");
  });
})

describe('sort', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof codePoke.filter, 'function');
  });

  it('debería retornar ""para "codePoke.filter("")"', () => {
    assert.equal(example(), 'example');
  });
})

describe('compute', () => {
  
  it('debería ser una función', () => {
    assert.equal(typeof codePoke.filter, 'function');
  });

  it('debería retornar ""', () => {
    assert.equal(example(), 'example');
  });
})
