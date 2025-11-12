import React, { useState, useEffect } from 'react';

interface Slide {
  img: { src: string }; // si usas imágenes importadas con Webpack/Vite
  titulo?: string;
  texto?: string;
}

interface SliderProps {
  slides: Slide[];
  autoSlide?: boolean;
  interval?: number;
  heightClass?: string;
  showText?: boolean;
}

const MiniGallery: React.FC<SliderProps> = ({
  slides,
  autoSlide = true,
  interval = 5000,
  heightClass = 'h-[200px] md:h-[300px]',
  showText = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval, autoSlide]);

  return (
    <div className='relative w-full max-w-7xl mx-auto px-8'>
      {/* Botones Mobil*/}
      <button
                aria-label="Previous"
                className="block md:hidden h-[200px] absolute right-0 top-0 bg-transparent p-1 rounded-full text-xs z-20"
                onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
            >
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#393939"><path d="M9 6L15 12L9 18" stroke="#393939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
            <button
                aria-label="Next"
                className="block md:hidden absolute left-0 top-0 h-[200px] bg-transparent p-1 rounded-full text-xs z-20"
                onClick={() =>
                    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
                    }
            >
                <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 6L9 12L15 18" stroke="#393939" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </button>
        <div className="relative w-full overflow-hidden mt-4">
          <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 relative rounded-xl">
                  <img
                    src={slide.img.src}
                    alt={`slide-${index}`}
                    className={`w-full object-cover ${heightClass} px-8`}
                  />
                  {showText && (
                    <div className="absolute top-4 left-4 text-white p-4 max-w-sm rounded-md bg-blueMain bg-opacity-80">
                      {slide.titulo && (
                        <h2 className="text-sm md:text-lg font-semibold mb-1">{slide.titulo}</h2>
                      )}
                      {slide.texto && (
                        <p className="text-xs md:text-sm">{slide.texto}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className='w-full relative my-3'>
            {/* Indicadores */}
            <div className="flex w-full justify-center space-x-6 mt-3">
                {slides.map((_, index) => (
                <div
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                    currentSlide === index ? 'bg-blueMain' : 'bg-white opacity-50'
                    }`}
                />
                ))}
            </div>
            <div className='absolute right-20 hidden md:block'>
                {/* Botones Desktop*/}
                <button
                    aria-label="Previous"
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-grisSubP hover:bg-[#BDBDBD] p-1 rounded-full text-xs"
                    onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
                >
                    <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 6L15 12L9 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
                <button
                    aria-label="Next"
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-grisSubP hover:bg-[#BDBDBD] p-1 rounded-full text-xs"
                    
                    onClick={() =>
                        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
                        }
                >
                    <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 6L9 12L15 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
            </div>
        </div>   
    </div>
    
    
  );
};

export default MiniGallery;
