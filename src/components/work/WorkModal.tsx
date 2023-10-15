import React, {useState} from 'react';
import {fadeIn} from "../../variants";
import {motion} from "framer-motion";

type WorkModalProps = {
    data: {
        img: string,
        text: string,
        description1: string,
        description2: string,
        technology: string[],
        autor: string,
        name: string,
        note: string,
        link: string
    }
}


const WorkModal = ({data: {img, text, description1, description2, technology, autor, name, note, link}}: WorkModalProps) => {


    return (
        <div className='flex flex-col overflow-hidden'>
            <div className='hidden md:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto pb-4'>
                <img className='rounded-bl-[40px] rounded-tr-[40px]' src={img}/>
            </div>
            <div className='mb-1'>
                <p className='text-gradient text-accent'>{text}</p>
                <h2 className='text-3xl text-white'>{description1}</h2>
            </div>
            <div className='flex flex-col gap-2 text-black'>
                <div className='flex flex-wrap'>
                    <div className='flex rounded-lg'>
                        {technology.map((elem)=> {
                            return (
                                <span
                                    className='bg-white rounded-lg text-black px-2 py-1 mx-2'
                                    key={elem}>{elem}</span>
                            )
                        })}

                    </div>
                </div>
                <div className='flex flex-wrap lg:flex-nowrap text-xl'>
                    <div className='font-semibold '>{autor}</div>
                    <div className='mx-2 italic'>{name}</div>
                </div>
                <p className='indent-4 leading-5 text-justify'>{description2}</p>
                <p className='text-sm text-justify italic'>{note}</p>
                <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                    <a href={link}>
                        <button className='btn btn-sm'>Źródło</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WorkModal;