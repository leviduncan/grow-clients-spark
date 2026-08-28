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
      className="theme-fade relative -mt-6 overflow-hidden bg-band-veil py-14 md:-mt-8 md:py-20"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      {/* The hero is the one fully opaque section; everything below it
          paints at --veil-alpha over the paper texture. That leaves a hard
          ~4-level step right at this boundary, which reads as a faint line
          across a large flat white area. Fading the opaque colour out over
          the first 112px removes the edge. In dark mode the two colours
          are identical, so this is a no-op. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-band to-transparent"
      />

      <div className="relative w-[115%] -translate-x-[7.5%] -rotate-3 bg-ember py-3 md:py-4">
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
          <span className="whitespace-nowrap px-8 font-display text-[75px] uppercase leading-none tracking-tight text-on-ember md:px-10">
            {tag}
          </span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
            className="shrink-0 text-on-ember/45"
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
