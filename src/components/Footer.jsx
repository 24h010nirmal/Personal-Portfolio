import React from 'react';
import { personalData, imageCredits } from '../data/portfolio.js';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] text-white pt-20 pb-12 transition-colors duration-200">
      <div className="page-container">
        {/* Top Row: Navigation, Academic Base, and Social Channels */}
        <div className="editorial-grid gap-y-10 pb-16">
          <div className="col-span-12 sm:col-span-3">
            <p className="text-sm uppercase tracking-normal text-[var(--accent)] font-bold mb-4">
              Navigation
            </p>
            <ul className="space-y-2 text-sm font-semibold">
              <li><a href="#top" className="hover:text-[var(--accent)] transition-colors duration-150">Top</a></li>
              <li><a href="#about" className="hover:text-[var(--accent)] transition-colors duration-150">About</a></li>
              <li><a href="#skills" className="hover:text-[var(--accent)] transition-colors duration-150">Skills</a></li>
              <li><a href="#projects" className="hover:text-[var(--accent)] transition-colors duration-150">Projects</a></li>
              <li><a href="#approach" className="hover:text-[var(--accent)] transition-colors duration-150">Approach</a></li>
              <li><a href="#contact" className="hover:text-[var(--accent)] transition-colors duration-150">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-3">
            <p className="text-sm uppercase tracking-normal text-[var(--accent)] font-bold mb-4">
              Academic Roots
            </p>
            <p className="text-sm font-bold mb-1">{personalData.college}</p>
            <p className="text-sm text-[#CCCCCC] mb-2">{personalData.degree}</p>
            <p className="text-sm text-[#CCCCCC]">{personalData.location}</p>
          </div>

          <div className="col-span-12 sm:col-span-3">
            <p className="text-sm uppercase tracking-normal text-[var(--accent)] font-bold mb-4">
              Connect
            </p>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <a
                  href={`mailto:${personalData.contactLinks.email}`}
                  className="hover:text-[var(--accent)] transition-colors duration-150"
                >
                  Direct Email
                </a>
              </li>
              <li>
                <a
                  href={personalData.contactLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors duration-150"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={personalData.contactLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors duration-150"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-12 sm:col-span-3 flex flex-col justify-between items-start sm:items-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="px-6 py-3 bg-[var(--accent)] text-sm font-bold uppercase text-[#0F0F0F] hover:bg-white transition-colors duration-150"
            >
              Back to Top ↑
            </button>
            <p className="text-sm text-[#CCCCCC] mt-6 sm:mt-0 text-left sm:text-right font-medium">
              Built with React, Vite &amp; Tailwind CSS &amp; Created by Nirmal
            </p>
          </div>
        </div>

        {/* Monumental Closing Wordmark in Maximalist Yellow */}
        <div className="pt-12 pb-4 overflow-hidden">
          <p className="monument-text text-[var(--accent)] select-none text-center sm:text-left leading-none">
            NIRMAL
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-sm text-white font-medium">
            <p>Designed and built with the Help of Antigravity.</p>
            <p className="tabular-figures">
              © {new Date().getFullYear()} G. Nirmal · All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
