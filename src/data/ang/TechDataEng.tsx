import WorkImg1 from '../../assets/ModalTech/Sap-automatyzacja.png';
import WrokImgModal1 from '../../assets/ModalTech/Sap-automatyzacja2.png';
import Layout from '../../assets/ModalTech/LayOut.jpg';
import Wiert from '../../assets/ModalTech/Wiertło_Atorn.jpg';
import Wiert2 from '../../assets/ModalTech/WIERTLO-BEZ-CHLODZENIA.jpg';
import Machine5X from '../../assets/ModalTech/dmu60Evo.jpg'
import NightOrder from '../../assets/ModalTech/Praca_w nocy.gif';
import BM from '../../assets/ModalTech/BM.gif';
import Elasto from '../../assets/ModalTech/Elastomer.webp';
import Logo from '../../assets/Maciej_logo.png';
import Image from '../../assets/atlon_doit_steampunk_style_7ca45451-cd20-4701-9013-4bc324c64832-removebg-preview.png';
import {RiStarFill, RiStarSFill, RiStarSLine} from "react-icons/ri";
import HM from '../../assets/TechIcons/hyperMILL.png';
import HH from '../../assets/TechIcons/Heidenhain_400.jpg';
import Sap from '../../assets/TechIcons/sap.jpg';
import Creo from '../../assets/TechIcons/creo.png';
import Axis5 from '../../assets/TechIcons/5AxisDrilling.png';
import Finish from '../../assets/TechIcons/cnc-milling-machine.webp';
import Electorde from '../../assets/TechIcons/hypercad-s-electrode.webp';
import SimultanicMill from '../../assets/TechIcons/png-clipart-computer-numerical.png';
import VoluMill from '../../assets/TechIcons/geometric-solidworks.png';
import ProductionPlanning from '../../assets/TechIcons/production-planning-b.jpg';
import ToolMngr from '../../assets/TechIcons/TM_Vending.jpg';
import AutoCad from '../../assets/TechIcons/Autocad-Logo.png';
import Excel from '../../assets/TechIcons/Excel.png';

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
    description: 'I am an experienced technologist with 15 years of professional experience, specializing in both CAM and CAD programming. ' +
        'My skills can contribute to the development of your company. Below, you will find more information about my activities. Additionally, ' +
        'I have completed three programming courses and hold a master\'s degree in two specializations: Mechanical Engineering and Machine Construction, ' +
        'as well as Management and Production Engineering. I have also attended numerous training sessions in programming and team management. In my personal life, ' +
        'I am a father of two children and have a passion for programming and computer games. Recently, I have been working on programming an operator panel for my company, ' +
        'designed to provide basic knowledge to operators at a lower level.',
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
        {
            id: 5,
            url: Axis5,
            text: "5 Axis Drilling",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },
        {
            id: 6,
            url: Finish,
            text: "5 Axis Finishing",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarFill/>, <RiStarSLine/>]
        },
        {
            id: 7,
            url: Electorde,
            text: "Electrode Disign",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 8,
            url: SimultanicMill,
            text: "Simultanic Mill",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>]
        },
        {
            id: 9,
            url: VoluMill,
            text: "VoluMill - trochoidal mill",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },
        {
            id: 10,
            url: ProductionPlanning,
            text: "Planning production",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },
        {
            id: 11,
            url: ToolMngr,
            text: "Tool manager",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>]
        },
        {
            id: 12,
            url: AutoCad,
            text: "AutoCad",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },{
            id: 13,
            url: Excel,
            text: "Excel",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
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
        title: 'Sap - automatyzation files.',
        project: 'Project for PxCW',
        description: {
            text: 'Sap - automatyzation files.',
            description1: 'Technology:',
            description2: 'This project focuses on automating tasks within the SAP ERP system using VBA scripts and introducing logical instructions. The primary goal of the project is to eliminate monotony in work and reduce errors resulting from manual task execution. As a result, we achieve a significant acceleration in the production order assembly process, by approximately 80%.',
            technology: ['SAP', "Excel", "VBA"],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "",
            img: WrokImgModal1
        },
    },
    {
        id: 2,
        img: Layout,
        title: 'Organization work stations.',
        project: 'Project for PxCW',
        description: {
            text: 'Layout - Organization work stations.',
            description1: 'Technology:',
            description2: 'The project involves organizing workspaces in accordance with customer requirements, encompassing management at the IT and DIT levels and collaboration with an external company responsible for relocating the machinery. Team coordination was carried out according to the Gaunt schedule, with the primary aim of minimizing disruptions in the production process. Every day, two machines were relocated with comprehensive setup and activation, allowing them to operate during the second shift. Thanks to efficient management and coordination, the project proceeded without any issues.',
            technology: ['Auto-Cad', 'Excel'],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "https://docs.google.com/spreadsheets/d/1hxYMN_D3L07l3jaB7c0TfRIWo20Gv7GT/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
            img: Layout
        },
    },
    {
        id: 3,
        img: Wiert,
        title: 'Introducing New Drill Bits.',
        project: 'Project for PxCW',
        description: {
            text: 'Introducing New Drill Bits.',
            description1: 'Technology:',
            description2: "The project aimed to introduce new technology for drilling repeatable holes, including all threads and reamed holes. The existing machine park was utilized, resulting in a remarkable 300% acceleration of the process, leading to annual savings of approximately 30,000 złoty. Additionally, favorable pricing was negotiated due to the company's strong position, resulting in discounts of up to 50%.",
            technology: ['HyperMill', 'Excel', "Heidenhain"],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "https://drive.google.com/file/d/1eVKmVQxUPL5zGyfLWt3uB-OpzAxoGRbS/view?usp=drive_link",
            img: Wiert2
        },
    },
    {
        id: 4,
        img: Machine5X,
        title:"Purchase of a 5-Axis Machine.",
        project: 'Project for PxCW',
        description: {
            text: "Purchase of a 5-Axis Machine.",
            description1: 'Technology:',
            description2: "The project's goal was to procure a new 5-axis milling machine along with the necessary equipment. The total investment amounted to 1,200,000 Polish złoty. As part of the project, a budget analysis was conducted to select a machine that would meet specific technological requirements and have the potential for future workstation automation. The machine underwent several testing phases, including the production of a sample workpiece and the development of a machine test specification. A comprehensive evaluation of the machine's geometry and structure was also carried out.",
            technology: ['HyperMill', 'Excel', "Heidenhain", "AutoCad"],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "https://docs.google.com/document/d/1v9mfu8JEpAxDnm5dBDthPN3YFefeuInA/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
            img: Machine5X
        },
    },
    {
        id: 5,
        img: NightOrder,
        title: "Night Shift of Milling Machines.",
        project: 'Project for PxCW',
        description: {
            text: "Night Shift of Milling Machines.",
            description1: 'Technology:',
            description2: "The project's objective is to enhance the efficiency of CNC milling machines during the night shift. The goal was to extend machine operating hours at night through the design of specialized technological fixtures. New devices were developed for secure workpiece holding, incorporating a system with four imadels. This operation significantly extended the night shift from just one hour to a minimum of four hours, resulting in annual savings of around 50,000 Polish złoty. Additionally, it effectively reduced setup and finishing times by over 60%, eliminating the need for machine changeovers.",
            technology: ['HyperMill', 'Excel', "Heidenhain"],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "https://docs.google.com/presentation/d/1ENdOObc5tb8797X0l23hFPKY_iszn6W8/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
            img: NightOrder
        },
    },
    {
        id: 6,
        img: BM,
        title: "Performance Indicators (KPIs).",
        project: 'Project for PxCW',
        description: {
            text: "Reporting Key Performance Indicators (KPIs).",
            description1: 'Technology:',
            description2: "The main goal of this project was to establish new KPIs for one of the department's key clients. Timelines were introduced, and KPIs related to lead times for specific criteria were evaluated. Reports containing these indicators are submitted to the Director of Production along with recommendations and proposals for process improvement to achieve the best possible results.",
            technology: ['Excel'],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "",
            img: BM
        },
    },
    {
        id: 7,
        img: Elasto,
        title: "Optimizing Elastomers.",
        project: 'Project for PxCW',
        description: {
            text: "Optimizing Elastomers.",
            description1: 'Technology:',
            description2: "The primary objective of this project was to design and create technological fixtures for the production of elastomeric parts. The production process was standardized and simplified through normalized preparations. Everything was developed to ensure that every employee, regardless of their level of experience, could carry it out. Thanks to these changes, the process was shortened by 40%, resulting in annual savings of approximately 40,000 Polish złoty.",
            technology: ['Excel', "Creo", 'HyperMill'],
            autor: 'Author:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "",
            img: Elasto
        },
    },

];

