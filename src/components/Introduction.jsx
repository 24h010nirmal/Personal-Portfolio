import React from 'react';
import { personalData } from '../data/portfolio.js';

export default function Introduction() {
  return (
    <section className="section-spacing bg-[#1B48D6] text-white">
      <div className="page-container">
        <div className="editorial-grid items-center gap-y-12">
          {/* Statement & Supporting Narrative */}
          <div className="col-span-12 lg:col-span-7 pr-0 lg:pr-8">
            <h2 className="heading-text text-white mb-6">
              {personalData.introStatement}
            </h2>
            <p className="lead-text text-white mb-6 font-medium">
              {personalData.introBody}
            </p>
            <p className="body-text text-[#E6EEFF] text-base leading-relaxed">
              Studying Computer Applications in Tamil Nadu while building full-stack and frontend applications, 
              focusing on direct problem solving, clear interface states, and dependable performance.
            </p>
          </div>

          {/* Looping Archival Video Atmosphere (Muted, Accessible, Clean Frame) */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative p-3 bg-[#113199]">
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[var(--accent)]" aria-hidden="true" />
              <figure className="shutter-frame aspect-[16/10] overflow-hidden m-0 bg-black">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/assets/Avatar.png"
                  className="w-full h-full object-cover"
                  aria-hidden="true"
                >
                  <source src="/assets/ocean-in-sommaroy.webm" type="video/webm" />
                </video>
                <figcaption className="sr-only">
                  Atmospheric video showing moving coastal waters from Sommaroy archive
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
