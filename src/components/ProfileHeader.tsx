import Image from "next/image";
import type { Profile } from "@/types/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center gap-3 text-center">
      <div className="relative h-28 w-28 overflow-hidden rounded-full ring-2 ring-black/5 sm:h-32 sm:w-32">
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name} 프로필 사진`}
          fill
          sizes="128px"
          className="object-cover"
          unoptimized
          priority
        />
      </div>
      <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
        {profile.name}
      </h1>
      <p className="text-sm text-gray-500 sm:text-base">{profile.bio}</p>
    </header>
  );
}
