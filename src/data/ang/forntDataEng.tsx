import WorkImg1 from '../../assets/Oddaj_rzeczy.jpg';
import WorkImg2 from '../../assets/e-commerence.jpg';
import WorkImg3 from '../../assets/Estate-website.jpg';
import WorkImg4 from '../../assets/Gym-image.jpg';
import WorkImg5 from '../../assets/Photoland.jpg';
import WorkImg6 from '../../assets/Lukasz-portfolio.jpg';
import Logo from '../../assets/Maciej_logo.png';
import Image from '../../assets/atlon_doit_steampunk_style_7ca45451-cd20-4701-9013-4bc324c64832-removebg-preview.png';
import {RiStarSFill, RiStarSLine} from "react-icons/ri";
import SiiDyp from '../../assets/Certificate/Sii_Dyplom.jpg';
import SiiExam from '../../assets/Certificate/Sii_Exam.jpg';
import CLDyp from '../../assets/Certificate/CL_Dyplom.jpg';
import CLSup1 from '../../assets/Certificate/CL_Sup1.jpg';
import CLSup2 from '../../assets/Certificate/CL_Sup2.jpg';
import CvEng from '../../assets/Cv/CV_Eng.jpg';

export type headerType = {
    img: string,
    text: string,
    linkedIn: string,
    email: string,
    singleWord: string[]
};

export const headerEng: headerType = {
    img: Logo,
    text: "Work with Me!",
    linkedIn: 'https://www.linkedin.com/in/maciej-szajstek-8995b4175/',
    email: 'mailto:maciej.szasjtek@gmail.com',
    singleWord: ['Programmer', 'Engineer']
};

export type bannerType = {
    singleWord: string[],
    typed: string[],
    description: string,
    link: string,
    cv: string,
    img: string,
    count: number[],
    certificate: string[]
};

export const bannerEng: bannerType = {
    singleWord: ['Maciej', 'Szajstek', 'I am:', 'Hello!', 'Contact',"Certificates"],
    typed: ['Frontend Developer', 'Ui/Ux Designer', 'Engineer'],
    description: 'I started learning front-end development in December 2021 by participating in a course organized by Coders Lab. I chose JavaScript as my primary language, believing it to be the most accessible and offering immense possibilities. Below are my first web applications, and I plan to create more over time. I work as a technologist on a daily basis, and in my current job, I have recognized the benefits of programming, such as automating routine tasks and reducing errors. This inspired me to learn front-end development, and my tremendous enthusiasm for work motivates me to further develop in this field.',
    link: 'https://github.com/Atlon1',
    cv: CvEng,
    img: Image,
    count: [2, 8, 10],
    certificate: [SiiDyp, SiiExam, CLDyp, CLSup1, CLSup2]
};

type skillType = {
    id: number,
    url: string,
    text: string,
    stars: JSX.Element[]
};

type aboutType = {
    singleWord: string[],
    description: string,
    github: string,
    skillsList: skillType[],
    count: number[]
};

