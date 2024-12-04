// components/LanguageSwitcher.tsx
'use client';

const locales = [
  { code: 'de', label: 'DE' },
  { code: 'fr', label: 'FR'},
  { code: 'en', label: 'EN' },
];

export default function LanguageSwitcher() {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = event.target.value;
    const currentPath = window.location.pathname.split('/').slice(2).join('/'); // Remove current locale from path
    window.location.href = `/${selectedLocale}/${currentPath}`;
  };

  return (
    <select
      onChange={handleChange}
      defaultValue={typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : 'en'}
      className="rounded-md border border-none px-0 py-1 text-sm bg-['#212121']"
    >
      {locales.map((locale) => (
        <option key={locale.code} value={locale.code}>
          {locale.label}
        </option>
      ))}
    </select>
  );
}
