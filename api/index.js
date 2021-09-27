const env = require('dotenv');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const search = require('./routes/search.js');
const filter = require('./routes/filter.js');
const unique = require('./routes/unique.js');

env.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(function (err, req, res, next) {
 console.error(err.stack);
 res.status(500).send('Something broke!');
});

app.get('/v1', async (req, res) => {
 try {
  const response = await fetch(process.env.URL);
  const data = await response.json();
  if (data && data.Brastlewark.length > 0) {
   res.status(200).send(data);
  } else {
   res.status(404).send('Error, invalid search or not found');
  };
 } catch (error) {
  res.status(404).send(error);
 };

});
app.use("/v1/search/", search);
app.use("/v1/filter/", filter);
app.use("/v1/unique/", unique);
app.listen(port, () => {
 console.log(`Server running on port: ${port}`);
});