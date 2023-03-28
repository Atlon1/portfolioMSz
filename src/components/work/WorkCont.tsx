import React from 'react';


const WorkCont = (props:any) => {


    return (
        <div
            className='group relative max-h-80 overflow-hidden border-2 border-white/50 rounded-2xl cursor-pointer'
            onClick={props.button}>
            <div
                className='group-hover:bg-black/70 w-full h-full absolute transition-all duration-300' style={
                {
                 zIndex:`${props.index2}`
                }
            }/>
            <img className='group-hover:scale-125 transition-all duration-500' src={props.img} alt={props.img}/>
            <div
                className='absolute bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient'>{props.project}</span>
            </div>
            <div
                className='absolute bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>{props.title}</span>
            </div>
        </div>
    );
}

export default WorkCont;