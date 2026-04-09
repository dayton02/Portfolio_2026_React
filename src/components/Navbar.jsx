import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-8 right-6 md:right-12 z-50">
      <div className="bg-white rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-5 flex flex-col w-[260px] font-sans">
        
        {/* Works Section */}
        <a href="#projects" className="flex justify-between items-center pb-2 border-b border-gray-100 hover:text-blue-500 font-bold text-lg transition-colors group">
          <span>Works</span>
          <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
        </a>
        <div className="flex gap-1.5 py-3 border-b border-gray-100 text-gray-400">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 text-[10px] font-medium">C</span>
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 text-[10px] font-medium">+</span>
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 text-[10px] font-medium">+</span>
        </div>
        
        {/* Me Section */}
        <a href="#about" className="flex justify-between items-center py-2 border-b border-gray-100 hover:text-green-500 font-bold text-lg transition-colors mt-2 group">
          <span>Me</span>
          <span className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
        </a>
        <div className="flex gap-2.5 py-3 border-b border-gray-100 text-gray-500 font-bold text-sm">
           <a href="https://linkedin.com/in/dayton-ng" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">in</a>
           <a href="mailto:daytonng02@gmail.com" className="hover:text-black transition-colors">em</a>
           <a href="https://github.com/dayton02" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">gh</a>
        </div>

        {/* Resume Section */}
        <a href="#" className="flex justify-between items-center pt-3 hover:text-yellow-500 font-bold text-lg transition-colors mt-2 group">
          <span>Download Resume</span>
          <span className="opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all">↓</span>
        </a>
        
      </div>
    </nav>
  );
};

export default Navbar;