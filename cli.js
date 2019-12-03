#!/usr/bin/env node

const mdlinks = require('./lib/index.js');
const path = process.argv[2]
mdlinks(path)
.then((result) => console.log(result))
.catch((err) => console.log(err));



