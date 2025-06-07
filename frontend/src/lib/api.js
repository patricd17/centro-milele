const API_BASE_URL = 'http://localhost:5000/api';

export const contactAPI = {
  // Submit contact form
  submitContact: async (contactData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al enviar el mensaje');
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },

  // Get all contacts (admin use)
  getAllContacts: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al obtener los contactos');
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  },
};

export default contactAPI;
