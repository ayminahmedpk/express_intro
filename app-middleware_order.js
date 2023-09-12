

const express = require ('express');
const app = express();
const port = 3456;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Sample App listening on port ${port}.`);
// });


// const loggerMiddleware = (req, res, next) => {
//   console.log('\n');
//   console.log(`--> M1 - L1 <-- @${Date.now()}`);
//   next();
//   console.log(`--> M1 - L2 <-- @${Date.now()}`);
// }

const middlewareCreator = (name) => {
  return (req, res, next) => {
    console.log(`M${name} - L1: ${Date.now()}`)
    next();
    console.log(`M${name} - L2: ${Date.now()}`)
  }
}

const middlewareOne = middlewareCreator('1');
const middlewareTwo = middlewareCreator('2');



app.use(middlewareOne);
app.use(middlewareTwo);

app.get('/', (req, res) => {
  console.log(`get /  : ${Date.now()}`);
  res.end();
});

// app.get('/favicon.ico', (req, res) => {
//   console.log(`--> get /favicon.ico  <-- @${Date.now()}`);
//   res.end();
// });

app.listen(port, () => {
  console.log(`Sample App listening on port ${port}.`);
});



