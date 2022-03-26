const express = require("express");
const connect = require("./config/db");
const usercontroller = require("./controller/user.controller")



const app = express();


// >--==============Nodemailer===========---<
"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "9b8583f390a6e4", // generated ethereal user
      pass: "40fc0d59bd175e", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "R@12345, baz@example.com", // list of receivers
    subject: "Welcome tot Abc ✔", // Subject line
    text: "Hi Rohit?", // plain text body
    html: "<b>WELCOME TO ABC?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

// <=============================================>
app.use(express.json())

app.use("/usernewlink",usercontroller)

app.listen(5000,async function(req,res){
    try{

        console.log("Server start 5000")
           await connect()

    }
    catch(err)
    { 
         console.log(err.message) 
    }
})
