import React, {useState} from 'react';
import {fadeIn} from "../../variants";
import {motion} from "framer-motion";


const WorkModal = (props: any) => {


    if (!props.visible) return null

    else {
        return (
            <div
                className="bg-black bg-opacity-80 w-full h-full fixed top-0 left-0 flex justify-center items-center "
                style={
                    {
                        opacity: `${props.opacity}`,
                        zIndex: `${props.index}`
                    }
                }
            >
                <motion.div
                    variants={fadeIn('down', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='class="flex flex-col absolute bg-gradient-to-l bg-modal bg-cover max-w-[100%] max-h-[100%] lg:w-[700px] rounded-xl p-4'
                    style={
                        {
                            transform: "translateY(1px) translateZ(0px)"
                        }
                    }
                >
                    <div className='hidden md:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto pb-4'>
                        <img src={props.img}/>
                    </div>
                    <div className='mb-1'>
                        <p className='text-gradient'>{props.text}</p>
                        <h2 className='text-3xl text-white'>{props.description}</h2>
                    </div>
                    <div className='flex flex-col gap-2 text-black'>
                        <div className='flex flex-wrap'>
                            <div className='text-accent m-1 px-2 bg-white rounded-lg'>{props.technology}</div>
                        </div>
                        <div className='flex flex-wrap lg:flex-nowrap text-xl'>
                            <div className='font-semibold '>{props.autor}</div>
                            <div className='mx-2 italic'>{props.name}</div>
                        </div>
                        <p className='indent-4 leading-5 text-justify'>{props.description2}</p>
                        <p className='text-sm text-justify italic'>{props.note}</p>
                        <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                            <a href={props.link}>
                                <button className='btn btn-sm'>Źródło</button>
                            </a>
                        </div>
                        <div className='text-gradient text-sm cursor-pointer'
                             onClick={props.button}
                        > Zamknij okno
                        </div>
                    </div>
                </motion.div>
            </div>
        );
    }
};

export default WorkModal;