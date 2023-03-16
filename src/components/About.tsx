import React from 'react';
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {CgOculus} from "react-icons/all";

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section className='section' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className=' flex '>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3}}
                        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'/>
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.3}}
                        className='flex-1'>
                        <h2 className='h2 text-accent'>About me.</h2>
                        <h3 className='h3 mb-4'> I.m FreeLance developer with 5 yeats of expirience. </h3>
                        <p className='mb-6'> lorem loreml orem lorem lorem loreml orem loremlorem loreml orem loremlorem
                            loreml orem loremlorem loreml orem loremlorem loreml orem loremlorem loreml orem loremlorem
                            loreml orem loremlorem loreml orem lorem </p>
                        <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient'>
                                    {
                                        inView ? <CountUp start={0} end={1} duration={3}/> : null
                                    }

                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Years of <br/>
                                    Experience
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient'>
                                    {
                                        inView ? <CountUp start={0} end={5} duration={3}/> : null
                                    }

                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Project <br/>
                                    Completed
                                </div>
                            </div>
                            <div>
                                <div className='text-[40px] font-tertiary text-gradient'>
                                    {
                                        inView ? <CountUp start={0} end={10} duration={3}/> : null
                                    }

                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    Satisfied <br/>
                                    Clients
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-8 items-center'>
                            <button className='btn btn-lg'>Contact me</button>
                            <a href='#' className='text-gradient btn-link'>
                                My Portfolio
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
