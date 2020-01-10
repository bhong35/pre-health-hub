const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const config = require('../config');

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.send("hit test route");
})

// async function getNews() {
//     const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${config.password.apiKey}`);
//     return data.data.articles;
// }

// get news articles from api
// app.get('/get/news', (req, res) => {
//     .then(result => {
//         res.send(result.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// });

// app.get('/get/news', (req, res) => {
//     axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${config.password.apiKey}`)
//     // return getNews()
//     .then(result => {
//         res.send(result.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// });

const port = 4000;
app.listen(port, console.log(`Listening on port ${port}`));