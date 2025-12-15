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
  },
};

export default function BinSelector() {
  const [selectedBins, setSelectedBins] = useState(2);
  const [panelType, setPanelType] = useState<PanelType>("aesthetic");

  const currentImage = imageMap[selectedBins][panelType];

  return (
    <div className="bg-gray-100 flex flex-col gap-6 text-black w-full mt-10">
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
        <div className="flex flex-col bg-white rounded-2xl py-3 px-4 justify-center items-center gap-2">
          <div>
            <p className="font-bold text-sm sm:text-base md:text-lg py-2">Bin units</p>
          </div>
          <div>
            {binOptions.map((num) => (
              <button
                key={num}
                onClick={() => setSelectedBins(num)}
                className={`px-4 py-2 text-sm sm:text-base md:text-lg font-bold rounded-full
                ${selectedBins === num ? "bg-blueMain text-white" : "bg-white text-black"}
              `}
              >
                {num}
              </button>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

