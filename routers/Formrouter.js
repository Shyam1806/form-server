const router = require("express").Router();
const {Formdatacontroller} =  require("../controllers/Formcontroller");


router.post("/formdata" , Formdatacontroller);
module.exports = router;
