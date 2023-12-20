const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const Formrouter = require("./routers/Formrouter");
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
// using bodyparser to retrieve the form data from clientside.
app.use(bodyParser.json());

// const port = process.env.port;
const port = 3004;
app.get("/getdata" , (req , res)=>{
    console.log("datas" , req.params);
    console.log("datas2" , req.query);
})
app.use("/api/v2/" , Formrouter)
app.listen(port, () => {
    console.log("Port is Listening", `${port}`);
})