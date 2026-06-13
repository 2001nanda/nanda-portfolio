"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Download } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Section, SectionHeading, Button } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kumarnanda7733@gmail.com",
    href: "mailto:kumarnanda7733@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96634 95417",
    href: "tel:+919663495417",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/2001nanda",
    href: "https://github.com/2001nanda",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/nanda-kumar-m",
    href: "https://www.linkedin.com/in/nanda-kumar-m-b7b372267/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: GitHubIcon,
    label: "GitHub",
    href: "https://github.com/2001nanda",
    color: "hover:text-white hover:border-white/30 hover:shadow-white/10",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nanda-kumar-m-b7b372267/",
    color: "hover:text-blue-400 hover:border-blue-400/30 hover:shadow-blue-400/10",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!data.subject.trim()) {
    errors.subject = "Subject is required";
  }

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-white/60 mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-200"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-white/60 mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-200"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-white/60 mb-1.5">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={formData.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          placeholder="What's this about?"
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-200"
          aria-invalid={!!errors.subject}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-white/60 mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder="Tell me about your project..."
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder:text-white/20 text-sm focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all duration-200 resize-none"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle size={12} />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        isLoading={isSubmitting}
        icon={submitStatus === "success" ? <CheckCircle2 size={18} /> : <Send size={18} />}
        iconPosition="right"
        className={submitStatus === "success" ? "!bg-emerald-500 !shadow-emerald-500/20" : ""}
      >
        {submitStatus === "success" ? "Message Sent!" : "Send Message"}
      </Button>

      {submitStatus === "error" && (
        <p className="text-xs text-red-400 text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}

export default function Contact() {
  return (
    <Section id="contact">
      <SectionHeading
        title="Let's Build Something Amazing Together"
        subtitle="Have a project in mind? I'd love to hear about it."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left - Contact Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const content = (
                <motion.div
                  key={info.label}
                  variants={staggerItem}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.15]"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/15 transition-colors">
                    <Icon size={18} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40">{info.label}</p>
                    <p className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              );

              if (info.href) {
                return (
                  <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                );
              }
              return <div key={info.label}>{content}</div>;
            })}
          </div>

          {/* Social Links */}
          <motion.div variants={staggerItem}>
            <p className="text-sm text-white/40 mb-3">Connect with me</p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white/50 transition-all duration-300 hover:shadow-lg ${color}`}
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Resume Download */}
          <motion.div variants={staggerItem}>
            <a
              href="/resume.pdf"
              download="Nanda_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium border border-primary-500/50 transition-all duration-200 hover:shadow-lg hover:shadow-primary-500/20"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Decorative message */}
          <motion.div
            variants={staggerItem}
            className="p-5 rounded-xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 border border-white/[0.06]"
          >
            <p className="text-sm text-white/50 leading-relaxed">
              I&apos;m always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
          </motion.div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glass card */}
          <div className="relative rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 md:p-8 backdrop-blur-sm">
            {/* Subtle glow behind the card */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 -z-10 blur-xl pointer-events-none" />

            <h3 className="text-lg font-semibold text-white mb-1">Send a Message</h3>
            <p className="text-sm text-white/40 mb-6">
              Fill out the form and I&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
