export default function SectionHeader({ label, title, description }) {
  return (
    <div className="mb-14 text-center">
      <p className="text-sm font-semibold tracking-widest text-indigo-500 dark:text-indigo-400 uppercase mb-2">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-slate-500 dark:text-slate-400">{description}</p>
      )}
    </div>
  );
}
