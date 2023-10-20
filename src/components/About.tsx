import React from 'react';
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import SkillComp from "./About/SkillComp";
import {Link} from "react-scroll";
import {AboutPl} from '../data/pl/forntDataPl'
import {AboutEng} from "../data/ang/forntDataEng";




const About = () => {
    const {singleWord, description, github, skillsList} = localStorage.getItem('lang') === 'pl' ? AboutPl : AboutEng
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    return (
        <section className='w-full h-full lg:section' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className=' flex md:flex-row flex-col '>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1'>
                        <h2 className='h2 text-accent'>{singleWord[0]}</h2>
                        <h3 className='h3 mb-4'>{singleWord[1]}</h3>
                        <p className='mb-6'>
                            {description}
                        </p>
                        <div className='flex flex-1 sm:flex-row flex-col gap-x-6 lg:gap-x-10 mb-12 max-h-[284px]'>
                            <div>
                                <div className='text-[35px] font-tertiary text-gradient2'>
                                    {
                                        inView ? <CountUp start={0} end={2} duration={3}/> : null
                                    }

                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    {singleWord[2]}<br/>
                                    {singleWord[3]}
                                </div>
                            </div>
                            <div>
                                <div className='text-[35px] font-tertiary text-gradient2'>
                                    {
                                        inView ? <CountUp start={0} end={8} duration={3}/> : null
                                    }
                                    {singleWord[4]}
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    {singleWord[5]} <br/>
                                    {singleWord[6]}
                                </div>
                            </div>
                            <div>
                                <div className='text-[35px] font-tertiary text-gradient2'>
                                    {
                                        inView ? <CountUp start={0} end={10} duration={3}/> : null
                                    }
                                    {singleWord[4]}
                                </div>
                                <div className='font-primary text-sm tracking-[2px]'>
                                    {singleWord[7]}<br/>
                                    {singleWord[8]}
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-8 items-center mb-12'>
                            <button className='btn btn-lg'>
                                <Link to="contact"
                                      activeClass='active'
                                      smooth={true}
                                      spy={true}>
                                    {singleWord[9]}
                                </Link>
                            </button>
                            <a href={github} className='text-gradient2 btn-link'>
                                {singleWord[10]}
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.5}}
                        className='flex flex-wrap gap-1 md:gap-5 w-3/4 h-4/5 justify-center self-center content-center '>
                        {skillsList.map((skillList)=> {
                            return (
                                <SkillComp
                                    key={skillList.id}
                                    skillList={skillList}
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