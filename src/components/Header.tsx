import React, {useEffect, useState} from 'react';
import { headerPL} from '../data/pl/forntDataPl'
import {headerEng} from "../data/ang/forntDataEng";

const Header = () => {


    const [lang, setLang] = useState('pl')
    const [langActive, setLangActive] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('lang') === null) {
            localStorage.setItem('lang', 'pl')
        }
    }, [])
    useEffect(() => {
        if (localStorage.getItem('active') === null) {
            localStorage.setItem('active', 'false')
        }
    }, [])

    useEffect(() => {
        const html: HTMLElement | null = document.querySelector('html')
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

    const {img, text, linkedIn, email} = lang === 'pl' ? headerPL : headerEng

    return <header className='py-2 z-50'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center '>
                <a href={email}>
                    <img className='max-w-[250px] w-full' src={img} alt='Logo'/>
                </a>
                <div className='flex items-center gap-x-4'>
                    <button className={!langActive ? 'btn btn-sm' : ''} onClick={handleSwitchPL}>PL</button>
                    <button className={langActive ? 'btn btn-sm' : '' } onClick={handleSwitchENG}>ENG</button>
                </div>
                <button className='btn btn-sm'><a href={linkedIn}>{text}</a></button>
            </div>
        </div>
    </header>;
};

export default Header;
