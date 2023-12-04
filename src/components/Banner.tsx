import React, {useCallback, useState} from 'react';
import {FaGithub} from 'react-icons/fa'
import {RiFilePaper2Line} from 'react-icons/ri'
import {TypeAnimation} from "react-type-animation";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {Link} from "react-scroll";
import ParticlessConteiner from "./ParticlessConteiner";
import {bannerPl} from '../data/pl/forntDataPl'
import {bannerEng} from "../data/ang/forntDataEng";
import {bannerPlMechanic} from "../data/pl/TechDataPl";
import {bannerEngMechanic} from "../data/ang/TechDataEng";
import ImageViewer from 'react-simple-image-viewer';
import SiiDyp from '../assets/Certificate/Sii_Dyplom.jpg';
import SiiExam from '../assets/Certificate/Sii_Exam.jpg';
import CLDyp from '../assets/Certificate/CL_Dyplom.jpg';
import CLSup1 from '../assets/Certificate/CL_Sup1.jpg';
import CLSup2 from '../assets/Certificate/CL_Sup2.jpg';


const Banner = () => {
    const {singleWord, typed, description, link, cv, img} = localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'mechanics' ? bannerPlMechanic :
        localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'front' ? bannerPl :
            localStorage.getItem('lang') === 'eng' && localStorage.getItem('tech') === 'mechanics' ? bannerEngMechanic : bannerEng

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const images = [
        SiiDyp, SiiExam, CLDyp, CLSup1, CLSup2
    ]

    const openImageViewer = useCallback((index: number) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, [])

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    }


    return <section className='w-full h-full lg:section py-[10px]' id='home'>
        <ParticlessConteiner/>
        <div className='container mx-auto z-[10]'>
            <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 '>
                <div className='flex-1 text-center font-secondary lg:text-left'>
                    <motion.h1
                        variants={fadeIn('up', 0.1)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
                        className='hidden sm:block text-[35px] sm:text-[55px] font-bold leading-[0.8] lg:text-[60px] mb-6'>
                        {singleWord[0]} <span>{singleWord[1]}</span>
                    </motion.h1>
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
                        className='mb-6 text-[22px] sm:text-[36px] max-w-full font-secondary font-semibold leading-[1]'>
                        <span className='text-white mr-4'>{singleWord[2]}</span>
                        <TypeAnimation
                            sequence={[
                                typed[0],
                                3000,
                                typed[1],
                                3000,
                                typed[2],
                                3000
                            ]}
                            speed={30}
                            className='text-accent'
                            wrapper='span'
                            repeat={Infinity}/>
                    </motion.div>
                    <motion.p
                        variants={fadeIn('up', 0.1)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
                        className='mb-2 sm:mb-8 max-w-lg mx-auto lg:mx-0 text-lg sm:text-[18px]'>
                        {singleWord[3]} <br/>
                        {description}
                    </motion.p>
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
                        className='flex sm:flex-row sm:gap-y-0 gap-y-4 flex-col max-m-max gap-x-6 items-center mb-6 mx-auto lg:mx-0 md:justify-center lg:justify-start justify-center z-[10]'>
                        <button className='btn btn-lg'>
                            <Link to="contact"
                                  activeClass='active'
                                  smooth={true}
                                  spy={true}>
                                {singleWord[4]}
                            </Link>
                        </button>
                        {singleWord[5] &&(
                            <button
                                onClick={() => openImageViewer(0)}
                                className='btn btn-lg'>
                                {singleWord[5]}
                            </button>
                        )}
                    </motion.div>
                    <motion.div
                        variants={fadeIn('up', 0.1)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.1}}
                        className='flex text-[40px] gap-x-4 max-w-max mx-auto lg:mx-0 justify-centers mb-32 z-[10]'>
                        <div
                            className='flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0 justify-centers hover:text-accent transition-all'>
                            <a href={link}>
                                <FaGithub/>
                            </a>
                        </div>
                        <div
                            className='flex text-[40px] gap-x-6 max-w-max mx-auto lg:mx-0 justify-centers hover:text-accent transition-all'>
                            <a href={cv}>
                                <RiFilePaper2Line/>
                            </a>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    variants={fadeIn('down', 0.1)}
                    initial="hidden"
                    whileInView={'show'}
                    className='hidden lg:flex flex-1 max-w-[480px] lg:max-w-[650px]'>
                    <img
                        src={img} alt='MaciejSz'/>
                </motion.div>
            </div>
        </div>
            {isViewerOpen && (
                <div className='z-[30] fixed overflow-y-hidden'>
                <ImageViewer
                    src={images}
                    currentIndex={currentImage}
                    disableScroll={false}
                    closeOnClickOutside={true}
                    onClose={closeImageViewer}
                />
                </div>
            )}
    </section>;
};

export default Banner;