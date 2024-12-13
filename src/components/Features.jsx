import React from 'react'
import BentoCard from './BentoCard'

const Features = () => {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32'>
                    <p className='font-circular-web text-lg text-blue-50'>
                        Into the Metagame layer
                    </p>
                    <p className='max-w-md font-circular-web text-log text-blue-50 opacity-50'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus mollitia dolorum impedit ex, est quas vero odit molestiae adipisci debitis sequi tempora? Reprehenderit temporibus animi eaque doloribus ea aliquid! Excepturi.
                    </p>
                </div>
                <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh] '>
                    <BentoCard src={"videos/feature-1.mp4"}
                        title={<>radi<b>n</b>t</>}

                        description={"impedit ex, est quas vero odit molestiae adipisci debitis sequi tempora? Reprehenderit temporibus animi eaque doloribus ea aliquid! Excepturi."}
                        isComingSoon />
                </div>
            </div>
        </section>
    )
}

export default Features