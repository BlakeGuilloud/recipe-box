const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./server/lib/routes/auth.routes');
const recipeRoutes = require('./server/lib/routes/recipe.routes');

const db = process.env.MONGODB_URI || 'mongodb://localhost/testing';
const port = process.env.PORT || 8100;

mongoose.connect(db);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.use(express.static(__dirname));

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.use('/', authRoutes);
app.use('/api', recipeRoutes);

app.listen(port, () => console.log('app listening on port: ', port));
