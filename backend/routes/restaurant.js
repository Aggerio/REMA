const express = require('express')
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    //res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  
  try {
    //res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
