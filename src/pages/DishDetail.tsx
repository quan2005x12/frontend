import { Heart, MapPin, ArrowRight, Leaf, Utensils, Zap, Beef } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { type Ingredient, type RecipeStep } from '../types';

// TODO: Fetch from backend later based on ID
const ingredients: Ingredient[] = [
  { name: 'Thịt bò phi lê', icon: Beef, description: 'Phần thịt mềm nhất của con bò, ít mỡ và giàu sắt.' },
  { name: 'Gừng tươi', icon: Zap, description: 'Gia vị ấm nóng, giúp khử mùi và tăng kích thích vị giác.' },
  { name: 'Hành lá', icon: Leaf, description: 'Thêm sắc xanh và hương thơm nhẹ nhàng cho món ăn.' },
];
const recipeSteps: RecipeStep[] = [
  { step: '01', title: 'Chọn nguyên liệu tươi', desc: 'Lựa chọn các loại gia vị nồng nàn và thịt tươi từ chợ sớm để đảm bảo hương vị di sản.' },
  { step: '02', title: 'Sơ chế & Ướp gia vị', desc: 'Thái lát mỏng và ướp với hỗn hợp nước mắm, tỏi, tiêu. Để thấm trong ít nhất 30 phút.' },
  { step: '03', title: 'Chế biến nhiệt độ cao', desc: 'Sử dụng kỹ thuật áp chảo nhanh để giữ được độ ngọt tự nhiên của nguyên liệu.' },
  { step: '04', title: 'Trình bày & Thưởng thức', desc: 'Bày ra đĩa sứ, thêm ngò rí và tiêu xay. Dùng nóng để cảm nhận trọn vẹn tinh hoa.' },
];

