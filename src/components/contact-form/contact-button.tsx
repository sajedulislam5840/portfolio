import { useState } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import ContactFormModal from "@/components/contact-form/contact-form-modal";

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <span className="rounded-full bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
        GET IN TOUCH
      </span>
      <Link
        href="mailto:mohammad.sajedul.islam@g.bracu.ac.bd"
        className="text-2xl font-bold tracking-tight text-white underline decoration-2 underline-offset-8 sm:text-4xl md:text-5xl"
      >
        mohammad.sajedul.islam@g.bracu.ac.bd
      </Link>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-2 flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-zinc-900 shadow-md transition hover:bg-zinc-100"
      >
        <FiMail className="h-5 w-5" />
        <span>Send Message</span>
      </button>
      <ContactFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
