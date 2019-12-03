const mdLinks = require("../index.js");

const links = [
  { text: "WhatsApp", href: "https://www.web.whatsapp.com/" },
  { text: "Facebook", href: "http://www.facebook.com.br/" }
];

describe('mdLinks', () => {
  it('is a function', () => {
    expect(typeof mdLinks).toBe("function");
  });

  it('Should return 2 links', () => {
    mdLinks("./lib/__test__/exemplo.md").then(result => {
      expect(result).toEqual(links);
     
    })
  })

  it('Should return an error', () => {
    mdLinks("./lib/__test__/exemplo.md").catch(result => {
      expect(result).toEqual("Error: ENOENT: no such file or directory, open './lib/__test__/exemplo.md'");
    
    })
  });

})






// describe("mdlinks", () => {
//     it("is a function", () => {
//       expect(typeof mdlinks).toBe("function");
//     });

//     it("should return if has next evolution ", () => {
//       expect(typeof mdlinks)).toEqual([25, 100
//       ]);

//     });

//   });