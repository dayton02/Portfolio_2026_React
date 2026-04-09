import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-900 bg-[#f4f4f4] min-h-screen antialiased selection:bg-black selection:text-white font-sans">
      
      <div className="container mx-auto px-6 md:px-12 relative min-h-[100svh]">
        <Navbar />
        <main>
          <Hero />
          <FeaturedProjects />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App;