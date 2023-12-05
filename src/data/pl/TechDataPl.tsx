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
// import VoluMill from '../../assets/TechIcons/geometric-solidworks.png';
import ProductionPlanning from '../../assets/TechIcons/production-planning-b.jpg';
import ToolMngr from '../../assets/TechIcons/TM_Vending.jpg';
import AutoCad from '../../assets/TechIcons/Autocad-Logo.png';
import Excel from '../../assets/TechIcons/Excel.png';
import CvTechPl1 from '../../assets/Cv/CV_techPl.jpg';
import CvTechPl2 from '../../assets/Cv/CV_techPl_2.jpg';


export type headerType = {
    img: string,
    text: string,
    linkedIn: string,
    email: string,
    singleWord: string[]
}

export const headerPlMechanic: headerType = {
    img: Logo,
    text: "Pracuj ze mną!",
    linkedIn: 'https://www.linkedin.com/in/maciej-szajstek-8995b4175/',
    email: 'mailto:maciej.szasjtek@gmail.com',
    singleWord: ['Programista', 'Technolog']
}

export type bannerType = {
    singleWord: string[],
    typed: string[],
    description: string,
    link: string,
    cv: string[],
    img: string,
    certificate: string[]
}

export const bannerPlMechanic: bannerType = {
    singleWord: ['Maciej', 'Szajstek', 'Jestem:', 'Cześć!', 'Kontakt'],
    typed: ['Programista CAM.', 'Technologiem.', 'Inżynierem.'],
    description: 'Jestem doświadczonym technologiem z 15-letnim stażem zawodowym, specjalizującym się zarówno w programowaniu CAM, ' +
        'jak i CAD. Moje umiejętności mogą przyczynić się do rozwoju Twojej firmy. Poniżej znajdziesz więcej informacji' +
        ' na temat mojej działalności. Dodatkowo, ukończyłem 3 kursy związane z programowaniem oraz zdobyłem ' +
        'tytuł magistra inżyniera z dwóch specjalizacji: Mechanika i Budowa Maszyn oraz Zarządzanie i Inżynieria Produkcji. ' +
        'Przeszedłem także wiele szkoleń z zakresu programowania oraz zarządzania zespołem. Prywatnie jestem ojcem dwójki dzieci i ' +
        'pasjonuję się programowaniem oraz grami komputerowymi. Ostatnio zajmowałem się programowaniem panelu operatora dla mojej firmy, ' +
        'który ma na celu dostarczenie operatorom na niższym szczeblu wiedzy podstawowej.',
    link: 'https://github.com/Atlon1',
    cv:[CvTechPl1, CvTechPl2],
    img: Image,
    certificate: []
}

type skillType = {
    id: number,
    url: string,
    text: string,
    stars: JSX.Element[]
}

type aboutType = {
    singleWord: string[],
    description: string,
    github: string,
    skillsList: skillType[],
    count: number[]
}


export const AboutPlMechanic: aboutType = {
    singleWord: ['Technologie:', 'Mój obecny stack technologiczny:', 'Lata', 'Doświadczenia', '++', 'Projekty', 'Gotowe', 'Usatysfakjonowani', 'klienci', 'Kontakt', 'My Portfolio'],
    description: 'Wykorzystanie cykli obróbkowych 2D i 3D w programie Hyper Mill.\n' +
        'Zajmowanie się symultaniczną obróbką 5-osiową oraz obróbką 5-osiową indeksowaną.\n' +
        'Korzystanie z automatycznych inteligentnych makr do oznaczania cech.\n' +
        'Pisanie skryptów w systemie SAP.\n' +
        'Generowanie zamówień.\n' +
        'Zarządzanie narzędziami skrawającymi.\n' +
        'Przeprowadzanie kalkulacji cenowych dla klientów.\n' +
        'Planowanie pracy na produkcji.\n' +
        'Projektowanie elektrod oraz konstrukcji form wtryskowych w programie Creo Direct.\n' +
        'Ustalanie parametrów Q w cyklach obróbkowych w programie Hyper Mill.\n' +
        'Wykonywanie obliczeń dotyczących parametrów skrawania w narzędziach Hidehain.',
    github: 'https://github.com/Atlon1',
    count: [15, 23, 80],
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
            text: "5 osiowe wiercenie",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },
        {
            id: 6,
            url: Finish,
            text: "5 osiowe wykańczanie",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarFill/>, <RiStarSLine/>]
        },
        {
            id: 7,
            url: Electorde,
            text: "Projektowanie Elektrod",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 8,
            url: SimultanicMill,
            text: "Symulatniczna obróbka",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>]
        },
        {
            id: 9,
            url: SimultanicMill,
            text: "VoluMill - tochoidalana obróbka",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },
        {
            id: 10,
            url: ProductionPlanning,
            text: "Planowanie produkcji",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>]
        },
        {
            id: 11,
            url: ToolMngr,
            text: "Magazyn narzędzi",
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
}


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

