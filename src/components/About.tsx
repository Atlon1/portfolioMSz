import React from 'react';
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";


const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    return (
        <section className='section' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className=' flex '>

                    <div
                        // variants={fadeIn('left', 0.3)}
                        // initial='hidden'
                        // whileInView={'show'}
                        // viewport={{once: false, amount: 0.3}}
                        className='flex-1'>
                        <h2 className='h2 text-accent'>Technologie.</h2>
                        <h3 className='h3 mb-4'> Moj obecny stack technologiczny to:</h3>
                        <p className='mb-6'>
                            Java script(path, comand, Fs, cli),<br/>
                            React (aos, firebase, typed, dycznamiczne strony www),<br/>
                            Node Js(Mongose DB, Axios, Express),<br/>
                            TypeScript..<br/>
                            Caly czas poszerzam swoje umiejętności, (obecnie UX/Ui, Tailwind CSS)
                        </p>
                        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient'>
                                    {
                                        inView ? <CountUp start={0} end={1} duration={3}/> : null
                                    }

                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Lata <br/>
                                    Doświadczenia
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient'>
                                    {
                                        inView ? <CountUp start={0} end={5} duration={3}/> : null
                                    }
                                    ++
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Projekty <br/>
                                    Gotowe
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient'>
                                    {
                                        inView ? <CountUp start={0} end={10} duration={3}/> : null
                                    }
                                    ++
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Usatysfakjonowani <br/>
                                    klienci
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-8 items-center'>
                            <button className='btn btn-lg'>Contact me</button>
                            <a href='#' className='text-gradient btn-link'>
                                My Portfolio
                            </a>
                        </div>
                    </div>
                    {/*<div*/}
                    {/*    // variants={fadeIn('right', 0.3)}*/}
                    {/*    // initial='hidden'*/}
                    {/*    // whileInView={'show'}*/}
                    {/*    // viewport={{once: false, amount: 0.3}}*/}
                    {/*    className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'*/}
                    {/*/>*/}
                    <div className='flex flex-wrap gap-1 md:gap-5 w-3/4 h-4/5 justify-center self-center content-center'>
                        <div className='flex flex-col items-center justify-between w-24 lg:h-32'>
                            <img
                                className='w-11 max-h-11 hidden lg:flex lg:max-w-[482px] mx-auto'
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/1200px-WebStorm_Icon.svg.png"/>
                            <h3 className='break-words text-center leading-none'>Webstorm</h3>
                            <div className='flex'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                     className="h-6 hidden lg:flex lg:max-w-[482px] mx-auto" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/>
                                    </g>
                                </svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                     className="h-6 hidden lg:flex lg:max-w-[482px] mx-auto" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/>
                                    </g>
                                </svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                     className="h-6 hidden lg:flex lg:max-w-[482px] mx-auto" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/>
                                    </g>
                                </svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                     className="h-6 hidden lg:flex lg:max-w-[482px] mx-auto" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7z"/>
                                    </g>
                                </svg>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24"
                                     className="h-6 hidden lg:flex lg:max-w-[482px] mx-auto" height="1em" width="1em"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="none" d="M0 0h24v24H0z"/>
                                        <path d="M12 17l-5.878 3.59 1.598-6.7-5.23-4.48 6.865-.55L12 2.5l2.645 6.36 6.866.55-5.231 4.48 1.598 6.7L12 17zm0-2.344l2.817 1.72-.766-3.21 2.507-2.147-3.29-.264L12 7.708l-1.268 3.047-3.29.264 2.507 2.147-.766 3.21L12 14.657z"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
