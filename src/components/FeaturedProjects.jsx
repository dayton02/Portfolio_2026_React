import React from 'react';
import climbImg from '../assets/images/featured-project.jpg';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Climb',
      description: 'A responsive 2D vertical platformer. Navigate treacherous rock formations with strategic movement and a unique three-button control system that tests timing, precision, and traversal strategies.',
      tech: ['C++', 'AEngine', 'Procreate', 'Git'],
      image: climbImg,
      link: '#', // We will update this later when routing is established
    }
  ];

  return (
    <section id="projects" className="w-full py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white mb-4">
            Selected Works
          </h2>
          <div className="w-20 h-1 bg-stone-900 dark:bg-white rounded-full"></div>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20 group`}
            >
              
              {/* Image Container */}
              <div className="w-full lg:w-3/5 overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm relative">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-stone-900/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
              </div>

              {/* Text Container */}
              <div className="w-full lg:w-2/5 flex flex-col items-start">
                <span className="text-xs font-bold tracking-widest text-stone-400 dark:text-stone-500 uppercase mb-4">
                  0{index + 1} &mdash; Featured
                </span>
                
                <h3 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white mb-6">
                  {project.title}
                </h3>
                
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed mb-8 font-light text-lg">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((techItem) => (
                    <span 
                      key={techItem} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-800"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-stone-900 dark:text-white font-semibold group/link"
                >
                  <span className="relative">
                    View Project
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-stone-900 dark:bg-white transition-all duration-300 group-hover/link:w-full"></span>
                  </span>
                  <svg className="w-5 h-5 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
