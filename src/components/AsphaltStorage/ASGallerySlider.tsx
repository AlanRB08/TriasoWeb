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
    const [currentIndex, setCurrentIndex] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isMobile = windowWidth < 768;
    const itemsPerPage = isMobile ? 1 : 4;
    const totalPages = Math.ceil(images.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
    };

    const scrollByCard = (direction: "left" | "right") => {
        if (!containerRef.current) return;
        const cardWidth =
            containerRef.current.firstElementChild?.clientWidth || 300;

        containerRef.current.scrollBy({
            left: direction === "right" ? cardWidth : -cardWidth,
            behavior: "smooth",
        });
    };

    const offset = -(currentIndex * (40 / totalPages));

    return (
        <div className="w-full mx-auto py-5 bg-blueMain relative">
            <div className="relative overflow-hidden max-w-7xl mx-auto h-[380px]">
                {isMobile && (
                    <>
                        <button
                            onClick={() => scrollByCard("left")}
                            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow"
                        >
                            ‹
                        </button>
                        <button
                            onClick={() => scrollByCard("right")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 rounded-full shadow"
                        >
                            ›
                        </button>
                    </>
                )}

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
                            className={`flex-shrink-0 px-2 ${isMobile ? "snap-start" : ""}`}
                            style={{
                                width: isMobile ? "80%" : `${100 / images.length}%`,
                            }}
                        >
                            <div className="mt-4 font-bold text-white mb-3">{img.title}</div>

                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-64 object-cover rounded shadow bg-white"
                            />

                            <button
                                onClick={() => setModalIndex(i)}
                                className="mt-3 w-full py-2 text-sm font-semibold text-blueMain bg-white rounded-full hover:bg-gray-100 transition"
                            >
                                See more
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {!isMobile && (
                <div className="max-w-7xl mx-auto">
                    <div className="w-full  flex justify-end items-center gap-5 md:flex ">
                        <button onClick={prevSlide} className=" p-2 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-50 transition active:scale-95 ">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" >
                                <path d="M15 18l-6-6 6-6" /> </svg>
                        </button>
                        <button onClick={nextSlide} className="p-2 bg-white border border-gray-200 rounded-full shadow hover:bg-gray-50 transition active:scale-95 ">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4d4d4d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" >
                                <path d="M9 18l6-6-6-6" /> </svg>
                        </button>
                    </div>
                </div>

            )}

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
                            onClick={() => setModalIndex(null)}
                            className="absolute top-3 right-3 text-white bg-black/40 px-3 py-1 rounded"
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

                        <p className="text-gray-300 mt-2 text-center">
                            {images[modalIndex].description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
