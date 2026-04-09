import React from 'react';
import profileImg from '../assets/images/profile.jpg';

const About = () => {
  return (
    <section id="about" className="w-full py-32 px-6 bg-stone-100 dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

        {/* Image Container */}
        <div className="w-full lg:w-5/12">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-md group">
            <div className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-500/20 mix-blend-overlay z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
            <img
              src={profileImg}
              alt="Dayton Ng"
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Text Container */}
        <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white mb-8">
            Developer, Designer, <br /> Gamer, Adventurer.
          </h2>

          <div className="space-y-6 text-lg text-stone-600 dark:text-stone-400 font-light leading-relaxed">
            <p>
              Hello! I'm Dayton. Most days, you’ll find me deep in VS or refining gameplay mechanics, all driven by a goal to create experiences that people truly love to play.
            </p>
            <p>
              My journey started back when I was a kid, constantly trying to keep up with my sister in whatever game we were playing. Those hours in front of the monitor didn’t just make me a gamer, but they sparked a fierce curiosity about how those worlds were built—and I haven’t stopped thinking about it since.
            </p>
            <p>
              When I’m not behind a monitor, I’m usually chasing a different kind of precision or immersion. Whether I’m focusing on a target at the archery range or exploring a reef while scuba diving, I love the relaxation that comes with outdoor adventures. I try to bring that same sense of focus and discovery back to my work in game engineering.
            </p>
          </div>

          <div className="mt-12 flex gap-4">
            <span className="px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-full text-sm font-medium text-stone-800 dark:text-stone-200">
              Singapore (GMT+8)
            </span>
            <span className="px-4 py-2 border border-stone-300 dark:border-stone-700 rounded-full text-sm font-medium text-stone-800 dark:text-stone-200">
              Unity • UE • C++ • C#
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
