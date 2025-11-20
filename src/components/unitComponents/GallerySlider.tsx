// components/ImageSlider.tsx
<<<<<<< HEAD
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
=======
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff

export type Slide = {
  image: string;
  caption: string;
};

type ImageSliderProps = {
  slides: Slide[];
  visibleThumbs?: number;
};

<<<<<<< HEAD
export default function GallerySlider({
  slides,
  visibleThumbs = 5,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
=======
export default function GallerySlider({ slides, visibleThumbs = 5 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(0);

  const toggleFullscreen = () => {
    if (!fullscreenRef.current) return;

    if (!document.fullscreenElement) {
<<<<<<< HEAD
      fullscreenRef.current.requestFullscreen().catch((err) => {
=======
      fullscreenRef.current.requestFullscreen().catch(err => {
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
        console.error(`Error al activar pantalla completa: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
<<<<<<< HEAD
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
=======
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
    };
  }, []);

  const getVisibleThumbRange = () => {
    let start = Math.max(0, currentIndex - Math.floor(visibleThumbs / 2));
    const end = Math.min(slides.length - 1, start + visibleThumbs - 1);
    if (end === slides.length - 1) {
      start = Math.max(0, end - visibleThumbs + 1);
    }
    return { start, end };
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
<<<<<<< HEAD
      setDirection("left");
=======
      setDirection('left');
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < slides.length - 1) {
<<<<<<< HEAD
      setDirection("right");
=======
      setDirection('right');
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
<<<<<<< HEAD
    setDirection(index > currentIndex ? "right" : "left");
=======
    setDirection(index > currentIndex ? 'right' : 'left');
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
    setCurrentIndex(index);
    scrollThumbIntoView(index);
  };

  const scrollThumbIntoView = (index: number) => {
    if (thumbsRef.current) {
      const thumb = thumbsRef.current.children[index] as HTMLElement;
      if (thumb) {
        thumbsRef.current.scrollTo({
<<<<<<< HEAD
          left:
            thumb.offsetLeft -
            thumbsRef.current.offsetWidth / 2 +
            thumb.offsetWidth / 2,
          behavior: "smooth",
=======
          left: thumb.offsetLeft - thumbsRef.current.offsetWidth / 2 + thumb.offsetWidth / 2,
          behavior: 'smooth'
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
        });
      }
    }
  };

  useEffect(() => {
    if (!imageRef.current || prevIndexRef.current === currentIndex) return;

    const imageElement = imageRef.current;
<<<<<<< HEAD
    const fromX = direction === "right" ? "100%" : "-100%";
=======
    const fromX = direction === 'right' ? '100%' : '-100%';
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff

    gsap.set(imageElement, { x: fromX, opacity: 0 });
    gsap.to(imageElement, {
      x: 0,
      opacity: 1,
      duration: 0.5,
<<<<<<< HEAD
      ease: "power2.out",
=======
      ease: "power2.out"
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
    });

    prevIndexRef.current = currentIndex;
    scrollThumbIntoView(currentIndex);

    return () => {
      gsap.killTweensOf(imageElement);
    };
  }, [currentIndex, direction]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
<<<<<<< HEAD
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape" && isFullscreen) toggleFullscreen();
      if (e.key === "f") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
=======
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'Escape' && isFullscreen) toggleFullscreen();
      if (e.key === 'f') toggleFullscreen();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
  }, [currentIndex, isFullscreen]);

  const { start: thumbStart, end: thumbEnd } = getVisibleThumbRange();

  return (
<<<<<<< HEAD
    <div className="w-full px-8">
      {/* Vista normal */}
      <div
        className={`w-full mx-auto my-16 bg-white p-4 rounded shadow max-w-5xl ${
          isFullscreen ? "hidden" : "block"
        }`}
=======
    <>
      {/* Vista normal */}
      <div 
        className={`w-full my-16 bg-white p-4 rounded shadow max-w-5xl mx-auto ${isFullscreen ? 'hidden' : 'block'}`} 
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
        ref={sliderRef}
      >
        {/* Título */}
        <h2 className="text-center text-base font-thin text-grisPPP mb-4">
          {slides[currentIndex].caption}
        </h2>

        {/* Contenedor principal de la imagen */}
        <div className="relative flex items-center justify-center min-h-[400px] overflow-hidden">
          {/* Botón anterior */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="absolute left-0 z-10 p-2 text-red-600 text-3xl font-bold hover:scale-110 transition disabled:opacity-20"
            aria-label="Slide anterior"
          >
            ‹
          </button>

          {/* Imagen principal */}
          <div className="w-full flex justify-center">
            <img
              ref={imageRef}
              src={slides[currentIndex].image}
              alt={`Slide ${currentIndex + 1}`}
              className="max-h-[400px] object-contain mx-auto"
            />
          </div>

          {/* Botón siguiente */}
          <button
            onClick={goToNext}
            disabled={currentIndex === slides.length - 1}
            className="absolute right-0 z-10 p-2 text-red-600 text-3xl font-bold hover:scale-110 transition disabled:opacity-20"
            aria-label="Slide siguiente"
          >
            ›
          </button>
        </div>

        {/* Thumbnails */}
        <div className="mt-6 relative">
<<<<<<< HEAD
          <div
            ref={thumbsRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
=======
          <div 
            ref={thumbsRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none' }}
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
          >
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 snap-start focus:outline-none transition rounded-md p-0.5 ${
                  currentIndex === index
<<<<<<< HEAD
                    ? "border-2 border-blue-600"
                    : "border-2 border-transparent opacity-60 hover:opacity-100"
=======
                    ? 'border-2 border-blue-600'
                    : 'border-2 border-transparent opacity-60 hover:opacity-100'
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
                }`}
                aria-label={`Ir al slide ${index + 1}`}
              >
                <img
                  src={slide.image}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-20 w-auto object-cover"
                />
              </button>
            ))}
          </div>
<<<<<<< HEAD

=======
          
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
          {/* Flechas de navegación para thumbnails */}
          {slides.length > visibleThumbs && (
            <>
              <button
                onClick={() => goToSlide(Math.max(0, currentIndex - 1))}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white disabled:opacity-30"
                aria-label="Scroll thumbnails izquierda"
              >
                ‹
              </button>
              <button
<<<<<<< HEAD
                onClick={() =>
                  goToSlide(Math.min(slides.length - 1, currentIndex + 1))
                }
=======
                onClick={() => goToSlide(Math.min(slides.length - 1, currentIndex + 1))}
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
                disabled={currentIndex === slides.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white disabled:opacity-30"
                aria-label="Scroll thumbnails derecha"
              >
                ›
              </button>
            </>
          )}
        </div>

        {/* Controles inferiores */}
        <div className="flex justify-between mt-4 gap-2">
          <div className="text-sm text-gray-500">
            {currentIndex + 1} / {slides.length}
          </div>
          <div className="flex gap-2">
<<<<<<< HEAD
            <button
=======
            <button 
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
              onClick={toggleFullscreen}
              className="border p-2 rounded hover:bg-gray-100 focus:outline-none"
              aria-label="Pantalla completa"
            >
              ⛶
            </button>
            <button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="border p-2 rounded hover:bg-gray-100 disabled:opacity-30 focus:outline-none"
              aria-label="Slide anterior"
            >
              ‹
            </button>
            <button
              onClick={goToNext}
              disabled={currentIndex === slides.length - 1}
              className="border p-2 rounded hover:bg-gray-100 disabled:opacity-30 focus:outline-none"
              aria-label="Slide siguiente"
            >
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Vista de pantalla completa */}
<<<<<<< HEAD
      <div
        ref={fullscreenRef}
        className={`w-full h-screen bg-white ${
          isFullscreen ? "block" : "hidden"
        } flex flex-col items-center justify-center p-4`}
=======
      <div 
        ref={fullscreenRef}
        className={`w-full h-screen bg-white ${isFullscreen ? 'block' : 'hidden'} flex flex-col items-center justify-center p-4`}
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
      >
        {/* Botón para salir de pantalla completa */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white z-50"
          aria-label="Salir de pantalla completa"
        >
          ✕
        </button>
<<<<<<< HEAD

=======
        
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
        {/* Contenedor de imagen en pantalla completa */}
        <div className="relative flex-1 w-full flex items-center justify-center">
          <img
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1} en pantalla completa`}
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>

        {/* Controles en pantalla completa */}
        <div className="w-full max-w-5xl flex justify-between items-center mt-4 mb-8">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="p-2 text-red-600 text-3xl font-bold hover:scale-110 transition disabled:opacity-20"
            aria-label="Slide anterior"
          >
            ‹
          </button>
<<<<<<< HEAD

=======
          
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
          <div className="text-center">
            <h2 className="text-lg font-medium">
              {slides[currentIndex].caption}
            </h2>
            <div className="text-sm text-gray-500">
              {currentIndex + 1} / {slides.length}
            </div>
          </div>
<<<<<<< HEAD

=======
          
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
          <button
            onClick={goToNext}
            disabled={currentIndex === slides.length - 1}
            className="p-2 text-red-600 text-3xl font-bold hover:scale-110 transition disabled:opacity-20"
            aria-label="Slide siguiente"
          >
            ›
          </button>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
  );
}
