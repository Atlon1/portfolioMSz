import React from 'react';
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {SkillsList} from "./Helpers/SkillsList";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import SkillComp from "./About/SkillComp";
import {Link} from "react-scroll";


const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    return (
        <section className='section' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className=' flex md:flex-row flex-col '>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
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
                        <div className='flex gap-x-8 items-center mb-12'>
                            <button className='btn btn-lg'>
                                <Link to="contact"
                                      activeClass='active'
                                      smooth={true}
                                      spy={true}>
                                    Kontakt
                                </Link>
                            </button>
                            <a href='https://github.com/Atlon1' className='text-gradient btn-link'>
                                My Portfolio
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex flex-wrap gap-1 md:gap-5 w-3/4 h-4/5 justify-center self-center content-center mb-40'>
                        {SkillsList.map((elem, key)=> {
                            return (
                                <SkillComp
                                    key={key}
                                    id={elem.id}
                                    url={elem.url}
                                    text={elem.text}
                                    stars={elem.stars}
                                />
                            )
                        })}

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
