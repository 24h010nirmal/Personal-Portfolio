import React, { useState } from 'react';
import { skillsData } from '../data/portfolio.js';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsData.categories[0].id);

  const currentCategory = skillsData.categories.find((c) => c.id === activeCategory) || skillsData.categories[0];

  return (
    <section id="skills" className="section-spacing bg-[#0E5E4E] text-white">
      <div className="page-container">
        {/* Section Heading — Pure H2 without eyebrow label */}
        <div className="mb-12">
          <h2 className="heading-text text-white max-w-3xl">
            Technical Foundations &amp; Tools
          </h2>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap gap-3 mb-10" role="tablist" aria-label="Skill categories">
          {skillsData.categories.map((cat) => {
            const isSelected = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-3 px-6 text-sm font-bold uppercase transition-colors duration-150 ${
                  isSelected
                    ? 'bg-[var(--accent)] text-[#0F0F0F]'
                    : 'bg-[#094236] text-white hover:bg-[#063329]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Selected Category Content */}
        <div
          id={`panel-${currentCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${currentCategory.id}`}
          className="editorial-grid gap-y-8 items-start"
        >
          {/* Category Summary Description */}
          <div className="col-span-12 md:col-span-4 pr-0 md:pr-8">
            <h3 className="text-2xl font-display font-black uppercase text-white mb-4">
              {currentCategory.name}
            </h3>
            <p className="body-text text-[#E0F2EE] text-base leading-relaxed">
              {currentCategory.summary}
            </p>
            <div className="mt-8 p-6 bg-[#094236]">
              <p className="text-sm font-bold uppercase text-[var(--accent)]">
                Evaluation Standard
              </p>
              <p className="small-text text-[#E0F2EE] text-sm mt-2">
                Evaluated by the ability to solve practical software challenges, engineer reliable state logic, and deliver intuitive user interfaces.
              </p>
            </div>
          </div>

          {/* List of Skills as a Single Editorial Matrix Block (No repetitive boxed cards) */}
          <div className="col-span-12 md:col-span-8 bg-[#094236] p-8 sm:p-10 space-y-6">
            {currentCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pb-6 last:pb-0"
              >
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 bg-[var(--accent)] flex-shrink-0" aria-hidden="true" />
                  <span className="text-xl font-bold text-white font-display uppercase tracking-tight">
                    {skill.name}
                  </span>
                </div>
                <p className="text-base text-[#D0EAE4] text-left sm:text-right max-w-md font-medium">
                  {skill.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
