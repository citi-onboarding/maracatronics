const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

module.exports = async ({
    destinationUser,
    subjectText,
    textOption
}) => {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    transporter.sendMail({
        from: process.env.EMAIL,
        to: destinationUser,
        subject: subjectText,
        text: textOption
    })

};