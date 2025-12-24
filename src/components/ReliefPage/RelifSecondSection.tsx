import React from 'react'
import FeatureCards from './CardsComponent'

export default function RelifSecondSection() {
    return (
        <div className='bg-black space-y-10'>
            <div className='max-w-7xl mx-auto px-8 text-white   '>
                <div className='flex flex-row justify-around items-center gap-5 '>
                    <img src="https://placehold.co/600x400/png" alt="" />
                    <p className='text-xl'>For faster decision-making, better-founded, and completely independent of physical location.</p>
                </div>
                <div className='flex flex-row justify-around items-center'>
                    <p className='text-xl'>With multiple access points through
                        the operation console,
                        remote computers, tablets, and phones.</p>
                    <img src="https://placehold.co/600x400/png" alt="" />
                </div>
            </div>
            <div>
                <div className='flex justify-center max-w-7xl mx-auto'>
                    <p className='text-white text-center font-bold'>All information is also stored securely in the cloud, providing fast, multi-user access for operators, supervisors, and owners—from remote computers, tablets, and mobile phones.
                    </p>
                </div>
            </div>
            <div>
                <FeatureCards />
            </div>

            <div className='flex flex-row max-w-7xl justify-around mx-auto'>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                    Historical reports
                </h1>

                <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Delivered hot-mix reports
                </h1>

            </div>
        </div>
    )
}