const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const env = require('dotenv');
const dataFilter = require('../helpers/dataFilter');
env.config();


router.get('/:filter/:state', async (req, res) => {
 try {
  const filter = req.params.filter;
  const state = req.params.state;
  const response = await fetch(process.env.URL);
  const data = await response.json();
  if (data && data.Brastlewark.length > 0) {
   const dataFiltered = await dataFilter(filter, data.Brastlewark, state);
   if (dataFiltered) {
    res.status(200).send(dataFiltered);
   } else {
    res.status(404).send('Something went wrong.');
   }
  } else {
   res.status(404).send('Error, response empty or not found');
  }
 } catch (error) {
  res.status(404).send(error);
 }
});

module.exports = router;