import { Palette, Sun, Moon, Coffee } from 'lucide-react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'sepia';

export default function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2 bg-primary/5 p-1 rounded-full border border-primary/10">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-primary hover:bg-primary/10'}`}
        title="Light Mode"
      >
        <Sun size={18} />
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-primary hover:bg-primary/10'}`}
        title="Dark Mode"
      >
        <Moon size={18} />
      </button>
      <button
        onClick={() => setTheme('sepia')}
        className={`p-2 rounded-full transition-all ${theme === 'sepia' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-primary hover:bg-primary/10'}`}
        title="Sepia Mode"
      >
        <Coffee size={18} />
      </button>
    </div>
  );
}
