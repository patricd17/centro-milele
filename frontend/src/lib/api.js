import { supabase, TABLES } from './supabase.js';
import { sendContactEmail } from './email.js';

/**
 * Contact API functions
 */

// Create a new contact form submission
export const createContact = async ({ name, email, phone, message, website }) => {
  try {
    // Campo trampa rellenado: es un robot. Se responde como si todo hubiera ido bien, sin guardar nada.
    if (website) {
      return { success: true, message: 'Mensaje enviado correctamente.' }
    }

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error('Los campos nombre, email y mensaje son obligatorios');
    }

    // Insert contact into Supabase. Anonymous visitors may only insert: they cannot
    // read rows back, so the insert must not ask for the created row.
    const { error } = await supabase
      .from(TABLES.CONTACTS)
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone?.trim() || null,
          message: message.trim()
        }
      ]);

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
      message: 'Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.'
    };
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

// Contact API object that matches the expected interface
export const contactAPI = {
  // Submit contact form
  submitContact: async (contactData) => {
    return await createContact(contactData);
  }
};
