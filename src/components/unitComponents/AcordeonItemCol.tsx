import { useEffect, useState, useRef, type ReactNode } from "react";

type AccordionProps = {
  title: string;
  children: ReactNode;
  bgColor?: string;
  image?: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  subText?: string;
};

export default function AcordeonItemCol({
  title,
  children,
  bgColor = "bg-white",
  image = "",
  imageClassName = "",
  imageWrapperClassName = "",
  subText = "",
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const element = contentRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsOpen(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={contentRef}
      className={`${bgColor} rounded-2xl flex flex-col justify-around p-4 w-full`}
    >
      <div className="flex justify-between items-center gap-10">
        <h2 className="text-black text-lg md:text-xl font-bold">{title}</h2>
        <button
          onClick={toggleAccordion}
          className="transition-transform duration-200"
          aria-label="Toggle Accordion"
        >
          {/* Icono de más */}
          {!isOpen && (
            <svg
              className="plus-icon"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M6 12H12M18 12H12M12 12V6M12 12V18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}

          {/* Icono de menos */}
          {isOpen && (
            <svg
              className="minus-icon"
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M6 12H18"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="px-10 max-w-[350px] mx-auto">
        <img src={image} alt="" className={`${imageClassName}`} />
      </div>
      {subText && (
        <div className="w-full py-6 font-bold text-grisT text-sm md:text-base">
          <p>{subText}</p>
        </div>
      )}

      <div
        ref={contentRef}
        className={`accordion-content w-full transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[700px]" : "max-h-0"
          }`}
        style={{ transitionProperty: "max-height" }}
      >
        {children}
      </div>
    </div>
  );
}
