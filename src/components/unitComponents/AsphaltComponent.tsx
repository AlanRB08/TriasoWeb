import React, { useState } from "react";


type Item = {
    label: string;
    children?: string[];
};

type DataSet = {
    title: string;
    subtitle: string;
    items: Item[];
    image: any;
};

type Props = {
    data: DataSet[];
};

export default function AsphaltComponent({ data }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const goPrev = () => {
        setActiveIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    const goNext = () => {
        setActiveIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const { title, subtitle, items, image } = data[activeIndex];

    return (
        <section className="w-full bg-blueMain text-white py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-2 lg:gap-16 items-start">

                <div className="w-full lg:w-1/2  lg:min-h-[520px]">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                        {title}
                    </h1>

                    <p className="text-sm sm:text-base lg:text-lg font-light opacity-80 mb-6">
                        {subtitle}
                    </p>

                    <ul className="space-y-3 text-sm sm:text-base lg:text-lg">
                        {items.map((item, i) => (
                            <li key={i}>
                                • {item.label}
                                {item.children && (
                                    <ul className="ml-5 mt-2 space-y-1 opacity-80 list-disc text-sm sm:text-base">
                                        {item.children.map((sub, j) => (
                                            <li key={j}>{sub}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    className="w-full lg:w-1/2 flex flex-col items-center min-h-[277.297px] lg:min-h-[520px]"
                >
                    <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl flex-1 flex items-center">
                        <img
                            src={image?.src ?? image}
                            alt="Feature image"
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    <div className="flex gap-6 mt-8 justify-center lg:justify-end w-full">
                        <button onClick={goPrev} className="w-10 h-10 rounded-full bg-[#9e9e9e] flex items-center justify-center hover:bg-[#d9d9d9] transition active:scale-95"
                        >
                            <svg width="20" height="20" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#4d4d4d" stroke="#4d4d4d" stroke-width="0.8338329999999999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#4d4d4d"></path> </g> </g></svg>
                        </button>

                        <button onClick={goNext} className="w-10 h-10 rounded-full bg-[#9e9e9e] flex items-center justify-centerhover:bg-[#d9d9d9] transition active:scale-95"
                        >
                            <svg width="20" height="20" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#4d4d4d" stroke="#4d4d4d" stroke-width="0.8338329999999999" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#4d4d4d"></path> </g> </g></svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
