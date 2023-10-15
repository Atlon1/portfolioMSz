import WorkImg1 from '../../assets/Oddaj_rzeczy.jpg'
import WorkImg2 from '../../assets/e-commerence.jpg'
import WorkImg3 from '../../assets/Estate-website.jpg';
import WorkImg4 from '../../assets/Gym-image.jpg'
import WorkImg5 from '../../assets/Photoland.jpg'





export type WorkContProps = {
    id: number,
    img: string,
    title: string,
    project: string
}

export const workContModal: WorkContProps[] = [
    {
        id: 1,
        img: WorkImg1,
        title: 'Oddaj rzeczy',
        project: 'Oddaj rzeczy',
    },
    {
        id: 2,
        img: WorkImg2,
        title: 'E-commerce',
        project: 'E-commerce',
    },
    {
        id: 3,
        img: WorkImg3,
        title: 'Estate website',
        project: 'Estate website',
    },
    {
        id: 4,
        img: WorkImg4,
        title: 'Gym',
        project: 'Gym',
    },
    {
        id: 5,
        img: WorkImg5,
        title: 'Photoland',
        project: 'Photoland',
    }
]