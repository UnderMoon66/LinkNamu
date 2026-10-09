"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/types/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let active = true;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((counts: Record<string, number>) => {
        if (active) setClickCounts(counts);
      })
      .catch((error) => {
        console.error("클릭수 조회 실패:", error);
      });

    return () => {
      active = false;
    };
  }, []);

  return (
    <ul className="flex w-full flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} clickCount={clickCounts[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
