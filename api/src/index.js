const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const distPath = '/../../client/dist';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, distPath)));

app.get('/test', (req, res) => { res.send('world') });

app.listen(port, () => { console.log(`listening on port ${port}`) });
