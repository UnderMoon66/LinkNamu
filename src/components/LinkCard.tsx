import type { LinkItem } from "@/types/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/l/${link.id}`}
      className="flex w-full items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-center font-medium text-foreground shadow-[0_4px_16px_-6px_rgba(196,113,58,0.2)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_10px_20px_-8px_rgba(196,113,58,0.3)] active:translate-y-0 active:scale-[0.98]"
    >
      {link.title}
    </a>
  );
}
