'use client';

import { useTheme } from '@/contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  if (theme === undefined) {
    return <div className="h-9 w-9" aria-hidden="true" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-fit items-center justify-center rounded-md border border-gray-200 bg-white px-2 transition-colors hover:bg-gray-100 dark:border-gray-800 dark:bg-black dark:hover:bg-gray-900"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? 'LIGHT' : 'DARK'}
    </button>
  );
}
