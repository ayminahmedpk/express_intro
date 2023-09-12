

const express = require ('express');
const app = express();
const router = express.Router()
const port = 3456;


router.use((req, res, next) => {
  // BLOCK 2
  
  // Always fired off if router middleware is fired off (whenever route matches
  // /admin)
  
  //   if no x-auth header, sends request out of 'router' middleware,
  //   back to the start of BLOCK 1
  
  //   if has x-auth header, stays in 'router' middleware, looking for a match
  //   in another route (which there's only one defined here)

  console.log('Block 2 - always executed if route starts with /admin')
  if (!req.headers['x-auth']) return next('router')
  next()
})


// matches /admin/user/:id
router.get('/user/:id', (req, res) => {
  res.send('BLOCK 3 - only for (x-auth header + get /admin/user:id)')
})

// return next('router') exits out of router middleware and sends control back
// to the start of BLOCK 1. The same also happens if router middleware doesn't
// have a matching route



app.use('/admin', router, (req, res) => {
  // BLOCK 1 - all methods at /admin and subroutes, sends to 'router' middleware
  // immediately, before entering the block - doesn't execute any of the lines
  // in the block unless 'router' middleware sends the request back
  res.send('BLOCK 1 - if /admin but not (get /admin/user/:id + x-auth header)');
})


app.listen(port, () => {
  console.log(`Sample App listening on port ${port}.`);
});

