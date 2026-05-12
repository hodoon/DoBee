import { useEffect, useRef } from 'react';

export default function Hero() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      textRef.current?.classList.add('visible');
      imgRef.current?.classList.add('visible');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="hero-bg min-h-[calc(100vh-72px)] flex items-center py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row md:items-center">

          <div ref={textRef} className="flex-1 text-center md:text-left fade-in">
            <p className="text-sm font-semibold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-4">
              Backend Developer
            </p>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-slate-900 dark:text-white">윤도훈</span><br />
              <span className="gradient-text">Dohoon Yoon</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl">
              기초를 단단히, 성장 속도는 빠르게.<br />
              클린한 코드와 효율적인 시스템 구축을 지향하는 백엔드 개발자입니다.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a
                href="mailto:ehgns79513@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-500 transition-colors"
              >
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"/>
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"/>
                </svg>
                이메일 보내기
              </a>
              <a
                href="https://github.com/hodoon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 dark:bg-slate-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors"
              >
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.602-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.645 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 5.348c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.375.201 2.392.098 2.645.64.698 1.03 1.591 1.03 2.682 0 3.842-2.337 4.687-4.566 4.935.359.308.678.92.678 1.85 0 1.338-.012 2.419-.012 2.746 0 .268.18.58.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
                </svg>
                GitHub
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                프로젝트 보기
                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </a>
            </div>
          </div>

          <div ref={imgRef} className="flex-shrink-0 fade-in">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 blur-2xl opacity-30 scale-110 animate-pulse" />
              <img
                className="relative h-44 w-44 rounded-full object-cover ring-4 ring-white dark:ring-slate-800 shadow-2xl md:h-56 md:w-56"
                src="/profile.jpg"
                alt="윤도훈 프로필 이미지"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
