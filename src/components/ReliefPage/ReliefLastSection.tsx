import React from 'react'
import img1 from "../../assets/images/Relief/TriasoOS7.webp"
import img2 from "../../assets/images/Relief/5.webp"

export default function ReliefLastSection() {
    return (
        <div className=''>
            <div className='flex justify-center items-center bg-[#393939] p-10'>
                <div className='max-w-7xl mx-auto px-8'>
                    <h1 className='text-white font-bold text-3xl'>Security and access</h1>
                </div>
            </div>

            <div className='flex flex-col md:flex-row lg:flex-row justify-center'>
                <div className='bg-[#14427c] flex flex-col justify-center items-center w-full p-10'>
                    <div className='max-w-7xl mx-auto text-center'>
                        <h1 className='text-white font-bold text-2xl'>Operation System</h1>
                        <h2 className='text-white font-semibold text-xl'>Unique login</h2>
                        <h2 className='text-white font-semibold text-xl'>for each operator on shift</h2>
                        <div>
                            <ul className='list-disc text-white text-start'>
                                <li>Connection without the need for internet, with access to automatic backups</li>
                                <li>Manual operation always available, with storage of operating data.</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='bg-redBg flex flex-col justify-center items-center w-full p-10'>
                    <div className='max-w-7xl mx-auto text-center'>
                        <h1 className='text-white font-bold text-2xl'>Visualization system</h1>
                        <h2 className='text-white font-semibold text-xl'>Unlimited access</h2>
                        <h2 className='text-white font-semibold text-xl'>for asphalt plant visualization</h2>
                        <div>
                            <ul className='list-disc text-white text-start'>
                                <li>Connection through internet</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' relative flex justify-center items-center pt-5 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${img2.src})`, }}>

                {/* bg */}
                <div className="absolute inset-0 bg-white/80 z-0" />
                {/* contenido */}
                <div className='relative w-full'>
                    <div className='max-w-7xl mx-auto px-8 space-y-5'>
                        <div>
                            <h1 className='font-bold text-4xl text-[#393939] text-center'>Control system upgrades</h1>
                        </div>

                        <div className='space-y-5'>
                            <p className='text-[#14427c] text-xl font-semibold'>We transform outdated operation systems into modern, clear platforms, bringing your plant up to today’s standards with greater efficiency, reliability, and control.</p>
                            <p className='text-[#393939] text-xl font-semibold'>We know every client has unique needs; we adapt each control system—from access points to function integration—aligning it with their specific requirements.</p>
                        </div>

                        <div className='flex justify-center items-center'>
                            <h1 className='font-bold text-4xl text-[#393939] w-1/2 text-center'>Available for monitoring of all Triaso equipment</h1>
                        </div>

                        <div>
                            <img src={img1.src} alt="" />
                        </div>

                        <div className='pb-10'>
                            <p className='font-semibold text-lg text-[#393939]'>Provides the freedom to access detailed, real-time analysis from anywhere and on any device. Decision-making becomes faster, better-founded, and completely independent of physical location.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}