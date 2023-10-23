import WorkImg1 from '../../assets/Oddaj_rzeczy.jpg';
import WorkImg2 from '../../assets/e-commerence.jpg';
import WorkImg3 from '../../assets/Estate-website.jpg';
import WorkImg4 from '../../assets/Gym-image.jpg';
import WorkImg5 from '../../assets/Photoland.jpg';
import Logo from '../../assets/Maciej_logo.png';
import Image from '../../assets/atlon_doit_steampunk_style_7ca45451-cd20-4701-9013-4bc324c64832-removebg-preview.png';
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import HM from '../../assets/TechIcons/hyperMILL.png';
import HH from '../../assets/TechIcons/Heidenhain_400.jpg';
import Sap from '../../assets/TechIcons/sap.jpg';
import Creo from '../../assets/TechIcons/creo.png';

export type headerType = {
    img: string,
    text: string,
    linkedIn: string,
    email: string
};

export const headerEngMechanic: headerType = {
    img: Logo,
    text: "Work with Me!",
    linkedIn: 'https://www.linkedin.com/in/maciej-szajstek-8995b4175/',
    email: 'maciej.szasjtek@gmail.com'
};

export type bannerType = {
    singleWord: string[],
    typed: string[],
    description: string,
    link: string,
    cv: string,
    img: string
};

export const bannerEngMechanic: bannerType = {
    singleWord: ['Maciej', 'Szajstek', 'I am:', 'Hello!', 'Contact'],
    typed: ['Programer CAM.', 'Technologist.', 'Engineer.'],
    description: 'I am an experienced technologist with a 15-year professional background, specializing in both CAM programming, ' +
        'particularly with expertise in Hyper Mill software, and CAD, where I excel in using ' +
        'Creo Direct. My role involves designing process optimization in production and managing the cutting tool inventory.' +
        ' I also create technological tools that significantly expedite production processes.\n' +
        'I am a co-creator of projects executed at night, which have enabled the company to save up to 100,000 PLN annually. ' +
        'Additionally, through price negotiations for cutting tools, I\'ve generated savings of around 250,000 PLN.' +
        ' I\'m also responsible for leading international projects and for updating and implementing new software.\n' +
        'In my work, I have served as a leader in various projects, such as the implementation of new machining technologies, ' +
        'like VoluMill. Through the automation of technological processes, I managed to speed up the work of technologists by approximately 75% while eliminating repetitive tasks.',
    link: 'https://github.com/Atlon1',
    cv: 'https://drive.google.com/file/d/18g4x_tJHOikxTOzYGgOj3k3tYqjRhODm/view?usp=drive_link',
    img: Image
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

export const AboutEngMechanic: aboutType = {
    singleWord: ['Technologies:', 'My current tech stack includes:', 'Years', 'Experience', '++', 'Projects', 'Completed', 'Satisfied', 'Clients', 'Contact', 'My Portfolio'],
    description: 'Utilizing 2D and 3D machining cycles in the Hyper Mill software.\n' +
        'Handling simultaneous 5-axis machining as well as indexed 5-axis machining.\n' +
        'Using automatic intelligent markers to label features.\n' +
        'Script writing within the SAP system.\n' +
        'Generating orders.\n' +
        'Managing cutting tools.\n' +
        'Performing pricing calculations for clients.\n' +
        'Production planning.\n' +
        'Designing electrodes and injection mold structures in Creo Direct.\n' +
        'Determining Q parameters in machining cycles in Hyper Mill.\n' +
        'Conducting calculations related to cutting parameters in Hidehain tools.',
    github: 'https://github.com/Atlon1',
    count: [15,23,80],
    skillsList: [
        {
            id: 1,
            url: HM,
            text: "HyperMill",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },
        {
            id: 2,
            url: HH,
            text: "Hidehain",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>]
        },
        {
            id: 3,
            url: Sap,
            text: "SAP",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },
        {
            id: 4,
            url: Creo,
            text: "Creo Direct/Element",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
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

export const workContModalEngMechanic: WorkContPropsEng[] = [
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
    }
];

type WorkDescription = {
    singleWord: string[]
}

export const workDescriptionEngMechanic: WorkDescription = {
    singleWord: ['My Recent', 'Projects:', 'I am open to projects of all kinds.', 'All Projects']
};

type servicesType = {
    name: string,
    description: string,
    link: string
}

type services = {
    singleWord: string[]
    word: string
    services: servicesType[]
}

export const servicesEngMechanic: services = {
    singleWord: ['What I Do?', 'Technology'],
    word: "I am currently working as a CNC Technologist in an international company. Additionally, I am developing my skills as a freelance developer.",
    services: [
        {
            name: 'Standardization of Cutting Tool Purchases',
            description: 'Detailed calculations for tool purchase. Time, path, description. Developed tool purchase standards.',
            link: "https://docs.google.com/presentation/d/1WAkiwveUZdDLS6hEf5K2X5tQFzTpX28f/edit?usp=sharing&ouid=108326513820685031819&rtpof=true&sd=true",
        },
        {
            name: 'Increasing the Efficiency of CNC Machines',
            description: 'Development of technological equipment allowing for the production of several elements simultaneously. Approximately 40% extended machine work at night. The possibility of assembling various types of components.',
            link: "https://docs.google.com/presentation/d/1vhOrwB_pLfeO0AEj0udgSWfLtJ5OBkEW/edit?usp=sharing&ouid=108326513820685031819&rtpof=true&sd=true",
        },
        {
            name: 'Organizing Machine Work. Layout.',
            description: 'Drawing a production area plan. Relocation of machines according to the concept. Development of the Gantt schedule without disrupting the production cycle.',
            link: "https://drive.google.com/file/d/1YAwpq1dwBjW5908pk_fGxhCUdbw92j2L/view?usp=sharing",
        },
        {
            name: 'New Machining Technologies',
            description: 'Detailed calculations for the purchase of new Trochoidal machining technologies. Practical tests. New cutting tool technology for a new machining strategy.',
            link: "https://docs.google.com/presentation/d/1mAxj5_qJuB_lBwVAR6FJeGDZtClGsYRT/edit?usp=sharing&ouid=108326513820685031819&rtpof=true&sd=true",
        },
        {
            name: 'Purchase of CNC Machines for Production Needs',
            description: 'Selection of the appropriate machine for production needs. Price negotiations and selection of the machine\'s parameters. Installation. Supervision of the installation at the designated location. Connection of the necessary media for operation.',
            link: "https://docs.google.com/document/d/1v9mfu8JEpAxDnm5dBDthPN3YFefeuInA/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
        },
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

export const contactEngMechnic: contactType = {

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


    thxText: 'The message has been sent!. Thank you!',
    singleWord: ['Get in Touch', 'Let\'s start working', 'together!', 'Send a message!', 'Your Data:', 'Email:', 'Message:'],

}
