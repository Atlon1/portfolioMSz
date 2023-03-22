import React from 'react';
import Logo from '../assets/Maciej_logo.png'

const Header = () => {
    return <header className='py-2'>
        <div className='container mx-auto'>
            <div className='flex justify-between items-center '>
                <a href='https://www.linkedin.com/in/maciej-szajstek-8995b4175/'>
                    <img className='max-w-[250px] w-full' src={Logo} alt=''/>
                </a>
                <button className='btn btn-sm'><a href="mailto:maciej.szasjtek@gmail.com">Pracuj ze mna</a></button>
            </div>
        </div>
    </header>;
};

export default Header;
