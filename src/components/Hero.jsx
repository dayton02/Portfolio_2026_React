import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-[100svh] overflow-hidden flex flex-col justify-between pt-8 pb-12">

      {/* MASSIVE BACKGROUND GRAPHICS: Engine Viewport Blueprint */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        
        {/* Faint Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div className="relative w-full max-w-[1200px] h-full flex items-center justify-center">
          
          {/* Central Structural Engine Shapes (Enlarged and Shifted) */}
          <div className="absolute left-[50%] top-[40%] translate-x-[-50%] lg:translate-x-[-30%] translate-y-[-50%] w-[320px] lg:w-[480px] h-[320px] lg:h-[480px] border-[20px] border-[#ff8833] rounded-full mix-blend-multiply opacity-80"></div>
          <div className="absolute left-[50%] top-[40%] translate-x-[-10%] lg:translate-x-[5%] translate-y-[-20%] w-[240px] lg:w-[350px] h-[240px] lg:h-[350px] bg-[#4285F4] mix-blend-multiply opacity-80 rounded-[48px] rotate-[15deg]"></div>

          {/* Coordinate Axis Array Originating Center */}
          <div className="absolute left-[50%] top-[5%] h-[70%] border-l-[4px] border-dashed border-[#34A853] opacity-60">
             <span className="absolute -top-10 -left-3 text-4xl font-black text-[#34A853]">Y</span>
          </div>
          <div className="absolute left-[50%] top-[45%] w-[45vw] border-t-[4px] border-dashed border-[#ea4335] opacity-60">
             <span className="absolute right-[5%] -top-7 text-4xl font-black text-[#ea4335]">X</span>
          </div>

          {/* Floating UI Elements shifted clear of axes */}
          <div className="absolute right-[5vw] lg:right-[10vw] top-[5vh] bg-white border border-gray-200 px-6 py-4 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] rotate-[6deg] opacity-95">
            <span className="text-gray-500 font-mono font-bold text-sm lg:text-lg">
              <span className="text-[#a855f7]">void</span> <span className="text-black">InitPortfolio()</span> {'{ DAYTON.start(); }'}
            </span>
          </div>

          {/* <C++> Watermark moved to Bottom Left to balance empty space */}
          <div className="absolute left-[-10vw] lg:left-[-5vw] bottom-[2vh] opacity-[0.04]">
             <span className="font-mono text-[160px] lg:text-[260px] font-black tracking-tighter text-black">
               {`<C++>`}
             </span>
          </div>

        </div>
      </div>

      {/* TOP LEFT IDENTITY */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-start md:items-center gap-4 md:gap-8 max-w-[50rem] px-8">
        <h1 className="text-[14vw] sm:text-[4.5rem] md:text-8xl font-black text-black tracking-tighter leading-none shrink-0">
          Dayton.Ng
        </h1>
        <p className="text-sm md:text-base text-gray-500 font-medium max-w-[320px] leading-relaxed select-none">
          Game developer, Software Engineer, Gamer, Adventurer, Archer, Diver.<br/> This is an exhibition of his workings :DDD
        </p>
      </div>

      {/* BOTTOM RIGHT EXHIBITION ARROW */}
      <div className="relative z-10 self-end flex items-end gap-6 pb-8 pr-8">
        <a href="#projects" className="group flex items-end gap-4 cursor-pointer">
          <h2 className="text-4xl md:text-6xl font-medium text-black leading-tight group-hover:opacity-60 transition-opacity">
            Gallery <br /> here
          </h2>
          <span className="text-4xl md:text-5xl group-hover:translate-x-3 transition-transform duration-300 pb-2">
            →
          </span>
        </a>
      </div>

    </section>
  );
};

export default Hero;
