import React, {useState} from 'react';

import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import Img1 from '../assets/Oddaj_rzeczy.jpg';
import Img2 from '../assets/e-commerence.jpg';
import Img3 from '../assets/Estate-website.jpg';
import Img4 from '../assets/Gym-image.jpg'
import Img5 from '../assets/Photoland.jpg'
import WorkCont from "./work/WorkCont";
import WorkModal from "./work/WorkModal";


export default function Work() {

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [open5, setOpen5] = useState(false)

    const [windowProp, setWindowProp] = useState({
        opacity: "0",
        index: "-2",
        index2: "20"
    })

    const handleWin = () => {
        setOpen(!open)
        if (!open) {
            setWindowProp({...windowProp, opacity: "1", index: "40", index2: '20'})
            document.body.style.overflowY = "hidden"

        } else {
            setWindowProp({...windowProp, opacity: '0', index: '-2', index2: '40'})
            document.body.style.overflowY = "visible"
        }

    }
    const handleWin2 = () => {
        setOpen2(!open2)
        if (!open2) {
            setWindowProp({...windowProp, opacity: "1", index: "40", index2: '20'})
            document.body.style.overflowY = "hidden"

        } else {
            setWindowProp({...windowProp, opacity: '0', index: '-2', index2: '40'})
            document.body.style.overflowY = "visible"
        }

    }
    const handleWin3 = () => {
        setOpen3(!open3)
        if (!open3) {
            setWindowProp({...windowProp, opacity: "1", index: "40", index2: '20'})
            document.body.style.overflowY = "hidden"

        } else {
            setWindowProp({...windowProp, opacity: '0', index: '-2', index2: '40'})
            document.body.style.overflowY = "visible"
        }

    }
    const handleWin4 = () => {
        setOpen4(!open4)
        if (!open4) {
            setWindowProp({...windowProp, opacity: "1", index: "40", index2: '20'})
            document.body.style.overflowY = "hidden"

        } else {
            setWindowProp({...windowProp, opacity: '0', index: '-2', index2: '40'})
            document.body.style.overflowY = "visible"
        }

    }

    const handleWin5 = () => {
        setOpen5(!open5)
        if (!open5) {
            setWindowProp({...windowProp, opacity: "1", index: "40", index2: '20'})
            document.body.style.overflowY = "hidden"

        } else {
            setWindowProp({...windowProp, opacity: '0', index: '-2', index2: '40'})
            document.body.style.overflowY = "visible"
        }

    }


    return (
        <section className='section w-full h-full mb-[150px]' id='work'>
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
                        <WorkCont
                            button={handleWin4}
                            index2={windowProp.index2}
                            img={Img4}
                            project="portfolio project"
                            title="GYM ME"
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
                            title="Estate website"
                        >
                        </WorkCont>
                        <WorkCont
                            button={handleWin5}
                            index2={windowProp.index2}
                            img={Img5}
                            project="Portfolio Projekt"
                            title="Photoland"
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
                            technology='Tailwind css, Typescript, useContext, useEffect.'
                            autor="Wykonał"
                            name="Maciej Szajstek (solo)"
                            description2="Pełnoprawny sklep internetowy, pełna funkcjonalność zakładki cart. Możliwość edycji zakupów oraz przegląd produktów które cie interesują."
                            note=''
                            link="https://atlon1.github.io/first-e-comerance-shop/"
                            button={handleWin2}
                        />
                        <WorkModal
                            visible={open3}
                            opacity={windowProp.opacity}
                            index={windowProp.index}
                            img={Img3}
                            text="Ux/ui design"
                            description='E-state website'
                            technology='Tailwind css, Typescript, useContext, useEffect, useParams'
                            autor="Wykonał"
                            name="Maciej Szajstek (solo)"
                            description2="Sklep z nieruchomościami. Zaawansowany banner z wyszkuiwarką. Przykładowe nieruchomości z użciem useParams."
                            note=''
                            link="https://atlon1.github.io/estate-website"
                            button={handleWin3}
                        />
                        <WorkModal
                            visible={open4}
                            opacity={windowProp.opacity}
                            index={windowProp.index}
                            img={Img4}
                            text="Gym me"
                            description='Gym site'
                            technology='Tailwind css, Typescript, Routing, useEffect, React-switch, Validation on forms, Accordion, Multi-lang '
                            autor="Wykonał"
                            name="Maciej Szajstek (solo)"
                            description2="Strona siłowni, promująca zdorwy tryb życia. Składa sie z 6 sekcji. Każda z nich zawiera szereg informacji. Np. Koszt karnteu, rodzaje treningów. "
                            note=''
                            link="https://atlon1.github.io/gym-site/"
                            button={handleWin4}
                        />
                        <WorkModal
                            visible={open5}
                            opacity={windowProp.opacity}
                            index={windowProp.index}
                            img={Img5}
                            text="PhotoLand"
                            description='Photoland e-comerence'
                            technology='Tailwind css, Typescript, useContext, useEffect, useParams, strapi, strape'
                            autor="Wykonał"
                            name="Maciej Szajstek (solo)"
                            description2="Sklep z możliwościa zakupu aparatu fotograficznego, z możliościa zapłaty zamówienia."
                            note=''
                            link="https://atlon1.github.io/fotoSite/"
                            button={handleWin5}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )

};
