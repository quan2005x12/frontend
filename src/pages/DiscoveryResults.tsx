import { Sparkles, ArrowRight, Upload, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { type DishMatch } from '../types';

// TODO: Fetch from backend later
const matches: DishMatch[] = [];

export default function DiscoveryResults() {
  return (
    <div className="space-y-12">
      {/* Analysis Header */}
      <section className="bg-surface-container-low rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-outline-variant/5">
        <div className="relative group">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shadow-sm border-4 border-surface ring-1 ring-outline/5 transition-transform duration-500 group-hover:scale-105">
            <img 
              src="https://picsum.photos/seed/culinary/400/400" 
              alt="Uploaded dish" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            Gốc
          </span>
        </div>
        
        <div className="text-center md:text-left space-y-2">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Đang phân tích món ăn của bạn...</h1>
          <p className="text-on-surface-variant max-w-xl text-lg leading-relaxed font-serif italic">
            Hệ thống Alchemist AI đang giải mã các tầng hương vị và nguyên liệu từ hình ảnh của bạn.
          </p>
        </div>
      </section>

      {/* Results Section */}
      <section className="space-y-12">
        <div className="flex flex-col items-center text-center space-y-4 border-b border-outline/10 pb-8">
          <p className="micro-label">Kết quả phân tích</p>
          <h2 className="text-4xl font-bold flex items-center gap-3">
            <Sparkles size={28} className="text-primary" />
            Các món ăn tương tự
          </h2>
          <span className="text-xs font-bold bg-surface-container-highest px-6 py-2 rounded-full uppercase tracking-[0.2em] text-on-surface-variant">
            {matches.length} Món ăn được tìm thấy
          </span>
        </div>

        {matches.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {matches.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link to="/detail" className="block space-y-6 text-center">
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-surface-container-low shadow-xl group-hover:shadow-2xl transition-all duration-700">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 right-6">
                      <span className="px-5 py-2 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-full shadow-2xl backdrop-blur-sm bg-opacity-90">
                        Độ khớp {item.match}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 px-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-on-surface group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-on-surface-variant font-serif italic line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 border border-outline/20 text-[9px] font-bold uppercase tracking-wider rounded-full text-on-surface/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center space-y-4 border-2 border-dashed border-outline/10 rounded-[3rem] bg-surface-container-lowest">
            <div className="inline-flex w-20 h-20 bg-surface-container rounded-full items-center justify-center text-primary/20">
              <Sparkles size={40} />
            </div>
            <p className="text-xl font-serif italic text-on-surface-variant">Vui lòng tải ảnh lên để bắt đầu giải mã di sản ẩm thực.</p>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="pt-12 flex flex-col items-center gap-8">
        <p className="text-on-surface-variant font-medium flex items-center gap-2">
          <Info size={18} />
          Không phải món bạn đang tìm?
        </p>
        <Link 
          to="/"
          className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-2xl font-bold text-lg flex items-center gap-3 shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          <Upload size={20} />
          Tải lên ảnh khác
        </Link>
      </section>
    </div>
  );
}
