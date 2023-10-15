import React, {useState} from 'react';
import {fadeIn} from "../../variants";
import {motion} from "framer-motion";
import {IoCloseOutline} from 'react-icons/io5'


const WorkModal = (props: any) => {


    return (
        <div>
            <div className='absolute right-2 top-2 hover:scale-110 duration-200 cursor-pointer'
                 onClick={props.button}
            >
                <IoCloseOutline className='text-4xl text-white'/>
            </div>
            <div className='hidden md:flex flex-1 max-w-[320px] lg:max-w-[482px] mx-auto pb-4'>
                <img className='rounded-bl-[40px] rounded-tr-[40px]' src={props.img}/>
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
            </div>
        </div>
    );
};

export default WorkModal;