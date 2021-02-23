const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const Mailgen = require("mailgen");

const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    auth: {
      user: "wwr1109@gmail.com",
      pass: "1109etiW",
    },
  })
);

let MailGenerator = new Mailgen({
  theme: "salted",
  textDirection: "ltr",
  product: {
    name: "PlaceMan",
    link: "http://localhost:4000/",
  },
});

const forgotPasswordMail = async (user) => {
  let response = {
    body: {
      name: user.name,
      greeting: `Hello deer`,
      intro: [`Your new password is: ${user.password}`],
      action: {
        instructions: "Login to the site with the new passweord:",
        button: {
          text: "Login",
          color: "pink", // Optional action button color
          link: "http://localhost:4200/app-form",
        },
      },
    },
  };
  let mail = MailGenerator.generate(response);

  let message = {
    from: "wwr1109@gmail.com",
    to: user.email,
    subject: "Password Recovery",
    html: mail,
  };

  transporter.sendMail(message, function (error, info) {
    if (error) {
      console.log("send mail" + error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  transporter.close();
};

module.exports =
  forgotPasswordMail