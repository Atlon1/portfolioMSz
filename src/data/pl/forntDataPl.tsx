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
            description2: 'Witaj na oficjalnej stronie internetowej organizacji charytatywnej "PT Oddaj Rzeczy"! Jesteśmy miejscem, gdzie dobroczynność spotyka potrzebujących, a Twoja chęć pomocy przekształca się w konkretne działania na rzecz tych, którzy potrzebują wsparcia.\n' +
                '\n' +
                'Nasza misja:\n' +
                '\n' +
                'Naszą główną misją jest wspieranie osób potrzebujących poprzez zbieranie i rozprowadzanie darów, odzieży, żywności, a także innych potrzebnych artykułów. Dążymy do poprawy warunków życia najuboższych i pomagamy w trudnych sytuacjach życiowych.',
            technology: ['ReactRouter', 'Aos', 'FireBase', "FireStroe", "CountIf", 'Pagination', 'FormValidation', "LogIn", "Typed"],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: 'Oddaj rzeczy Live Demo',
            link: "https://atlon1.github.io/Rent_the_stuff/",
            img: WorkImg1
        },
    },
    {
        id: 2,
        img: WorkImg2,
        title: 'E-commerce-shop',
        project: 'Portfolio project',
        description: {
            text: 'E-commerence Shop:',
            description1: 'Technologie:',
            description2: 'Opis projektu',
            technology: ['ReactScroll', 'Fetch Get-POST', 'FireBase', 'HashLink', 'Context-API','RWD'],
            autor: 'Autor',
            name: 'Maciej Szajstek - solo',
            note: 'E-commerence Live Demo',
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