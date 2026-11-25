'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CtaButton from '@/components/CtaButton';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const inputClass =
  'w-full rounded-xl border bg-[#141414] px-4 py-2.5 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-gold/40';

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setFormSubmitted(true);
    reset();

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="rounded-2xl border border-gold/20 bg-[#121212] p-6 md:p-8">
      <h2 className="mb-6 text-center font-display text-2xl font-bold text-white">Send us a message</h2>

      {formSubmitted ? (
        <div className="mb-6 border border-gold/40 bg-gold/10 p-4 text-center text-white">
          <p>Thanks for your message. We will get back to you soon.</p>
        </div>
      ) : null}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-white/80">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`${inputClass} ${errors.name ? 'border-red-400' : 'border-gold/25'}`}
            placeholder="Your name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <p className="mt-1 text-sm text-red-300">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-white/80">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`${inputClass} ${errors.email ? 'border-red-400' : 'border-gold/25'}`}
            placeholder="you@example.com"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-sm font-medium text-white/80">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={`${inputClass} ${errors.subject ? 'border-red-400' : 'border-gold/25'}`}
            placeholder="How can we help?"
            {...register('subject', { required: 'Subject is required' })}
          />
          {errors.subject && <p className="mt-1 text-sm text-red-300">{errors.subject.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/80">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className={`${inputClass} ${errors.message ? 'border-red-400' : 'border-gold/25'}`}
            placeholder="Tell us more…"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <p className="mt-1 text-sm text-red-300">{errors.message.message}</p>}
        </div>

        <div className="flex justify-center">
          <CtaButton as="button" type="submit" icon="mail">
            SEND MESSAGE
          </CtaButton>
        </div>
      </form>
    </div>
  );
}
