
const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://aylcin47:scP8YXDgJgV14ZQS@cluster0.lactw53.mongodb.net/';


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB bağlantı başarılı'))
    .catch((err) => console.log(err));

