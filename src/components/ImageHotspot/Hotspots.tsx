import { useState } from "react";
import img1 from "../../assets/images/AsphaltStorage/ImageHotspot.webp"

interface Hotspot {
  id: number;
  top: string;
  left: string;
  title: string;
  description: string;
}

export default function Hotspots({ data }: { data: Hotspot[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative">
      <img src={img1.src} className="w-full" />

      {data.map(h => (
        <div
          key={h.id}
          className="absolute"
          style={{ top: h.top, left: h.left }}
        >
          <button
            className="w-4 h-4 bg-red-600 rounded-full"
            onClick={() => setActive(active === h.id ? null : h.id)}
          />

          {active === h.id && (
            <div className="absolute z-10 mt-2 bg-white p-3 w-[200px] lg:w-96 md:w-96 shadow-lg rounded">
              <h4 className="font-semibold">{h.title}</h4>
              <p className="text-sm">{h.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
