'use client';

import { useState } from 'react';

const initialState = {
  name: '',
  phone: '',
  email: '',
  message: ''
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  };

  const validate = () => {
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!formData.phone.trim()) nextErrors.phone = 'Please enter your phone number.';
    if (!formData.email.trim()) nextErrors.email = 'Please enter your email address.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email address.';
    if (!formData.message.trim()) nextErrors.message = 'Please enter your message.';

    return nextErrors;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    // Submission is intentionally left configurable for future backend integration.
    alert('Thank you. The form is ready for backend integration.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">Name</label>
          <input id="name" name="name" value={formData.name} onChange={handleChange} className="input-field" placeholder="Your full name" />
          {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">Phone</label>
          <input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="[Phone number to be added]" />
          {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label>
        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="input-field" placeholder="[Email address to be added]" />
        {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">Message</label>
        <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleChange} className="input-field resize-none" placeholder="Briefly describe your matter and how we may assist." />
        {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button type="submit" className="button-primary w-full md:w-auto">
        Request a Consultation
      </button>
    </form>
  );
}
