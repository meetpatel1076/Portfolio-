import React from 'react'
import MaskedHeading from '../animation/MaskedHeading'
import { ExternalLink } from 'lucide-react';
import TechJourney from './TechJourney';


const About = () => {
    return (
        <section
            id="about"
            className="relative  w-full px-6 py-19 text-white sm:px-10 lg:px-20"
        >
            <div className="mx-auto max-w-7xl">

                {/* Section heading */}
                <div className="mb-16 flex items-center gap-4">
                    <span className="font-mono text-sm text-violet-400">01 /</span>
                    <span className="h-px w-16 bg-white/15" />
                    <span className="text-sm uppercase tracking-[0.25em] text-white/45">
                        About
                    </span>
                </div>

                {/* Main content */}
                <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">

                    {/* Intro */}
                    <div>

                        <MaskedHeading text="BUILD DIGITAL PRODUCTS."  src="/image.jpg" fillScale={1.25} parallax={26} drift={18} brightness={1} saturation={1} grayscale={false} reveal="rise" duration={1.1} stagger={0.09} align="left" weight={800} tracking={-0.04} lineHeight={0.95} textScale={0.11}
                        />

                        <p className="mt-10 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                            I'm a frontend developer with a goal: to build products that actually solve people's problems. That's how I believe an engineer contributes to the world.
                        </p>


                    </div>

                    {/* Personality */}
                    <a href="https://www.linkedin.com/in/meet-patel-3640b8234/">
                               
                          
                    <div className="rounded-sm border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xs sm:p-8">
                        <p className="mb-8 font-mono text-xs uppercase tracking-[0.25em] text-white/40">
                            Profile
                        </p>

                        <div className="space-y-5">
                            
                             <div className="flex items-center gap-4">
                                    <img className='h-40 rounded-sm' src="/image2.png" alt="" />
                                    <div className='flex flex-col gap-2 md:gap-4 lg:gap-6'>
                                        <p className="font-medium text-xl">Meet Patel</p>
                                        <p className="text-sm text-white/40">MERN Stack Developer | Turning ideas into products that solve real problems.</p>

                                        <div className='flex items-center gap-2 text-white/40'><ExternalLink size={18} /><p>Linkdin</p></div>
                                    </div>

                                </div>
                        </div>
                    </div>
                      </a>
                </div>



<TechJourney/>
            </div>
        </section>
    )
}

export default About
