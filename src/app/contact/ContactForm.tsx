'use client';

import { useActionState } from 'react';
import { sendContactMessage, type ContactState } from './actions';
import styles from './page.module.css';

const initialState: ContactState = { status: 'idle', message: '' };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, initialState);

  return (
    <form className={styles.form} action={formAction} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Full Name</label>
          <input id="name" name="name" type="text" className={styles.input} placeholder="Jane Smith" required />
          {state.fieldErrors?.name && <p className={styles.fieldError}>{state.fieldErrors.name}</p>}
        </div>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input id="email" name="email" type="email" className={styles.input} placeholder="jane@company.com" required />
          {state.fieldErrors?.email && <p className={styles.fieldError}>{state.fieldErrors.email}</p>}
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="company" className={styles.label}>Company / Organization</label>
        <input id="company" name="company" type="text" className={styles.input} placeholder="Pharma Co." />
      </div>
      <div className={styles.field}>
        <label htmlFor="subject" className={styles.label}>Subject</label>
        <select id="subject" name="subject" className={styles.select} defaultValue="">
          <option value="">Select a topic...</option>
          <option value="biostatistics">Biostatistics Services</option>
          <option value="programming">Statistical Programming</option>
          <option value="data-management">Data Management</option>
          <option value="partnership">Partnership / FSP</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Message</label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          rows={6}
          placeholder="Tell us about your project or study..."
          required
        />
        {state.fieldErrors?.message && <p className={styles.fieldError}>{state.fieldErrors.message}</p>}
      </div>
      <button
        type="submit"
        className="btn-primary"
        disabled={pending}
        style={{ width: '100%', textAlign: 'center', fontSize: '16px', padding: '16px', opacity: pending ? 0.7 : 1 }}
      >
        {pending ? 'Sending…' : 'Send Message'}
      </button>
      {state.status !== 'idle' && (
        <p
          role="status"
          aria-live="polite"
          className={state.status === 'success' ? styles.statusSuccess : styles.statusError}
        >
          {state.message}
        </p>
      )}
      <p className={styles.responseNote}>We typically respond within one business day.</p>
    </form>
  );
}
