const contacts = [
  {
    href: 'mailto:ehgns79513@gmail.com',
    label: 'Email',
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"/>
        <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/hodoon',
    label: 'GitHub',
    external: true,
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.602-3.369-1.34-3.369-1.34-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.635-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.446-1.27.098-2.645 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 5.348c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.375.201 2.392.098 2.645.64.698 1.03 1.591 1.03 2.682 0 3.842-2.337 4.687-4.566 4.935.359.308.678.92.678 1.85 0 1.338-.012 2.419-.012 2.746 0 .268.18.58.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/dohoon-yoon-ab223335a/',
    label: 'LinkedIn',
    external: true,
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-1.002-.018-2.29-1.394-2.29-1.396 0-1.611 1.09-1.611 2.218v4.25H7.39V7.39h2.56v1.17h.036c.355-.675 1.22-1.394 2.524-1.394 2.7 0 3.198 1.778 3.198 4.091v5.081zM4.668 5.88h.018C5.6 5.88 6.2 5.24 6.2 4.39C6.2 3.53 5.61 2.9 4.69 2.9c-.92 0-1.52.62-1.52 1.48s.6 1.5 1.5 1.5zM3.38 7.39h2.58v8.948H3.38V7.39zM18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" clipRule="evenodd"/>
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/c.hoon_3481',
    label: 'Instagram',
    external: true,
    icon: (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <footer id="contact" className="mt-12 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">Contact</h2>
          <p className="text-slate-500 dark:text-slate-400">언제든지 연락주세요.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {contacts.map(({ href, label, icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="flex flex-col items-center gap-2 px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-transparent hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors group"
            >
              <span className="text-slate-500 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {icon}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200">
                {label}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-12 text-center text-xs text-slate-500 dark:text-slate-600">
          &copy; 2026 Dohoon Yoon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
