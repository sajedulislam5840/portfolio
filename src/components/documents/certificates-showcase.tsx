import Link from "next/link";
import { FiFileText, FiExternalLink, FiAward, FiShield, FiCode } from "react-icons/fi";
import { CERTIFICATES_DATA } from "@/data/documents";

export default function CertificatesShowcase() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "BNCC & Leadership":
        return <FiShield className="h-5 w-5 text-teal-600 dark:text-teal-400" />;
      case "Sports & Athletics":
        return <FiAward className="h-5 w-5 text-amber-500" />;
      default:
        return <FiCode className="h-5 w-5 text-indigo-500" />;
    }
  };

  return (
    <section className="my-16">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Verified Credentials & Cadetship
        </h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Official certificates, military cadet credentials, and sports honors.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CERTIFICATES_DATA.map((item) => (
          <div
            key={item.title}
            className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-teal-500/50 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800">
                  {getCategoryIcon(item.category)}
                </div>
                <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {item.category}
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-zinc-800 dark:text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {item.issuer}
              </p>
            </div>

            <Link
              href={item.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-lg border border-teal-600/30 bg-teal-50/50 px-3 py-2 text-xs font-semibold text-teal-700 transition hover:bg-teal-600 hover:text-white dark:border-teal-500/30 dark:bg-teal-950/30 dark:text-teal-300 dark:hover:bg-teal-600 dark:hover:text-white"
            >
              <FiFileText className="h-3.5 w-3.5" />
              <span>View Document</span>
              <FiExternalLink className="h-3 w-3 opacity-70" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
