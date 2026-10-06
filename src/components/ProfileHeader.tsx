import Image from "next/image";
import type { Profile } from "@/types/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <div className="relative h-28 w-28 rounded-full shadow-[0_12px_28px_-8px_rgba(196,113,58,0.45),0_4px_10px_-4px_rgba(196,113,58,0.3)] ring-4 ring-white/80 sm:h-32 sm:w-32">
        <div className="absolute inset-0 overflow-hidden rounded-full">
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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-white/50 via-transparent to-black/10 mix-blend-overlay"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {profile.name}
        </h1>
        <p className="text-sm text-foreground/60 sm:text-base">
          {profile.bio}
        </p>
      </div>
    </header>
  );
}
