const pug = require('pug');

// Compile template.pug, and render a set of data
console.log(
    pug.renderFile('index.pug', {
      name: 'Adam',
    })
);
// "<p>Timothy's Pug source code!</p>"
