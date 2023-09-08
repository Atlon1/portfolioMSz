import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'

import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const services = [
    {
        name: 'Standaryzacja zakupów narzedzi skrawajacych.',
        description: 'Szczegółowe wyliczenia, pracy przy zakupie narzędzi skrawających. Czas, droga, opis. Opracowano instrukcje po przez przekazanie odpowienich stadnradów zakupwych.',
        link: "https://docs.google.com/presentation/d/1WAkiwveUZdDLS6hEf5K2X5tQFzTpX28f/edit?usp=sharing&ouid=108326513820685031819&rtpof=true&sd=true",
    },
    {
        name: 'Zwiększenie efektywności,maszyn CNC.',
        description: 'Opracowanie oprzyrządowania technologicznego pozwalającego na wykonaywanie jednocześnie kilku elementów na raz. Wydłużenie pracy maszyny o około 40%  w nocy. Możliwość montażu, wszelkiego rodzaju elementów.',
        link: "https://docs.google.com/presentation/d/1vhOrwB_pLfeO0AEj0udgSWfLtJ5OBkEW/edit?usp=sharing&ouid=108326513820685031819&rtpof=true&sd=true",
    },
    {
        name: 'Organizacja pracy maszyn. Layout.',
        description: 'Wyrysowanie planu obszaru pordukcyjnego. Przestawienie maszyn wg. koncjepcji. Opracowanie Harmonogramu Gunta.' +
            ' Nie zakłucając cyklu pordukcyjnego.',
        link: "https://drive.google.com/file/d/1YAwpq1dwBjW5908pk_fGxhCUdbw92j2L/view?usp=sharing",
    },
    {
        name: 'Nowe technologie obróbkowe.',
        description: 'Szczegółowe wyliczenia zakupu nowych technologi obróbki Trochoidalnej. Testy w praktyce.' +
            'Nowa technologia narzedzi skrawających dla nowej strategii obróbki.',
        link: "https://docs.google.com/presentation/d/1mAxj5_qJuB_lBwVAR6FJeGDZtClGsYRT/edit?usp=sharing&ouid=108326513820685031819&rtpof=true&sd=true",
    },
    {
        name: 'Zakup maszyn CNC na potrzeby produkcyjne.',
        description: 'Wytypownie odpowiedniej maszyny, na potrzeby produkcyjne. Negocjacje cenowe dobór odpownienich parametrów maszyny.' +
            'Instalacja. Nadzór nad instalcją w miejscu wskazanym. Podłączenia mediów niezbędnych do pracy.',
        link: "https://docs.google.com/document/d/1v9mfu8JEpAxDnm5dBDthPN3YFefeuInA/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
    },
]

const Services = () => {


    return <section className='section w-full h-full py-[4px] xl:h-screen xl:pb-24' id='services'>
        <div className=' container mx-auto'>
            <div className=' flex flex-col lg:flex-row'>
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
                    <h2 className='h2 text-accent mb-6'>Czym sie zajmuje? </h2>
                    <h3 className='h3 max-w-[455px] mb-16'>Obecnie pracuje jako Technolog CNC, w miedzynarodowej firmie. Dodatkowo kształce się na FreeLance Developer..</h3>
                    <button className='btn btn-sm'>Technologia.</button>
                </motion.div>

                <motion.div
                    variants={fadeIn('left', 0.5)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className='flex-1'>
                    <div>
                        {services.map((services, index) => {
                            const {name, description, link} = services
                            return (
                                <div className='border-b border-white/20 h-max-[260px] mb-[38px] flex' key={index}>
                                    <div className='max-w-[476px]'>
                                        <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                                        <p className='font-secondary leading-tight'>{description}
                                        </p>
                                    </div>
                                    <div className='flex flex-col flex-1 items-end'>
                                        <a
                                            className='btn w-9 h-9 mb-[42px] flex justify-center items-center '
                                            href={link}>
                                            <BsArrowUpRight/>
                                        </a>
                                    </div>
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
