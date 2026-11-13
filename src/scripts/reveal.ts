// One-shot scroll reveals. Adds `.is-visible` the first time an element
// enters the viewport; the visual treatment lives in src/styles/motion.css.
//
//   [data-reveal]     the element itself fades up
//   [data-stagger]    its children fade up in sequence (set --i on each)
//   .section-title    its purple accent line draws in
//   .accent-rule      a standalone purple rule draws in
//   [data-reveal-img] a photograph unmasks
const SELECTOR = '[data-reveal], [data-reveal-img], [data-stagger], .section-title, .accent-rule';

export function initReveal(root: ParentNode = document) {
  const els = [...root.querySelectorAll<HTMLElement>(SELECTOR)];
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // A masked photo starts fully clipped, and browsers treat a fully clipped
  // element as never intersecting. Watch its unclipped parent instead and
  // reveal the photo when that comes into view.
  const targets = new Map<Element, HTMLElement[]>();
  for (const el of els) {
    const watched = el.hasAttribute('data-reveal-img') ? (el.parentElement ?? el) : el;
    targets.set(watched, [...(targets.get(watched) ?? []), el]);
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        targets.get(entry.target)?.forEach((el) => el.classList.add('is-visible'));
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  targets.forEach((_, watched) => io.observe(watched));
}
