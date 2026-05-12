import { useEffect, useRef } from 'react';
import { activities } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const dotColorMap = {
  indigo: 'bg-indigo-600',
  violet: 'bg-violet-600',
};

const textColorMap = {
  indigo: 'text-indigo-500 dark:text-indigo-400',
  violet: 'text-violet-500 dark:text-violet-400',
};

export default function Activities() {
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
    <section id="activities" ref={ref} className="py-16 md:py-24 fade-in">
      <SectionHeader label="Experience" title="Activities" />

      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-4 top-2 bottom-2 w-0.5 timeline-line rounded-full" />

        <div className="space-y-8 pl-12">
          {activities.map((activity, index) => (
            <div key={index} className="relative">
              <div className={`absolute -left-[2.875rem] top-1.5 h-4 w-4 rounded-full ring-4 ring-white dark:ring-slate-950 ${dotColorMap[activity.color]}`} />
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <p className={`text-xs font-semibold mb-1 ${textColorMap[activity.color]}`}>
                  {activity.period}
                </p>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{activity.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{activity.role}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
