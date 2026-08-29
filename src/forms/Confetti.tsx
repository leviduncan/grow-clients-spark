import { useRef } from 'react';
import { confettiBursts, useGsap } from '@/lib/gsap';

/**
 * Fires the celebration on mount.
 *
 * The overlay is `fixed inset-0` so bursts can cross the whole viewport
 * rather than being clipped to a content column, `overflow-hidden` so a
 * particle thrown off-screen cannot extend the scroll area, and
 * `pointer-events-none` + `aria-hidden` because it is pure decoration
 * sitting on top of a real page.
 *
 * Particles clean themselves up as each tween finishes, and useGsap's
 * context reverts anything still in flight if the page unmounts first.
 */
export default function Confetti() {
  const root = useRef<HTMLDivElement>(null);

  useGsap(root, () => {
    confettiBursts(root.current!);
  });

  return (
    <div
      ref={root}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    />
  );
}
