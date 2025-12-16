import React, { useRef } from "react";

interface ImageData {
  src: string;
  title: string;
  texto: string;
}

interface Props {
  images: ImageData[];
}

export default function ItemsSlider({ images }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const card = scrollRef.current.querySelector(
      "[data-card]"
    ) as HTMLDivElement;

    if (!card) return;

    const gap = 16;
    const scrollAmount = card.offsetWidth + gap;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 mt-12 md:mt-20">
      <div className="relative">
        <div
          ref={scrollRef}
          className="
            flex gap-4
            overflow-x-auto
            snap-x snap-mandatory
            scroll-smooth
            pb-6
            no-scrollbar
          "
        >
          {images.map((img, i) => (
            <article
              key={i}
              data-card
              className="
                snap-start
                shrink-0
                w-[85%]
                sm:w-[60%]
                md:w-[45%]
                lg:w-[23%]
                bg-white
                rounded-xl
                border border-gray-100
                shadow-sm
                p-5
                flex flex-col
              "
            >
              <div className="flex flex-col gap-3 h-full">
                <div className="h-10 flex items-center">
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-full w-auto object-contain"
                  />
                </div>

                <h3 className="font-bold text-grisT text-sm md:text-base leading-tight line-clamp-2">
                  {img.title}
                </h3>

                <p className="text-grisT text-xs md:text-sm leading-snug">
                  {img.texto}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="hidden lg:flex absolute -bottom-4 right-2 gap-2">
          <button
            onClick={() => scroll("left")}
            className="
              p-2
              bg-white
              border border-gray-200
              rounded-full
              shadow
              hover:bg-gray-50
              transition
              active:scale-95
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              p-2
              bg-white
              border border-gray-200
              rounded-full
              shadow
              hover:bg-gray-50
              transition
              active:scale-95
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
