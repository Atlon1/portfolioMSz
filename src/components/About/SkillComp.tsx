import React from "react";

type SkillProps = {
    skillList: {
        id: number
        url: string
        text: string
        stars: any
    }
}

const SkillComp = ({skillList}: SkillProps) => {

    const { url, text, stars} = skillList


    return (
        <div
            className='flex flex-col items-center justify-between w-24 lg:h-32'>
            <div className='flex lg:w-11 lg:h-11 items-center'>
                <img alt={text}
                    className='w-11 max-h-11 hidden lg:flex lg:max-w-[482px] mx-auto'
                    src={url}/>
            </div>
            <h3 className='break-words text-center leading-none'>{text}</h3>
            <div className='flex'>
                {stars}
            </div>
        </div>
    )

}

export default SkillComp;