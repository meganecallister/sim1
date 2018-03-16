const express = require('express');
const bodyParser = require('body-parser');
const sc = require('../server/shelfie-controller');
const massive = require('massive');
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
let port = 3001;

massive( process.env.CONNECTION_STRING )
.then( db => app.set('db', db),
    app.listen(port, () => {console.log("Listening on port " + port)})
);

app.get('/api/inventory', sc.read)
app.post('/api/postProducts', sc.create)
// app.put('/api/updateProducts', sc.update)
// app.delete('/api/deleteProducts', sc.delete)


