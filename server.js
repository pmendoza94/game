const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path'); 
const session = require('express-session');

var sessionStore = new session.MemoryStore;
app.use(session({
	cookie: { maxAge: 6000 },
	store: sessionStore,
	saveUninitialized: true,
	resave: true,
  	secret: 'secret',
}));

app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public/dist')));

require('./server/config/mongoose.js')
require('./server/config/routes.js')(app)

app.listen(1337, function() {
	console.log('Listening on port 1337');
});