#!/usr/bin/env node

const mdlinks = require('./lib/index.js');

mdlinks(process.argv[2])
.them((result) => {
    console.log(result)
})
.catch(console.error);



