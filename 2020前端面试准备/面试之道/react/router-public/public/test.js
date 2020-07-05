const {pathToRegexp} = require('path-to-regexp')

let reg = pathToRegexp('/home',[],{end:false})
console.log(reg)