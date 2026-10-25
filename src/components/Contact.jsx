import React, { useState } from 'react';
import { personalData } from '../data/portfolio.js';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [formStatus, setFormStatus] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Compile into mailto link for direct client transmission without unconfigured backend
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalData.contactLinks.email}?subject=${subject}&body=${body}`;

    setFormStatus('Opening your email client to send this message directly...');
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="section-spacing bg-[#0F0F0F] text-white">
      <div className="page-container">
        {/* Section Heading — Pure H2 without eyebrow label */}
        <div className="mb-14">
          <h2 className="heading-text text-white max-w-3xl">
            Have something in mind?
          </h2>
          <p className="lead-text text-white mt-4 font-medium">
            {personalData.contactBody}
          </p>
        </div>

        <div className="editorial-grid gap-y-12 items-start">
          {/* Direct Communication Channels & Links */}
          <div className="col-span-12 lg:col-span-5 pr-0 lg:pr-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <p className="small-text font-bold text-[var(--accent)] mb-1 uppercase text-sm">
                  Primary Email
                </p>
                <a
                  href={`mailto:${personalData.contactLinks.email}?subject=Portfolio%20Inquiry`}
                  className="text-base sm:text-2xl font-display font-black text-white hover:text-[var(--accent)] transition-colors duration-150 break-all block"
                >
                  {personalData.contactLinks.email}
                </a>
              </div>

              <div>
                <p className="small-text font-bold text-[#888888] mb-1 uppercase text-sm">
                  Location
                </p>
                <p className="text-base font-semibold text-white">
                  {personalData.contactLinks.locationDetail}
                </p>
              </div>

              <div>
                <p className="small-text font-bold text-[#888888] mb-2 uppercase text-sm">
                  Professional Profiles &amp; Documents
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={personalData.contactLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-btn-secondary text-sm py-2 px-5 min-h-[2.8rem] font-bold"
                  >
                    GitHub Profile
                  </a>
                  <a
                    href={personalData.contactLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-btn-secondary text-sm py-2 px-5 min-h-[2.8rem] font-bold"
                  >
                    LinkedIn Profile
                  </a>
                  <a
                    href={personalData.contactLinks.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="editorial-btn-secondary text-sm py-2 px-5 min-h-[2.8rem] font-bold"
                  >
                    Resume PDF
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#181818]">
              <p className="text-base font-bold text-white mb-1 uppercase text-[var(--accent)]">
                Open to Opportunities
              </p>
              <p className="text-sm text-[#CCCCCC]">
                Currently open for frontend development internships, collaborative open-source projects, and full-time entry roles upon graduation.
              </p>
            </div>
          </div>

          {/* Contact Form with Transparent Email Hand-off */}
          <div className="col-span-12 lg:col-span-7 bg-[#181818] p-8 sm:p-10">
            <h3 className="text-2xl font-display font-black uppercase text-white mb-2">
              Send a Direct Note
            </h3>
            <p className="small-text text-[#CCCCCC] text-sm mb-6">
              Messages will be compiled and handed to your default email client for secure, direct transmission.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-bold uppercase text-white mb-1.5">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Anand Kumar"
                  className="editorial-input"
                />
                {errors.name && <p className="text-sm text-red-500 mt-1 font-semibold">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-bold uppercase text-white mb-1.5">
                  Your Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. anand@example.com"
                  className="editorial-input"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1 font-semibold">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-bold uppercase text-white mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, idea, or role..."
                  className="editorial-textarea"
                />
                {errors.message && <p className="text-sm text-red-500 mt-1 font-semibold">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button type="submit" className="editorial-btn w-full sm:w-auto min-h-[3.25rem] px-8 text-base font-bold">
                  Send Message via Email
                </button>
              </div>

              {formStatus && (
                <p className="text-sm font-bold text-[var(--accent)] mt-3">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
