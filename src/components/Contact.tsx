"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("Name"),
          phone: formData.get("Phone"),
          requirements: formData.get("Requirements"),
        }),
      });

      if (response.ok) {
        setShowModal(true);
        form.reset();
      }
    } catch {
      // Fallback: submit directly to FormSubmit.co
      form.action = "https://formsubmit.co/vijaywelding1978@gmail.com";
      form.method = "POST";
      form.submit();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-welding-dark relative">
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-welding-accent/30 to-transparent" />

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left — Contact Info */}
            <div>
              <span className="inline-block font-heading text-[0.85rem] font-semibold tracking-[3px] uppercase text-welding-accent mb-3 relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3.5 before:h-0.5 before:bg-welding-accent">
                Get In Touch
              </span>
              <h2 className="font-heading text-[clamp(1.8rem,4vw,3rem)] font-extrabold tracking-wider mb-4">
                Let&apos;s Build Something{" "}
                <span className="text-welding-accent">Amazing</span>
              </h2>
              <p className="text-welding-text-secondary text-[0.95rem] leading-relaxed mb-8">
                Have a project in mind? Fill out the form and we&apos;ll get back to
                you within 24 hours. You can also reach us directly.
              </p>

              <div className="flex flex-col gap-5">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-welding-accent/10 rounded-lg border border-welding-accent/20">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold mb-0.5">Phone</h4>
                    <a href="tel:+919373785271" className="text-[0.88rem] text-welding-text-secondary hover:text-welding-accent transition-colors">
                      +91 93737 85271
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-welding-accent/10 rounded-lg border border-welding-accent/20">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold mb-0.5">Email</h4>
                    <a href="mailto:vijaywelding1978@gmail.com" className="text-[0.88rem] text-welding-text-secondary hover:text-welding-accent transition-colors">
                      vijaywelding1978@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-welding-accent/10 rounded-lg border border-welding-accent/20">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold mb-0.5">Address</h4>
                    <p className="text-[0.88rem] text-welding-text-secondary leading-snug">
                      Civil Line, Ayodhya Nagar-B,<br />Tq-Risod, Dist Washim
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="bg-welding-card rounded-3xl border border-welding-border p-6 sm:p-9 shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-heading text-xl font-bold mb-1">
                  Request a Quote
                </h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-heading text-[0.85rem] font-semibold tracking-wide text-welding-text-secondary">
                    Full Name
                  </label>
                  <div className="flex items-center gap-3 bg-welding-input border border-welding-border rounded-lg px-4 focus-within:border-welding-accent focus-within:shadow-[0_0_0_3px_rgba(230,126,34,0.1)] transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-welding-text-muted"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    <input
                      type="text"
                      id="name"
                      name="Name"
                      placeholder="Enter your full name"
                      required
                      className="w-full py-3.5 bg-transparent border-none outline-none font-body text-[0.95rem] text-welding-text placeholder:text-welding-text-muted"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="font-heading text-[0.85rem] font-semibold tracking-wide text-welding-text-secondary">
                    Phone Number
                  </label>
                  <div className="flex items-center gap-3 bg-welding-input border border-welding-border rounded-lg px-4 focus-within:border-welding-accent focus-within:shadow-[0_0_0_3px_rgba(230,126,34,0.1)] transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-welding-text-muted"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    <input
                      type="tel"
                      id="phone"
                      name="Phone"
                      placeholder="Enter your phone number"
                      required
                      className="w-full py-3.5 bg-transparent border-none outline-none font-body text-[0.95rem] text-welding-text placeholder:text-welding-text-muted"
                    />
                  </div>
                </div>

                {/* Requirements */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="requirements" className="font-heading text-[0.85rem] font-semibold tracking-wide text-welding-text-secondary">
                    Your Requirements
                  </label>
                  <div className="flex items-start gap-3 bg-welding-input border border-welding-border rounded-lg px-4 pt-3.5 focus-within:border-welding-accent focus-within:shadow-[0_0_0_3px_rgba(230,126,34,0.1)] transition-all duration-300">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-welding-text-muted mt-0.5"><line x1="17" y1="10" x2="3" y2="10" /><line x1="21" y1="6" x2="3" y2="6" /><line x1="21" y1="14" x2="3" y2="14" /><line x1="17" y1="18" x2="3" y2="18" /></svg>
                    <textarea
                      id="requirements"
                      name="Requirements"
                      rows={4}
                      placeholder="Describe your project requirements..."
                      required
                      className="w-full pb-3.5 bg-transparent border-none outline-none resize-y min-h-[90px] font-body text-[0.95rem] text-welding-text placeholder:text-welding-text-muted"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 mt-1 rounded-lg font-heading font-semibold text-[1rem] tracking-wide bg-gradient-to-br from-welding-accent to-welding-accent-dark text-white shadow-[0_4px_20px_rgba(230,126,34,0.3)] hover:shadow-[0_8px_30px_rgba(230,126,34,0.5)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer disabled:opacity-70 disabled:pointer-events-none"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-[10000] p-4"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className="bg-welding-card border border-welding-border rounded-3xl p-10 text-center max-w-[400px] w-full animate-fade-in-up">
            <div className="mb-4">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#e67e22" strokeWidth="2" className="mx-auto"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
            </div>
            <h3 className="font-heading text-2xl font-bold mb-2.5">Thank You!</h3>
            <p className="text-welding-text-secondary mb-6 leading-relaxed text-[0.95rem]">
              Your inquiry has been sent successfully. We will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg font-heading font-semibold text-[0.95rem] bg-gradient-to-br from-welding-accent to-welding-accent-dark text-white shadow-[0_4px_20px_rgba(230,126,34,0.3)] hover:shadow-[0_8px_30px_rgba(230,126,34,0.5)] transition-all duration-300 cursor-pointer"
            >
              Got It
            </button>
          </div>
        </div>
      )}
    </>
  );
}
