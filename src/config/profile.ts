import type { LinkItem, Profile } from "@/types/profile";

export const profile: Profile = {
  name: "백상철",
  bio: "가을을 사랑하는 남자:요즘은 산을 더 사랑 함",
  avatarUrl: "/profile.jpeg",
};

export const links: LinkItem[] = [
  { id: "github", title: "🌸 GitHub", url: "https://github.com/UnderMoon66" },
  { id: "blog", title: "✍️ 블로그", url: "https://blog.naver.com/leohel" },
  { id: "email", title: "✉️ 이메일", url: "mailto:leohel66@gmail.com" },
];
