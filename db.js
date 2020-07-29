const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/arbyte',{ useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection; 
db.once ('open', () => console.log ('Houston, we have a connection'));
db.on ('error', (error) => console.log('Houston, we have a problem!', error));

module.exports = db;