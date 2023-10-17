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

    return <section className='w-full h-full lg:section py-[10px]' id='home'>
        <ParticlessConteiner/>
        <div className='container mx-auto z-[10]'>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                <div className='flex-1 text-center font-secondary lg:text-left'>
                    <motion.h1
                        variants={fadeIn('up', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.7}}
                        className='hidden sm:block text-[35px] sm:text-[55px] font-bold leading-[0.8] lg:text-[60px] mb-6'>
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
                        className='mb-2 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-[14px] sm:text-[18px]'>
                        Cześć! <br/>
                        Rozpocząłem naukę front-endu w grudniu 2021 roku, uczestnicząc w kursie organizowanym przez
                        Coders Lab. Wybrałem język JavaScript, uważając, że jest on najbardziej przystępny i oferuje
                        ogromne możliwości. Poniżej znajdują się moje pierwsze aplikacje webowe, a z czasem planuję
                        tworzyć ich coraz więcej. Codziennie pracuję jako technolog, a w mojej obecnej pracy dostrzegłem
                        korzyści płynące z programowania, takie jak automatyzacja bieżących zadań i ograniczanie błędów.
                        To właśnie to zainspirowało mnie do nauki front-endu, a mój ogromny zapał do pracy sprawia, że
                        chcę rozwijać się jeszcze bardziej w tej dziedzinie.
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
                        className='flex text-[40px] gap-x-4 max-w-max mx-auto lg:mx-0 justify-centers mb-32'>
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
                    className='hidden lg:flex flex-1 max-w-[480px] lg:max-w-[650px] md:bottom-40 bottom-60 right-20 '>
                    <img
                        src={Image} alt='MaciejSz'/>

                </motion.div>
            </div>
        </div>
    </section>;
};

export default Banner;