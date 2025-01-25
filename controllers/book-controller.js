const Author = require('../Modells/author');
const Book = require('../Modells/book');


const createAuthor = async(req,res) =>{
    try {
        
        //get author deatils from req.body and appened it

        const author = new Author(req.body);
        await author.save(); //save in DB
        res.status(200).json({
            sucess : true,
            message : "New author added sucessfully",
            data : author,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            sucess : false,
            message : "somethin went wrong when Auhtor"
        })
    }
}
const createBook = async(req,res) =>{
    try {
        const book = new Book(req.body);
        await book.save(); //save in DB
        res.status(200).json({
            sucess : true,
            message : "New book added sucessfully",
            data : book,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            sucess : false,
            message : "somethin went wrong when Book"
        })
    }
}

const getbookAuthor = async(req,res)=>{
    try {
        //Find the bookl
        const book = await Book.findById(req.params.id).populate('author');
        //.populate means the book id will ref to the author

        if(!book){
            return res.status(400).json({
                sucess : false,
                message : "No book exists for this id",
            });
        }
         res.status(200).json({
            sucess : true,
            message : "book found",
            data : book,
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            sucess : false,
            message : "somethin went wrong when Book"
        })
    }
}
module.exports = { createAuthor,createBook,getbookAuthor };