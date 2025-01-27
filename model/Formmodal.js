const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");
require("dotenv").config();

// Provide Database Address 
const url = process.env.DBURL
  
// Connecting to database 
mongoose.connect(url).then((ans) => { 
  console.log("ConnectedSuccessful") 
}).catch((err) => { 
  console.log("Error in the Connection") 
}) 
  
const formschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    }
},{
  collection: url.FORMModal,
}).plugin(aggregatePaginate);

const formmodal = mongoose.model("formdata", formschema);
// model is created as formdatas while creating db name it will automatically add s.
module.exports = formmodal;