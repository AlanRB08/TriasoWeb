import { useEffect, useState } from "react";

interface HeroCard {
    title: string;
    href: string;
    image: string;
}

interface Props {
    slides: HeroCard[];
    autoSlide?: boolean;
    interval?: number;
}

export default function HeroSlider({
    slides,
    autoSlide = true,
    interval = 4000,
}: Props) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const CARD_WIDTH = 260;
    const CARD_WIDTH_DESKTOP = 280;
    const GAP = 24;

    const isDesktop =
        typeof window !== "undefined" && window.innerWidth >= 768;

    const step = isDesktop
        ? CARD_WIDTH_DESKTOP + GAP
        : CARD_WIDTH + GAP;

    const next = () =>
        setCurrent((prev) => (prev + 1) % slides.length);

    const prev = () =>
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        if (!autoSlide || paused) return;
        const id = setInterval(next, interval);
        return () => clearInterval(id);
    }, [current, paused, autoSlide, interval]);

    return (
        <div
            className="relative w-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
        >
            <div className="overflow-hidden py-4">
                <div
                    className="flex gap-6 transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${current * step}px)`,
                    }}
                >
                    {slides.map((card, index) => (
                        <a
                            key={index}
                            href={card.href}
                            className="group relative min-w-[260px] md:min-w-[280px] h-[250px] rounded-xl overflow-hidden shadow-lg "
                        >

                            <div
                                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 "
                                style={{ backgroundImage: `url(${card.image})` }}
                            />

                            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                            <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">

                                <h3 className="text-xl font-bold mb-2 drop-shadow-md">
                                    {card.title}
                                </h3>
                                <div className="flex">
                                    <span className="text-sm border border-white/70 backdrop-blur-sm rounded-3xl py-2 px-4 text-white group-hover:bg-white group-hover:text-black transition-colors">
                                        Learn more
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="flex flex-row justify-self-center items-baseline gap-5">
                <button
                    onClick={prev}
                    className="  w-8 h-8 rounded-full  bg-black/60 lg:bg-white/60 text-white flex items-center justify-center hover:bg-black transition "
                >
                    ‹
                </button>

                <div className="flex gap-2 mt-6">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`transition-all duration-300 rounded-full ${current === index
                                ? "w-8 h-1.5 bg-red-600"
                                : "w-1.5 h-1.5 bg-black/20 lg:bg-[#f9f9f9]/40 hover:bg-red-600"
                                }`}
                        />
                    ))}
                </div>
                <button
                    onClick={next}
                    className="w-8 h-8 rounded-full bg-black/60 lg:bg-white/60 text-white flex items-center justify-center hover:bg-black transition "
                >
                    ›
                </button>
            </div>

        </div>
    );
}