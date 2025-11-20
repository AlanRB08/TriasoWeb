<<<<<<< HEAD
import { useState } from "react";

const binOptions = [2, 3, 4, 5, 6] as const;
const panelOptions = ["aesthetic", "without"] as const;

type PanelType = (typeof panelOptions)[number];

const imageMap: Record<number, Record<PanelType, string>> = {
  2: {
    aesthetic: "src/assets/images/BinUnits/TlvU2CF.png",
    without: "src/assets/images/BinUnits/TlvU2SF.png",
  },
  3: {
    aesthetic: "src/assets/images/BinUnits/TlvU3CF.png",
    without: "src/assets/images/BinUnits/TlvU3SF.png",
  },
  4: {
    aesthetic: "src/assets/images/BinUnits/TlvU4CF.png",
    without: "src/assets/images/BinUnits/TlvU4SF.png",
  },
  5: {
    aesthetic: "src/assets/images/BinUnits/TlvU5CF.png",
    without: "src/assets/images/BinUnits/TlvU5SF.png",
  },
  6: {
    aesthetic: "src/assets/images/BinUnits/TlvU6CF.png",
    without: "src/assets/images/BinUnits/TlvU6SF.png",
=======
import { useState } from 'react';

const binOptions = [2, 3, 4, 5, 6] as const;
const panelOptions = ['aesthetic', 'without'] as const;

type PanelType = typeof panelOptions[number];

const imageMap: Record<number, Record<PanelType, string>> = {
  2: {
    aesthetic: 'src/assets/images/BinUnits/TlvU2CF.png',
    without: 'src/assets/images/BinUnits/TlvU2SF.png',
  },
  3: {
    aesthetic: 'src/assets/images/BinUnits/TlvU3CF.png',
    without: 'src/assets/images/BinUnits/TlvU3SF.png',
  },
  4: {
    aesthetic: 'src/assets/images/BinUnits/TlvU4CF.png',
    without: 'src/assets/images/BinUnits/TlvU4SF.png',
  },
  5: {
    aesthetic: 'src/assets/images/BinUnits/TlvU5CF.png',
    without: 'src/assets/images/BinUnits/TlvU5SF.png',
  },
  6: {
    aesthetic: 'src/assets/images/BinUnits/TlvU6CF.png',
    without: 'src/assets/images/BinUnits/TlvU6SF.png',
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
  },
};

export default function BinSelector() {
  const [selectedBins, setSelectedBins] = useState(2);
<<<<<<< HEAD
  const [panelType, setPanelType] = useState<PanelType>("aesthetic");
=======
  const [panelType, setPanelType] = useState<PanelType>('aesthetic');
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff

  const currentImage = imageMap[selectedBins][panelType];

  return (
    <div className="bg-gray-100 flex flex-col gap-6 text-black w-full mt-10">
<<<<<<< HEAD
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-4">
        From two to six bins units
      </h1>

      <div className="w-full flex flex-col gap-10 justify-center items-center max-w-7xl px-4 sm:px-6 md:px-8 mx-auto">
        <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button
            onClick={() => setPanelType("aesthetic")}
            className={`w-full sm:w-auto text-center text-sm sm:text-base md:text-lg px-4 py-3 rounded font-bold border
              ${panelType === "aesthetic" ? "bg-blueMain text-white" : "bg-white text-black"}
            `}
          >
            Aesthetic Side Panels
          </button>

          <button
            onClick={() => setPanelType("without")}
            className={`w-full sm:w-auto text-center text-sm sm:text-base md:text-lg px-4 py-3 rounded font-bold border
              ${panelType === "without" ? "bg-blueMain text-white" : "bg-white text-black"}
            `}
          >
            Without Aesthetic Side Panels
          </button>
        </div>
        <div className="flex items-center justify-center w-full md:h-[650px]">
          <img
            src={currentImage}
            alt={`Bins ${selectedBins} - ${panelType}`}
            className="w-full max-w-[500px] sm:max-w-[700px] md:max-w-[1100px]"
          />
        </div>

        <div className="flex flex-wrap bg-white rounded-2xl py-3 px-4 justify-center items-center gap-2">
          <p className="font-bold text-sm sm:text-base md:text-lg py-2">Bin units:</p>

=======
      <h1 className="text-3xl md:text-4xl  font-bold text-center px-8 lg:px-52">From two to six bins units</h1>
      <div className='w-full flex flex-col gap-10 justify-center items-center px-8 lg:px-52'>
          <div className='w-full flex gap-10 justify-center'>
              <button
              onClick={() => setPanelType('aesthetic')}
              className={`md:min-w-[400px] text-center text-base md:text-lg px-4 py-2 rounded font-bold border ${
                panelType === 'aesthetic'
                  ? 'bg-blueMain text-white'
                  : 'bg-white text-black'
              }`}
            >
              Aesthetic Side Panels
            </button>
            <button
              onClick={() => setPanelType('without')}
              className={`md:min-w-[400px] px-4 py-2 rounded text-center md:text-lg font-bold border ${
                panelType === 'without'
                  ? 'bg-blueMain text-white'
                  : 'bg-white text-black'
              }`}
            >
              Without Aesthetic Side Panels
            </button>
          </div>
          <div className="flex items-center justify-center w-full md:h-[650px]">
            <img
              src={currentImage}
              alt={`Bins ${selectedBins} - ${panelType}`}
              className="md:max-w-[1100px]"
            />
          </div>
          <div className="flex bg-white rounded-2xl py-2 justify-center items-center">
            <p className='font-bold text-base md:text-lg py-2 md:px-4'>Bin units:</p>
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
          {binOptions.map((num) => (
            <button
              key={num}
              onClick={() => setSelectedBins(num)}
<<<<<<< HEAD
              className={`px-4 py-2 text-sm sm:text-base md:text-lg font-bold rounded-full
                ${selectedBins === num ? "bg-blueMain text-white" : "bg-white text-black"}
              `}
=======
              className={`mx-3 md:mx-5 px-3 md:px-5 h-full py-1 md:py-2 text-base md:text-lg font-bold rounded-full ${
                selectedBins === num
                  ? 'bg-blueMain text-white'
                  : 'bg-white text-black'
              }`}
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
            >
              {num}
            </button>
          ))}
<<<<<<< HEAD
        </div>

      </div>
    </div>
  );
}

=======
          </div>
      </div>
      <div className='w-full bg-grisT text-grisSubP text-base md:text-lg py-10 my-20 px-8 lg:px-52'>
          <h1 className='text-white font-bold text-2xl md:text-3xl text-center'>Specifications and Characteristics</h1><br />
          <div className='w-full grid grid-cols-1 md:grid-cols-2 justify-center'>
            <div>
              <p>
              With dimensions and aggregate dosing systems that comply with construction regulations
              <ul className='list-disc ml-6'>
                <li>DOT</li>
                <li>OSHA</li>
                <li>EPA</li>
                <li>UL Wiring</li>
              </ul><br />
              Built with high-strength steel to withstand heavy loads and resist deformation under tough working conditions. <br /><br />
              Designed for quick and smooth unloading to maintain continuous workflow and minimize downtime.
              </p>
            </div>
            <div>
              <p>
              High-quality equipment built for durability and efficient asphalt production. Featuring reinforced steel structures and 
              integrated vibration systems, Triaso® bin units ensure steady aggregate flow, minimal clogging, and reduced wear. Designed 
              for continuous operation, they deliver consistent, reliable performance with low maintenance—even under the toughest jobsite conditions. <br /><br />
              Equipped with precision-controlled aggregate dosing mechanisms to ensure accurate material distribution.
              </p>
            </div>
          </div>
      </div>
      
    </div>
  );
}
>>>>>>> adb791cd913f793db6b4099d114ff2cfb4734eff