type WorkDescription = {
    singleWord: string[]
}

export const workDescriptionEngMechanic: WorkDescription = {
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

export const servicesEngMechanic: services = {
    singleWord: ['What I Do?', 'Technology'],
    word: "I am currently working as a CNC Technologist in an international company. Additionally, I am developing my skills as a freelance developer.",
    services: [
        {
            id: 1,
            name: 'Team Management',
            description: 'Thanks to excellent interpersonal skills, I can effectively manage teams and motivate them to act according to the Scrum methodology.',
            link: "",
        },
        {
            id: 2,
            name: 'Leading Key Projects',
            description: 'With years of experience, I am not afraid of tackling challenging projects and tasks.',
            link: "",
        },
        {
            id: 3,
            name: 'Cutting Tool Procurement',
            description: 'I have extensive experience in purchasing cutting tools and a broad network of contacts for prompt responses to procurement needs.',
            link: "",
        },
        {
            id: 4,
            name: 'Process Optimization',
            description: 'I offer a range of engineering solutions and a knowledge base that allows for profit generation through investments.',
            link: "",
        },
        {
            id: 5,
            name: 'Layout Design',
            description: 'I can create production area layouts, move machines according to the concept, and develop Gantt schedules without disrupting the production cycle.',
            link: "",
        },
        {
            id: 6,
            name: 'Script Writing for ERP System',
            description: 'I specialize in writing scripts for ERP systems, adding new functionalities.',
            link: "",
        },
        {
            id: 7,
            name: 'Increasing Machine Production Capacity',
            description: 'I calculate current machine capacities, identify bottlenecks, and adapt machine performance to meet customer needs.',
            link: "",
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
