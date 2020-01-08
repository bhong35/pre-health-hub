const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/test', (req, res) => {
    res.send("hit test route");
});

const port = 4000;
app.listen(port, console.log(`Listening on port ${port}`));