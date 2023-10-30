import React, {useEffect, useState} from 'react';
import {headerPL} from '../data/pl/forntDataPl'
import {headerEng} from "../data/ang/forntDataEng";
import {headerPlMechanic} from "../data/pl/TechDataPl";
import {headerEngMechanic} from "../data/ang/TechDataEng";


const Header = () => {


    const [lang, setLang] = useState('pl')
    const [tech, setTech] = useState('mechanics')
    const [langActive, setLangActive] = useState(false)
    const [profActive, setProfileActive] = useState(false)
    const [setCheacked, setChecked] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'pl')
        }
        if (localStorage.getItem('tech') === null) {
            localStorage.setItem('tech', 'mechanics')
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem('active') === null) {
            localStorage.setItem('active', 'false')
        }
        if (localStorage.getItem('techActive') === null) {
            localStorage.setItem('techActive', 'false')
        }
    }, [])

    useEffect(() => {
        const html: any = document.querySelector('html')
        if (localStorage.getItem('lang') === 'eng' && localStorage.getItem('active') === "false") {
            html.classList.add('eng')
            setLang('eng')
            setLangActive(true)
        } else {
            html.classList.remove('eng')
            setLang('pl')
            setLangActive(false)
        }
    }, [lang])


    useEffect(() => {
        if (localStorage.getItem('tech') === "front" && localStorage.getItem('techActive') === "false") {
            setTech('front')
            setProfileActive(true)
        } else {
            setTech('mechanics')
            setProfileActive(false)
        }
    }, [tech]);

    const handleSwitchENG = () => {
        if (localStorage.getItem('lang') === 'pl') {
            setLang('eng');
            localStorage.setItem('lang', 'eng')
        }
        window.location.reload();
        setLangActive(!langActive)
    }
    const handleSwitchPL = () => {
        if (localStorage.getItem('lang') === 'eng') {
            setLang('pl');
            localStorage.setItem('lang', 'pl')
        }
        window.location.reload();
        setLangActive(!langActive)
    }

    const handleSwitchTechFront = () => {
        if (localStorage.getItem('tech') === 'mechanics') {
            setTech('front');
            localStorage.setItem('tech', 'front')
        }
        window.location.reload();
        setProfileActive(!profActive)
    }

    const handleSwitchTechMech = () => {
        if (localStorage.getItem('tech') === 'front') {
            setTech('mechanics');
            localStorage.setItem('tech', 'mechanics')
        }
        window.location.reload();
        setProfileActive(!profActive)
    }


    const {img, text, linkedIn, email, singleWord} = lang === 'pl' && tech === 'mechanics' ? headerPlMechanic :
        lang === 'pl' && tech === 'front' ? headerPL :
        lang === 'eng' && tech === 'mechanics' ? headerEngMechanic : headerEng


    return <header className='py-2 z-[20] border-b border-white/20'>
        <div className='container mx-auto flex flex-col gap-y-4'>
            <div className='flex justify-between items-center '>
                <a href={linkedIn}>
                    <img className='max-w-[250px] w-full' src={img} alt='Logo'/>
                </a>

                <button className='btn btn-sm'><a href={email}>{text}</a></button>
            </div>
            <div className='flex sm:justify-between  gap-y-2 flex-col sm:flex-row items-center justify-center'>
                <div className='flex items-center gap-x-4'>
                    <button className={!langActive ? 'btn btn-sm' : ''} onClick={handleSwitchPL}>PL</button>
                    <button className={langActive ? 'btn btn-sm' : ''} onClick={handleSwitchENG}>ENG</button>
                </div>
                <div className='flex items-center gap-x-4'>
                    <button className={profActive ? 'btn btn-sm' : ''} onClick={handleSwitchTechFront}>{singleWord[0]}
                    </button>
                    <button className={!profActive ? 'btn btn-sm' : ''} onClick={handleSwitchTechMech}>{singleWord[1]}
                    </button>
                </div>
            </div>
        </div>
    </header>;
};

export default Header;
