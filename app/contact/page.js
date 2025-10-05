"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitResult(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      let data;
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        data = { success: false, message: text || "Unexpected server response" };
      }
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to send message");
      }
      setSubmitResult({ ok: true });
      setFormData({ firstname: "", lastname: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      setSubmitResult({ ok: false, message: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-6" style={{ marginTop: '5em' }}>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Left Side - Contact Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-8 py-16 px-10 bg-[#27272c] rounded-xl max-w-[90%] items-center min-h-[700px] border border-transparent hover:border-accent transition-all duration-300" onSubmit={handleSubmit}>
              <div className="w-full max-w-[85%]" style={{ marginTop: '2em' }}>
                <h2 className="text-2xl xl:text-3xl text-accent text-left" style={{ marginBottom: '1em' }}>Get in Touch</h2>
                <p className="text-sm text-white/60 leading-snug mb-3 text-left">
                  If you have a project or opportunity in mind, I&apos;m all ears. Fill out the form and I&apos;ll respond as soon as I can.
                </p>
              </div>
              
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-[85%]">
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary text-base placeholder:text-white/60 outline-none"
                  style={{ padding: '12px 16px' }}
                  placeholder="Firstname"
                  required
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary text-base placeholder:text-white/60 outline-none"
                  style={{ padding: '12px 16px' }}
                  placeholder="Lastname"
                  required
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary text-base placeholder:text-white/60 outline-none"
                  style={{ padding: '12px 16px' }}
                  placeholder="Email address"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <input
                  className="flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary text-base placeholder:text-white/60 outline-none"
                  style={{ padding: '12px 16px' }}
                  placeholder="Phone number"
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              {/* Service Dropdown */}
              <select
                className="flex h-[48px] items-center justify-between rounded-md border border-white/10 bg-primary text-base text-white/60 focus:border-accent outline-none w-full max-w-[85%]"
                style={{ padding: '12px 16px' }}
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="software">Software Engineer</option>
                <option value="ai">AI/ML</option>
                <option value="data">Data Science</option>
                <option value="internship">Internship Opportunity</option>
                <option value="other">Other</option>
              </select>

              {/* Message Textarea */}
              <textarea
                className="flex min-h-[80px] w-full max-w-[85%] rounded-md border border-white/10 bg-primary text-base placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 h-[200px]"
                style={{ padding: '16px' }}
                name="message"
                placeholder="Type your message here"
                required
                value={formData.message}
                onChange={handleInputChange}
              />

              {/* Submit Button & Feedback */}
              <div className="w-full max-w-[85%] flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="h-[48px] rounded-md border border-accent text-white hover:bg-accent transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send message"}
                </button>
                {submitResult && submitResult.ok && (
                  <p className="text-green-400 text-sm">Thanks! Your message has been sent.</p>
                )}
                {submitResult && !submitResult.ok && (
                  <p className="text-red-400 text-sm">{submitResult.message || "Something went wrong. Please try again."}</p>
                )}
              </div>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {/* Phone */}
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">Phone</p>
                  <h3 className="text-xl">(+1) 267 854 9133</h3>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">Email</p>
                      <h3 className="text-xl">brunombw@seas.upenn.edu</h3>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">Address</p>
                  <h3 className="text-xl">337 N 40th Street, Philadelphia PA</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}