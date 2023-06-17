const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

export default async function (req: any, res: any) {
  const { title, mail, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOption = {
    from: mail,
    to: process.env.SMTP_MAIL,
    subject: title,
    text: message,
    html: `From: ${mail} Full Message: ${message}`,
  };

  await transporter.sendMail(mailOption, function (err: any, data: any) {
    if (err) {
      console.log(err);
      res.send("error" + JSON.stringify(err));
    } else {
      console.log("mail sent");
      res.send("success");
    }
  });

  console.log(title, mail, message);
  res.send("success");
}