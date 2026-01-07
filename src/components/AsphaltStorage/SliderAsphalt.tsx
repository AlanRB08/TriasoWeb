import { useEffect, useState } from "react";

interface ImageSliderProps {
  images: any;
  interval?: number;
}

const SliderAsphalt = ({ images, interval = 3000 }: ImageSliderProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-full lg:w-[900px] lg:h-[500px] flex items-end justify-end overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute inset-0 w-full h-full object-fill transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default SliderAsphalt;
