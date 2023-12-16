import React, {useEffect, useState} from 'react';
import {headerPL} from '../data/pl/forntDataPl'
import {headerEng} from "../data/ang/forntDataEng";
import {headerPlMechanic} from "../data/pl/TechDataPl";
import {headerEngMechanic} from "../data/ang/TechDataEng";


const Header = () => {


    const [lang, setLang] = useState('eng')
    const [tech, setTech] = useState('front')



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
        } else {
            html.classList.remove('eng')
            setLang('pl')
        }
    }, [lang])


    useEffect(() => {
        if (localStorage.getItem('tech') === "front" && localStorage.getItem('techActive') === "false") {
            setTech('front')
        } else {
            setTech('mechanics')
        }
    }, [tech]);


    const onChangeLang = (e: {target: {value: string}}) => {
        setLang(e.target.value)
        localStorage.setItem('lang', e.target.value)
        window.location.reload()
    }

    const onChangeTech = (e: {target: {value: string}}) => {
        setTech(e.target.value)
        localStorage.setItem('tech', e.target.value)
        window.location.reload()
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
                <select
                    onChange={onChangeLang}
                    value={lang}
                    className='btn btn-sm'>
                    <option
                        className='text-black rounded-2xl'
                        value='pl'> PL</option>
                    <option
                        className='text-black'
                        value='eng'>ENG</option>
                </select>
                <select className='btn btn-sm'
                        onChange={onChangeTech}
                        value={tech}
                >
                    <option
                        className='text-black rounded-2xl'
                        value='mechanics'>{singleWord[1]}</option>
                    <option
                        className='text-black'
                        value='front'>{singleWord[0]}</option>
                </select>
            </div>
        </div>
    </header>;
};

export default Header;
