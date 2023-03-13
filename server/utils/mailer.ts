const hbs = require('nodemailer-express-handlebars')
const nodemailer = require('nodemailer')
const path = require('path')

export function sendMail(email:string) {

    console.log(email)
    // initialize nodemailer
    var transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'ajibolaengr@gmail.com',
                pass: process.env.GMAIL_PASSWORD
            },
            from: "ajibolaengr@gmail.com"
        }
    );

    var mailOptions = {
        from: '"Sadiq Ajibola" <ajibolaengr@gmail.com>', // sender address
        to: `${email}`, // list of receivers
        subject: 'Order Successful!',
        template: 'email', // the name of the template file i.e email.handlebars,
        html: "<b style='color:blue'>Your order has beeen received and is being processed</b>",
        text: "Order received"
    };

    // trigger the sending of the E-mail
    transporter.sendMail(mailOptions, function (error:any, info:any) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
}