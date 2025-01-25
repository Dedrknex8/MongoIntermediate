require('dotenv').config();
const express = require('express');
const connectToDb = require('./Database/db');
const productRoutes = require('./routers/product-route');
const bookRoutes = require('./routers/bookroute');
const app = express();


//MIDDLEWARE
app.use(express.json());

//Connect to DB
connectToDb();


//LISTEN TO PORT
app.listen(process.env.PORT,()=>{
    console.log(`connected to ${process.env.PORT}`);
    
});
app.use("/api",productRoutes);
app.use("/api",bookRoutes);