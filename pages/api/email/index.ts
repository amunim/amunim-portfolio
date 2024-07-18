import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export default async function POST(request: NextApiRequest, res: NextApiResponse) {
    const { email, name, message } = await request.body;

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
        cc: email,
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