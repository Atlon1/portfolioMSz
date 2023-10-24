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
import Electorde from '../../assets/TechIcons/hypercad-s-electrode-function-colour-coding-en.webp';
import SimultanicMill from '../../assets/TechIcons/png-clipart-computer-numerical-control-machining-machine-milling-turning-3-miscellaneous-service.png';
import VoluMill from '../../assets/TechIcons/png-transparent-geometric-solidworks-computeraided-manufacturing-volumill-computeraided-design-solidworks-simulation-nccs-ekspe-software-services-llp.png';
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
            description2: 'Projekt obejmuje organizację miejsc pracy zgodnie z wymaganiami klienta, co obejmuje zarządzanie na poziomie IT, DIT oraz współpracę z firmą zewnętrzną, która była odpowiedzialna za przestawienie maszyn. Koordynacja zespołów była realizowana zgodnie z harmonogramem Gaunta, a głównym założeniem było minimalizowanie zakłóceń w procesie produkcyjnym. Codziennie przenoszono po 2 maszyny z kompleksowym podłączeniem i uruchomieniem, tak aby mogły pracować już na drugiej zmianie. Dzięki efektywnemu zarządzaniu i koordynacji, projekt przebiegł bez żadnych problemów.',
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
        title: 'Wprowadzenie nowych wierteł.',
        project: 'Projekt dla PxCW',
        description: {
            text: 'Wprowadzenie nowych wierteł.',
            description1: 'Technologie:',
            description2: 'Projekt zakładał wprowadzenie nowej technologii w zakresie wiercenia otworów powtarzalnych, włączając w to wszelkie gwinty oraz otwory pod rozwiertaki. Wykorzystano istniejący park maszynowy. Dzięki temu proces ten przyspieszył się o imponujące 300%, co zaowocowało rocznymi oszczędnościami na poziomie około 30 000 złotych. Dodatkowo, udało się wynegocjować korzystne ceny dzięki wykorzystaniu pozycji silnej firmy, co zaowocowało rabatami sięgającymi nawet 50%.',
            technology: ['HyperMill', 'Excel', "Heidenhain"],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "https://drive.google.com/file/d/1eVKmVQxUPL5zGyfLWt3uB-OpzAxoGRbS/view?usp=drive_link",
            img: Wiert2
        },
    },
    {
        id: 4,
        img: Machine5X,
        title: 'Zakup maszyny 5 osiowej.',
        project: 'Projekt dla PxCW',
        description: {
            text: 'Zakup maszyny 5 osiowej.',
            description1: 'Technologie:',
            description2: 'Celem projektu było zakupienie nowej frezarki 5-osiowej wraz z odpowiednim wyposażeniem. Całkowita inwestycja wyniosła 1 200 000 złotych. W ramach projektu przeprowadzono analizę budżetu w celu wytypowania maszyny, która spełni określone wymagania technologiczne oraz będzie miała możliwość automatyzacji gniazda w przyszłości. Maszyna przeszła przez wiele etapów testowych, obejmujących wykonanie detalu próbnego oraz opracowanie specyfikacji testowej maszyny. Dokonano także szczegółowej oceny geometrii i budowy maszyny.',
            technology: ['HyperMill', 'Excel', "Heidenhain", "AutoCad"],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "https://docs.google.com/document/d/1v9mfu8JEpAxDnm5dBDthPN3YFefeuInA/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
            img: Machine5X
        },
    },
    {
        id: 5,
        img: NightOrder,
        title: 'Praca w nocy Frezarek.',
        project: 'Projekt dla PxCW',
        description: {
            text: 'Praca w nocy Frezarek.',
            description1: 'Technologie:',
            description2: 'Celem projektu jest zwiększenie efektywności pracy frezarek CNC w nocy. Założeniem było wydłużenie czasu pracy maszyn w nocy poprzez projektowanie specjalnego oprzyrządowania technologicznego. Stworzono nowe urządzenia do stabilnego trzymania detali, wykorzystując system z czterema imadelami. Działanie to znacząco wydłużyło czas pracy w nocy z jednej godziny do co najmniej czterech godzin, co przełożyło się na roczne oszczędności rzędu 50 000 złotych. Dodatkowo, skróciło efektywnie czas przygotowawczy-zakończeniowy o ponad 60%, eliminując potrzebę przezbrajania maszyny.',
            technology: ['HyperMill', 'Excel', "Heidenhain"],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "https://docs.google.com/presentation/d/1ENdOObc5tb8797X0l23hFPKY_iszn6W8/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
            img: NightOrder
        },
    },
    {
        id: 6,
        img: BM,
        title: 'Raportowanie Wskazników KPI',
        project: 'Projekt dla PxCW',
        description: {
            text: 'Raportowanie Wskazników KPI',
            description1: 'Technologie:',
            description2: 'Głównym celem tego projektu było ustalenie nowych wskaźników KPI dla jednego z kluczowych klientów działu. Wprowadzono terminy oraz oceniono wskaźniki dotyczące lead time dla poszczególnych kryteriów. Raporty, zawierające te wskaźniki, są przekazywane Dyrektorowi Produkcji wraz z wnioskami i propozycjami dotyczącymi poprawy procesu w celu osiągnięcia jak najlepszych wyników.',
            technology: ['Excel'],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "",
            img: BM
        },
    },
    {
        id: 7,
        img: Elasto,
        title: 'Optymalizacja Elastomerów',
        project: 'Projekt dla PxCW',
        description: {
            text: 'Optymalizacja Elastomerów',
            description1: 'Technologie:',
            description2: 'Głównym celem tego projektu było zaprojektowanie oraz stworzenie oprzyrządowania technologicznego do produkcji części z elastomeru. Proces produkcji został unifikowany i uproszczony poprzez znormalizowane przygotowania. Wszystko zostało tak opracowane, aby każdy pracownik, niezależnie od poziomu doświadczenia, mógł go wykonywać. Dzięki tym zmianom, udało się skrócić proces o 40%, co przekłada się na roczne oszczędności rzędu 40 000 złotych.',
            technology: ['Excel', "Creo", 'HyperMill'],
            autor: 'Autor:',
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
