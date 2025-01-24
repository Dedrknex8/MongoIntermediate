const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
        Product : {
            type:String,
            require : true,
        },
        catgories : {
            type:String,
            require : true,
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