import ProfileHeader from "@/components/ProfileHeader";
import LinkList from "@/components/LinkList";
import { profile, links } from "@/config/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center gap-8 px-4 py-12 sm:py-16">
      <ProfileHeader profile={profile} />
      <LinkList links={links} />
    </main>
  );
}
