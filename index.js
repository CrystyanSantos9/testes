const juros = require('./negocios/juros')


const montante = juros.calculaJuros(400, 0.02, 12)


console.log(montante)