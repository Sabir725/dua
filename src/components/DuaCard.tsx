import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Dua } from '../data/duas';
import { Book, Copy, Share2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface DuaCardProps {
  dua: Dua;
  key?: string | number;
}

export default function DuaCard({ dua }: DuaCardProps) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language.split('-')[0];

  const handleCopy = () => {
    const text = `${dua.arabic}\n\n${dua.translations[currentLang] || dua.translations['en']}\n\nSource: ${dua.source}`;
    navigator.clipboard.writeText(text);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-secondary/30 border border-primary/10 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col xl:flex-row min-h-[400px]"
    >
      {/* Video Section */}
      <div className="xl:w-1/2 bg-black relative flex items-center justify-center min-h-[300px]">
        {dua.youtubeId ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${dua.youtubeId}?modestbranding=1&rel=0`}
            title={dua.source}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="flex flex-col items-center gap-4 text-primary/40">
            <Book size={64} className="opacity-20" />
            <p className="text-xs font-bold uppercase tracking-widest">Video Pending</p>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="xl:w-1/2 p-8 flex flex-col justify-between relative">
        <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
          <Book size={80} />
        </div>

        <div>
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-primary bg-primary/10 px-4 py-1.5 rounded-full">
              {dua.category}
            </span>
            <div className="flex gap-2">
              <button 
                onClick={handleCopy}
                className="p-2.5 hover:bg-primary/5 rounded-full transition-colors text-primary border border-primary/5"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <p className="arabic-text text-3xl md:text-5xl leading-[1.6] text-right text-foreground font-arabic">
              {dua.arabic}
            </p>

            {dua.transliteration && (
              <p className="text-sm font-medium italic text-primary/60 leading-relaxed max-w-md ml-auto text-right">
                {dua.transliteration}
              </p>
            )}

            <div className="pt-6 border-t border-primary/5">
              <p className="text-lg leading-relaxed text-foreground/80 font-medium">
                {dua.translations[currentLang] || dua.translations['en']}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 flex items-center gap-3 text-[10px] font-black text-accent uppercase tracking-[0.2em]">
          <span className="w-8 h-[2px] bg-accent/20"></span>
          {dua.source}
        </div>
      </div>
    </motion.div>
  );
}
