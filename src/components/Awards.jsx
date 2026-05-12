import { useEffect, useRef } from 'react';
import { awards, patent } from '../data/portfolio';
import SectionHeader from './SectionHeader';

const badgeClassMap = {
  gold:   'badge-gold',
  silver: 'badge-silver',
  bronze: 'badge-bronze',
  best:   'badge-best',
};

const prizeColorMap = {
  best:   'text-indigo-600 dark:text-indigo-400',
  gold:   'text-amber-600  dark:text-amber-400',
  silver: 'text-slate-500  dark:text-slate-400',
  bronze: 'text-amber-600  dark:text-amber-400',
};

export default function Awards() {
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
    <section id="awards" ref={ref} className="py-16 md:py-24 fade-in">
      <SectionHeader label="Achievements" title="Awards & Patent" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">🏆</span> Award
          </h3>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <span className={`flex-shrink-0 h-9 w-9 rounded-xl ${badgeClassMap[award.type]} flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                  {award.badge}
                </span>
                <div>
                  <p className="text-xs text-slate-400 mb-0.5">{award.date}</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{award.title}</p>
                  <p className={`text-xs font-semibold mt-0.5 ${prizeColorMap[award.type]}`}>{award.prize}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="text-2xl">📜</span> Patent
          </h3>
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-400">
                {patent.status}
              </span>
              <span className="text-xs text-slate-400">{patent.date}</span>
            </div>
            <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
              {patent.title}
            </p>
            <p className="mt-3 text-xs text-slate-400 font-mono">{patent.number}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
