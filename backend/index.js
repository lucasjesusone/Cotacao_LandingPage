const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
       ` 

       let transporter = nodemailer.createTransport({
           host: '',
           port: '',
           auth: {
                user: '',
                pass: ''
            }
       })

       let mailOptions = {
           from: '',
           to: '',
           replyTo: '',
           subject: 'New Message',
           text: req.body.message,
           html: htmlEmail
       }

       transporter.sendMail(mailOptions, (err, info) => {
           if (err) {
               return console.log(err)
           }

           console.log("Message sent: %s", info.message)
           console.log("Message URL: %s", nodemailer.getTestMessageUrl(info))
       })
    })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}` )
})