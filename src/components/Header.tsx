import React from 'react';
import Logo from '../assets/Maciej_logo.png'

const Header = () => {
    return <header className='py-2'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center '>
                <a href='#'>
                    <img className='max-w-[250px] w-full' src={Logo} alt=''/>
                </a>
                <button className='btn btn-sm'>Pracuj ze mna</button>
            </div>
        </div>
    </header>;
};

export default Header;
