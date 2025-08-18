import React from 'react'
import Accordion from '../unitComponents/Accordion'

const Collapsable = () => {
     const faqItems = [
    { title: "PLC and HMI Integration", content: "The silo operates with a Programmable Logic Controller (PLC) and Proface HMI for seamless control and monitoring. The system allows for easy interface management and ensures precise handling of all silo functions." },
    { title: "Real-Time Display", content: "All silo functions, including mix temperature and weighing data, are clearly displayed on the Proface HMI screen for operational transparency." },
    { title: "Enhanced Loading and Unloading Efficiency:", content: "Equipped with load cells for accurate measurement of both stored and delivered hot mix. The system integrates with the PLC for real-time data logging and precise weight control." },
    { title: "Load History", content: "Tracks up to 200 truck loads, storing all relevant data for future reference or analysis." },
    { title: "Automated Ticketing System", content: "The system automatically generates tickets for delivered hot mix, detailing delivery time, weight, mix temperature, and truck identification via barcode or keyboard capture." },
    { title: "Browning Gear Reducers and Steel Pulleys", content: "Power transmissions are equipped with oversized heavy-duty Browning gear reducers and hub-mounted steel pulleys for smooth and efficient power transfer." },
    { title: "Siemens Motors and Electrical Components", content: "Reliable Siemens motors and electrical parts ensure durability and consistent performance." },
    { title: "Sonic sensor of hot mix level inside the silo:", content: "Precisely monitors hot mix levels in real time, optimizing storage and preventing overflows." }
  ];
  return (
    <div className='w-full flex flex-col gap-2 justify-center'>
        <Accordion items={faqItems} />
    </div>
  )
}

export default Collapsable