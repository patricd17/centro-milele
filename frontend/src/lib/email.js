/**
 * Simple Email Service using EmailJS
 * No backend needed - works directly from browser!
 */

import emailjs from '@emailjs/browser';

export const sendContactEmail = async ({ name, email, phone, message }) => {
  try {
    console.log('📧 Sending email via EmailJS...');

    // EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const notificationEmail = import.meta.env.VITE_NOTIFICATION_EMAIL;

    // Check if all required EmailJS variables are configured
    if (!serviceId || !templateId || !publicKey) {
      console.error('❌ EmailJS configuration missing. Please check your .env file.');
      return {
        success: false,
        message: 'Email configuration missing. Please contact administrator.',
        error: true
      };
    }

    const result = await emailjs.send(
      serviceId,
      templateId,
      {
        to_email: notificationEmail,
        from_name: name,
        from_email: email,
        phone: phone || 'No proporcionado',
        message: message,
        reply_to: email
      },
      publicKey
    );

    console.log('✅ Email sent successfully:', result);
    return { success: true, data: result };

  } catch (error) {
    console.error('❌ Error sending email:', error);
    return {
      success: false,
      message: `Email error: ${error.message}`,
      error: true
    };
  }
};

/**
 * Alternative simple implementation for testing
 */
export const sendContactEmailTest = async ({ name, email, phone, message }) => {
  console.log('📧 Test email data:', { name, email, phone, message });
  return {
    success: true,
    message: 'Test mode - email logged to console',
    test: true
  };
};
