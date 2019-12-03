const mdLinks = require("../index.js");

const links = [
  { text: "WhatsApp", href: "https://www.web.whatsapp.com/" },
  { text: "Facebook", href: "http://www.facebook.com.br/" }
];

describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe("function");
  });

  it('Should return 2 links', (done) => {
    mdLinks("./lib/__tests__/exemplo.md").then(result => {
      expect(result).toEqual(links);
      done();
    })
  })

  it('Should return an error', (done) => {
    mdLinks("./lib/__test__/exemplo.md").catch(result => {
      expect(result.code).toEqual("ENOENT");
      done();

    })
  });
})