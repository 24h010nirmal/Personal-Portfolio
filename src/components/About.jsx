import React from 'react';
import { personalData } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="section-spacing bg-[#181818] text-white">
      <div className="page-container">
        {/* Section Heading — Pure H2 with no eyebrow label */}
        <div className="mb-12">
          <h2 className="heading-text text-white max-w-3xl">
            Learning by Building
          </h2>
        </div>

        {/* Editorial Two-Column Structure: Facts at Left, Narrative at Right */}
        <div className="editorial-grid gap-y-10 items-start mb-16">
          {/* Side Facts (College, Degree, Location) */}
          <div className="col-span-12 md:col-span-4 pr-0 md:pr-6">
            <dl className="bg-[#242424] p-8 space-y-6">
              <div>
                <dt className="small-text font-bold text-[var(--accent)] mb-1 uppercase text-sm">
                  Degree Program
                </dt>
                <dd className="text-base font-bold text-white">
                  {personalData.degree}
                </dd>
              </div>

              <div>
                <dt className="small-text font-bold text-[var(--accent)] mb-1 uppercase text-sm">
                  College
                </dt>
                <dd className="text-base font-bold text-white">
                  {personalData.college}
                </dd>
              </div>

              <div>
                <dt className="small-text font-bold text-[var(--accent)] mb-1 uppercase text-sm">
                  Location
                </dt>
                <dd className="text-base font-bold text-white">
                  {personalData.location}
                </dd>
              </div>
            </dl>
          </div>

          {/* Core Bio & Academic Context */}
          <div className="col-span-12 md:col-span-8 flex flex-col justify-between">
            <p className="lead-text text-white mb-6 font-medium text-lg leading-relaxed">
              {personalData.aboutBody}
            </p>
            <p className="body-text text-white mb-8 text-base leading-relaxed">
              At Agurchand Manmull Jain College, my coursework in Computer Applications provides a solid base in data structures, 
              object-oriented paradigms, and system design. Outside the lecture hall, I immediately put these theories to work 
              by architecting full-stack web applications and refining frontend interfaces.
            </p>

            {/* Archival Campus Heritage Detail */}
            <div className="bg-[#242424] p-8">
              <div className="editorial-grid items-center gap-6">
                <div className="col-span-12 sm:col-span-5">
                  <img
                    src="/assets/block.webp"
                    alt="Panorama of historic public architecture in Chennai"
                    className="w-full h-36 object-cover"
                    loading="lazy"
                    decoding="async"
                    width="1920"
                    height="869"
                  />
                </div>
                <div className="col-span-12 sm:col-span-7">
                  <p className="text-base font-bold text-white mb-1">
                    Tamil Nadu Academic Context
                  </p>
                  <p className="small-text text-white text-sm">
                    Learning in a historic educational and technological centre in South India, pairing fundamental computer science with modern web tooling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Guiding Principles (Asymmetric Maximalist Layout) */}
        <div className="pt-8">
          <h3 className="text-2xl font-display font-black uppercase text-white mb-8">
            Guiding Principles
          </h3>
          <div className="space-y-6">
            {/* Principle 1: Wide Featured Lead Banner */}
            <div className="bg-[#242424] p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-l-4 border-[var(--accent)]">
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 bg-[var(--accent)]" aria-hidden="true" />
                  <h4 className="text-2xl font-display font-black uppercase text-white">
                    {personalData.principles[0].title}
                  </h4>
                </div>
                <p className="text-sm font-bold text-[var(--accent)] uppercase">
                  Continuous Technical Mastery
                </p>
              </div>
              <p className="body-text text-white text-base lg:text-lg max-w-xl leading-relaxed">
                {personalData.principles[0].description}
              </p>
            </div>

            {/* Principles 2 & 3: Asymmetric Split Slabs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#202020] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 bg-[var(--blue)]" aria-hidden="true" />
                    <h4 className="text-xl font-display font-black uppercase text-white">
                      {personalData.principles[1].title}
                    </h4>
                  </div>
                  <p className="body-text text-white text-base leading-relaxed">
                    {personalData.principles[1].description}
                  </p>
                </div>
              </div>

              <div className="bg-[#202020] p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-3 h-3 bg-[var(--accent)]" aria-hidden="true" />
                    <h4 className="text-xl font-display font-black uppercase text-white">
                      {personalData.principles[2].title}
                    </h4>
                  </div>
                  <p className="body-text text-white text-base leading-relaxed">
                    {personalData.principles[2].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
