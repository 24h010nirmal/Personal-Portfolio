import React, { useState, useEffect } from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function Navbar() {
  const scrollProgress = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'approach', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#0F0F0F] text-white">
      {/* Bold maximalist non-gradient progress indicator */}
      <div 
        className="h-[4px] bg-[var(--accent)] origin-left transition-transform duration-100 ease-out" 
        style={{ transform: `scaleX(${scrollProgress})` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      <div className="page-container flex items-center justify-between py-4">
        {/* Wordmark */}
        <a 
          href="#top"
          onClick={(e) => scrollToSection(e, '#top')}
          className="font-display text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2 hover:text-[var(--accent)] transition-colors duration-150"
        >
          <span>G. NIRMAL</span>
          <span className="w-2.5 h-2.5 bg-[var(--accent)] inline-block" aria-hidden="true" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-sm font-bold uppercase transition-colors duration-150 ${
                  isActive ? 'text-[var(--accent)]' : 'text-[#B0B0B0] hover:text-white'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="editorial-btn text-sm py-2 px-6 min-h-[2.6rem] font-bold"
          >
            Intrested
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 p-2 text-white"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-200 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-[2px] bg-white transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-200 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Drawer (Solid high-contrast surface) */}
      {mobileOpen && (
        <div className="md:hidden bg-[#181818] px-6 py-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-bold text-white py-2 uppercase font-display"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="editorial-btn w-full text-center"
            >
              Intrested
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
