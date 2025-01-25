const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
        Product : {
            type:String,
            require : true,
        },
        category : {
            type:String,
            require : true,
        },
        price : {
            type : Number,
            required : true,
        },
        instock: {
            type:Boolean,
            require : true,
        },
        tags : {
            type:[String],
        }
       
});

module.exports  =mongoose.model('Products',ProductSchema);