import React from 'react'
import reinfo1 from '../../assets/images/IntegralAsphalt/reinfo1.png';
import reinforcedBlue from '../../assets/images/IntegralAsphalt/reinforced.png';
import UnitSwitch from './UnitSwitch';
import TabsPlane from './TabsPlane';



const PlanoSection = () => {
  
  return (
    <div className='w-full flex flex-col items-center justify-center bg-green-400'>
      <div className='px-8 md:px-52 relative'>
        <div>
          <img src={reinfo1.src} alt="" className='w-[314px] h-[860px]' />
        </div>
        <div className='absolute top-0'>
          <img src={reinforcedBlue.src} alt="" className='w-[314px] h-[860px]'/>
        </div>
      </div>
      <div className="bg-[url('/fondopatron.png')] bg-cover bg-center w-full flex flex-col items-center justify-start">
        <header className='mt-10 text-white'>
          <h1 className="lg:text-4xl text-2xl pb-3 border-b-2 border-b-white text-center">Specifications</h1>
          <div className='flex items-center justify-center mt-10'>
              <h1 className='mr-3'>MEASURE:</h1>
              <UnitSwitch  onChange={(unit) => {
  console.log('Sistema cambiado a:', unit);
  // Aquí puedes cambiar tus variables dependiendo de "value"
}}/>
          </div>
        </header>
        <TabsPlane />
      </div>
    </div>
    
  )
  
}

export default PlanoSection;