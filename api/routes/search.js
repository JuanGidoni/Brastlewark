const express = require('express');
const fetch = require('node-fetch');
const dataSearch = require('../utils/dataSearch');
const router = express.Router();
const env = require('dotenv');
env.config();
router.get('/:search/:state', async (req, res) => {
 try {
  const search = req.params.search;
  const state = req.params.state;
  const response = await fetch(process.env.URL);
  const data = await response.json();
  if (data.Brastlewark && data.Brastlewark.length > 0) {
   const dataFiltered = await dataSearch(state, data.Brastlewark, search);
   if (dataFiltered) {
    res.status(200).send(dataFiltered);
   } else {
    res.status(404).send('Error, something went wrong with your search.');
   }
  } else {
   res.status(404).send('Error, invalid search or not found');
  }
 } catch (error) {
  res.status(500).send(error);
 };
});

module.exports = router;