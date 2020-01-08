const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const config = require('../config');

app.use(cors());
// app.use(express. json());

async function getNews() {
    const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${config.password.apiKey}`);
    return data.data;
}

app.get('/get/news', (req, res) => {
    getNews()
    .then(result => {
        res.send(result);
    })
    .catch(error => {
        console.log(error);
    });
    // axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${config.password.apiKey}`)
    // .then(result => {
    //     res.send(result.data);
    // })
    // .catch(error => {
    //     console.log(error);
    // })
});

const port = 4000;
app.listen(port, console.log(`Listening on port ${port}`));