export default function DishDetail() {
  return (
    <div className="space-y-8 md:space-y-12 pb-24">
      {/* Immersive Hero */}
      <section className="relative group">
        <div className="w-full h-[350px] md:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative shadow-2xl">
          <img 
            src="https://picsum.photos/seed/dish-main/1200/800" 
            alt="Dish Detail" 
            className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8">
            <div className="space-y-2 md:space-y-4">
              <span className="micro-label !text-white/60 !mb-0">Khám phá chi tiết</span>
              <h1 className="text-4xl md:text-8xl font-bold text-white tracking-tighter drop-shadow-sm leading-none">Tên Món Ăn</h1>
              <p className="text-white/80 text-lg md:text-2xl font-serif italic">Mô tả ngắn về di sản âm thực</p>
            </div>
            
            <button className="flex items-center gap-3 px-6 md:px-10 py-3 md:py-5 bg-white text-on-surface font-bold rounded-full shadow-2xl hover:bg-primary hover:text-white active:scale-95 transition-all uppercase tracking-widest text-[10px] md:text-xs">
              <Heart size={18} />
              Lưu vào yêu thích
            </button>
          </div>
        </div>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
        {/* Left Column: Story & Ingredients */}
        <div className="lg:col-span-7 space-y-12 md:space-y-16">
          {/* Story Section */}
          <section className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <p className="micro-label">Câu chuyện di sản</p>
              <h2 className="text-3xl md:text-4xl font-bold italic tracking-tight">Mô tả món ăn</h2>
            </div>
            <div className="space-y-4 md:space-y-6 text-lg md:text-xl text-on-surface-variant leading-relaxed font-body">
              <p className="italic">
                Đang tải câu chuyện về món ăn từ kho lưu trữ di sản...
              </p>
            </div>
          </section>

          {/* Main Ingredients */}
          <section className="bg-surface-container-highest p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] space-y-8 md:space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="micro-label">Thành phần</p>
                <h2 className="text-3xl md:text-4xl font-bold italic tracking-tight">Nguyên liệu chính</h2>
              </div>
              <span className="flex items-center w-fit h-fit gap-2 px-6 py-2 bg-white text-primary rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                <Leaf size={14} />
                Tươi ngon & Bản địa
              </span>
            </div>
            
            {ingredients.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {ingredients.map((ing, i) => (
                  <motion.div 
                    key={ing.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="relative group"
                  >
                    <div className="bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-outline/5 text-center space-y-3 md:space-y-4 shadow-sm hover:shadow-xl transition-all h-full cursor-help">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto">
                        <ing.icon size={28} className="text-primary" />
                      </div>
                      <p className="font-bold text-lg md:text-xl text-on-surface leading-snug">{ing.name}</p>
                    </div>

                    {/* Tooltip Content */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-on-surface text-surface p-4 rounded-2xl shadow-2xl text-xs md:text-sm leading-relaxed backdrop-blur-xl border border-white/10">
                        {ing.description}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-on-surface" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-on-surface-variant/40 border-2 border-dashed border-white/50 rounded-2xl md:rounded-3xl font-serif italic">
                Chưa có thông tin nguyên liệu.
              </div>
            )}
          </section>

          {/* Cooking Recipe */}
          <section className="bg-surface-container-low p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] space-y-8 md:space-y-12 relative overflow-hidden">
            <div className="space-y-1 relative z-10">
              <p className="micro-label">Hướng dẫn</p>
              <h2 className="text-3xl md:text-4xl font-bold italic tracking-tight">Công thức chế biến</h2>
            </div>
            
            {recipeSteps.length > 0 ? (
              <motion.div 
                className="space-y-12 md:space-y-16 relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                {/* Vertical line indicator */}
                <div className="absolute left-[1.75rem] md:left-[2.2rem] top-8 bottom-8 w-px bg-outline/10" />
                
                {recipeSteps.map((item) => (
                  <motion.div 
                    key={item.step}
                    variants={{
                      hidden: { opacity: 0, x: -30, scale: 0.95 },
                      visible: { 
                        opacity: 1, 
                        x: 0, 
                        scale: 1, 
                        transition: {
                          type: "spring",
                          damping: 15,
                          stiffness: 100
                        }
                      }
                    }}
                    className="flex gap-6 md:gap-8 group relative z-10"
                  >
                    <div className="flex-shrink-0">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border border-outline/5 shadow-sm flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500"
                      >
                        <span className="text-xl md:text-2xl font-serif font-bold italic">
                          {item.step}
                        </span>
                      </motion.div>
                    </div>
                    <div className="space-y-2 md:space-y-3 pt-1 md:pt-2">
                      <motion.h4 
                        className="text-xl md:text-2xl font-bold text-on-surface group-hover:text-primary transition-colors"
                      >
                        {item.title}
                      </motion.h4>
                      <p className="text-base md:text-lg text-on-surface-variant leading-relaxed font-body max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="py-24 text-center space-y-6 relative z-10">
                <div className="w-20 h-20 bg-surface-container rounded-full flex items-center justify-center mx-auto text-primary/10">
                  <Utensils size={40} />
                </div>
                <div className="space-y-2">
                  <p className="text-xl font-serif italic text-on-surface-variant">
                    Công thức đang được các giả kim thuật sư giải mã...
                  </p>
                  <p className="text-sm text-on-surface-variant/60 font-medium uppercase tracking-widest">
                    Vui lòng quay lại sau
                  </p>
                </div>
              </div>
            )}
            
            {/* Decorative background accent */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          </section>
        </div>

        {/* Right Column: Stats & Map */}
        <div className="lg:col-span-5 space-y-16">
          {/* Nutritional Info */}
          <section className="bg-surface-container-low p-12 rounded-[3rem] space-y-10 border border-outline/5">
            <div className="space-y-1">
              <p className="micro-label">Sức khỏe</p>
              <h3 className="text-3xl font-bold italic tracking-tight">Dinh dưỡng</h3>
            </div>
            
            <div className="space-y-10">
              <div className="flex justify-between items-end">
                <span className="text-on-surface-variant font-bold text-xl">Năng lượng</span>
                <span className="text-5xl font-bold text-on-surface leading-none">
                  --- <span className="text-sm font-normal text-on-surface-variant uppercase tracking-widest ml-1">kcal</span>
                </span>
              </div>
              
              <div className="h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary/20 w-0" />
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-4">
                {[
                  { label: 'Đạm', value: '--g' },
                  { label: 'Tinh bột', value: '--g' },
                  { label: 'Chất béo', value: '--g' },
                ].map(stat => (
                  <div key={stat.label} className="space-y-2">
                    <p className="micro-label tracking-widest">{stat.label}</p>
                    <p className="text-3xl font-bold text-on-surface">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="flex flex-col h-fit bg-surface-container-highest rounded-[3rem] overflow-hidden shadow-2xl group border border-outline/10">
            <div className="h-72 relative bg-outline-variant/30 overflow-hidden">
              <img 
                src="https://picsum.photos/seed/location/600/400" 
                alt="Map"
                className="w-full h-full object-cover mix-blend-multiply opacity-50 transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl pulse-animation">
                  <MapPin size={32} className="text-primary" />
                </div>
              </div>
            </div>
            
            <div className="p-12 space-y-8">
              <div className="space-y-4">
                <h4 className="text-3xl font-bold italic tracking-tight">Tìm kiếm quán ngon</h4>
                <p className="text-on-surface-variant text-lg leading-relaxed font-body">
                  Hệ thống đang tìm kiếm các địa điểm phục vụ món ăn này quanh khu vực của bạn.
                </p>
              </div>
              
              <button className="w-full bg-on-surface text-white py-6 rounded-full font-bold text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-primary transition-all active:scale-95 flex items-center justify-center gap-4">
                Tìm nhà hàng gần đây
                <ArrowRight size={20} />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function VerifiedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}
