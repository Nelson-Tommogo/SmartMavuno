// Import the Nodemailer library
const nodemailer = require('nodemailer');

// Add an event listener to the submit button
document.getElementById('submit').addEventListener('click', sendEmail);

// Function to send the email
function sendEmail() {
  // Get the recipient's email address from the form
  const recipientEmail = document.getElementById('recipientEmail').value;

  // Get the sender's email address from the form
  const senderEmail = document.getElementById('senderEmail').value;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail' or 'Outlook'
    auth: {
      user: 'nelsontommogo9@gmil.com', // Your email address
      pass: 'pollytommogo' // Your email password or app-specific password
    }
  });

  // Define the email content
  const mailOptions = {
    from: senderEmail, // Sender's email address
    to: recipientEmail, // Recipient's email address
    subject: 'Send me an email', // Email subject
    text: 'Talk to me ...............us...' // Email body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error occurred:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
}
