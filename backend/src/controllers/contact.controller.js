import Contact from '../models/contact.model.js';
import { sendContactEmail } from '../lib/email.js';

// Create a new contact form submission
const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'Los campos nombre, email y mensaje son obligatorios'
      });
    }

    // Create new contact
    const contact = new Contact({
      name,
      email,
      phone,
      message
    });

    await contact.save();

    // Send email notification
    try {
      await sendContactEmail({
        name,
        email,
        phone,
        message
      });
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      // Continue even if email fails
    }

    res.status(201).json({
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.',
      contact: {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        createdAt: contact.createdAt
      }
    });
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({
      message: 'Error al enviar el mensaje. Inténtalo de nuevo.',
      error: error.message
    });
  }
};

// Get all contact submissions (admin use)
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ contacts });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching contacts',
      error: error.message
    });
  }
};

export { createContact, getAllContacts };
