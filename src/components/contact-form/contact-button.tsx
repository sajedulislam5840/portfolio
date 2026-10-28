import { useState } from "react";
import Link from "next/link";
import { FiMail, FiSend } from "react-icons/fi";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function ContactButton() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${siteMetadata.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`;
    window.location.href = mailtoUrl;
    setSent(true);
  };

  return (
    <section className="mx-auto my-16 max-w-4xl px-4 sm:px-6">
      <div className="overflow-hidden rounded-3xl bg-teal-700 px-6 py-12 text-center text-white shadow-xl sm:px-12 sm:py-16">
        <span className="rounded-full bg-white/20 px-4 py-1 text-xs font-bold tracking-widest uppercase text-white">
          GET IN TOUCH
        </span>

        <h2 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-4xl">
          <Link
            href={`mailto:${siteMetadata.email}`}
            className="hover:underline underline-offset-8"
          >
            {siteMetadata.email}
          </Link>
        </h2>

        <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-lg flex-col gap-4 text-left">
          <div>
            <label className="text-xs font-semibold uppercase text-teal-100">Your Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 w-full rounded-xl border border-teal-500/30 bg-teal-800/60 px-4 py-2.5 text-white placeholder-teal-300/60 focus:border-white focus:outline-none"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-teal-100">Your Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="mt-1 w-full rounded-xl border border-teal-500/30 bg-teal-800/60 px-4 py-2.5 text-white placeholder-teal-300/60 focus:border-white focus:outline-none"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase text-teal-100">Message</label>
            <textarea
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="mt-1 w-full rounded-xl border border-teal-500/30 bg-teal-800/60 px-4 py-2.5 text-white placeholder-teal-300/60 focus:border-white focus:outline-none"
              placeholder="Drop your message here..."
            />
          </div>
          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-teal-900 shadow-md transition hover:bg-teal-50"
          >
            <FiSend className="h-5 w-5" />
            <span>Send Direct Message</span>
          </button>
          {sent && (
            <p className="mt-2 text-center text-sm font-semibold text-emerald-200">
              Opening your mail client...
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
