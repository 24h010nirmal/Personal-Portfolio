import React, { useState } from 'react';
import { personalData } from '../data/portfolio.js';
import { Camera, ArrowDownRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="min-h-[100svh] pt-28 pb-16 flex flex-col justify-between bg-[var(--bg)] text-[var(--ink)] overflow-hidden">
      <div className="page-container flex-1 flex flex-col justify-between">
        
        {/* Top Status & Collegiate Origin Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8">
          <div className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-[var(--accent)]" aria-hidden="true" />
            <p className="text-base font-bold text-[var(--ink)] tracking-wide uppercase">
              {personalData.role}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <p className="small-text font-medium text-[var(--muted)]">
              {personalData.college} · {personalData.location}
            </p>
            <span className="hidden md:inline-block px-2.5 py-1 text-sm font-bold bg-[var(--surface-alt)] text-[var(--accent)]">
              {personalData.contactLinks.availability}
            </span>
          </div>
        </div>

        {/* Maximalist Split Hero Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4">
          
          {/* Left Column: Monumental Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Monumental Name */}
            <h1 className="monument-text text-[var(--ink)] tracking-tight leading-none">
              {personalData.headlineHero}
            </h1>

            {/* Discipline & Mission Headline */}
            <p className="text-xl sm:text-2xl font-bold text-[var(--accent)] mt-4 tracking-tight">
              Frontend Developer &amp; Problem Solver from Tamil Nadu, India
            </p>

            {/* Supporting Copy */}
            <p className="body-text text-base sm:text-lg text-[var(--ink)] mt-5 max-w-xl leading-relaxed">
              {personalData.introduction}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="editorial-btn min-h-[3.25rem] px-8 text-base font-bold"
              >
                Explore My Work
              </button>
              <button
                type="button"
                onClick={() => scrollTo('about')}
                className="editorial-btn-secondary min-h-[3.25rem] px-8 text-base font-bold"
              >
                About Me
              </button>
            </div>

            {/* Quick Tech Bar */}
            <div className="mt-10 pt-6 flex flex-wrap items-center gap-2">
              <span className="text-sm font-bold uppercase text-[var(--muted)] mr-2">Core Stack:</span>
              {['React', 'JavaScript', 'Tailwind CSS', 'Python', 'Java', 'C++'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-sm font-semibold bg-[var(--surface)] text-[var(--ink)] border-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Photo Area (Maximalist Replaceable Placeholder) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-[var(--surface)] flex flex-col justify-between p-6">
              
              {/* Outer Decorative Color Slabs */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--accent)]" aria-hidden="true" />
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-[var(--blue)]" aria-hidden="true" />

              {/* Top Tag inside frame */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-sm font-bold bg-[var(--accent)] text-[var(--accent-ink)] px-2.5 py-1">
                  Portrait Frame
                </span>
                <span className="text-sm font-semibold text-[var(--muted)]">
                  G. Nirmal
                </span>
              </div>

              {/* Photo or Styled Graphic Fallback */}
              <div className="relative z-10 flex-1 my-4 flex flex-col items-center justify-center bg-[var(--surface-alt)] overflow-hidden">
                {!photoError ? (
                  <img
                    src={personalData.profilePhoto}
                    alt={personalData.profilePhotoAlt}
                    onError={() => setPhotoError(true)}
                    className="w-full h-full object-cover object-top"
                    width="632"
                    height="1024"
                    loading="eager"
                    fetchPriority="high"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center space-y-4 p-6 text-center">
                    {/* Aperture / Camera Graphic */}
                    <div className="w-16 h-16 bg-[var(--accent)] flex items-center justify-center text-[var(--accent-ink)]">
                      <Camera className="w-8 h-8" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="font-display text-xl font-black text-[var(--ink)] uppercase tracking-tight">
                        Your Photo Here
                      </p>
                      <p className="small-text font-medium text-[var(--accent)] mt-1">
                        Photo coming soon
                      </p>
                    </div>

                    {/* Replacement instructions clearly visible in development */}
                    <div className="bg-[var(--surface)] p-3 text-sm text-[var(--muted)] max-w-[280px] text-center leading-relaxed">
                      <p className="font-semibold text-[var(--ink)]">To display your photo:</p>
                      <p className="mt-1">Save your image file to:</p>
                      <code className="text-[var(--accent)] block mt-0.5 break-all">
                        /public/images/profile-photo.jpg
                      </code>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Frame Tag */}
              <div className="relative z-10 flex items-center justify-between text-sm text-[var(--muted)]">
                <span className="font-medium">Tamil Nadu, India</span>
                <span className="font-bold text-[var(--ink)]">BCA · AMJC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm font-semibold text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <ArrowDownRight className="w-4 h-4 text-[var(--accent)]" aria-hidden="true" />
            <span>Scroll to discover projects &amp; technical fundamentals</span>
          </div>
          <div>
            <span>Agurchand Manmull Jain College · Chennai</span>
          </div>
        </div>

      </div>
    </section>
  );
}
