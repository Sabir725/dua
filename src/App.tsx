import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import './translations/i18n';
import Header from './components/Header';
import DuaCard from './components/DuaCard';
import { DUAS, CATEGORIES } from './data/duas';
import { Filter, Star, Search } from 'lucide-react';

export default function App() {
  const { t, i18n } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categorySearch, setCategorySearch] = useState('');

  const filteredCategories = useMemo(() => {
    return CATEGORIES.filter(cat => 
      cat.toLowerCase().includes(categorySearch.toLowerCase())
    );
  }, [categorySearch]);

  const filteredDuas = useMemo(() => {
    return DUAS.filter((dua) => {
      const matchesSearch = 
        dua.arabic.includes(searchQuery) ||
        dua.translations.en?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dua.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || dua.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const currentLang = i18n.language.split('-')[0];
  const isRtl = currentLang === 'ur' || currentLang === 'ar';

  return (
    <div className={`min-h-screen pb-20 selection:bg-primary/20 ${isRtl ? 'font-arabic' : ''}`}>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Category Filter */}
          <aside className="lg:w-72 space-y-6">
            <div className="bg-secondary/20 p-6 rounded-[2.5rem] border border-primary/5 sticky top-28 max-h-[calc(100vh-160px)] flex flex-col">
              <div className="mb-6">
                <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary/40 flex items-center gap-2 mb-4">
                  <Filter size={14} />
                  {t('categories')}
                </h2>
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-primary transition-colors" size={14} />
                  <input
                    type="text"
                    placeholder="Filter types..."
                    value={categorySearch}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    className="w-full bg-primary/5 border border-primary/10 rounded-xl py-2 pl-9 pr-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar space-y-1">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center justify-between group ${
                    selectedCategory === null ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20' : 'hover:bg-primary/5 text-foreground/70'
                  }`}
                >
                  {t('allDuas')}
                  <Star size={14} className={`opacity-40 group-hover:opacity-100 transition-opacity ${selectedCategory === null ? 'fill-current' : ''}`} />
                </button>
                {filteredCategories.map((cat) => {
                  const hasDuas = DUAS.some(d => d.category === cat);
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center justify-between group ${
                        selectedCategory === cat ? 'bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20' : 'hover:bg-primary/5 text-foreground/70'
                      } ${!hasDuas ? 'opacity-40 grayscale-sm' : ''}`}
                    >
                      <span className="truncate">{cat}</span>
                      {hasDuas && (
                        <div className={`w-1.5 h-1.5 rounded-full transition-all shrink-0 ml-2 ${selectedCategory === cat ? 'bg-primary-foreground' : 'bg-primary/20 group-hover:bg-primary opacity-0 group-hover:opacity-100'}`} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Offline Support Notice */}
            <div className="bg-accent/5 p-6 rounded-3xl border border-accent/10">
              <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-2">Offline Mode</p>
              <p className="text-xs text-foreground/60 leading-relaxed">
                All content is stored locally. You can use this app even without an internet connection.
              </p>
            </div>
          </aside>

          {/* Main Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-12 pb-24">
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredDuas.length > 0 ? (
                  filteredDuas.map((dua) => (
                    <DuaCard key={dua.id} dua={dua} />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full py-20 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto text-primary/40">
                      <Search size={32} />
                    </div>
                    <p className="text-foreground/50 font-medium">{t('noResults')}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* Decorative footer element */}
      <footer className="mt-auto py-12 flex flex-col items-center gap-4 opacity-30">
        <div className="w-px h-12 bg-primary/30"></div>
        <div className="font-arabic text-2xl text-primary">نورِ دعا</div>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Nur Al-Dua</p>
      </footer>
    </div>
  );
}
