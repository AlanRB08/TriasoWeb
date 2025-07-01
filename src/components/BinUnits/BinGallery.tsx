import React from 'react'
import BinSlider from '../BinUnits/BinSlider';

const BinGallery = () => {
  return (
    <div className='w-full grid grid-cols-1 lg:grid-cols-2 justify-center items-center mt-20 gap-10'>
        <div className='flex flex-col gap-6'>
            <div className='text-white bg-redBg p-4 font-bold md:rounded-r-2xl'>
                <h1 className='text-2xl md:text-3xl pl-8 md:pl-52'>Options to Meet Any Need</h1><br />
                <p className='pl-8 md:pl-52'>Our bin units offer versatile features such as flow detectors
                     for precise monitoring, level indicators to prevent overflow,
                      and vibrators to ensure smooth material flow. Customizable with
                       bin dividers, extensions, and grizzlies, they adapt to diverse
                        material handling requirements, delivering efficiency and reliability
                         in any application.
                </p>
            </div>
            <div className='text-white bg-blueMain p-4 font-bold md:rounded-r-2xl'>
                <h1 className='text-2xl md:text-3xl pl-8 md:pl-52'>Belt Feeders with Rubberized Pulleys</h1><br />
                <p className='pl-8 md:pl-52'>Our belt feeders are equipped with rubberized head
                     and tail pulleys, ensuring superior grip and minimizing slippage during
                      operation. This design enhances durability, reduces wear on the belt,
                       and provides reliable performance, even under heavy loads or challenging 
                       conditions.
                </p>
            </div>
        </div>
        <div className=' bg-white h-full w-full rounded-2xl'>
            <BinSlider />
        </div>
    </div>
  )
}

export default BinGallery