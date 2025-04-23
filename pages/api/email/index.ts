import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export default async function POST(request: NextApiRequest, res: NextApiResponse) {
    const { email, name, message, token } = await request.body;

    // recaptcha verify
    const secret = process.env.RE_SECRET_KEY!;
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secret}&response=${token}`,
    });
    const data = await response.json();
    if (!data.success || data.score < 0.5) // Check if the score is less than 0.5
        return res.status(400).json({ error: 'Captcha verification failed' });


    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.APP_EMAIL,
            pass: process.env.APP_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.APP_EMAIL,
        to: process.env.APP_EMAIL,
        // cc: email,
        subject: `Message from ${name} (${email})`,
        text: message,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return res.json({ message: 'Email sent' });
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}