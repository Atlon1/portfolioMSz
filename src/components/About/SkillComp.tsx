import React from "react";

const SkillComp = (props: any) => {


    return (
        <div className='flex flex-col items-center justify-between w-24 lg:h-32'>
            <div className='flex lg:w-11 lg:h-11 items-center'>
                <img
                    className='w-11 max-h-11 hidden lg:flex lg:max-w-[482px] mx-auto'
                    src={props.url}/>
            </div>
            <h3 className='break-words text-center leading-none'>{props.text}</h3>
            <div className='flex'>
                {props.stars}
            </div>
        </div>
    )

}

export default SkillComp;