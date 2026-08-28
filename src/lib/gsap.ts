import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, type RefObject } from 'react';

gsap.registerPlugin(ScrollTrigger);

// Archivo Black is a heavy face and shifts layout when it swaps in.
// Without this, every ScrollTrigger start position is measured against
// the fallback font's metrics and fires at the wrong scroll offset.
if (typeof document !== 'undefined' && 'fonts' in document) {
  document.fonts.ready.then(() => ScrollTrigger.refresh());
}

export { gsap, ScrollTrigger };

/**
 * Single source of truth for the motion preference. Every animation
 * helper below branches on this and falls back to the *end state*
 * instantly -- never to a slower version of the same animation.
 */
export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scoped GSAP setup tied to a component's lifetime. Selectors inside
 * `setup` resolve within `scope`, and everything is reverted on unmount
 * so no ScrollTrigger outlives its section.
 */
export function useGsap(
  scope: RefObject<HTMLElement | null>,
  setup: (reduced: boolean) => void,
  deps: unknown[] = [],
): void {
  useLayoutEffect(() => {
    const el = scope.current;
    if (!el) return;
    const ctx = gsap.context(() => setup(prefersReducedMotion()), el);
    return () => ctx.revert();
  }, deps);
}

/**
 * Forces the resting state if a reveal has not landed when it should have.
 *
 * A reveal is decorative; what it reveals is not. Anything that stops a
 * tween part-way leaves real content part-faded, and on a form that means
 * unusable content in production. So every reveal carries a watchdog that
 * sets the end state outright, cancelled the moment the tween finishes
 * normally. In the healthy case it costs one cleared timer.
 *
 * `armOnStart` is for scroll-triggered reveals, which may sit unstarted for
 * minutes before the user scrolls to them. Those arm when they actually
 * begin, so the watchdog never fires early and skips the animation.
 */
function guaranteeRestingState(
  tween: gsap.core.Tween,
  { armOnStart = false }: { armOnStart?: boolean } = {},
): void {
  if (typeof window === 'undefined') return;

  let timer = 0;
  const disarm = () => {
    if (timer) window.clearTimeout(timer);
    timer = 0;
  };

  const arm = () => {
    disarm();
    // The tween's own end time, plus a margin for a slow frame.
    const ms = (tween.totalDuration() + (armOnStart ? 0 : tween.delay())) * 1000 + 400;
    timer = window.setTimeout(() => {
      if (tween.progress() >= 1) return;
      const live = tween.targets<Element>().filter((el) => el?.isConnected);
      if (live.length) gsap.set(live, { opacity: 1, y: 0, clearProps: 'transform' });
    }, ms);
  };

  tween.eventCallback('onComplete', disarm);
  if (armOnStart) tween.eventCallback('onStart', arm);
  else arm();
}

/** Staggered fade-up on scroll entry. Does not replay on scroll-back. */
export function revealOnScroll(
  targets: gsap.TweenTarget,
  opts: {
    trigger?: Element | string;
    stagger?: number;
    y?: number;
    delay?: number;
    duration?: number;
  } = {},
): void {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0, clearProps: 'transform' });
    return;
  }

  // fromTo, never from. A `from` tween reads the element's CURRENT value as
  // its destination, so if one is killed mid-flight and another is created
  // over the same target -- a reverted gsap.context racing a re-invoked
  // effect is the usual way -- the second captures the stranded mid-tween
  // value as its end state, animates to it, and completes there. The result
  // is content permanently stuck part-faded with no error anywhere. Stating
  // the end state explicitly makes that impossible.
  const tween = gsap.fromTo(
    targets,
    { opacity: 0, y: opts.y ?? 32 },
    {
      opacity: 1,
      y: 0,
      duration: opts.duration ?? 0.7,
      ease: 'power2.out',
      stagger: opts.stagger ?? 0.08,
      delay: opts.delay ?? 0,
      // Hand `transform` back to CSS once the reveal lands. GSAP otherwise
      // leaves `transform: translate(0px, 0px)` inline, and an inline style
      // outranks the stylesheet, which would silently kill the .card-grow
      // hover on every card this animates.
      clearProps: 'transform',
      scrollTrigger: {
        trigger: opts.trigger ?? (targets as Element),
        start: 'top 85%',
        once: true,
      },
    },
  );

  guaranteeRestingState(tween, { armOnStart: true });
}

/** Fade-up on mount, for above-the-fold content that needs no trigger. */
export function revealOnLoad(
  targets: gsap.TweenTarget,
  opts: { stagger?: number; y?: number; delay?: number } = {},
): void {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0, clearProps: 'transform' });
    return;
  }

  // fromTo, not from: see the note in revealOnScroll. This is the helper the
  // testimonial form uses, and a form stranded at opacity 0.44 is not a
  // cosmetic bug.
  const tween = gsap.fromTo(
    targets,
    { opacity: 0, y: opts.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: opts.stagger ?? 0.1,
      delay: opts.delay ?? 0.1,
      clearProps: 'transform',
    },
  );

  guaranteeRestingState(tween);
}

/**
 * Tweens a proxy object and writes the rounded value to textContent on
 * each tick. Reduced motion jumps straight to the final value.
 */
export function countUp(
  el: HTMLElement,
  to: number,
  opts: { duration?: number; prefix?: string; suffix?: string } = {},
): void {
  const format = (v: number) =>
    `${opts.prefix ?? ''}${Math.round(v).toLocaleString('en-US')}${opts.suffix ?? ''}`;

  if (prefersReducedMotion()) {
    el.textContent = format(to);
    return;
  }

  const proxy = { v: 0 };
  el.textContent = format(0);

  gsap.to(proxy, {
    v: to,
    duration: opts.duration ?? 1.8,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = format(proxy.v);
    },
    scrollTrigger: { trigger: el, start: 'top 80%', once: true },
  });
}

/**
 * Infinite horizontal loop. `track` must already contain its content
 * duplicated exactly once -- the -50% translate then lands seamlessly
 * on the start of the copy. Returns the tween so callers can wire
 * pause-on-hover; returns null when motion is reduced.
 */
export function marquee(
  track: HTMLElement,
  opts: { duration?: number } = {},
): gsap.core.Tween | null {
  if (prefersReducedMotion()) return null;

  return gsap.to(track, {
    xPercent: -50,
    duration: opts.duration ?? 28,
    ease: 'none',
    repeat: -1,
  });
}

/** Horizontal bar fill, scaled from the left edge. Trigger-once, not scrubbed. */
export function progressBar(el: HTMLElement, pct: number): void {
  gsap.set(el, { transformOrigin: 'left center' });

  if (prefersReducedMotion()) {
    gsap.set(el, { scaleX: pct / 100 });
    return;
  }

  gsap.fromTo(
    el,
    { scaleX: 0 },
    {
      scaleX: pct / 100,
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    },
  );
}

/**
 * Splits an element's text into per-word spans so a stagger can act on
 * them. Returns the created spans. Wrapping each word in an
 * overflow-hidden parent keeps the y-translate from bleeding upward.
 */
export function splitWords(el: HTMLElement): HTMLElement[] {
  const words = (el.textContent ?? '').trim().split(/\s+/);
  el.textContent = '';

  return words.map((word, i) => {
    const mask = document.createElement('span');
    mask.style.display = 'inline-block';
    mask.style.overflow = 'hidden';
    mask.style.verticalAlign = 'top';

    const inner = document.createElement('span');
    inner.style.display = 'inline-block';
    inner.textContent = word;

    mask.appendChild(inner);
    el.appendChild(mask);
    if (i < words.length - 1) el.appendChild(document.createTextNode(' '));

    return inner;
  });
}
