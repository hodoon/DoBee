import { useEffect, useRef } from 'react';
import { education } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const statusColorMap = {
  slate:  'bg-slate-100  text-slate-600  dark:bg-slate-800      dark:text-slate-400',
  indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60  dark:text-indigo-400',
};

const GraduationIcon = () => (
  <svg className="h-7 w-7 text-indigo-600 dark:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"/>
    <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"/>
  </svg>
);

export default function Education() {
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
    <section id="education" ref={ref} className="py-16 md:py-24 fade-in">
      <SectionHeader label="Academic Background" title="Education" />

      <div className="max-w-2xl mx-auto space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="flex items-start gap-6 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 flex items-center justify-center">
              <GraduationIcon />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold w-fit ${statusColorMap[edu.statusColor]}`}>
                  {edu.status}
                </span>
              </div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">{edu.degree}</p>
              <p className="mt-2 text-xs text-slate-400">{edu.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
