import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    externalResolver: true,
  },
};

const production = process.env.NODE_ENV === 'production';

const nodemailer = require('nodemailer');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, subject, message } = req.body.values;

  async function main() {
    let testAccount: any;

    if (!production) {
      testAccount = await nodemailer.createTestAccount();
    }

    const transporter = nodemailer.createTransport({
      port: production ? 465 : 587,
      host: production ? 'smtp.gmail.com' : 'smtp.ethereal.email',
      auth: {
        user: production ? process.env.BURN_MAIL : testAccount.user,
        pass: production ? process.env.PASSWORD : testAccount.pass,
      },
      secure: !!production,
    });

    const mailData = {
      from: process.env.BURN_MAIL,
      to: process.env.MAIL,
      subject,
      text: message,
      html: `<div>${message}</div><p>Sent from:</p>
      <p>${name}</p>
      <p>${email}</p>`,
    };

    transporter.sendMail(mailData, (err: any, info: any) => {
      if (err) {
        res.status(500).json({ success: false, message: err });
      } else {
        if (!production) console.log(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
        res.status(200).json({ success: true, message: info });
      }
    });
  }

  await main();
}
