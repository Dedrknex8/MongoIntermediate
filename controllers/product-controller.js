const Product = require('../Modells/product');

const insertProduct = async(req,res)=>{
    try {
        const sampleProducts = [
        {
        Product : "Laptop",
        category : "Electornics",
        price : 499,
        instock : true,
        tags : ["laptop","gaming"]
        },
        {
        Product : "Mobile",
        category : "Electornics",
        price : 299,
        instock : true,
        tags : ["Mobile","Android"]
        },
        ];

        const result = await Product.insertMany(sampleProducts);
        res.status(201).json({
            sucess :  true,
            data : `The Product ${result.length} added successfully` 
        });

    } catch (error) {
        console.log(error);
        res.status(500),json({
            success : false,
            message : "Some went wrong in adding products"
        }); 
        }
}

const getAllProduct = async(req,res)=>{
    try{
    const getPrduts = await Product.find({});
    if(getPrduts?.length > 0){
        res.status(200).json(
            {
                sucess : true,
                message : "products found",
                data : getPrduts
            }
        )
    }else{
        res.status(404).json(
            {
                sucess : false,
                message : "products are not available"
            }
        )
    }   
    }catch(e){
        console.log(e);
        
    }
}


module.exports  =  { insertProduct,getAllProduct };