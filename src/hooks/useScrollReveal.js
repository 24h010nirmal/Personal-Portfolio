import { useEffect } from 'react';

/**
 * Coordinates scroll-linked motion and ensures full visibility of all content.
 * Animates subtle 2D travel for the monument wordmark, image frames, and section elements,
 * keeping text strictly inside the page margins without horizontal shifts.
 */
export function useScrollReveal() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // 1. Hero monument scaling
      const monument = document.querySelector('.monument-text');
      if (monument) {
        const progress = Math.min(1, Math.max(0, scrollY / 600));
        const scale = 1 - progress * 0.05;
        monument.style.transform = `scale(${scale.toFixed(4)})`;
      }

      // 2. Subtle vertical parallax on images and media
      const mediaElements = document.querySelectorAll('.shutter-frame img, .shutter-frame video');
      mediaElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = ((rect.top - window.innerHeight / 2) * 0.02).toFixed(2);
          el.style.transform = `translateY(${offset}px)`;
        }
      });

      // 3. Subtle 2D entrance offsets on articles and section headlines
      const revealItems = document.querySelectorAll('article, .heading-text, #about .bg-\\[\\#242424\\]');
      revealItems.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const offset = ((rect.top - window.innerHeight / 2) * 0.015).toFixed(2);
          el.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}
