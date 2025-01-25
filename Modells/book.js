const mongoose = require('mongoose');
const Author = require('./author');
const bookSchema = new mongoose.Schema({
    title : String,
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Author'
    }
})

module.exports = mongoose.model('Book',bookSchema);