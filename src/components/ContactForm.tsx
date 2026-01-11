"use client";

import { useState } from "react";
import { MouseFollow3DContainer } from "./MouseFollow3DContainer";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  type: "idle" | "loading" | "success" | "error";
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus({ type: "loading", message: "Sending your feedback..." });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit feedback");
      }

      setStatus({
        type: "success",
        message:
          "Thank you! Your feedback has been received. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus({ type: "idle", message: "" });
      }, 5000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      setStatus({
        type: "error",
        message: `Error: ${errorMessage}. Please try again.`,
      });
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-slate-300 text-lg">
          Have questions or feedback? We'd love to hear from you!
        </p>
      </div>

      <MouseFollow3DContainer
        className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-8"
        intensity={0.6}
        maxRotation={10}
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-white font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition ${
              errors.name ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-white font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition ${
              errors.email ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-white font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition ${
              errors.subject ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-white font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us what's on your mind..."
            rows={6}
            className={`w-full px-4 py-3 bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition resize-none ${
              errors.message ? "border-red-500" : "border-slate-700"
            }`}
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        {/* Status Messages */}
        {status.type === "success" && (
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-4">
            <p className="text-green-300 flex items-center gap-2">
              <span>✓</span>
              {status.message}
            </p>
          </div>
        )}

        {status.type === "error" && (
          <div className="bg-red-500/20 border border-red-500 rounded-lg p-4">
            <p className="text-red-300 flex items-center gap-2">
              <span>✕</span>
              {status.message}
            </p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.type === "loading"}
          className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status.type === "loading" ? (
            <>
              <span className="animate-spin">⏳</span>
              Sending...
            </>
          ) : (
            <>
              <span>📬</span>
              Send Feedback
            </>
          )}
        </button>
        </form>
      </MouseFollow3DContainer>

      <p className="text-center text-slate-400 text-sm mt-6">
        We typically respond within 24 hours.
      </p>
    </section>
  );
};
