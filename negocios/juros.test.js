
const juros = require('./juros')
const expect = require('chai').expect

describe('Testando as funcionalidades do módulo juros', ()=>{
   it('calcula juros compostos', ()=>{
       const testaJurosCompostos =  juros.calculaJuros(100,0.01,1)
       expect(testaJurosCompostos).to.equal(101)
   })
})


// spec mais verboso