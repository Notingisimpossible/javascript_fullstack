var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', function(req, res) {
  // res.send('hello world');
  let json = {
    name:'lk',
    age:18
  }
  res.end(`callback(${JSON.stringify(json)})`)
});
app.listen(8090, () => {
  console.log('8090')
})