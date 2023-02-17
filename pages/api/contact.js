export default function (req, res) {
  let nodemailer = require('nodemailer')
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'mail.troniclab.com',
    auth: {
      user: 'support@troniclab.com',
      pass: 'fingertips12D',
    },
    secure: true,
  })
  const mailData = {
    from: 'support@troniclab.com',
    to: 'info@troniclab.com',
    subject: `Message ${req.body.subject}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
  }
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err)
    else console.log(info)
  })
  res.status(200)
}
