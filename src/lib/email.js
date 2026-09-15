import emailjs from '@emailjs/browser'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const emailConfigured = Boolean(serviceId && templateId && publicKey)

/**
 * Sends the completed help request through EmailJS.
 * Public EmailJS keys are intended for browser use; keep private secrets out of Vite env files.
 */
export async function sendHelpRequest(data) {
  if (!emailConfigured) {
    return {
      ok: false,
      skipped: true,
      message: 'Email is not configured yet. Add the three EmailJS environment variables before deployment.',
    }
  }

  const submittedAt = new Date().toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const templateParams = {
    to_email: import.meta.env.VITE_CANDIDATE_EMAIL,
    visitor_name: data.name,
    visitor_age: data.age,
    visitor_location: data.location,
    visitor_email: data.email,
    grievance: data.grievance,
    submitted_at: submittedAt,
    subject: '🦸 Someone Needs Your Help!',
  }

  try {
    await emailjs.send(serviceId, templateId, templateParams, {
      publicKey,
    })
    return { ok: true, submittedAt }
  } catch (error) {
    console.error('EmailJS error:', error)
    return {
      ok: false,
      skipped: false,
      message: 'The request was saved in this session, but the notification email failed. Please check your EmailJS setup.',
    }
  }
}
