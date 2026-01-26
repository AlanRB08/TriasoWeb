import React, { useState, useEffect } from "react";

interface Slide {
  img: { src: string };
  titulo?: string;
  texto?: string;
}

interface SliderProps {
  slides: Slide[];
  autoSlide?: boolean;
  interval?: number;
  showText?: boolean;
}

const MiniGallery: React.FC<SliderProps> = ({
  slides,
  autoSlide = true,
  interval = 5000,
  showText = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (!autoSlide) return;
    const id = setInterval(nextSlide, interval);
    return () => clearInterval(id);
  }, [slides.length, interval, autoSlide]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    if (distance < -minSwipeDistance) prevSlide();
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="relative">
        <div 
          className="relative w-full overflow-hidden rounded-2xl shadow-sm"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 relative">
                <div className="aspect-video md:aspect-[21/9] w-full">
                  <img
                    src={slide.img.src}
                    alt={slide.titulo || `slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {showText && (slide.titulo || slide.texto) && (
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 text-white p-4 max-w-sm rounded-xl bg-blueMain/80 backdrop-blur-md">
                    {slide.titulo && (
                      <h2 className="text-sm md:text-lg font-bold mb-1 leading-tight">
                        {slide.titulo}
                      </h2>
                    )}
                    {slide.texto && (
                      <p className="text-xs md:text-sm opacity-90 leading-relaxed">
                        {slide.texto}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex absolute -bottom-14 right-0 items-center gap-3 z-30">
          <button 
            onClick={prevSlide} 
            className="p-2.5 bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50 transition active:scale-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button 
            onClick={nextSlide} 
            className="p-2.5 bg-white border border-gray-200 rounded-full shadow-md hover:bg-gray-50 transition active:scale-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center space-x-2 mt-8 md:mt-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index 
                ? "w-8 h-1.5 bg-blueMain" 
                : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniGallery;