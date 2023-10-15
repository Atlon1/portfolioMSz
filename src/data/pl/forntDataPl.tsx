import WorkImg1 from '../../assets/Oddaj_rzeczy.jpg'
import WorkImg2 from '../../assets/e-commerence.jpg'
import WorkImg3 from '../../assets/Estate-website.jpg';
import WorkImg4 from '../../assets/Gym-image.jpg'
import WorkImg5 from '../../assets/Photoland.jpg'





export type WorkContProps = {
    id: number,
    img: string,
    title: string,
    project: string,
    description: {
        text: string,
        description1: string,
        description2: string,
        technology: string[],
        autor: string,
        name: string,
        note: string,
        link: string,
        img: string
    }
}

export const workContModal: WorkContProps[] = [
    {
        id: 1,
        img: WorkImg1,
        title: 'Oddaj rzeczy',
        project: 'Portfolio project',
        description: {
            text: 'Oddaj rzeczy:',
            description1: 'Technologie:',
            description2: 'Opis projektu',
            technology: ['Technologia', 'Technologia', 'Technologia', 'Technologia'],
            autor: 'Autor',
            name: 'Name',
            note: 'Note',
            link: "qwwfwdf",
            img: WorkImg1
        },
    },
    {
        id: 2,
        img: WorkImg2,
        title: 'E-commerce',
        project: 'Portfolio project',
        description: {
            text: 'Opis projektu',
            description1: 'Opis projektu',
            description2: 'Opis projektu',
            technology: ['Technologia', 'Technologia', 'Technologia'],
            autor: 'Autor',
            name: 'Name',
            note: 'Note',
            link: "qwwfwdf",
            img: WorkImg2
        },
    },
    {
        id: 3,
        img: WorkImg3,
        title: 'Estate website',
        project: 'Estate website',
        description: {
            text: 'Opis projektu',
            description1: 'Opis projektu',
            description2: 'Opis projektu',
            technology: ['Technologia', 'Technologia', 'Technologia'],
            autor: 'Autor',
            name: 'Name',
            note: 'Note',
            link: "qwwfwdf",
            img: WorkImg3
        },
    },
    {
        id: 4,
        img: WorkImg4,
        title: 'Gym',
        project: 'Gym',
        description: {
            text: 'Opis projektu',
            description1: 'Opis projektu',
            description2: 'Opis projektu',
            technology: ['Technologia', 'Technologia', 'Technologia'],
            autor: 'Autor',
            name: 'Name',
            note: 'Note',
            link: "qwwfwdf",
            img: WorkImg4
        },
    },
    {
        id: 5,
        img: WorkImg5,
        title: 'Photoland',
        project: 'Photoland',
        description: {
            text: 'Opis projektu',
            description1: 'Opis projektu',
            description2: 'Opis projektu',
            technology: ['Technologia', 'Technologia', 'Technologia'],
            autor: 'Autor',
            name: 'Name',
            note: 'Note',
            link: "qwwfwdf",
            img: WorkImg5
        },
    }
]