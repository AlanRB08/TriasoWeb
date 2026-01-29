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

export default function HMGallerySlider({ images }: Props) {
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
    const itemsPerPage = isMobile ? 1 : 3;
    const totalPages = Math.ceil(images.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
    };

    const offset = -(currentIndex * (100 / totalPages));

    return (
        <div className="w-full mx-auto py-10 bg-[#727272] relative">
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
                            <div className="flex flex-row justify-between items-center">
                                <div className="mt-4 text-start font-bold text-white mb-4">
                                    {img.title}
                                </div>
                                <svg fill="#14437d" width="32" height="32" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9296 39.6719 C 26.6171 39.6719 25.9140 38.7109 25.9140 37.3516 L 25.9140 30.0625 L 18.2265 30.0625 C 16.8436 30.0625 15.8827 29.3359 15.8827 28.0469 C 15.8827 26.7109 16.7733 25.9609 18.2265 25.9609 L 25.9140 25.9609 L 25.9140 18.2031 C 25.9140 16.8437 26.6171 15.8828 27.9296 15.8828 C 29.2421 15.8828 30.0390 16.7968 30.0390 18.2031 L 30.0390 25.9609 L 37.7499 25.9609 C 39.1796 25.9609 40.0702 26.7109 40.0702 28.0469 C 40.0702 29.3359 39.1327 30.0625 37.7499 30.0625 L 30.0390 30.0625 L 30.0390 37.3516 C 30.0390 38.7578 29.2421 39.6719 27.9296 39.6719 Z"></path>
                                    </g>
                                </svg>
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
