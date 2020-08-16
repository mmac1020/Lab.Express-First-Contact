const express = require('express');

const app = new express();

app.listen(1337, () => {
  console.log('Server listening');
})

app.get('/', (req, res) => {
  res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Hello World</h1>
     </body>
    </html>
  `)
})

app.get('/kittens', (req, res) => {
  res.send('KITTENS');
})

app.get('/puppies', (req, res) => {
  res.send('PUPPIES');
})