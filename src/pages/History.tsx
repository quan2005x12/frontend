import { ChevronRight, Trash2, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { type HistoryGroup } from '../types';

// TODO: Fetch from backend later
const historyItems: HistoryGroup[] = [];

export default function History() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <p className="micro-label">Kho lưu trữ</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Lịch sử khám phá</h1>
        <p className="text-on-surface-variant max-w-xl text-lg font-serif italic">
          Nơi lưu giữ những hành trình giải mã ẩm thực và các công thức di sản mà bạn đã tìm thấy.
        </p>
      </section>

      <div className="space-y-12">
        {historyItems.length > 0 ? historyItems.map((group, groupIndex) => (
          <section key={group.date} className="space-y-8">
            <div className="flex items-center gap-6">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                {group.date}
              </span>
              <div className="h-px flex-grow bg-outline/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {group.items.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (groupIndex * 0.2) + (itemIndex * 0.1) }}
                >
                  <Link 
                    to="/detail"
                    className="group flex items-center gap-8 p-6 rounded-[2rem] bg-surface-container-low hover:bg-white hover:shadow-2xl transition-all duration-500 border border-outline/5 active:scale-[0.98]"
                  >
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-[1.5rem] overflow-hidden shadow-lg">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="flex-grow space-y-3">
                      <h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-on-surface-variant font-serif italic op-80">
                        Đã nhận diện lúc {item.time}
                      </p>
                      <div className="flex gap-2">
                        {item.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 border border-outline/10 rounded-full text-[9px] font-bold uppercase tracking-widest text-on-surface/40">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-primary/20 group-hover:text-primary transition-colors">
                      <ChevronRight size={28} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        )) : (
          <div className="py-24 flex flex-col items-center justify-center space-y-6 border-2 border-dashed border-outline/10 rounded-[3rem] bg-surface-container-low/30">
            <div className="w-24 h-24 bg-surface-container-high rounded-full flex items-center justify-center text-primary/10">
              <Calendar size={48} />
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Chưa có lịch sử</h3>
              <p className="text-on-surface-variant font-serif italic">Hãy bắt đầu hành trình khám phá ẩm thực đầu tiên của bạn.</p>
            </div>
            <Link to="/" className="px-10 py-4 bg-on-surface text-white rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-primary transition-all">
              Bắt đầu ngay
            </Link>
          </div>
        )}
      </div>

      {historyItems.length > 0 && (
        <div className="pt-12 flex justify-center">
          <button className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors px-12 py-4 rounded-full border border-outline/20 font-bold text-[10px] uppercase tracking-[0.2em] shadow-sm hover:shadow-xl group">
            <Trash2 size={16} className="group-hover:rotate-12 transition-transform" />
            Xóa toàn bộ lịch sử
          </button>
        </div>
      )}
    </div>
  );
}
