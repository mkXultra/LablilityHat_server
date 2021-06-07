const express = require('express');
const router = express.Router();

router.get('/',async (req, res) => {
  res.send("hello")
})

//TODO: putに変える
router.get('/:UUID/:serviceName/',async (req, res) => {
  res.send(req.params)
})


module.exports = router;