const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
.then(() => {
    console.log('Mongo DB connected....');
}).catch((err) => {
    console.log('Mongo db Connection Error' , err)
})