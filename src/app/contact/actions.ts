'use server';

import { Resend } from 'resend';

export type ContactState = {
  status: 'idle' | 'success' | 'error';
  message: string;
  fieldErrors?: Partial<Record<'name' | 'email' | 'message', string>>;
};

const SUBJECT_LABELS: Record<string, string> = {
  biostatistics: 'Biostatistics Services',
  programming: 'Statistical Programming',
  'data-management': 'Data Management',
  partnership: 'Partnership / FSP',
  general: 'General Inquiry',
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const company = String(formData.get('company') ?? '').trim();
  const subjectKey = String(formData.get('subject') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  const fieldErrors: ContactState['fieldErrors'] = {};
  if (!name) fieldErrors.name = 'Please enter your name.';
  if (!email) fieldErrors.email = 'Please enter your email.';
  else if (!EMAIL_REGEX.test(email)) fieldErrors.email = 'Please enter a valid email address.';
  if (!message) fieldErrors.message = 'Please enter a message.';

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Please fix the highlighted fields and try again.',
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set.');
    return {
      status: 'error',
      message: 'Email is not configured on the server. Please email info@biostatcore.com directly.',
    };
  }

  const fromAddress = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';
  const toAddress = process.env.CONTACT_TO_EMAIL ?? 'info@biostatcore.com';
  const subjectLabel = SUBJECT_LABELS[subjectKey] ?? 'General Inquiry';

  const lines = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    `Topic: ${subjectLabel}`,
    '',
    'Message:',
    message,
  ].filter(Boolean);

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Biostat Core Contact <${fromAddress}>`,
      to: [toAddress],
      replyTo: email,
      subject: `[Contact Form] ${subjectLabel} — ${name}`,
      text: lines.join('\n'),
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        status: 'error',
        message: 'Something went wrong sending your message. Please try again or email us directly.',
      };
    }

    return {
      status: 'success',
      message: 'Thanks! Your message has been sent. We typically respond within one business day.',
    };
  } catch (err) {
    console.error('Contact form send failed:', err);
    return {
      status: 'error',
      message: 'Something went wrong sending your message. Please try again or email us directly.',
    };
  }
}
