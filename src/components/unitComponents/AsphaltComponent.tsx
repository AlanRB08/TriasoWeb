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
        <section className="w-full text-white bg-blueMain my-10">
            <div className=" mx-auto flex items-center justify-between gap-12">
                <div className="max-w-xl">
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <p className="text-lg font-thin opacity-80 mb-6">{subtitle}</p>

                    <ul className="space-y-3 text-lg">
                        {items.map((item, i) => (
                            <li key={i}>
                                • {item.label}
                                {item.children && (
                                    <ul className="ml-6 opacity-80 list-disc">
                                        {item.children.map((sub, j) => (
                                            <li key={j}>{sub}</li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <div className="max-w-3xl">
                        <img
                            src={image?.src ?? image}
                            alt="Feature image"
                            className="w-full object-contain"
                        />
                    </div>
                    <div className="flex gap-6 mt-10 justify-end">
                        <button
                            onClick={goPrev}
                            className="text-[#4d4d4d] px-4 py-2 rounded-full bg-[#9e9e9e] hover:bg-[#d9d9d9] hover:text-[#4d4d4d] transition w-[40px] h-[40px] flex items-center justify-center"
                        >
                            <svg width="256px" height="256px" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#4d4d4d" stroke="#4d4d4d" stroke-width="0.8338329999999999"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#4d4d4d"></path> </g> </g></svg>
                        </button>

                        <button
                            onClick={goNext}
                            className="text-[#4d4d4d] px-4 py-2 rounded-full bg-[#9e9e9e] hover:bg-[#d9d9d9] hover:text-[#4d4d4d] transition w-[40px] h-[40px] flex items-center justify-center"
                        >
                            <svg width="256px" height="256px" viewBox="-19.04 0 75.803 75.803" xmlns="http://www.w3.org/2000/svg" fill="#4d4d4d" stroke="#4d4d4d" stroke-width="0.8338329999999999" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_64" data-name="Group 64" transform="translate(-624.082 -383.588)"> <path id="Path_56" data-name="Path 56" d="M660.313,383.588a1.5,1.5,0,0,1,1.06,2.561l-33.556,33.56a2.528,2.528,0,0,0,0,3.564l33.556,33.558a1.5,1.5,0,0,1-2.121,2.121L625.7,425.394a5.527,5.527,0,0,1,0-7.807l33.556-33.559A1.5,1.5,0,0,1,660.313,383.588Z" fill="#4d4d4d"></path> </g> </g></svg>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
