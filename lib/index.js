
//Carregando o módulo file (filesystem)    
const fs = require('fs');

function mdLinks(path) {

    return new Promise((resolve, reject) => {
        //Lendo o conteúdo
        fs.readFile(path, (err, logData) => {
            //se o erro ocorrer a seção será encerrada 
            if (err) {
                reject(err);
            }
            else {
                const text = logData.toString();
                const array = [];
                const regex = /\[(.+?)\]\((http[s]?:\/\/[^\)]*)\)/gm;
                let m;
                while ((m = regex.exec(text)) !== null) {
                    if (m.index === regex.lastIndex) {
                        regex.lastIndex++;
                    }
                    array.push({ text: m[1], href: m[2] })
                };
                resolve(array);
            };
        }
        )
    }
    )
}

module.exports = mdLinks;