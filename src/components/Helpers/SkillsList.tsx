import {RiStarSFill, RiStarSLine} from "react-icons/ri";
import React from "react";

interface List {
    id: any
    url: string
    text: string
    stars: any
}


export const SkillsList: List[] = [
    {
        id: 1,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/1200px-WebStorm_Icon.svg.png",
        text: "Webstorm",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>]
    },
    {
        id: 2,
        url: "https://skillicons.dev/icons?i=react",
        text: "React",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>,<RiStarSLine/>]
    },
    {
        id: 3,
        url: "https://skillicons.dev/icons?i=js",
        text: "Java Script",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>,<RiStarSLine/>]
    },
    {
        id: 4,
        url: "https://skillicons.dev/icons?i=sass",
        text: "Sass",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>]
    },
    {
        id: 5,
        url: "https://skillicons.dev/icons?i=css",
        text: "HTML5",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>]
    },
    {
        id: 6,
        url: "https://skillicons.dev/icons?i=github",
        text: "Github",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>]
    },
    {
        id: 7,
        url: "https://skillicons.dev/icons?i=ts",
        text: "Teypescirpt",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>,<RiStarSLine/>,<RiStarSLine/>]
    },
    {
        id: 8,
        url: "https://skillicons.dev/icons?i=firebase",
        text: "Firebase",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>,<RiStarSLine/>]
    },
    {
        id: 9,
        url: "https://skillicons.dev/icons?i=tailwind",
        text: "Tailwind CSS",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>,<RiStarSLine/>,<RiStarSLine/>]
    },
    {
        id: 10,
        url: "https://skillicons.dev/icons?i=express",
        text: "Express.js",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>,<RiStarSLine/>,<RiStarSLine/>]
    },
    {
        id: 11,
        url: "https://skillicons.dev/icons?i=mongodb",
        text: "MongoDB",
        stars: [<RiStarSFill/>,<RiStarSFill/>,<RiStarSLine/>,<RiStarSLine/>,<RiStarSLine/>]
    },

]

