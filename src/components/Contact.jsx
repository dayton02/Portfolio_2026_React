import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="w-full py-32 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">

        <p className="text-xl font-medium text-stone-500 dark:text-stone-400 mb-6 uppercase tracking-[0.2em]">
          What's Next?
        </p>

        <div className="flex flex-col md:flex-row items-center gap-12 text-2xl md:text-4xl font-bold tracking-tight">

          <a
            href="mailto:daytonng02@gmail.com"
            className="text-stone-400 hover:text-indigo-500 dark:text-stone-500 dark:hover:text-white transition-colors duration-300"
          >
            Email
          </a>

          <span className="hidden md:block w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-700"></span>

          <a
            href="https://github.com/dayton02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-indigo-500 dark:text-stone-500 dark:hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>

          <span className="hidden md:block w-2 h-2 rounded-full bg-stone-300 dark:bg-stone-700"></span>

          <a
            href="https://linkedin.com/in/dayton-ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-indigo-500 dark:text-stone-500 dark:hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>

        </div>

        <div className="mt-32 pt-8 w-full border-t border-stone-200 dark:border-stone-800 flex flex-col md:flex-row items-center justify-between text-sm font-medium text-stone-500 dark:text-stone-500">
          <p>© {new Date().getFullYear()} Dayton Ng. All rights reserved.</p>
          <a href="#" className="hover:text-stone-900 dark:hover:text-white transition-colors">Back to top ↑</a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
