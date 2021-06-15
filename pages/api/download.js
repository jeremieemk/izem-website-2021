require("dotenv").config();
const PASSWORD = process.env.mailpassword;

export default function (req, res) {
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
    from: "iZem DL",
    to: req.body.email,
    subject: `Your download link from iZem 🐪`,
    text: `Hi there! Thanks for visting my site 🦀 Here's the link you requested : ${req.body.link}. Feel free to reply this this email, I'd be happy to hear from you 🧸. Jérémie / iZem`,
    html: `<div>Hi there!<br/><br/>Thanks for visting my site 🦀 <br/><br/>Here's the link you requested : ${req.body.link}.<br/><br/>Feel free to reply to this email, I'd be happy to hear from you 🧸.<br/><br/>Jérémie / iZem</div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
