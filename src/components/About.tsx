import React from 'react';
import CountUp from "react-countup";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import SkillComp from "./About/SkillComp";
import {Link} from "react-scroll";
import Rounded from "../assets/rounded-text.png"
import {HiArrowRight} from 'react-icons/hi';
import {AboutPl} from '../data/pl/forntDataPl'
import {AboutEng} from "../data/ang/forntDataEng";
import {AboutPlMechanic} from "../data/pl/TechDataPl";
import {AboutEngMechanic} from "../data/ang/TechDataEng";


const About = () => {
    const {singleWord, description, github, skillsList, count} = localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'mechanics' ? AboutPlMechanic :
        localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'front' ? AboutPl :
            localStorage.getItem('lang') === 'eng' && localStorage.getItem('tech') === 'mechanics' ? AboutEngMechanic : AboutEng
    const [ref, inView] = useInView({
        threshold: 0.5,
    })

    return (
        <section className='w-full h-full lg:section' id='about' ref={ref}>
            <div className='container mx-auto'>
                <div className=' flex md:flex-row flex-col'>
                    <motion.div
                        variants={fadeIn('right', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
                        className='flex-1'>
                        <h2 className='h2 text-accent'>{singleWord[0]}</h2>
                        <h3 className='h3 mb-4'>{singleWord[1]}</h3>
                        <p className='mb-6 w-full max-w-[455px] text-lg text-center sm:text-left'>
                            {description}
                        </p>
                        <div
                            className='flex flex-1 sm:flex-row flex-col gap-x-6 lg:gap-x-10 mb-12 max-h-[284px] w-full max-w-[455px]'>
                            <div>
                                <div className='text-[35px] font-tertiary text-gradient2'>
                                    {
                                        inView ? <CountUp start={0} end={count[0]} duration={3}/> : null
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
                                        inView ? <CountUp start={0} end={count[1]} duration={3}/> : null
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
                                        inView ? <CountUp start={0} end={count[2]} duration={3}/> : null
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
                            <a href={github}
                               className='relative w-[185px] h-[185px] flex justify-center items-center'>
                                <img className='animate-spin-slow w-full h-full max-w-[141px] max-h-[141px]'
                                    src={Rounded} alt='rounded'/>
                                <HiArrowRight className='absolute text-4xl hover:translate-x-2 transition-all duration-300'/>
                            </a>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.1)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
                        className='flex flex-wrap gap-1 md:gap-5 w-2/4 h-4/5 justify-center self-center content-center '>
                        {skillsList.map((skillList) => {
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