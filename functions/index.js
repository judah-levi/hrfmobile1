const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({
  origin: true,
});
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

exports.submitTimeOff = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', '*');

  if (req.method === 'OPTIONS') {
    res.end();
  } else {
    cors(req, res, () => {
      if (req.method !== 'POST') {
        return;
      }

      const mailOptions = {
        from: req.body.email,
        replyTo: req.body.email,
        to: 'kolamiti92@gmail.com, nicovg_95@hotmail.com',
        subject: `${req.body.firstname} ${req.body.lastname} just submitted a request for time off.`,
        html: `<p>${req.body.firstname} ${req.body.lastname}, a team member from the ${req.body.role} 
                work center is requesting time off from work. The requested dates are as follows: <br> 
                <b>Start Date:</b> ${req.body.startDate}<br>
                <b>End Date:</b> ${req.body.endDate}<br>
                
                Please contact the employee's manager with approval or denial. <br>
                <br>
                This message has been delivered to you via the HRF Mobile App. 
                </p>`,
      };

      return mailTransport.sendMail(mailOptions).then(() => {
        console.log('New email sent to:', gmailEmail);
        res.status(200).send({
          isEmailSend: true,
        });
        return;
      });
    });
  }
});
