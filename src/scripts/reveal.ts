// One-shot scroll reveals. Adds `.is-visible` the first time an element
// enters the viewport; the visual treatment lives in src/styles/motion.css.
//
//   [data-reveal]    the element itself fades up
//   [data-stagger]   its children fade up in sequence (set --i on each)
//   .section-title   its purple accent line draws in
//   .accent-rule     a standalone purple rule draws in
const SELECTOR = '[data-reveal], [data-stagger], .section-title, .accent-rule';

export function initReveal(root: ParentNode = document) {
  const els = [...root.querySelectorAll<HTMLElement>(SELECTOR)];
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  els.forEach((el) => io.observe(el));
}
