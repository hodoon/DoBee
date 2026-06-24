import { useEffect, useRef } from 'react';
import { projects } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const tagColorMap = {
  indigo:  'bg-indigo-50  text-indigo-700  dark:bg-indigo-950/60  dark:text-indigo-300',
  green:   'bg-green-50   text-green-700   dark:bg-green-950/60   dark:text-green-300',
  orange:  'bg-orange-50  text-orange-700  dark:bg-orange-950/60  dark:text-orange-300',
  blue:    'bg-blue-50    text-blue-700    dark:bg-blue-950/60    dark:text-blue-300',
  slate:   'bg-slate-100  text-slate-700   dark:bg-slate-800      dark:text-slate-300',
  cyan:    'bg-cyan-50    text-cyan-700    dark:bg-cyan-950/60    dark:text-cyan-300',
  red:     'bg-red-50     text-red-700     dark:bg-red-950/60     dark:text-red-300',
  yellow:  'bg-yellow-50  text-yellow-700  dark:bg-yellow-950/60  dark:text-yellow-300',
  teal:    'bg-teal-50    text-teal-700    dark:bg-teal-950/60    dark:text-teal-300',
  purple:  'bg-purple-50  text-purple-700  dark:bg-purple-950/60  dark:text-purple-300',
};

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
  </svg>
);

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-slate-900 transition-all duration-300 hover:-translate-y-1.5">
      <div className="relative overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
          onError={e => { e.currentTarget.src = `https://placehold.co/600x400/${project.fallbackColor}/ffffff?text=${project.fallbackText}`; }}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="flex-1 p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag.label}
              className={`px-2.5 py-1 rounded-full text-xs font-medium ${tagColorMap[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors"
        >
          GitHub 바로가기 <ArrowIcon />
        </a>
        <a
          href={project.notion}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
        >
          Notion 바로가기 <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-16 md:py-24 fade-in">
      <SectionHeader label="Portfolio" title="Projects" description="지금까지 진행한 주요 프로젝트입니다." />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
