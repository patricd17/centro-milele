import { supabase, TABLES } from './supabase.js';
import { sendContactEmail } from './email.js';

/**
 * Contact API functions
 */

// Create a new contact form submission
export const createContact = async ({ name, email, phone, message }) => {
  try {
    // Validate required fields
    if (!name || !email || !message) {
      throw new Error('Los campos nombre, email y mensaje son obligatorios');
    }

    // Insert contact into Supabase
    const { data, error } = await supabase
      .from(TABLES.CONTACTS)
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone?.trim() || null,
          message: message.trim()
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Error al enviar el mensaje. Inténtalo de nuevo.');
    }

    // Try to send email notification
    try {
      const emailResult = await sendContactEmail({ name, email, phone, message });
      if (emailResult.devMode) {
        console.info('🚧 Running in development mode - Email functionality disabled');
      } else if (emailResult.corsRestriction) {
        console.info('⚠️ Email sending requires server-side implementation');
      } else if (emailResult.error) {
        console.warn('⚠️ Email sending failed but contact was saved');
      }
    } catch (emailError) {
      console.error('Error sending email notification:', emailError);
      // Continue even if email fails - contact is still saved
    }

    return {
      success: true,
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.',
      contact: {
        id: data.id,
        name: data.name,
        email: data.email,
        phone: data.phone,
        createdAt: data.created_at
      }
    };
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

// Get all contact submissions (admin use)
export const getAllContacts = async () => {
  try {
    const { data, error } = await supabase
      .from(TABLES.CONTACTS)
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Error fetching contacts');
    }

    return {
      success: true,
      contacts: data
    };
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

// Get a single contact by ID
export const getContactById = async (id) => {
  try {
    const { data, error } = await supabase
      .from(TABLES.CONTACTS)
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Contact not found');
    }

    return {
      success: true,
      contact: data
    };
  } catch (error) {
    console.error('Error fetching contact:', error);
    throw error;
  }
};

// Delete a contact by ID (admin use)
export const deleteContact = async (id) => {
  try {
    const { error } = await supabase
      .from(TABLES.CONTACTS)
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Supabase error:', error);
      throw new Error('Error deleting contact');
    }

    return {
      success: true,
      message: 'Contact deleted successfully'
    };
  } catch (error) {
    console.error('Error deleting contact:', error);
    throw error;
  }
};

// Contact API object that matches the expected interface
export const contactAPI = {
  // Submit contact form
  submitContact: async (contactData) => {
    return await createContact(contactData);
  },

  // Get all contacts (admin use)
  getAllContacts: async () => {
    return await getAllContacts();
  },

  // Get contact by ID
  getContactById: async (id) => {
    return await getContactById(id);
  },

  // Delete contact
  deleteContact: async (id) => {
    return await deleteContact(id);
  }
};