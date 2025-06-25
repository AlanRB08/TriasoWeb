import { useState } from 'react';

type Slide = {
  image: string;
  caption: string;
};

const slides: Slide[] = [
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC60P288TrabA.png',
    caption: 'Tambor mezclador de 80 Tmph, de contraflujo, en posición de trabajo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC60P288TrabB.png',
    caption: 'Vista lateral del sistema de alimentación',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC60P288TranspA.png',
    caption: 'Posición de transporte',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC60P288TranspB.png',
    caption: 'Vista trasera de los controles',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286TrabB.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286TranspA.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbCE110P286TrabA.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbCE110P286TrabB.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbCE110P286TrabRapA.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbCE110P286TranspA.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },
  {
    image: 'src/assets/images/BinUnits/GallerySlider/Big/TmbC110P286Trab.png',
    caption: 'Otra vista del equipo completo',
  },

];

export default function BinSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goToNext = () => {
    if (currentIndex < slides.length - 1) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="w-full bg-white p-4 rounded shadow max-w-5xl mx-auto">
      {/* Caption */}
      <h2 className="text-center text-lg font-medium mb-4">
        {slides[currentIndex].caption}
      </h2>

      {/* Image + Arrows */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="absolute left-0 z-10 p-2 text-red-600 text-3xl font-bold hover:scale-110 transition disabled:opacity-20"
        >
          ‹
        </button>

        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          className="max-h-[400px] object-contain mx-auto"
        />

        <button
          onClick={goToNext}
          disabled={currentIndex === slides.length - 1}
          className="absolute right-0 z-10 p-2 text-red-600 text-3xl font-bold hover:scale-110 transition disabled:opacity-20"
        >
          ›
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex items-center justify-center gap-2 overflow-x-auto">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-20 cursor-pointer border-2 transition ${
              currentIndex === index
                ? 'border-blue-600'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          />
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="flex justify-end mt-4 gap-2">
        <button className="border p-2 rounded hover:bg-gray-100">⛶</button>
        <button
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          className="border p-2 rounded hover:bg-gray-100 disabled:opacity-30"
        >
          ‹
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex === slides.length - 1}
          className="border p-2 rounded hover:bg-gray-100 disabled:opacity-30"
        >
          ›
        </button>
      </div>
    </div>
  );
}
