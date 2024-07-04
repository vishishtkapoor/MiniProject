const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dummy database to store OTPs (for demonstration purposes)
let otpDatabase = {};

// Nodemailer setup (replace with your email configuration)
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'zeekyfry@gmail.com',
        pass: 'vishisht123'
    }
});

// Generate OTP endpoint
app.get('/generate-otp', (req, res) => {
    let otp = randomstring.generate({
        length: 6,
        charset: 'numeric'
    });

    // Save OTP in database (normally you would store this in a database)
    otpDatabase['current'] = otp;

    // Dummy email sending (replace with actual email sending logic)
    let mailOptions = {
        from: 'zeekyfry@gmail.com',
        to: 'vishishtkapoor2@gmail.com',
        subject: 'Your OTP for Access',
        text: `Your OTP is: ${otp}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.status(200).send(otp);
});

// Authenticate OTP endpoint
app.get('/authenticate-otp', (req, res) => {
    let inputOTP = req.query.input;
    let generatedOTP = otpDatabase['current'];

    if (inputOTP === generatedOTP) {
        res.status(200).send('authenticated');
    } else {
        res.status(403).send('authentication_failed');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});