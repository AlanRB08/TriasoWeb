import React from 'react'

const Collapsable = () => {
  return (
    <div className='w-full flex flex-col gap-2 justify-center'>
        <div className='w-full flex justify-between h-[40px] bg-white gap-4'>
            <div className='w-3 h-full bg-blueMain'>

            </div>
            <div>
                <h2>PCL and HMI Integration</h2>
                <br />
                <p>
                    The silo operates with a Programmable Logic Controller (PLC) and Proface HMI for seamless 
                    control and monitoring. The system allows for easy interface management and ensures precise handling
                     of all silo functions.
                </p>
            </div>
            <div>
                <h1>Icon</h1>
            </div>
        </div>
    </div>
  )
}

export default Collapsable