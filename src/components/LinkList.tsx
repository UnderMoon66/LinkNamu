import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/types/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} />
        </li>
      ))}
    </ul>
  );
}
