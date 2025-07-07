import { useState } from 'react';
import reinforcedRight from '../../assets/images/IntegralAsphalt/reinfright.png';
import reinforcedLeft from '../../assets/images/IntegralAsphalt/reinfleft.png';
import supportRight from '../../assets/images/IntegralAsphalt/supportright.png';
import supportLeft from '../../assets/images/IntegralAsphalt/supportleft.png';
import standarRight from '../../assets/images/IntegralAsphalt/standarright.png';
import standarLeft from '../../assets/images/IntegralAsphalt/standarleft.png';
import { forwardRef } from 'react';


const TabsPlane = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [activeTab, setActiveTab] = useState(3); // 1, 2 o 3

  return (
    <div className="w-full px-8 lg:px-8 mt-14">
      {/* Contenedor de los botones */}
      <h1 className='text-white lg:text-xl text-lg text-center mb-10'>OPTIONS:</h1>
      <div className="flex justify-around">
        {/* Botón 1 */}
        <button
        aria-label='Lightweight chassis Tab'
          onClick={() => setActiveTab(1)}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
            activeTab === 1
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          All mounted on a lightweight chassis with support legs
        </button>

        {/* Botón 2 */}
        <button
        aria-label='Standard chassis Tab'
          onClick={() => setActiveTab(2)}
          className={`px-4 py-2 text-sm font-medium border rounded-full transition-all duration-300 ${
            activeTab === 2
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          Standard chassis for mobility of empty plant
        </button>

        {/* Botón 3 */}
        <button
        aria-label='Reinforced chassis Tab'
          onClick={() => setActiveTab(3)}
          className={`px-4 py-2 text-sm font-medium border transition-all duration-300 rounded-full ${
            activeTab === 3
              ? 'text-gray-900 bg-white border-white'
              : 'text-white bg-transparent border-white'
          }`}
        >
          Reinforced chassis for full-loaded plant mobility
        </button>
      </div>

      {/* Contenido de los tabs */}
      <div className="w-full mt-20 mb-10" id='tabsSection' ref={ref}>
        {activeTab === 1 && (
            <div className='flex flex-col items-center justify-center'>
                <div className='grid grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-center gap-4'>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION & DESIGN</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Low-profile, heavy-duty frame for stability and easy relocation</li>
                        <li>Foldable support legs with preset working height</li>
                        <li>Galvanized bolts and electrostatic automotive paint</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Reinforced front shield and EPDM rubber seals at drum ends</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Electronic control panel with ammeter</li>
                        <li>Digital temperature and asphalt dosing controls</li>
                        <li>Speed variator for mix adjustments</li>
                        <li>Visual, audible, and strobe alarm system</li>
                        <li>Pre-wired cable setup for plug-and-play startup</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FLIGHTS</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>Mixing Flights</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>All mounted on a standard-duty chassis designed for relocating the empty plant.</li>
                        <li>10-ton load capacity supported by dual 8-lug axles and eight 16" wheels.</li>
                        <li>Equipped with hitch, braking system, and DOT-compliant lighting.</li>
                        <li>Ideal for transport between job sites without requiring full disassembly.</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>ASPHALT STORAGE TANK</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Mounted asphalt tank: 6,000 L capacity</li>
                        <li>Direct heating with 140,000 BTU/hr burner</li>
                        <li>2" pump (2 HP motor)</li>
                        <li>Integrated asphalt agitator for faster startup</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PRODUCTION RATE</h1>
                    <ul className='ml-6 list-disc'>  
                        <li>Nominal: 10 TPH continuous</li>
                        <li>Continuous production for 10 hours (with full tank)</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2'>NADA</div>
            <div className='flex flex-col items-start justify-start h-full gap-4 col-span-1'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>BURNER SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Modulating diesel burner</li>
                        <li>Total-air design from 1.5 to 3.0 million BTU/hr</li>
                        <li>1.5 HP motor with UV sensors and fuel filtration</li>
                        <li>Meets U.S. safety standards</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Two 3 HP motors for drum rotation</li>
                        <li>Four gearbox reducers</li>
                        <li>1 HP gear pump motor for asphalt injection</li>
                        <li>Siemens-grade motors and wiring</li>
                        <li>110 V system in control cabinet with emergency shutdown</li>
                        <li>20 kW three-phase electric generator</li>
                        <ul className='ml-4'>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">20 Kw in continuous service</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">22 Kw in emergency service</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">220/440 Voltage</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">35 hp Cummins engine</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">110 L diesel tank</li>
                        </ul>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Nomex filter bags (optional)</li>
                        <li>1.5" fiberglass drum and tank insulation</li>
                        <li>Exterior stainless steel tank lining</li>
                        <li>Automotive-grade baked paint for corrosion resistance</li>
                        <li>Guarded moving parts and warning signage for operator safety</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>MIXING & FEEDING SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>External pugmill mixer (5 HP motor, Hardox pads, single shaft)</li>
                        <li>8 Ton mounted aggregate bin with gate adjustment</li>
                        <li>18" wide feeding belt with lagged head pulley</li>
                        <li>Mini belt conveyor (9" x 6 m) with 1 HP motor and worm gearbox</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
                    <ul className='ml-6 list-disc'>  
                        <li>EPA</li>
                        <li>OSHA</li>
                        <li>DOT</li>
                        <li>UL wiring</li>
                    </ul>
                </div>
            </div>
                </div>
                <div className='flex justify-center items-end my-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center w-full h-[60px]'>
                            <div className='border-dotted border-l border-l-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4'>9.58 ft</p>
                            <div className='border-dotted border-r border-r-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14"  // Ajustado para recortar espacio vacío
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='w-[272px] h-[353px] flex items-center justify-center'>
                            <img 
                                src={supportLeft.src} 
                                alt="" 
                                className='max-w-full max-h-full object-contain'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-end w-[90px] h-[353px]'>
                        <div className='border-dotted border-t border-t-white w-full h-full flex items-center justify-center'>
                            <div className='bg-white w-[1px] h-full relative'>
                                <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="6 5 12 10"  // Área ajustada al contenido real
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M5.30711 15.287C5.4232 15.5673 5.69668 15.75 6.00002 15.75H18C18.3034 15.75 18.5768 15.5673 18.6929 15.287C18.809 15.0068 18.7449 14.6842 18.5304 14.4697L12.5304 8.46967C12.2375 8.17678 11.7626 8.17678 11.4697 8.46967L5.46969 14.4697C5.25519 14.6842 5.19103 15.0068 5.30711 15.287Z" 
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='my-3'>
                            <p className='text-white text-lg'>12.94 ft</p>
                        </div>
                        <div className='border-dotted border-b border-b-white w-full h-full flex items-center justify-center'>
                            <div className='bg-white w-[1px] h-full relative'>
                                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="6 8 12 10"  // Área ajustada al contenido real
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M5.30711 8.71299C5.4232 8.43273 5.69668 8.25 6.00002 8.25H18C18.3034 8.25 18.5768 8.43273 18.6929 8.71299C18.809 8.99324 18.7449 9.31583 18.5304 9.53033L12.5304 15.5303C12.2375 15.8232 11.7626 15.8232 11.4697 15.5303L5.46969 9.53033C5.25519 9.31583 5.19103 8.99324 5.30711 8.71299Z" 
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center w-full h-[60px]'>
                            <div className='border-dotted border-l border-l-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4'>25.00 ft</p>
                            <div className='border-dotted border-r border-r-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14"  // Ajustado para recortar espacio vacío
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='h-[353px] w-[744px] flex justify-center items-center'>
                            <img src={supportRight.src} alt="" className='max-w-full max-h-full object-contain'/>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>DRUM DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>9.88 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>3.68 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>3.68 ft</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>ASPHALT TANK DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>12.94 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>4.2 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>5.2 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Capacity:</h1>
                            <p>6,000 lts</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN UNIT DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>10.41 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>6.25 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>5.25 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Capacity:</h1>
                            <p>8 ton</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>29.26 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Support:</h1>
                            <p>Stationary legs</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Chassis width:</h1>
                            <p>8.75 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Total width:</h1>
                            <p>9.58 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Total height:</h1>
                            <p>12.75 ft</p>
                        </div>
                    </div>
                </div>
            </div>
          
        )}

        {activeTab === 2 && (
          <div className='flex flex-col items-center justify-center'>
                <div className='grid grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-center gap-4'>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION & DESIGN</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Low-profile, heavy-duty frame for stability and easy relocation</li>
                        <li>Foldable support legs with preset working height</li>
                        <li>Galvanized bolts and electrostatic automotive paint</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Reinforced front shield and EPDM rubber seals at drum ends</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Electronic control panel with ammeter</li>
                        <li>Digital temperature and asphalt dosing controls</li>
                        <li>Speed variator for mix adjustments</li>
                        <li>Visual, audible, and strobe alarm system</li>
                        <li>Pre-wired cable setup for plug-and-play startup</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FLIGHTS</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>Mixing Flights</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>All mounted on a lightweight chassis with support legs</li>
                        <li>Pull-type hitch with safety coupling</li>
                        <li>Includes braking system and DOT-compliant lighting</li>
                        <li>Compact and stable for relocation when empty</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>ASPHALT STORAGE TANK</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Mounted asphalt tank: 6,000 L capacity</li>
                        <li>Direct heating with 140,000 BTU/hr burner</li>
                        <li>2" pump (2 HP motor)</li>
                        <li>Integrated asphalt agitator for faster startup</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PRODUCTION RATE</h1>
                    <ul className='ml-6 list-disc'>  
                        <li>Nominal: 10 TPH continuous</li>
                        <li>Continuous production for 10 hours (with full tank)</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2'>NADA</div>
            <div className='flex flex-col items-start justify-start gap-4 col-span-1 h-full'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>BURNER SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Modulating diesel burner</li>
                        <li>Total-air design from 1.5 to 3.0 million BTU/hr</li>
                        <li>1.5 HP motor with UV sensors and fuel filtration</li>
                        <li>Meets U.S. safety standards</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Two 3 HP motors for drum rotation</li>
                        <li>Four gearbox reducers</li>
                        <li>1 HP gear pump motor for asphalt injection</li>
                        <li>Siemens-grade motors and wiring</li>
                        <li>110 V system in control cabinet with emergency shutdown</li>
                        <li>20 kW three-phase electric generator</li>
                        <ul className='ml-4'>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">20 Kw in continuous service</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">22 Kw in emergency service</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">220/440 Voltage</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">35 hp Cummins engine</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">110 L diesel tank</li>
                        </ul>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Nomex filter bags (optional)</li>
                        <li>1.5" fiberglass drum and tank insulation</li>
                        <li>Exterior stainless steel tank lining</li>
                        <li>Automotive-grade baked paint for corrosion resistance</li>
                        <li>Guarded moving parts and warning signage for operator safety</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>MIXING & FEEDING SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>External pugmill mixer (5 HP motor, Hardox pads, single shaft)</li>
                        <li>8 Ton mounted aggregate bin with gate adjustment</li>
                        <li>18" wide feeding belt with lagged head pulley</li>
                        <li>Mini belt conveyor (9" x 6 m) with 1 HP motor and worm gearbox</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
                    <ul className='ml-6 list-disc'>  
                        <li>EPA</li>
                        <li>OSHA</li>
                        <li>DOT</li>
                        <li>UL wiring</li>
                    </ul>
                </div>
            </div>
                </div>
                <div className='flex justify-center items-end my-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center w-full h-[60px]'>
                            <div className='border-dotted border-l border-l-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4'>10.22 FT</p>
                            <div className='border-dotted border-r border-r-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14"  // Ajustado para recortar espacio vacío
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='w-[272px] h-[353px] flex justify-center items-center'>
                            <img src={standarLeft.src} alt="" className='max-w-full max-h-full object-contain'/>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-end w-[90px] h-[353px]'>
                        <div className='border-dotted border-t border-t-white w-full h-full flex items-center justify-center'>
                            <div className='bg-white w-[1px] h-full relative'>
                                <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="6 5 12 10"  // Área ajustada al contenido real
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M5.30711 15.287C5.4232 15.5673 5.69668 15.75 6.00002 15.75H18C18.3034 15.75 18.5768 15.5673 18.6929 15.287C18.809 15.0068 18.7449 14.6842 18.5304 14.4697L12.5304 8.46967C12.2375 8.17678 11.7626 8.17678 11.4697 8.46967L5.46969 14.4697C5.25519 14.6842 5.19103 15.0068 5.30711 15.287Z" 
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='my-3'>
                            <p className='text-white text-lg'>12.75 FT</p>
                        </div>
                        <div className='border-dotted border-b border-b-white w-full h-full flex items-center justify-center'>
                            <div className='bg-white w-[1px] h-full relative'>
                                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="6 8 12 10"  // Área ajustada al contenido real
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M5.30711 8.71299C5.4232 8.43273 5.69668 8.25 6.00002 8.25H18C18.3034 8.25 18.5768 8.43273 18.6929 8.71299C18.809 8.99324 18.7449 9.31583 18.5304 9.53033L12.5304 15.5303C12.2375 15.8232 11.7626 15.8232 11.4697 15.5303L5.46969 9.53033C5.25519 9.31583 5.19103 8.99324 5.30711 8.71299Z" 
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center w-full h-[60px]'>
                            <div className='border-dotted border-l border-l-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4'>29.26 FT</p>
                            <div className='border-dotted border-r border-r-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14"  // Ajustado para recortar espacio vacío
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='h-[353px] w-[744px] flex justify-center items-center'>
                            <img src={standarRight.src} alt="" className='max-w-full max-h-full object-contain'/>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>DRUM DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>9.885 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>3.686 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>3.686 ft</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>ASPHALT TANK DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>12.77 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>4.2 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>5.2 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Capacity:</h1>
                            <p>6,000 lts</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN UNIT DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>10.41 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>6.25 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>5.25 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Capacity:</h1>
                            <p>8 ton</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                        <div className='flex justify-between'>
                            <h1>Total length (incluiding hitch):</h1>
                            <p>28.75 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Axle configuration:</h1>
                            <p>Dual 9-lug axles</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Fifth-wheel hitch height:</h1>
                            <p>4.28 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Support:</h1>
                            <p>Pre-set stationary legs</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Transport wheels:</h1>
                            <p>11-22.5 tires</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Chassis width:</h1>
                            <p>8.33 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Total width:</h1>
                            <p>9.37 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Total height:</h1>
                            <p>13.828 ft</p>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {activeTab === 3 && (
          <div className='flex flex-col items-center justify-center'>
                <div className='grid grid-cols-4 justify-center items-center'>
            <div className='flex flex-col items-start justify-center gap-4'>
                <div className='flex flex-col items-start justify-center gap-4 text-white col-span-1'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONSTRUCTION & DESIGN</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Low-profile, heavy-duty frame for stability and easy relocation</li>
                        <li>Foldable support legs with preset working height</li>
                        <li>Galvanized bolts and electrostatic automotive paint</li>
                        <li>Drum made from high-temp resistant alloyed steel</li>
                        <li>Reinforced front shield and EPDM rubber seals at drum ends</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>CONTROL & OPERATION</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Electronic control panel with ammeter</li>
                        <li>Digital temperature and asphalt dosing controls</li>
                        <li>Speed variator for mix adjustments</li>
                        <li>Visual, audible, and strobe alarm system</li>
                        <li>Pre-wired cable setup for plug-and-play startup</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>FLIGHTS</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Inlet Flights</li>
                        <li>Drying Veiling Flights</li>
                        <li>Radiation Flights</li>
                        <li>Heating Flights</li>
                        <li>Mixing Flights</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PORTABILITY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Mounted on a heavy-duty reinforced chassis for transporting the full-loaded plant.</li>
                        <li>25-ton load capacity with double Kenworth axles rated at 60,000 lbs.</li>
                        <li>Includes eight 11-22.5 tires, Wallace Forge pull-type hitch, suspension, brakes, and road lighting system.</li>
                        <li>Designed for rugged use, allowing relocation with asphalt, aggregates, and fuel loaded</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>ASPHALT STORAGE TANK</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Mounted asphalt tank: 6,000 L capacity</li>
                        <li>Direct heating with 140,000 BTU/hr burner</li>
                        <li>2" pump (2 HP motor)</li>
                        <li>Integrated asphalt agitator for faster startup</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>PRODUCTION RATE</h1>
                    <ul className='ml-6 list-disc'>  
                        <li>Nominal: 10 TPH continuous</li>
                        <li>Continuous production for 10 hours (with full tank)</li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2 bg-red-800 h-full' id='nadaSection'>
                nada
            </div>
            <div className='flex flex-col items-start justify-start gap-4 col-span-1 h-full'>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>BURNER SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Modulating diesel burner</li>
                        <li>Total-air design from 1.5 to 3.0 million BTU/hr</li>
                        <li>1.5 HP motor with UV sensors and fuel filtration</li>
                        <li>Meets U.S. safety standards</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-center gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPONENTS & ELECTRICAL</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Two 3 HP motors for drum rotation</li>
                        <li>Four gearbox reducers</li>
                        <li>1 HP gear pump motor for asphalt injection</li>
                        <li>Siemens-grade motors and wiring</li>
                        <li>110 V system in control cabinet with emergency shutdown</li>
                        <li>20 kW three-phase electric generator</li>
                        <ul className='ml-4'>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">20 Kw in continuous service</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">22 Kw in emergency service</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">220/440 Voltage</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">35 hp Cummins engine</li>
                            <li className="relative pl-5 before:absolute before:left-0 before:top-2 before:h-2
                            before:w-2 before:rounded-full before:border before:border-white 
                            before:bg-transparent">110 L diesel tank</li>
                        </ul>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>DURABILITY & SAFETY</h1>
                    <ul className='ml-6 list-disc'>
                        <li>Nomex filter bags (optional)</li>
                        <li>1.5" fiberglass drum and tank insulation</li>
                        <li>Exterior stainless steel tank lining</li>
                        <li>Automotive-grade baked paint for corrosion resistance</li>
                        <li>Guarded moving parts and warning signage for operator safety</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>MIXING & FEEDING SYSTEM</h1>
                    <ul className='ml-6 list-disc'>
                        <li>External pugmill mixer (5 HP motor, Hardox pads, single shaft)</li>
                        <li>8 Ton mounted aggregate bin with gate adjustment</li>
                        <li>18" wide feeding belt with lagged head pulley</li>
                        <li>Mini belt conveyor (9" x 6 m) with 1 HP motor and worm gearbox</li>
                    </ul>
                </div>
                <div className='flex flex-col items-start justify-start gap-4 text-white'>
                    <h1 className='font-bold lg:text-xl text-lg border-b border-b-white w-full pb-3'>COMPLIANCE WITH INDUSTRY STANDARDS</h1>
                    <ul className='ml-6 list-disc'>  
                        <li>EPA</li>
                        <li>OSHA</li>
                        <li>DOT</li>
                        <li>UL wiring</li>
                    </ul>
                </div>
            </div>
                </div>
                <div className='flex justify-center items-end my-10'>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center w-full h-[60px]'>
                            <div className='border-dotted border-l border-l-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4'>9.37 FT</p>
                            <div className='border-dotted border-r border-r-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14"  // Ajustado para recortar espacio vacío
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='w-[272px] h-[353px]'>
                            <img src={reinforcedLeft.src} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-end w-[90px] h-[353px]'>
                        <div className='border-dotted border-t border-t-white w-full h-full flex items-center justify-center'>
                            <div className='bg-white w-[1px] h-full relative'>
                                <div className='absolute top-0 left-1/2 transform -translate-x-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="6 5 12 10"  // Área ajustada al contenido real
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M5.30711 15.287C5.4232 15.5673 5.69668 15.75 6.00002 15.75H18C18.3034 15.75 18.5768 15.5673 18.6929 15.287C18.809 15.0068 18.7449 14.6842 18.5304 14.4697L12.5304 8.46967C12.2375 8.17678 11.7626 8.17678 11.4697 8.46967L5.46969 14.4697C5.25519 14.6842 5.19103 15.0068 5.30711 15.287Z" 
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='my-3'>
                            <p className='text-white text-lg'>12.828 FT</p>
                        </div>
                        <div className='border-dotted border-b border-b-white w-full h-full flex items-center justify-center'>
                            <div className='bg-white w-[1px] h-full relative'>
                                <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="6 8 12 10"  // Área ajustada al contenido real
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M5.30711 8.71299C5.4232 8.43273 5.69668 8.25 6.00002 8.25H18C18.3034 8.25 18.5768 8.43273 18.6929 8.71299C18.809 8.99324 18.7449 9.31583 18.5304 9.53033L12.5304 15.5303C12.2375 15.8232 11.7626 15.8232 11.4697 15.5303L5.46969 9.53033C5.25519 9.31583 5.19103 8.99324 5.30711 8.71299Z" 
                                            fill="#ffffff"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center w-full h-[60px]'>
                            <div className='border-dotted border-l border-l-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute left-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M15.287 18.6929C15.5673 18.5768 15.75 18.3033 15.75 18V5.99998C15.75 5.69663 15.5673 5.42315 15.287 5.30707C15.0068 5.19098 14.6842 5.25515 14.4697 5.46965L8.46967 11.4696C8.17678 11.7625 8.17678 12.2374 8.46967 12.5303L14.4697 18.5303C14.6842 18.7448 15.0068 18.809 15.287 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <p className='text-white lg:text-lg text-base w-full text-center mx-4'>28.75 FT</p>
                            <div className='border-dotted border-r border-r-white h-full w-full flex items-center justify-center'>
                                <div className='bg-white h-[1px] w-full relative'>
                                    <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
                                    <svg 
                                        width="8" 
                                        height="8" 
                                        viewBox="8 5 8 14"  // Ajustado para recortar espacio vacío
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="block p-0 m-0 overflow-visible"
                                        style={{ shapeRendering: 'crispEdges' }}
                                        >
                                        <path 
                                            fill-rule="evenodd" 
                                            clip-rule="evenodd" 
                                            d="M8.71299 18.6929C8.43273 18.5768 8.25 18.3033 8.25 18V5.99998C8.25 5.69663 8.43273 5.42315 8.71299 5.30707C8.99324 5.19098 9.31583 5.25515 9.53033 5.46965L15.5303 11.4696C15.8232 11.7625 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.31583 18.7448 8.99324 18.809 8.71299 18.6929Z" 
                                            fill="#ffffff"
                                        />
                                        </svg>
                                    </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className='h-[353px] w-[744px]'>
                            <img src={reinforcedRight.src} alt="" />
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-4 justify-center items-start w-full mt-10 gap-10'>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>DRUM DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>9.885 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>3.686 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>3.686 ft</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>ASPHALT TANK DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>12.77 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>4.2 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>5.2 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Capacity:</h1>
                            <p>6,000 lts</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>BIN UNIT DIMENSIONS</h1>
                        <div className='flex justify-between'>
                            <h1>Length:</h1>
                            <p>10.41 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Width:</h1>
                            <p>6.25 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Height:</h1>
                            <p>5.25 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Capacity:</h1>
                            <p>8 ton</p>
                        </div>
                    </div>
                    <div className='text-white font-normal'>
                        <h1 className='lg:text-xl text-lg border-b border-b-white w-full pb-3 mb-3'>CHASSIS & STRUCTURE</h1>
                        <div className='flex justify-between'>
                            <h1>Total length (incluiding hitch):</h1>
                            <p>28.75 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Axle configuration:</h1>
                            <p>Dual 9-lug axles</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Fifth-wheel hitch height:</h1>
                            <p>4.28 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Support:</h1>
                            <p>Pre-set stationary legs</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Transport wheels:</h1>
                            <p>11-22.5 tires</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Chassis width:</h1>
                            <p>8.33 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Total width:</h1>
                            <p>9.37 ft</p>
                        </div>
                        <div className='flex justify-between'>
                            <h1>Total height:</h1>
                            <p>13.828 ft</p>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
});

export default TabsPlane;