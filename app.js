const express=require('express')
const nodemailer=require('nodemailer')
const bodyParser=require('body-parser')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const app=express()
 
require('dotenv').config()
app.use(cors())
app.use(bodyParser.json({limit: '1mb'}));

var limiter = new rateLimit({
    windowMs:15*60*1000,
    max:100,
    delayMs:0,
    message:"Too many requests created from this IP, please try again after an hour"
})
app.use(limiter)

let transporter = nodemailer.createTransport({
    host:'smtp.zoho.com',
    port: 465,
    auth: {
      user: 'noreply@codechefvit.com', // your gmail address
      pass: process.env.password// your gmail password
    }
  });

  app.post('/send/email',async function(req,res){
    try{
        var mailOptions
        if(Array.isArray(req.body.to))
        {
            
            mailOptions={
                from : 'noreply@codechefvit.com',
                bcc : req.body.to,
                subject : req.body.subject,
                html : req.body.message
            }
        }
        else{
            mailOptions={
                from : 'noreply@codechefvit.com',
                to : req.body.to,
                subject : req.body.subject,
                html : req.body.message
            }
        }
        console.log(mailOptions)
        transporter.sendMail(mailOptions, function(error, response){
        if(error){
                console.log(error)
            res.status(401).json("error")
        }else{
                console.log("Message sent: ");
            res.status(200).json("sent")
            }
        });
    }
    catch(e)
    {
        res.status(400).send()
    }
});
var port= process.env.PORT || 3000
app.listen(port,()=>{
    console.log('server running')
})
