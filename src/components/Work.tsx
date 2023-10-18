import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import WorkCont from "./work/WorkCont";
import {workContModal} from '../data/pl/forntDataPl'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import {Pagination, Navigation, Grid} from "swiper";


export default function Work() {


    return (
        <section className='w-full h-full lg:section py-[10px]' id='work'>
            <div className='container mx-auto'>
                <motion.div
                    variants={fadeIn('left', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    // wstaw motion div
                    className='flex flex-col gap-x-10'>
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
                    <Swiper
                        modules={[Pagination, Navigation, Grid ]}
                        loop={false}
                        navigation={true}
                            spaceBetween={20}
                        breakpoints={
                            {
                                600: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                780: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                            }
                        }
                        grid={{
                            rows: 2,
                            fill: 'row',
                        }}

                        pagination={{
                            clickable: true,
                        }}


                        className='productSlider w-full h-full'
                    >

                        <div>
                            {workContModal.map((data) => {
                                return (
                                    <SwiperSlide key={data.id}>
                                        <WorkCont key={data.id} data={data}/>
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )

};