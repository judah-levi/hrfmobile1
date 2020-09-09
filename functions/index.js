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
                <b>Start Date:</b> ${req.body.dateStart}<br>
                <b>End Date:</b> ${req.body.dateEnd}<br>
                
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

exports.submitSickDay = functions.https.onRequest((req, res) => {
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
        to: gmailEmail,
        subject: `${req.body.firstname} ${req.body.lastname} just declared of sick day.`,
        html: `<p>${req.body.firstname} ${req.body.lastname}, a team member from the ${req.body.role} 
                work center is sick and cannot come in to work. The details are as follows: <br> 
                <b>Start Date:</b> ${req.body.dateStart}<br>
                <b>End Date:</b> ${req.body.dateEnd}<br>
                
                Please ensure to record the absence in the employee's PTO file. <br>
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

exports.submitMeetingReq = functions.https.onRequest((req, res) => {
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
        to: req.body.contactEmail,
        subject: `${req.body.firstname} ${req.body.lastname} would like to schedule a meeting.`,
        html: `<p>${req.body.firstname} ${req.body.lastname}, a team member from the ${req.body.role} work center
                would like to schedule a meeting with you. The details are as follows: <br> 
                <b>First Name:</b> ${req.body.firstname}<br>
                <b>Last Name:</b> ${req.body.lastname}<br>
                <b>Phone Number:</b> ${req.body.phoneNumber}<br>
                <b>Work Center:</b> ${req.body.role}<br>
                <b>Meeting Concept:</b> ${req.body.meetingDescription}<br>
                <br>
                Please feel free to contact your colleague at the above listed phone number to confirm a meeting.<br>
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

exports.submitEquipFailure = functions.https.onRequest((req, res) => {
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
        to: gmailEmail,
        subject: `Line ${req.body.lineNumber} has a fault that needs attention!`,
        html: `<p>A production team member has declared that there is a failure on line: <b>${req.body.lineNumber}</b>. The issue is described as follows: <br> 
                <b>Line Number:</b> ${req.body.lineNumber}<br>
                <b>Description of failure:</b> ${req.body.description}<br>
                <br>
                Please contact the relevant production lead to coordinate repairs. <br>
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

exports.submitFacilitiesIssue = functions.https.onRequest((req, res) => {
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
        to: gmailEmail,
        subject: `There is a facilities issue that needs attention!`,
        html: `<p>An HRF team member has noticed that there is an issue with an HRF facility. The issue is described as follows: <br> 
                <b>Description of failure:</b> ${req.body.description}<br>
                <br>
                Please assess the issue and coordinate repairs accordingly. <br>
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

exports.submitSuggestion = functions.https.onRequest((req, res) => {
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
        to: gmailEmail,
        subject: `${req.body.firstname} ${req.body.lastname} has a suggestion for management.`,
        html: `<p>An HRF team member has submitted a suggestion for consideration by management. The suggestion is described as follows: <br> 
                <b>First name:</b> ${req.body.firstname}<br>
                <b>Last name:</b> ${req.body.lastname}<br>
                <b>Suggestion:</b> ${req.body.suggestion}<br>
                <br>
                Thank you for considering my suggestion. Feel free to discuss this with me further should there be any questions.<br>
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

exports.submitMaterialRequest = functions.https.onRequest((req, res) => {
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
        to: gmailEmail,
        subject: `An HRF team member has noticed a material shortage!`,
        html: `<p>An HRF team member has noticed that a material is in short supply. The material is described as follows: <br> 
                <b>Stock Code:</b> ${req.body.stockCode}<br>
                <b>Material Description:</b> ${req.body.description}<br>
                <b>Qty Short:</b> ${req.body.quantityShort}<br>
                <br>
                Please urgently procure the above listed material(s) and notify the relevent stake holders in production and/or warehouse of any changes in production plan.<br>
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
