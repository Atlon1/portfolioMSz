import React, {useState} from 'react';

import {motion} from "framer-motion";
import {fadeIn} from "../variants";

import Img1 from '../assets/Oddaj_rzeczy.jpg';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';
import WorkCont from "./work/WorkCont";
import WorkModal from "./work/WorkModal";


export default function Work() {

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)

    const [windowProp, setWindowProp] = useState({
        opacity: "0",
        index: "-2",
        index2: "40"
    })

    const handleWin = () => {
        setOpen(!open)
        if (open === false) {
            setWindowProp({...windowProp, opacity: "1", index: "40", index2: '20'})
            document.body.style.overflowY = "hidden"

        } else {
            setWindowProp({...windowProp, opacity: '0', index: '-2', index2: '40'})
            document.body.style.overflowY = "visible"
        }

    }
    const handleWin2 = () => {
        setOpen2(!open2)
        if (open2 === false) {
            setWindowProp({...windowProp, opacity: "1", index: "40", index2: '20'})
            document.body.style.overflowY = "hidden"

        } else {
            setWindowProp({...windowProp, opacity: '0', index: '-2', index2: '40'})
            document.body.style.overflowY = "visible"
        }

    }
    const handleWin3 = () => {
        setOpen3(!open3)
        if (open3 === false) {
            setWindowProp({...windowProp, opacity: "1", index: "40", index2: '20'})
            document.body.style.overflowY = "hidden"

        } else {
            setWindowProp({...windowProp, opacity: '0', index: '-2', index2: '40'})
            document.body.style.overflowY = "visible"
        }

    }


    return (
        <section className='section ' id='work'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row gap-x-10 '>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
                        <div>
                            <h2 className='h2 leading-tight text-accent'>Moje ostatnie <br/>projekty:
                            </h2>
                            <p className='max-w-sm mb-32'>
                                Jestem otwarty na projekty kazdego rodzaju.
                            </p>
                            <a href="https://github.com/Atlon1?tab=repositories">
                                <button className='btn btn-sm'> View all projects</button>
                            </a>
                        </div>
                        <WorkCont
                            button={handleWin}
                            index2={windowProp.index2}
                            img={Img1}
                            project="Porfolio Porject"
                            title="Oddaj rzeczy"
                        >
                        </WorkCont>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.2)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.3}}
                        className='flex-1 flex flex-col gap-y-10 lg:mt-16 xl:mt-0 '>
                        <div className='group relative overflow-hidden rounded-2xl'>
                            <WorkCont
                                button={handleWin2}
                                index2={windowProp.index2}
                                img={Img2}
                                project="Portfolio Projekt"
                                title="E-commerance - pierwszy sklep"/>

                        </div>
                        <WorkCont
                            button={handleWin3}
                            index2={windowProp.index2}
                            img={Img3}
                            project="Ux/UI"
                            title="moj pierwszy projekt"
                        >
                        </WorkCont>
                        <WorkModal
                            visible={open}
                            opacity={windowProp.opacity}
                            index={windowProp.index}
                            img={Img1}
                            text="Portfolio porjekt"
                            description='Oddaj rzeczy'
                            technology='React, firebase, Sass, React-Router, hash-link, React-Paginate, Aos. '
                            autor="Wykonał"
                            name="Maciej Szajstek (solo)"
                            description2="   Projekt miał za zadnie stowrzenie prostej, aplikacji web. Z uzyciem
                            logowania i autoryzacji za pomocą bazy Firebase. Dostęp do dodatkowych funkcji oraz możliwość utworzenia konta.
                            Walidacja forlumarza kontakt, oraz pełna walidajca formularza wyślij, rzeczy."
                            note=''
                            link="https://atlon1.github.io/Rent_the_stuff/"
                            button={handleWin}
                        />
                        <WorkModal
                            visible={open2}
                            opacity={windowProp.opacity}
                            index={windowProp.index}
                            img={Img2}
                            text="Portfolio projekt"
                            description='E-commerence pierwszy sklep'
                            technology='React, firebase, Tawilwind CSS'
                            autor="Wykonał"
                            name="Maciej Szajstek (solo)"
                            description2="Pierwsze funkcjonalnosci, sklepu internetowego"
                            note=''
                            link="chujek.pl"
                            button={handleWin2}
                        />
                        <WorkModal
                            visible={open3}
                            opacity={windowProp.opacity}
                            index={windowProp.index}
                            img={Img3}
                            text="Lol"
                            description='Opis opis1'
                            technology='react fire base itp'
                            autor="Maciej Szajstekasdasd"
                            name="chujek"
                            description2="lol2"
                            note='nie wiem'
                            link="chujek.pl"
                            button={handleWin3}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )

};
