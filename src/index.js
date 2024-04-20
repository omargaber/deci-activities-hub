const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const fetch = require('node-fetch'); // Added require for node-fetch
 
const app = express()
const port = 3000
 
// setup the ability to see into response bodies
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 
// setup the express assets path
app.use('/', express.static(path.join(__dirname, '../client')))
 
// API calls ------------------------------------------------------------------------------------
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, './client/pages/user.html'));
})
 
app.get('/users', async (req, res) => {
    const url = 'https://dummyjson.com/users'; // Define the correct URL for the API
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;
      res.json(authors); // Send the authors data as JSON response
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      res.status(500).send('Error fetching data'); // Send an error response if fetch fails
    });
})
 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))