const formmodal = require("../model/Formmodal");

const Formdatacontroller = async (req, res) => {
    try {

        let datas = {
            name: req.body.name || req.query.name,
            email: req.body.email ||  req.query.email,
            subject: req.body.subject || req.query.subject,
            message: req.body.message || req.query.message,
        }
        console.log("datas", datas);
        let datainsert = await formmodal.create({
            ...datas
        })
        // console.log("datainsert" , datainsert);
        res.status(200);
        res.send({
            status: 200,
            message: "Message sent successfully . We Will Contact Earlier."
        })
    } catch (error) {
        res.status(400);
        res.send({
            status: 400,
            message: error.message
        })
    }
}
module.exports ={
    Formdatacontroller
}