import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import WorkCont from "./work/WorkCont";
import {workContModal} from '../data/pl/forntDataPl'



export default function Work() {


    return (
        <section className='w-full h-full py-[4px]' id='work'>
            <div className='container mx-auto'>
                <div
                    // wstaw motion div
                    className='flex flex-col gap-x-10 '>
                    <div
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight text-accent'>Moje ostatnie <br/>projekty:
                            </h2>
                            <p className='max-w-sm mb-16'>
                                Jestem otwarty na projekty kazdego rodzaju.
                            </p>
                            <a href="https://github.com/Atlon1?tab=repositories">
                                <button className='btn btn-sm mb-10'> Wszystkie projekty</button>
                            </a>
                        </div>

                    </div>
                    <div
                        className='grid grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 lg:mt-16 xl:mt-0 '>
                        {workContModal.map((data) => {
                            return (
                                <WorkCont key={data.id} data = {data}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )

};