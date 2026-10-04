import type { LinkItem, Profile } from "@/types/profile";

export const profile: Profile = {
  name: "백상철",
  bio: "가을을 사랑하는 남자",
  avatarUrl: "/avatar.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
];
