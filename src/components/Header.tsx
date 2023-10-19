import React from 'react';
import { headerPL} from '../data/pl/forntDataPl'

const Header = () => {

    const {img, text, linkedIn, email} = headerPL

    return <header className='py-2 z-50'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center '>
                <a href={email}>
                    <img className='max-w-[250px] w-full' src={img} alt='Logo'/>
                </a>
                <button className='btn btn-sm'><a href={linkedIn}>{text}</a></button>
            </div>
        </div>
    </header>;
};

export default Header;
