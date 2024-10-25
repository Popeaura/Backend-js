
const express = require('express');

const app = express();

const port = 3500;

app.get('/', (req, res) => {
    res.send('Hello Pope, you are now using the express package');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
