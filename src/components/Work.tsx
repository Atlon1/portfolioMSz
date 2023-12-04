import React from 'react';
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import WorkCont from "./work/WorkCont";
import {workContModal, workDescription} from '../data/pl/forntDataPl'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import {Pagination, Navigation, Grid} from "swiper";
import {workDescriptionEng, workContModalEng} from "../data/ang/forntDataEng";
import {workDescriptionEngMechanic, workContModalEngMechanic} from "../data/ang/TechDataEng";
import {workDescriptionMechanic, workContModalMechanic} from "../data/pl/TechDataPl";






export default function Work() {



    const {singleWord} = localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'mechanics' ? workDescriptionMechanic :
        localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'front' ? workDescription :
        localStorage.getItem('lang') === 'eng' && localStorage.getItem('tech') === 'mechanics' ? workDescriptionEngMechanic : workDescriptionEng



    return (
        <section className='w-full h-full lg:section py-[10px]' id='work'>
            <div className='container mx-auto'>
                <motion.div
                    variants={fadeIn('left', 0.1)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.1}}
                    className='flex flex-col gap-x-10'>
                    <div
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight text-accent'>{singleWord[0]}<br/>{singleWord[1]}
                            </h2>
                            <p className='max-w-sm mb-16'>
                                {singleWord[2]}
                            </p>
                            <a href="https://github.com/Atlon1?tab=repositories">
                                <button className='btn btn-sm mb-10'> {singleWord[3]}</button>
                            </a>
                        </div>

                    </div>
                    <Swiper
                        modules={[Pagination, Navigation, Grid]}
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
                            {localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'front' ? (
                                workContModal.map((data) => {
                                    return (
                                        <SwiperSlide key={data.id}>
                                            <WorkCont key={data.id} data={data}/>
                                        </SwiperSlide>
                                    )
                                })
                            ) : localStorage.getItem('lang') === 'eng' && localStorage.getItem('tech') === 'front' ?(
                                workContModalEng.map((data) => {
                                    return (
                                        <SwiperSlide key={data.id}>
                                            <WorkCont key={data.id} data={data}/>
                                        </SwiperSlide>
                                    )
                                })
                            ) : localStorage.getItem('lang') === 'pl' && localStorage.getItem('tech') === 'mechanics' ? (
                                workContModalMechanic.map((data) => {
                                    return (
                                        <SwiperSlide key={data.id}>
                                            <WorkCont key={data.id} data={data}/>
                                        </SwiperSlide>
                                    )
                                })
                            ) : (
                                workContModalEngMechanic.map((data) => {
                                    return (
                                        <SwiperSlide key={data.id}>
                                            <WorkCont key={data.id} data={data}/>
                                        </SwiperSlide>
                                    )
                                })
                            )}
                        </div>
                    </Swiper>
                </motion.div>
            </div>
        </section>
    )

};