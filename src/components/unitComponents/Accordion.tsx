import React, { useState, useRef, useEffect } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(`${contentRef.current?.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="border-b relative w-full">
<<<<<<< HEAD
      <div className="bg-blueMain absolute left-0 h-full w-2"></div>
=======
        <div className="bg-blueMain absolute left-0 h-full w-2">
        </div>
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left"
      >
        <span className="font-bold text-black text-lg md:text-xl">{title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {/* Contenedor animado */}
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
<<<<<<< HEAD
        <div className="p-4 text-black font-thin text-base md:text-lg">
          {content}
        </div>
=======
        <div className="p-4 text-black font-thin text-base md:text-lg">{content}</div>
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
      </div>
    </div>
  );
};

type AccordionProps = {
  items: { title: string; content: string }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className="w-[90vw] md:w-[50vw] mx-auto border rounded-lg shadow flex flex-col">
      {items.map((item, index) => (
        <AccordionItem key={index} {...item} />
      ))}
    </div>
  );
};

export default Accordion;
