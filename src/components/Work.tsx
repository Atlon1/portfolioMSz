import React, {useState} from 'react';

import {motion} from "framer-motion";
import {fadeIn} from "../variants";

import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';

const Work = () => {

    const [open, setOpen] = useState(false)
    const [windowProp, setWindowProp] = useState({
        opacity: "0"
    })

    const handleWin = () => {
        setOpen(!open)
        if ( open === false){
            setWindowProp({...windowProp, opacity: "1"})
        } else {
            setWindowProp({...windowProp, opacity: '0'})
        }
    }


    return (
        <section className='section' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10 '>
                    <div
                        // variants={fadeIn('right', 0.3)}
                        // initial='hidden'
                        // whileInView={'show'}
                        // viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight text-accent'>My Lastest <br/>
                                work
                            </h2>
                            <p className='max-w-sm mb-16'>
                                Lorem, ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem,
                                ipsum dolor sit amet Lorem, ipsum dolor sit amet Lorem,
                            </p>
                            <button className='btn btn-sm'>View all projects</button>
                        </div>
                        <div
                            className='group relative overflow-hidden border-2 border-white/50 rounded-2xl cursor-pointer'
                            onClick={handleWin}>
                            <div
                                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'/>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>UI/UX Design</span>
                            </div>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                    </div>
                    <div
                        // variants={fadeIn('left', 0.2)}
                        // initial='hidden'
                        // whileInView={'show'}
                        // viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-10 lg:mt-16 xl:mt-0 '>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-2xl'>
                            <div
                                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'/>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>UI/UX Design</span>
                            </div>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-2xl'>
                            <div
                                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'/>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>UI/UX Design</span>
                            </div>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                                <span className='text-3xl text-white'>Project Title</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 z-20 flex justify-center items-center overflow-y-auto"
                        style={
                            {
                                opacity: windowProp.opacity
                            }
                        }
                        >
                        <div className='class="flex flex-col absolute bg-gradient-to-l from-[#A3D4C8] to-[#E8BAC2] max-w-[90%]
                         max-h-[90%] lg:w-[700px] border-2 border-white/50 rounded-xl p-6 overflow-y-auto"'>
                            <div className='hidden md:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto pb-4'>
                                <img/>
                            </div>
                            <div className='mb-1'>
                                <p className='text-gradient'>Text</p>
                                <h2 className='text-3xl text-white'>Opis</h2>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-wrap'>
                                    <div className='text-accent m-1 px-2 bg-white rounded-lg'>Tech</div>
                                    <div className='text-accent m-1 px-2 bg-white rounded-lg'>Tech</div>
                                    <div className='text-accent m-1 px-2 bg-white rounded-lg'>Tech</div>
                                </div>
                                <div className='flex flex-wrap lg:flex-nowrap text-xl'>
                                    <div className='font-semibold'>autor</div>
                                    <div className='mx-2 italic'>Imie</div>
                                </div>
                                <p className='indent-4 leading-5 text-justify'>Opis</p>
                                <p className='text-sm text-justify italic'>Notatka</p>
                                <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                                    <a href='#'>
                                        <button className='btn btn-sm'>Źródło</button>
                                    </a>
                                </div>
                                <div className='text-gradient text-sm cursor-pointer'
                                     onClick={handleWin}
                                > Zamknij okno</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Work;
