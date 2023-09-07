import React from 'react';
import Image from '../assets/atlon_doit_steampunk_style_7ca45451-cd20-4701-9013-4bc324c64832-removebg-preview.png';
import {FaGithub} from 'react-icons/fa'
import {RiFilePaper2Line} from 'react-icons/ri'
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {Link} from "react-scroll";
import ParticlessConteiner from "./ParticlessConteiner";

const Banner = () => {

    return <section className='min-h-[75vh] lg:min-h-[78vh] flex items-center' id='home'>
        <ParticlessConteiner/>
        <div className='container mx-auto z-20'>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                <div className='flex-1 text-center font-secondary lg:text-left'>
                    <motion.h1
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className='text-[55px] font-bold leading-[0.8] lg:text-[60px] mb-6'>
                        Maciej <span>Szajstek</span>
                    </motion.h1>
                    <motion.div
                        variants={fadeIn('up', 0.4)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className='mb-6 text-[22px] sm:text-[36px] max-w-full font-secondary font-semibold leading-[1]'>
                        <span className='text-white mr-4'>Jestem:</span>
                        <TypeAnimation
                            sequence={[
                                'Front Developerem',
                                3000,
                                'Projektantem Ui/Ux',
                                3000,
                                'Inżynierem',
                                3000
                            ]}
                            speed={30}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}/>
                    </motion.div>
                    <motion.p
                        variants={fadeIn('up', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className='mb-8 max-w-lg mx-auto lg:mx-0'>
                        Cześć! <br/>
                        Naukę front-endu rozpocząłem rok temu, od Kursu w Coders Lab's. Zdecydowałem się na język JS,
                        ponieważ uważam że jest on najbardziej przystępny. Po za tym widzę ogrom możliwości jakie za
                        sobą niesie.
                        Poniżej znajdują się pierwsze moje aplikacje webowe. Z czasem będę dokładał ich coraz to więcej.
                        Na co dzień pracuję jako Technolog.
                        w obecnej pracy zobaczyłem jakie korzyści ze sobą niesie programowanie po przez automatyzowanie
                        bieżącej pracy oraz ograniczanie błędów,
                        ztąd pomysł na naukę.
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.6)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className='flex max-m-max gap-x-6 items-center mb-6 mx-auto lg:mx-0 md:justify-center lg:justify-start justify-center'>
                        <button className='btn btn-lg'>
                            <Link to="contact"
                                  activeClass='active'
                                  smooth={true}
                                  spy={true}>
                                Kontakt
                            </Link>
                        </button>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.8)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className='flex text-[40px] gap-x-4 max-w-max mx-auto lg:mx-0 justify-centers'>
                        <div
                            className='flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0 justify-centers hover:text-accent transition-all'>
                            <a href='https://github.com/Atlon1'>
                                <FaGithub/>
                            </a>
                        </div>
                        <div
                            className='flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0 justify-centers hover:text-accent transition-all'>
                            <a href='https://drive.google.com/file/d/18g4x_tJHOikxTOzYGgOj3k3tYqjRhODm/view?usp=drive_link'>
                                <RiFilePaper2Line/>
                            </a>
                        </div>

                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn('down', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    className='hidden lg:flex flex-1 max-w-[480px] lg:max-w-[650px] md:bottom-40 bottom-60 right-20 z-20'>
                    <img
                        src={Image} alt='MaciejSz'/>

                </motion.div>
            </div>
        </div>
    </section>;
};

export default Banner;