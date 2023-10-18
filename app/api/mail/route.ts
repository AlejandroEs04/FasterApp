const express = require('express')
const dotenv = require('dotenv')
const mg = require('mailgun.js')

dotenv.config()

const mailgun = () =>
    mg({
        apiKey: 'https://app.mailgun.com/app/sending/domains/'
    })

https://www.youtube.com/watch?time_continue=3&v=SscmIl9IqDc&embeds_referring_euri=https%3A%2F%2Fwww.bing.com%2F&embeds_referring_origin=https%3A%2F%2Fwww.bing.com&source_ve_path=Mjg2NjY&feature=emb_logo