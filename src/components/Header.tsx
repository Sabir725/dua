import { useTranslation } from 'react-i18next';
import { Search, Languages, Menu, X } from 'lucide-react';
import ThemeSelector from './ThemeSelector';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({ searchQuery, setSearchQuery }: HeaderProps) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'ur', name: 'اردو' },
    { code: 'tr', name: 'Türkçe' },
  ];

  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-bottom border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
              <span className="text-xl font-bold font-arabic">ن</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-primary hidden sm:block">
              {t('appName')}
            </h1>
          </div>

          <div className="flex-1 max-w-md mx-8 hidden md:block">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary opacity-40 group-focus-within:opacity-100 transition-opacity" size={18} />
              <input
                type="text"
                placeholder={t('searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-primary/5 border border-primary/10 rounded-2xl py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <ThemeSelector />
              <div className="h-6 w-[1px] bg-primary/10 mx-2"></div>
              <div className="relative group">
                <button className="p-2 hover:bg-primary/5 rounded-full text-primary transition-colors flex items-center gap-1.5">
                  <Languages size={20} />
                  <span className="text-xs font-bold uppercase">{i18n.language.split('-')[0]}</span>
                </button>
                <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-background border border-primary/10 rounded-2xl shadow-xl p-2 min-w-[120px]">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 rounded-xl text-sm transition-colors ${
                          i18n.language.startsWith(lang.code) ? 'bg-primary text-primary-foreground' : 'hover:bg-primary/5'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-primary/10 bg-background overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary opacity-40" size={18} />
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-primary/5 border border-primary/10 rounded-xl py-3 pl-10 pr-4 focus:outline-none"
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-sm font-medium text-primary">{t('theme')}</span>
                <ThemeSelector />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-primary/50 uppercase px-2 mb-2 tracking-widest">{t('language')}</p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-3 rounded-xl flex justify-between items-center transition-colors ${
                      i18n.language.startsWith(lang.code) ? 'bg-primary/10 text-primary font-bold' : 'hover:bg-primary/5'
                    }`}
                  >
                    {lang.name}
                    {i18n.language.startsWith(lang.code) && <div className="w-1.5 h-1.5 bg-primary rounded-full" />}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
