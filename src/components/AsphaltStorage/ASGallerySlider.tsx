import React, { useState, useEffect, useRef } from "react";

interface ImageData {
    src: any;
    title: string;
    description: string;
    list?: {
        text: string;
        sublist?: string[];
    }[];
}

interface Props {
    images: ImageData[];
}

export default function GallerySlider({ images }: Props) {
    const [windowWidth, setWindowWidth] = useState(0);
    const [modalIndex, setModalIndex] = useState<number | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = isMobile ? 1 : 4;
    const totalPages = Math.ceil(images.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
    };

    const offset = -(currentIndex * (100 / totalPages));

    return (
        <div className="w-full mx-auto py-10 bg-blueMain relative">
            {/* Contenedor deslizable */}
            <div className="relative overflow-hidden max-w-7xl mx-auto gap-5 h-[300px]">
                <div
                    ref={containerRef}
                    className={`flex transition-transform duration-500 ease-in-out ${isMobile
                        ? "overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar"
                        : ""
                        }`}
                    style={{
                        transform: isMobile ? undefined : `translateX(${offset}%)`,
                        width: isMobile
                            ? "100%"
                            : `${(images.length / itemsPerPage) * 100}%`,
                    }}
                >
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`flex-shrink-0 px-2 cursor-pointer ${isMobile ? "snap-start" : ""
                                }`}
                            style={{
                                width: isMobile ? "80%" : `${100 / images.length}%`,
                            }}
                            onClick={() => setModalIndex(i)}
                        >
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-64 object-cover rounded shadow hover:scale-105 transition bg-white"
                            />
                            <div className="mt-4 text-start font-bold text-white mb-4">
                                {img.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {modalIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4"
                    onClick={() => setModalIndex(null)}
                >
                    <div
                        className="relative bg-[#111]/70 backdrop-blur-md p-6 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                       
                        <button
                            aria-label="Close modal"
                            onClick={() => setModalIndex(null)}
                            className="absolute top-3 right-3 text-white bg-black/40 hover:bg-black px-3 py-1 rounded"
                        >
                            ✕
                        </button>

                    
                        <img
                            src={images[modalIndex].src}
                            alt={images[modalIndex].title}
                            className="w-full max-h-[50vh] object-contain rounded-lg bg-white"
                        />

                        
                        <h2 className="text-white text-2xl font-bold mt-4 text-center">
                            {images[modalIndex].title}
                        </h2>

                        {images[modalIndex].description && (
                            <p className="text-gray-300 mt-2 text-center">
                                {images[modalIndex].description}
                            </p>
                        )}

                        {images[modalIndex].list && (
                            <div className="mt-4 space-y-4 text-gray-200">
                                {images[modalIndex].list.map((item, index) => (
                                    <div key={index} className="">
                                        <li className="list-disc ml-6 font-semibold">{item.text}</li>
                                        {item.sublist && (
                                            <ul className="mt-1 ml-10 space-y-1">
                                                {item.sublist.map((sub, i2) => (
                                                    <li key={i2} className="list-disc text-gray-300">
                                                        {sub}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
