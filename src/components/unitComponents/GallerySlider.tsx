// components/ImageSlider.tsx
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

export type Slide = {
  image: string;
  caption: string;
};

type ImageSliderProps = {
  slides: Slide[];
  visibleThumbs?: number;
};

export default function GallerySlider({
  slides,
  visibleThumbs = 5,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const prevIndexRef = useRef(0);

  const toggleFullscreen = () => {
    if (!fullscreenRef.current) return;

    if (!document.fullscreenElement) {
      fullscreenRef.current.requestFullscreen().catch((err) => {
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
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
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
      setDirection("left");
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < slides.length - 1) {
      setDirection("right");
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    scrollThumbIntoView(index);
  };

  const scrollThumbIntoView = (index: number) => {
    if (thumbsRef.current) {
      const thumb = thumbsRef.current.children[index] as HTMLElement;
      if (thumb) {
        thumbsRef.current.scrollTo({
          left:
            thumb.offsetLeft -
            thumbsRef.current.offsetWidth / 2 +
            thumb.offsetWidth / 2,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (!imageRef.current || prevIndexRef.current === currentIndex) return;

    const imageElement = imageRef.current;
    const fromX = direction === "right" ? "100%" : "-100%";

    gsap.set(imageElement, { x: fromX, opacity: 0 });
    gsap.to(imageElement, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    prevIndexRef.current = currentIndex;
    scrollThumbIntoView(currentIndex);

    return () => {
      gsap.killTweensOf(imageElement);
    };
  }, [currentIndex, direction]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape" && isFullscreen) toggleFullscreen();
      if (e.key === "f") toggleFullscreen();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isFullscreen]);

  const { start: thumbStart, end: thumbEnd } = getVisibleThumbRange();

  return (
    <div className="w-full">
      {/* Vista normal */}
      <div
        className={`w-full mx-auto my-16 bg-white p-4 rounded shadow max-w-5xl ${
          isFullscreen ? "hidden" : "block"
        }`}
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
          <div
            ref={thumbsRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 snap-start focus:outline-none transition rounded-md p-0.5 ${
                  currentIndex === index
                    ? "border-2 border-blue-600"
                    : "border-2 border-transparent opacity-60 hover:opacity-100"
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
                onClick={() =>
                  goToSlide(Math.min(slides.length - 1, currentIndex + 1))
                }
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
            <button
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
      <div
        ref={fullscreenRef}
        className={`w-full h-screen bg-white ${
          isFullscreen ? "block" : "hidden"
        } flex flex-col items-center justify-center p-4`}
      >
        {/* Botón para salir de pantalla completa */}
        <button
          onClick={toggleFullscreen}
          className="absolute top-4 right-4 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white z-50"
          aria-label="Salir de pantalla completa"
        >
          ✕
        </button>

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

          <div className="text-center">
            <h2 className="text-lg font-medium">
              {slides[currentIndex].caption}
            </h2>
            <div className="text-sm text-gray-500">
              {currentIndex + 1} / {slides.length}
            </div>
          </div>

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
    </div>
  );
}
