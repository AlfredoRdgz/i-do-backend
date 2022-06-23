require('dotenv').config();
const nodemailer = require("nodemailer");
const transportConfig = {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
};
const email = nodemailer.createTransport(transportConfig);

exports.sendEmail = function (to, subject, html) {
    return new Promise(async (resolve, reject) => {
        try {
            const message = {
                from: {
                    name: "IDoEvent | Punto Doce",
                    address: process.env.EMAIL_USER
                },
                to: to,
                subject: subject,
                html: html
            };
            await email.sendMail(message);
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}
