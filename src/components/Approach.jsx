import React from 'react';
import { personalData } from '../data/portfolio.js';

export default function Approach() {
  return (
    <section id="approach" className="section-spacing bg-[#FFE600] text-[#0F0F0F]">
      <div className="page-container">
        <div className="editorial-grid items-start gap-y-10">
          {/* Section Heading & Headline — Pure H2 without eyebrow label */}
          <div className="col-span-12 lg:col-span-5 pr-0 lg:pr-8">
            <h2 className="heading-text text-[#0F0F0F] mb-6">
              Always Learning, Always Building
            </h2>
            <div className="p-6 bg-[#0F0F0F] text-white mt-4">
              <blockquote className="text-base italic leading-relaxed text-[#F0F0F0]">
                "Curiosity leads. Code brings ideas to life."
              </blockquote>
              <p className="text-sm font-bold mt-3 text-[var(--accent)]">
                G. Nirmal · Frontend Developer &amp; Problem Solver
              </p>
            </div>
          </div>

          {/* Core Philosophy Narrative */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
            <p className="lead-text text-[#0F0F0F] font-bold text-lg">
              {personalData.approachBody}
            </p>

            <div className="space-y-8 mt-6">
              <div className="bg-[#E5CF00] p-6">
                <h3 className="text-2xl font-black font-display uppercase text-[#0F0F0F] mb-2">
                  First-Principles Reasoning
                </h3>
                <p className="body-text text-[#1A1A1A] text-base leading-relaxed">
                  Breaking down complex UI problems into fundamental state transitions and predictable data models before writing markup.
                </p>
              </div>

              <div className="bg-[#E5CF00] p-6">
                <h3 className="text-2xl font-black font-display uppercase text-[#0F0F0F] mb-2">
                  Respect for the Medium
                </h3>
                <p className="body-text text-[#1A1A1A] text-base leading-relaxed">
                  Prioritizing 2D graphic excellence, genuine typographic proportion, and resilient DOM semantics over ephemeral 3D gimmicks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
