import { useRef } from 'react';
import { marquee, useGsap } from '@/lib/gsap';
import { marqueeTags } from '@/data/content';

export default function Marquee() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const tween = useRef<gsap.core.Tween | null>(null);

  useGsap(root, () => {
    if (!track.current) return;
    tween.current = marquee(track.current, { duration: 30 });
  });

  const pause = () => tween.current?.pause();
  const resume = () => tween.current?.resume();

  return (
    <div
      ref={root}
      className="relative -mt-6 overflow-hidden bg-ink py-10 md:-mt-8 md:py-14"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <div className="w-[115%] -translate-x-[7.5%] -rotate-3 bg-ember py-4 md:py-5">
        <div ref={track} className="flex w-max">
          <TagRow />
          <TagRow duplicate />
        </div>
      </div>
    </div>
  );
}

function TagRow({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      // The second copy exists only so the -50% loop lands seamlessly.
      aria-hidden={duplicate || undefined}
      aria-label={duplicate ? undefined : 'Services'}
    >
      {marqueeTags.map((tag) => (
        <li key={tag} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-lg uppercase tracking-tight text-ink md:px-8 md:text-2xl">
            {tag}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
            className="shrink-0 text-ink/50"
          >
            <path d="M12 3v18" />
            <path d="M3 12h18" />
            <path d="m5.6 5.6 12.8 12.8" />
            <path d="m18.4 5.6-12.8 12.8" />
          </svg>
        </li>
      ))}
    </ul>
  );
}
