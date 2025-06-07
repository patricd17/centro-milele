import { Resend } from 'resend';

export const sendContactEmail = async ({ name, email, phone, message }) => {
  try {
    // Initialize Resend with API key (lazy initialization)
    console.log('🔧 Initializing Resend with API key:', process.env.RESEND_API_KEY ? 'Present' : 'Missing');

    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Milele <onboarding@resend.dev>',
      to: [process.env.NOTIFICATION_EMAIL],
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <div style="font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #f0fdf4 0%, #f0f9ff 50%, #fdf2f8 100%); padding: 0;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #a3e635 0%, #67e8f9 50%, #f9a8d4 100%); padding: 30px 20px; text-align: center; border-radius: 0;">
            <h1 style="color: #000; font-size: 32px; font-weight: 700; margin: 0; font-family: 'Playfair Display', serif;">
              <span style="font-family: 'Moontime', cursive; font-size: 40px; font-weight: 300;">Milele</span>
            </h1>
            <p style="color: #000; margin: 8px 0 0 0; font-size: 14px; opacity: 0.8;">Centro Multidisciplinar</p>
          </div>

          <!-- Main Content -->
          <div style="padding: 30px 20px; background: #ffffff;">
            <h2 style="color: #1f2937; font-size: 24px; font-weight: 700; margin: 0 0 20px 0; text-align: center; font-family: 'Playfair Display', serif;">
              Nuevo mensaje de contacto
            </h2>
            
            <!-- Contact Information Card -->
            <div style="background: linear-gradient(135deg, rgba(163, 230, 53, 0.1) 0%, rgba(103, 232, 249, 0.1) 100%); padding: 25px; border-radius: 16px; margin: 25px 0; border: 1px solid rgba(163, 230, 53, 0.2);">
              <h3 style="color: #374151; margin: 0 0 18px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                <span style="display: inline-block; width: 12px; height: 12px; background: linear-gradient(135deg, #84cc16, #06b6d4); border-radius: 50%; margin-right: 10px;"></span>
                Información del contacto
              </h3>
              <div style="space-y: 12px;">
                <p style="margin: 12px 0; color: #4b5563; font-size: 15px; display: flex; align-items: center;">
                  <strong style="color: #1f2937; min-width: 80px; margin-right: 10px;">Nombre:</strong> 
                  <span style="color: #374151;">${name}</span>
                </p>
                <p style="margin: 12px 0; color: #4b5563; font-size: 15px; display: flex; align-items: center;">
                  <strong style="color: #1f2937; min-width: 80px; margin-right: 10px;">Email:</strong> 
                  <span style="color: #374151;">${email}</span>
                </p>
                ${phone ? `<p style="margin: 12px 0; color: #4b5563; font-size: 15px; display: flex; align-items: center;">
                  <strong style="color: #1f2937; min-width: 80px; margin-right: 10px;">Teléfono:</strong> 
                  <span style="color: #374151;">${phone}</span>
                </p>` : ''}
              </div>
            </div>
            
            <!-- Message Card -->
            <div style="margin: 25px 0;">
              <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 18px; font-weight: 600; display: flex; align-items: center;">
                <span style="display: inline-block; width: 12px; height: 12px; background: linear-gradient(135deg, #06b6d4, #ec4899); border-radius: 50%; margin-right: 10px;"></span>
                Mensaje
              </h3>
              <div style="background: #ffffff; padding: 20px; border-left: 4px solid transparent; border-image: linear-gradient(135deg, #84cc16, #ec4899) 1; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                <p style="margin: 0; color: #374151; line-height: 1.6; font-size: 15px; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
          
          <!-- Footer -->
          <div style="background: #f9fafb; padding: 25px 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <div style="margin-bottom: 15px;">
              <p style="margin: 0; color: #6b7280; font-size: 13px; font-weight: 500;">Centro Milele - Espacio Multidisciplinar</p>
              <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 12px;">Calle Lope de Rueda, 78a • Puerto de la Torre, 29190 Málaga</p>
            </div>
            
            <div style="border-top: 1px solid #e5e7eb; padding-top: 15px;">
              <p style="margin: 0; color: #9ca3af; font-size: 11px;">
                Este mensaje fue enviado desde el formulario de contacto del sitio web
              </p>
              <p style="margin: 5px 0 0 0; color: #9ca3af; font-size: 11px;">
                📅 Fecha: ${new Date().toLocaleString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('❌ Error from Resend:', error);
      throw new Error(`Resend error: ${error.message}`);
    }

    console.log('✅ Email sent successfully to:', process.env.NOTIFICATION_EMAIL);
    console.log('📧 Email ID:', data.id);
    return { success: true, data };
  } catch (error) {
    console.error('❌ Error sending email:', error.message);
    throw error;
  }
};
