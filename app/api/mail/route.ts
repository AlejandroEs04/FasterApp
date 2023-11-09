const express = require('express')
const dotenv = require('dotenv')
const mg = require('mailgun.js')

dotenv.config()

const mailgun = () =>
    mg({
        apiKey: 'https://app.mailgun.com/app/sending/domains/'
    })