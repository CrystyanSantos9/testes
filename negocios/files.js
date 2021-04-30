// importamos o módulo fs 
const { rejects } = require('assert')
const fs = require('fs')


// criamos a leitura de arquivo como uma promise (assíncrono)
const readdir = (path) =>{
    return new Promise((resolve, reject)=>{
        //a funcao readdir 
        //a funcao recebe um argumento, e uma callback com erro ou o retorno do arquivo desejado 
        fs.readdir(path, (err, file)=>{
            if(err){
                reject(err)
            }
            //retorna o arquivo
            resolve(file)
        })
    })
}

module.exports = {
    readdir
}