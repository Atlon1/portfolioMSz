import React from 'react';
// import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {servicesPl} from '../data/pl/forntDataPl'
import {servicesEng} from "../data/ang/forntDataEng";
import {servicesEngMechanic} from "../data/ang/TechDataEng";
import {servicesPlMechanic} from "../data/pl/TechDataPl";

const Services = () => {

    const {singleWord, word, services} = localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'mechanics' ? servicesPlMechanic :
        localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'front' ? servicesPl :
        localStorage.getItem('lang') === 'eng' && localStorage.getItem('tech') === 'mechanics' ? servicesEngMechanic : servicesEng


    return <section className='w-full h-full lg:section py-[10px]' id='services'>
        <div className=' container mx-auto'>
            <div className=' flex flex-col lg:flex-row'>
                <motion.div
                    variants={fadeIn('right', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.1}}
                    className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat opacity-10 mb-12 lg:mb-0'>
                    <h2 className='h2 text-accent mb-6'>{singleWord[0]}</h2>
                    <h3 className='h3 max-w-[455px] mb-16'>{word}</h3>
                    {/*Wyłaczono przycisk button z odnosnikiem*/}
                    {/*<button className='btn btn-sm'>{singleWord[1]}</button>*/}
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.1}}
                    className='flex-1'>
                    <div>
                        {services.map((services) => {
                            const {name, description, id} = services
                            return (
                                <div className='border-b border-white/20 h-max-[260px] mb-[38px] flex' key={id}>
                                    <div className='max-w-[476px]'>
                                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                                        <p className='font-secondary leading-tight'>{description}
                                        </p>
                                    </div>
                                    {/*<div className='flex flex-col flex-1 items-end'>*/}
                                    {/*    <a*/}
                                    {/*        className='btn w-9 h-9 mb-[42px] flex justify-center items-center '*/}
                                    {/*        href={link}>*/}
                                    {/*        <BsArrowUpRight/>*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    </section>;
};

export default Services;