export const AboutEng: aboutType = {
    singleWord: ['Technologies:', 'My current tech stack includes:', 'Years', 'Experience', '++', 'Projects', 'Completed', 'Satisfied', 'Clients', 'Contact', 'My Portfolio'],
    description: 'JavaScript (path, commands, FS modules, command line interface), React (AOS, Firebase, TypeScript, responsive web page creation, animations using Motion, modals), Node.js (MongoDB with Mongoose, Axios, Express), MySQL, Prisma, TypeScript, Tailwind CSS, Strapi, Next.js. My next goal is to learn C# and .Net.',
    github: 'https://github.com/Atlon1',
    count: [2, 8, 10],
    skillsList: [
        {
            id: 1,
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/WebStorm_Icon.svg/1200px-WebStorm_Icon.svg.png",
            text: "Webstorm",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },
        {
            id: 2,
            url: "https://skillicons.dev/icons?i=react",
            text: "React",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 3,
            url: "https://skillicons.dev/icons?i=js",
            text: "JavaScript",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 4,
            url: "https://skillicons.dev/icons?i=sass",
            text: "Sass",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 5,
            url: "https://skillicons.dev/icons?i=css",
            text: "HTML5",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 6,
            url: "https://skillicons.dev/icons?i=github",
            text: "GitHub",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 7,
            url: "https://skillicons.dev/icons?i=ts",
            text: "TypeScript",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 8,
            url: "https://skillicons.dev/icons?i=firebase",
            text: "Firebase",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 9,
            url: "https://skillicons.dev/icons?i=tailwind",
            text: "Tailwind CSS",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 10,
            url: "https://skillicons.dev/icons?i=express",
            text: "Express.js",
            stars: [<RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 11,
            url: "https://skillicons.dev/icons?i=mongodb",
            text: "MongoDB",
            stars: [<RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 12,
            url: "https://skillicons.dev/icons?i=nextjs",
            text: "Next.js",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 13,
            url: "https://skillicons.dev/icons?i=prisma",
            text: "Prisma",
            stars: [<RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 14,
            url: "https://skillicons.dev/icons?i=cs",
            text: "C #",
            stars: [<RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 15,
            url: "https://skillicons.dev/icons?i=dotnet",
            text: ".Net",
            stars: [<RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 16,
            url: "https://skillicons.dev/icons?i=mysql",
            text: "MySQL",
            stars: [<RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
        },
    ]
};

export type WorkContPropsEng = {
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
};

export const workContModalEng: WorkContPropsEng[] = [

    // {
    //     id: 6,
    //     img: WorkImg6,
    //     title: 'Lukasz portfolio - Projekt',
    //     project: 'Portfolio projekt',
    //     description: {
    //         text: 'Portfolio',
    //         description1: 'Technologie:',
    //         description2: 'Witajcie na moim portfolio! Jestem, technologiem i programistą CNC z pasją do precyzyjnego inżynieringu. Moje umiejętności obejmują specjalizację w kodzie G, oprogramowaniu CAM i obsłudze maszyn CNC. Przedstawiam tutaj swoje doświadczenie w różnorodnych projektach, od komponentów lotniczych po innowacyjne rozwiązania narzędziowe. Zapraszam do eksploracji mojego portfolio, aby zobaczyć precyzję i innowacyjność, które wnoszę do każdego projektu. Śledźcie mojego bloga, aby być na bieżąco z trendami branżowymi, i śmiało kontaktujcie się w sprawie potencjalnych współprac w dynamicznym świecie technologii CNC.',
    //         technology: ['React scroll', 'React Switch', 'React-Router', 'Motion div', 'UseParams', 'TransformedAnimation'],
    //         autor: 'Autor:',
    //         name: 'Maciej Szajstek - solo',
    //         note: 'Portfolio Live Demo',
    //         link: "https://atlon1.github.io/lukaszL-portfolio/",
    //         img: WorkImg6
    //     },
    // },
    {
        id: 1,
        img: WorkImg1,
        title: 'Donate Items',
        project: 'Portfolio project',
        description: {
            text: 'Donate Items:',
            description1: 'Technologies:',
            description2: 'Welcome to the official website of the charity organization "PT Donate Items"! We are a place where charity meets those in need, and your willingness to help turns into concrete actions for those who require support.\n' +
                '\n' +
                'Our mission:\n' +
                '\n' +
                'Our main mission is to support those in need by collecting and distributing gifts, clothing, food, and other necessary items. We aim to improve the living conditions of the poorest and assist in difficult life situations.',
            technology: ['ReactRouter', 'Aos', 'Firebase', "Firestore", "CountIf", 'Pagination', 'FormValidation', "LogIn", "Typed"],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: 'Donate Items Live Demo',
            link: "https://atlon1.github.io/Rent_the_stuff/",
            img: WorkImg1
        },
    },
    {
        id: 2,
        img: WorkImg2,
        title: 'E-commerce Shop',
        project: 'Portfolio project',
        description: {
            text: 'E-commerce Shop:',
            description1: 'Technologies:',
            description2: 'Our website is the place to find the latest fashion trends for every occasion. We offer a wide selection of high-quality clothing, from elegant dresses to everyday wear. Our collections are carefully curated to meet the expectations of both classic fashion lovers and those who love to experiment with style. With a user-friendly interface and convenient search options, you can quickly find what you re looking for. Explore our website and discover inspiring outfits that will enhance your unique style.',
            technology: ['ReactScroll', 'Fetch Get-POST', 'Firebase', 'HashLink', 'Context-API', 'RWD'],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: 'E-commerce Live Demo',
            link: "https://atlon1.github.io/first-e-commerce-shop/",
            img: WorkImg2
        },
    },
    {
        id: 3,
        img: WorkImg3,
        title: 'Estate Website',
        project: 'Portfolio project',
        description: {
            text: 'Estate Website:',
            description1: 'Technologies:',
            description2: 'Our website is a leading source of real estate listings in the United States and Canada, offering a wide range of attractive properties on the real estate market. We operate in both countries, providing clients access to a variety of properties, from luxury homes to apartments and investment plots. Our platform is user-friendly, and advanced search tools allow you to quickly find the perfect property. Additionally, we provide the latest real estate market information and advice on buying, selling, and investing. We are your partner in your journey to finding your dream property in the United States and Canada.',
            technology: ['Fetch', 'React-Router', 'ContextAPI', 'UseParams', 'DataBase'],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: 'Estate Live Demo',
            link: "https://atlon1.github.io/estate-website/",
            img: WorkImg3
        },
    },
    {
        id: 4,
        img: WorkImg4,
        title: 'Gym Me',
        project: 'Portfolio project',
        description: {
            text: 'Gym Me',
            description1: 'Technologies:',
            description2: 'Our gym is a place where your fitness goals become a reality. We offer a modern and well-equipped facility that is the perfect place to shape your physique, improve your stamina, and enhance your health. Our team of experienced instructors is ready to help you achieve your fitness goals and tailor programs to your individual needs. Our atmosphere fosters motivation and growth, providing comfort and a sense of security. Whether you are an experienced athlete or just starting your fitness journey, you will find everything you need to stay fit and enjoy a healthy lifestyle. Join our fitness community and start working on yourself today!',
            technology: ['React-Router', 'ContextAPI', 'UseParams', 'DataBase', 'Local Storage', 'Accordion', 'React-Switch', 'FormValidation'],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: 'Gym Me Live Demo',
            link: "https://atlon1.github.io/gym-site/",
            img: WorkImg4
        },
    },
    {
        id: 5,
        img: WorkImg5,
        title: 'Photoland',
        project: 'Portfolio project',
        description: {
            text: 'Photoland',
            description1: 'Technologies:',
            description2: 'Our website is a paradise for photography enthusiasts, where you will find the highest quality cameras available on the market. We offer a wide selection of digital cameras, DSLRs, and accessories that will help you capture life\'s most beautiful moments. Our platform provides easy navigation and detailed product descriptions so you can find the camera that suits your needs. We are always up to date with the latest developments in the world of photography, providing you with information on the newest models and technologies. Join our community of photographers and invest in your passion by exploring the world through the lens.',
            technology: ['React scroll', 'React Switch', 'Strapi', 'Strape', 'React-Router', 'ContextAPI', 'UseParams'],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: 'Photoland Live Demo',
            link: "https://atlon1.github.io/fotoSite/",
            img: WorkImg5
        },
    },


];

type WorkDescription = {
    singleWord: string[]
}

export const workDescriptionEng: WorkDescription = {
    singleWord: ['My Recent', 'Projects:', 'I am open to projects of all kinds.', 'All Projects']
};

type servicesType = {
    id: number,
    name: string,
    description: string,
    link: string
}

type services = {
    singleWord: string[]
    word: string
    services: servicesType[]
}

export const servicesEng: services = {
    singleWord: ['What I Do?', 'Technology'],
    word: "I am currently working as a CNC Technologist in an international company. Additionally, I am developing my skills as a freelance developer.",
    services: [
        {
            id: 1,
            name: 'Slider Website Design',
            description: 'I am ready to create a personalized website for your company or individual profile. Let us establish your online presence and showcase your professionalism.',
            link: ""
        },
        {
            id: 2,
            name: 'E-commerce Store Setup',
            description: 'I offer comprehensive e-commerce website development services. Break into the world of online sales and save on subscription fees.',
            link: ""
        },
        {
            id: 3,
            name: 'Educational Applications',
            description: 'If you plan to run online courses, feel free to reach out to us. We provide reliable solutions to maximize your profits.',
            link: ""
        },
        {
            id: 4,
            name: 'Pizzeria Application',
            description: 'Join us in the world of gastronomy and accept online orders through a dedicated web application. We are eager to take on this challenge.',
            link: ""
        },
        {
            id: 5,
            name: 'Customized Application',
            description: 'We are prepared to create a personalized project tailored to your specific needs. Just let us know what you require, and we will bring your ideas to life.',
            link: ""
        }
    ]
};

type nameValidationType = {
    name: string,
    nameLength: string
}
type emailValidationType = {
    email: string,
    emailFormat: string
}

type textValidationType = {
    text: string,
    textLength: string
}


export type contactType = {
    nameValidation: nameValidationType,
    emailValidation: emailValidationType,
    textValidation: textValidationType,
    thxText: string,
    singleWord: string[]

}

export const contactEng: contactType = {

    nameValidation: {
        name: 'This field cannot be empty!',
        nameLength: 'The name must contain at least 2 characters!',
    },
    emailValidation: {
        email: 'The provided email is invalid!',
        emailFormat: 'Wrong email format!',
    },
    textValidation: {
        text: 'This field cannot be empty!',
        textLength: 'The message must contain at least 40 characters!',
    },


    thxText: 'Your message has been sent. Thank you!',
    singleWord: ['Get in Touch', 'Let\'s start working', 'together!', 'Send a message!', 'Your Data:', 'Email:', 'Message:'],

}
