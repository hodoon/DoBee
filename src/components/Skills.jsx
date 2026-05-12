import { useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const categories = [
  { key: 'backend',  label: 'Backend',       labelColor: 'text-indigo-500' },
  { key: 'database', label: 'Database',      labelColor: 'text-cyan-500' },
  { key: 'tools',    label: 'Tools',         labelColor: 'text-slate-500' },
  { key: 'infra',    label: 'Infra / Cloud', labelColor: 'text-orange-500' },
];

function SkillCard({ name, icon, invertOnDark }) {
  return (
    <div className="flex flex-col items-center gap-2 px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-28 transition-transform duration-200 hover:-translate-y-1">
      <img
        src={icon}
        alt={name}
        className={`h-9 w-9${invertOnDark ? ' dark:invert' : ''}`}
      />
      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 text-center">{name}</span>
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-16 md:py-24 fade-in">
      <SectionHeader label="Tech Stack" title="Skills" />

      <div className="space-y-10">
        {categories.map(({ key, label, labelColor }) => (
          <div key={key} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <h3 className={`text-sm font-bold tracking-widest uppercase mb-6 ${labelColor}`}>{label}</h3>
            <div className="flex flex-wrap gap-4">
              {skills[key].map(skill => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
