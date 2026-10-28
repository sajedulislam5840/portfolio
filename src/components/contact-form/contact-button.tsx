import { useState } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import ContactFormModal from "@/components/contact-form/contact-form-modal";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <span className="rounded-full bg-accent/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-accent dark:bg-accent/20">
          Get in touch
        </span>
        <Link
          href={`mailto:${siteMetadata.email}`}
          className="text-2xl font-bold tracking-tight text-zinc-800 hover:underline dark:text-zinc-100 sm:text-4xl md:text-5xl"
        >
          {siteMetadata.email}
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-white shadow-md transition hover:bg-accent/90"
        >
          <FiMail className="h-5 w-5" />
          <span>Send Message</span>
        </button>
      </div>
      <ContactFormModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
