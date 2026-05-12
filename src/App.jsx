import { useDarkMode } from './hooks/useDarkMode';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Awards from './components/Awards';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div className="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200 transition-colors duration-300">
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <main className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Skills />
        <Projects />
        <Activities />
        <Awards />
        <Education />
      </main>
      <Contact />
    </div>
  );
}
