const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>IAE</h1>');
})

router.post('/', (req, res) => {
  console.log(req.body)
})


module.exports = router