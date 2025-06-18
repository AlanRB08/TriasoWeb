import { useState } from 'react';

const binOptions = [2, 3, 4, 5, 6] as const;
const panelOptions = ['aesthetic', 'without'] as const;

type PanelType = typeof panelOptions[number];

const imageMap: Record<number, Record<PanelType, string>> = {
  2: {
    aesthetic: '/images/2-aesthetic.jpg',
    without: '/images/2-without.jpg',
  },
  3: {
    aesthetic: '/images/3-aesthetic.jpg',
    without: '/images/3-without.jpg',
  },
  4: {
    aesthetic: '/images/4-aesthetic.jpg',
    without: '/images/4-without.jpg',
  },
  5: {
    aesthetic: '/images/5-aesthetic.jpg',
    without: '/images/5-without.jpg',
  },
  6: {
    aesthetic: '/images/6-aesthetic.jpg',
    without: '/images/6-without.jpg',
  },
};

export default function BinSelector() {
  const [selectedBins, setSelectedBins] = useState(2);
  const [panelType, setPanelType] = useState<PanelType>('aesthetic');

  const currentImage = imageMap[selectedBins][panelType];

  return (
    <div className="px-8 lg:px-52 bg-gray-100 flex flex-col gap-6 text-black w-full mt-10">
      <h1 className="text-3xl font-bold">From two to six bins units</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
                <div className='flex flex-col items-start justify-center gap-6'>
                <div className="flex gap-4">
        {binOptions.map((num) => (
          <button
            key={num}
            onClick={() => setSelectedBins(num)}
            className={`px-4 py-2 rounded font-bold border ${
              selectedBins === num
                ? 'bg-black text-white'
                : 'bg-white text-black'
            }`}
          >
            {num}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => setPanelType('aesthetic')}
          className={`text-start px-4 py-2 rounded font-bold border ${
            panelType === 'aesthetic'
              ? 'bg-black text-white'
              : 'bg-white text-black'
          }`}
        >
          Aesthetic Side Panels
        </button>
        <button
          onClick={() => setPanelType('without')}
          className={`px-4 py-2 rounded font-bold border ${
            panelType === 'without'
              ? 'bg-black text-white'
              : 'bg-white text-black'
          }`}
        >
          Without Aesthetic Side Panels
        </button>
      </div>
                    
                </div>

                <p className="text-sm max-w-3xl font-bold text-grisT">
        High-quality equipment built for durability and efficient asphalt
        production. Featuring reinforced steel structures and integrated
        vibration systems, Triaso® bin units ensure steady aggregate flow,
        minimal clogging, and reduced wear. Designed for continuous operation,
        they deliver consistent, reliable performance with low maintenance—even
        under the toughest jobsite conditions.
      </p>

            </div>
      {/* Bins selector */}
      

      {/* Panel type selector */}
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Specs */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-lg font-bold mb-2">
            Specifications and Characteristics
          </h2>
          <ul className="list-disc pl-4 space-y-2 text-sm font-bold text-grisT">
            <li>
              With dimensions and aggregate dosing systems that comply with
              construction regulations
            </li>
            <li>
              Built with high-strength steel to withstand heavy loads and resist
              deformation under tough working conditions.
            </li>
            <li>
              Designed for quick and smooth unloading to maintain continuous
              workflow and minimize downtime.
            </li>
            <li>
              Equipped with precision-controlled aggregate dosing mechanisms to
              ensure accurate material distribution.
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-center">
          <img
            src={currentImage}
            alt={`Bins ${selectedBins} - ${panelType}`}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Description */}
      
    </div>
  );
}
