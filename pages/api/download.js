require("dotenv").config();
const PASSWORD = process.env.mailpassword;

export default function (req, res) {
  console.log(req.body);
  console.log(req.body.email);
  console.log(typeof req.body.link);
  console.log("password", PASSWORD);
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "downloads@izem.me",
      pass: PASSWORD,
    },
    secure: true,
  });
  const mailData = {
    from: "downloads@izem.me",
    to: req.body.email,
    subject: `Your dowload link from iZem 🐪`,
    text: req.body.link,
    html: `<div>${req.body.link}</div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
