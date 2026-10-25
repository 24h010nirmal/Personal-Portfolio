import React from 'react';
import { projectsData } from '../data/portfolio.js';
import ProjectConsole from './ProjectConsole.jsx';

export default function Projects() {
  return (
    <section id="projects" className="section-spacing bg-[#141414] text-white">
      <div className="page-container">
        {/* Section Heading — Pure H2 without eyebrow label */}
        <div className="mb-14">
          <h2 className="heading-text text-white max-w-3xl">
            Selected Projects
          </h2>
        </div>

        {/* Selected Project Showcase Cards */}
        <div className="flex flex-col gap-20">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="editorial-grid items-center gap-y-8 pb-16"
            >
              {/* Media Column (Alternating for visual rhythm) */}
              <div className={`col-span-12 lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative p-3 bg-[#202020]">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-[var(--accent)]" aria-hidden="true" />
                  <div className="shutter-frame overflow-hidden aspect-[16/10] bg-black">
                    {project.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        preload="metadata"
                        poster={project.poster || "/assets/NotesVault-poster.jpg"}
                        className="w-full h-full object-cover"
                        aria-label={`Project demonstration video for ${project.title}`}
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={project.image}
                        alt={`Preview representation of ${project.title}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width="1920"
                        height="1080"
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Text & Specification Column */}
              <div className={`col-span-12 lg:col-span-5 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1 lg:pr-8' : 'lg:pl-8'}`}>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-display font-black uppercase text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-base text-[var(--accent)] font-bold mb-4 uppercase">
                    {project.discipline} · <span className="tabular-figures">{project.year}</span>
                  </p>

                  <p className="lead-text text-white text-base font-normal mb-4">
                    {project.description}
                  </p>

                  <p className="body-text text-base text-[#C2C2C2] mb-6">
                    {project.roleDetails}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3.5 py-1 bg-[#262626] text-white font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Implementation Highlights */}
                  <div className="bg-[#202020] p-6 mb-6">
                    <p className="text-base font-bold uppercase text-[var(--accent)] mb-3">
                      Key Technical Implementations
                    </p>
                    <ul className="space-y-2.5">
                      {project.liveFeatures.map((feat) => (
                        <li key={feat.label} className="text-base text-white flex items-start gap-2">
                          <span className="text-[var(--accent)] font-bold mt-0.5">•</span>
                          <span>
                            <strong className="text-white font-bold">{feat.label}:</strong> {feat.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <a
                    href="#contact"
                    className="editorial-link text-base font-bold text-white hover:text-[var(--accent)]"
                  >
                    Discuss project architecture →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* The Live Thing: Interactive Project Console */}
        <ProjectConsole />
      </div>
    </section>
  );
}
