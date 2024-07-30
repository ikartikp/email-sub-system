var express = require('express');
var router = express.Router();
const subscribermModel=require("../models/subscriber")
const {sendMail}=require("../utils/sourabhmail")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/subscriber", async function (req,res,next) {
 try {
  const subscriberdata=req.body;
  console.log(subscriberdata);
  const subscriber=await new subscribermModel(subscriberdata)
  await subscriber.save()
  await sendMail(req,res)
 } catch (error) {
  console.log(error.message
    );
 }
  
})
module.exports = router;
