import type { LinkItem } from "@/types/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/l/${link.id}`}
      className="flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-4 text-center font-medium text-gray-800 shadow-sm transition hover:border-gray-300 hover:shadow-md active:scale-[0.98]"
    >
      {link.title}
    </a>
  );
}
