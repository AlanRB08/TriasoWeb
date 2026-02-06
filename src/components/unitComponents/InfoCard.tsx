import React, { useState } from "react";

type Section = {
  id: string;
  label: string;
  image: any;
  title: string;
  description: string;
};

type InfoCardProps = {
  sections: Section[];
};

const InfoCard: React.FC<InfoCardProps> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div className="flex md:w-1/2 w-full bg-white rounded-md shadow-md overflow-hidden">
        {/* Sidebar */}
        <div className="flex flex-col items-center bg-redBg text-white p-2 space-y-2">
          {sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => setActiveIndex(idx)}
              className={`w-8 h-12 flex items-center justify-center rounded-md transition-colors ${idx === activeIndex
                  ? "bg-redBg"
                  : "bg-gray-800 hover:bg-gray-700"
                }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1">
          <img
            loading="lazy"
            src={sections[activeIndex].image}
            alt={sections[activeIndex].title}
            className="w-full  object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">
              {sections[activeIndex].title}
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              {sections[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
