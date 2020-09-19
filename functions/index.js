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
        to: 'victor@hudsonriverfoods.com',
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
        to: 'victor@hudsonriverfoods.com',
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
        to: 'jerryhof@hudsonriverfoods.com',
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
        to: 'victor@hudsonriverfoods.com',
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
        to: 'victor@hudsonriverfoods.com',
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
        to: 'phil@hudsonriverfoods.com',
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

exports.submitCovidForm = functions.https.onRequest((req, res) => {
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
        subject: `${req.body.firstname} ${req.body.lastname} has submited their daily Health Declaration.`,
        html: `<p>An HRF employee has signed their daily COVID-19 health declaration. <br> 
                <br> 
                <b>First Name:</b> ${req.body.firstname}<br>
                <b>Last Name:</b> ${req.body.lastname}<br>
                <b>Time Signed:</b> ${req.body.timeStamp}<br>
                <b>START Health Declaration Agreement:</b><br>
                <p>Hudson River Foods cares about the safety and health of it's entire workforce community. We are committed to 
                ensuring that our facilities continue to support productive and healthy lifestyles for all of our staff. It is 
                due to this that during the world-wide COVID-19 pandemic we ask that before arriving to work, you please verify your health status. <br>
                <br>
                By signing this form, you hereby delcare the following: <br>
                <br>
                1. Your temperature is not higher than 37C or 99F. <br>
                2. You have not had a fever of 37C or 99F at any point during the last week. <br>
                3. You do not have a cough (*except related to chronic asthma or allergies).<br>
                4. You have not been in contact with someone with COVID-19 in the past 14 days. <br>
                5. You take full responsibility for arriving to work during the COVID-19 epidemic, especially if you have a pre-existing health condition, 
                    and hereby indemnify Hudson River Foods of any liability related to the health risks associated with COVID-19. <br>
                6. If you come into contact with a carrier of COVID-19, from this day forward, you will immediately notify Hudson River Foods, and will remain in isloation. <br>
                <br>
                <b>END Health Declaration Agreement:</b><br>
                <br>
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
