const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const env = require('dotenv');
const dataUnique = require('../utils/dataUnique');
env.config();

router.get('/:id', async (req, res) => {
 try {
  const id = req.params.id;
  const response = await fetch(process.env.URL);
  const data = await response.json();
  if (data.Brastlewark && data.Brastlewark.length > 0) {
   const dataFiltered = await dataUnique(id, data.Brastlewark);
   console.log(dataFiltered);
   if (dataFiltered) {
    res.status(200).send(dataFiltered);
   } else {
    res.status(404).send('Error, something went wrong finding that item with id.');
   }
  } else {
   res.status(404).send('Error, invalid search or not found');
  }
 } catch (error) {
  res.status(500).send(error);
 };
});

module.exports = router;