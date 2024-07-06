// controllers/formController.js

const Form = require('../models/form');
const sendEmail = require('../Utils/sendEmail');








module.exports.submitForm = async (req, res) => {
  const { userName, email, phoneNumber, numberOfGuests, checkInDate, checkOutDate, branchName, roomName} = req.body;
    try{
        // Save form data to the database
  const newForm = new Form({ userName, email, phoneNumber, numberOfGuests, checkInDate, checkOutDate, branchName, roomName});


  // Send confirmation email to the user
  const userSubject = 'Thank you for choosing MID ORCHARD';
  const userText = `Hello there,\n\nThank you so much for making Mid Orchard as your choice.Your request for the ${roomName} at ${branchName} from ${checkInDate} to ${checkOutDate} for a total of ${numberOfGuests} guests is under process.The team will get back to you through the contact details you have provided to us
  We will get back to you shortly.\n\nBest regards,\nMID ORCHARD`;
  await sendEmail(email, userSubject, userText);

  const adminSubject = `New form query for ${branchName} `;
  const adminText = `A user ${userName} has made a request recently for the ${branchName} branch. The following are his details,\n Name:${userName}\n Email:${email}\n Phone Number:${phoneNumber}\n Number of Guests:${numberOfGuests}\n Check In Date:${checkInDate}\n Check Out Date:${checkOutDate}\n Room Name:${roomName}\n Branch Name:${branchName}`;

  await sendEmail(process.env.EMAIL_USER, adminSubject, adminText)

 
  res.status(200).json({ message: 'Form submitted successfully' });

    }catch(e){
        console.log("error");
        console.log(e);

    }
  
};