export const workContModalMechanic: WorkContProps[] = [
    {
        id: 1,
        img: WorkImg1,
        title: 'Sap - automatyzacja plików.',
        project: 'Projekt dla PxCW',
        description: {
            text: 'Sap - automatyzacja plików:',
            description1: 'Technologie:',
            description2: 'Ten projekt koncentruje się na automatyzacji działań w systemie ERP SAP, wykorzystując skrypty VBA oraz wprowadzając instrukcje logiczne. Głównym celem projektu jest wyeliminowanie monotonii w pracy i redukcja błędów wynikających z ręcznego wykonywania zadań. Dzięki temu osiągamy znaczne przyspieszenie procesu składania zleceń produkcyjnych, aż o około 80%.',
            technology: ['SAP', "Excel", "VBA"],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "",
            img: WrokImgModal1
        },
    },
    {
        id: 2,
        img: Layout,
        title: 'Oragniazja miejsc pracy.',
        project: 'Projekt dla PxCW',
        description: {
            text: 'Layout - organizacja miejsc pracy.',
            description1: 'Technologie:',
            description2: 'Projekt obejmuje organizację miejsc pracy zgodnie z wymaganiami klienta, co obejmuje zarządzanie na poziomie IT, DIT oraz współpracę z firmą zewnętrzną, która była odpowiedzialna za przestawienie maszyn. Koordynacja zespołów była realizowana zgodnie z harmonogramem Gaunta, a głównym założeniem było minimalizowanie zakłóceń w procesie produkcyjnym. Codziennie przenoszono po 2 maszyny z kompleksowym podłączeniem i uruchomieniem, tak aby mogły pracować już na drugiej zmianie. Dzięki efektywnemu zarządzaniu i koordynacji, projekt przebiegł bez żadnych problemów.',
            technology: ['Auto-Cad', 'Excel'],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: '',
            link: "",
            // link: "https://docs.google.com/spreadsheets/d/1hxYMN_D3L07l3jaB7c0TfRIWo20Gv7GT/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
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
            link: "",
            // link: "https://drive.google.com/file/d/1eVKmVQxUPL5zGyfLWt3uB-OpzAxoGRbS/view?usp=drive_link",
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
            link: "",
            // link: "https://docs.google.com/document/d/1v9mfu8JEpAxDnm5dBDthPN3YFefeuInA/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
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
            link: "",
            // link: "https://docs.google.com/presentation/d/1ENdOObc5tb8797X0l23hFPKY_iszn6W8/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
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
]
type WorkDescription = {
    singleWord: string[]
}
export const workDescriptionMechanic: WorkDescription = {
    singleWord: ['Moje ostatnie', 'projekty:', 'Jestem otwarty na projekty każdego rodzaju.', 'Wszystkie projekty'],
}

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

export const servicesPlMechanic: services = {
    singleWord: ['Czym sie zajmuje?', 'Technologia'],
    word: 'Obecnie pracuje jako Technolog CNC, w miedzynarodowej firmie. Dodatkowo kształce sie na FreeLance Developer..',
    services: [
        {
            id: 1,
            name: 'Zarządzanie Zespołem',
            description: 'Dzięki doskonałym umiejętnościom interpersonalnym potrafię efektywnie zarządzać zespołem oraz motywować go do działania, zgodnie z metodyką Scrum.',
            link: "",
        },
        {
            id: 2,
            name: 'Prowadzenie Kluczowych Projektów',
            description: 'Dzięki wieloletniemu doświadczeniu nie boję się podejmować trudnych projektów i wyzwań.',
            link: "",
        },
        {
            id: 3,
            name: 'Zakupy Narzędzi Skrawających',
            description: 'Posiadam obszerne doświadczenie w zakupach narzędzi skrawających oraz dysponuję rozległą siecią kontaktów, co umożliwia szybką reakcję w razie potrzeby.',
            link: "",
        },
        {
            id: 4,
            name: 'Optymalizacja Procesów',
            description: 'Posiadam szereg inżynierskich rozwiązań oraz bazę wiedzy, co pozwala na osiąganie zysków poprzez inwestycje.',
            link: "",
        },
        {
            id: 5,
            name: 'Tworzenie Układów Przestrzennych',
            description: 'Potrafię projektować układy przestrzenne w obszarze produkcji, przestawiać maszyny zgodnie z koncepcją oraz opracowywać harmonogramy Ganta, nie zakłócając cyklu produkcyjnego.',
            link: "",
        },
        {
            id: 6,
            name: 'Pisanie Skryptów Dla Systemu ERP',
            description: 'Specjalizuję się w pisaniu skryptów dla systemów ERP, co pozwala na rozszerzanie ich funkcjonalności.',
            link: "",
        },
        {
            id: 7,
            name: 'Zwiększanie Wydajności Maszyn Produkcyjnych',
            description: 'Dokonuję kalkulacji mocy obecnych maszyn, identyfikuję wąskie gardła oraz dostosowuję wydajność maszyn do potrzeb klienta.',
            link: "",
        },
    ]
}
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

export const contactPlMechanic: contactType = {

    nameValidation: {
        name: 'Pole nie może być puste!',
        nameLength: 'Imię musi zawierać co najmniej 2 znaki!',
    },
    emailValidation: {
        email: 'Podany email jest nieprawidłowy!',
        emailFormat: 'Zły e-mail!',
    },
    textValidation: {
        text: 'Pole nie może być puste!',
        textLength: 'Wiadomość musi zawierać co najmniej 40 znaków!',
    },


    thxText: 'Wiadomość została wysłana!. Dziękuje!',
    singleWord: ['Get in Touch', 'Zacznijmy pracę', 'razem!', 'Wyślij wiadomość!', 'Twoje Dane:', 'Adres email:', 'Wiadomość'],

}


