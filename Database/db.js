const mongoose = require('mongoose');

const connectToDb = async()=>{
     mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connected sucessfuly')}
).catch(e=>{
    console.log(e)
});
}

module.exports  = connectToDb;
