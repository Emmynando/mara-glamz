const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

export default async (req: any, res: any) => {
  const { title, mail, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 587,
    service: "gmail",
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (err: any, success: any) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailOption = {
    from: mail,
    to: process.env.SMTP_MAIL,
    subject: title,
    text: message,
    html: `${title} ${mail} says: \n \n ${message}`,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOption, (err: any, info: any) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  // await transporter.sendMail(mailOption, function (err: any, data: any) {
  //   if (err) {
  //     console.log(err);
  //     res.send("error" + JSON.stringify(err));
  //   } else {
  //     console.log("mail sent");
  //     res.send("success");
  //   }
  // });

  res.status(200).json({ status: "success" });
};
