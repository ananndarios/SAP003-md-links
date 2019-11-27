function mdLinks() {


    //Carregando o módulo file (filesystem)    
    const fs = require('fs');
    //Lendo o conteúdo
    fs.readFile('exemplo.txt', 'utf8', function (err, logData) {
        //se o erro ocorrer a seção será encerrada automaticamente   
        if (err) throw err;
        //O logData é um parâmetro que converte para uma string
        const text = logData.toString();

        //Quebrando o arquivo em linhas - O método split separa e divide strings

        const lines = text.split('\n');

        lines.forEach(function (line) {
            const parts = line.split('href, text');

        });

        const regex = /.*(?!(https?:\/\/[^\)]*))/gm;
        const str = `Olá meu povo!! Adoro quando vocês me mandam links
como este https://www.web.whatsapp.com/ e é lindo.
Será incrível se vocẽs me encaminharem mais links como estes:
http://www.facebook.com.br/ maravilhaaaaaa
amo node js de coração!
`;
        let m;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                //console.log(`Found match, group ${groupIndex}: ${match}`);
            });
        }

        // console.log(lines);

    });
    console.log(mdLinks);

}
mdLinks();