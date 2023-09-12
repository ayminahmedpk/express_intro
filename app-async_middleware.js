

const express = require ('express');
const app = express();
const port = 3456;



// works
/* *************** */
// app.get('/', async (req, res) => {
//   console.log(`get /  : ${Date.now()}`);
//   setTimeout(() => {res.end();}, 5000)
// });
/* *************** */

// works
/* *************** */
// const promiseBasedMiddleware = (req, res, next) => {
//   new Promise(
//     (resolve, reject) => {
//       setTimeout(() => {resolve('resolve message')}, 5000)
//     }
//   ).then(data => {
//     console.log(data);
//     next();
//   })
// }

// app.use(promiseBasedMiddleware);
/* *************** */

const asyncMiddleware = async (req, res, next) => {
  const message = await new Promise(
    (resolve, reject) => {setTimeout(() => {resolve('async message');}, 5000);}
  );

  res.additionalParam = message;
  next();
}

app.use(asyncMiddleware);

app.get('/', async (req, res) => {
  // console.log(`get /  : ${Date.now()}`);
  res.send(res.additionalParam);
});

app.listen(port, () => {
  console.log(`Sample App listening on port ${port}.`);
});



