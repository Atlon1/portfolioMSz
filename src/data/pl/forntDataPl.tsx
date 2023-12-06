import WorkImg1 from '../../assets/Oddaj_rzeczy.jpg'
import WorkImg2 from '../../assets/e-commerence.jpg'
import WorkImg3 from '../../assets/Estate-website.jpg';
import WorkImg4 from '../../assets/Gym-image.jpg'
import WorkImg5 from '../../assets/Photoland.jpg'
import WorkImg6 from "../../assets/Lukasz-portfolio.jpg";
import Logo from '../../assets/Maciej_logo.png'
import Image from '../../assets/atlon_doit_steampunk_style_7ca45451-cd20-4701-9013-4bc324c64832-removebg-preview.png';
import {RiStarSFill, RiStarSLine} from "react-icons/ri";
import SiiDyp from '../../assets/Certificate/Sii_Dyplom.jpg';
import SiiExam from '../../assets/Certificate/Sii_Exam.jpg';
import CLDyp from '../../assets/Certificate/CL_Dyplom.jpg';
import CLSup1 from '../../assets/Certificate/CL_Sup1.jpg';
import CLSup2 from '../../assets/Certificate/CL_Sup2.jpg';
import CvPL from '../../assets/Cv/CV_pl.jpg'



export type headerType = {
    img: string,
    text: string,
    linkedIn: string,
    email: string
    singleWord: string[]
}

export const headerPL: headerType = {
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
    certificate: string[],
}

export const bannerPl: bannerType = {
    singleWord: ['Maciej', 'Szajstek', 'Jestem:', 'Cześć!', 'Kontakt', 'Certyfikaty'],
    typed: ['Frontend Developerem', 'Projektantem Ui/Ux', 'Inżynierem'],
    description: 'Swoją przygodę z programowaniem rozpocząłem w grudniu 2021 roku. ' +
        'Zaczęłem od front-endu, który ' +
        'uważam za łatwy i satysfakcjonujący' +
        ' do nauki. Poniżej znajdziesz informacje o moich umiejętnościach jako programisty.' +
        ' Ukończyłem kurs z front-endu w CodersLab, następnie zanurzyłem się w świecie Node.js. ' +
        'Aktualnie, pracuję nad poszerzeniem swojej wiedzy o język C#, co jest swoistym hobby, ' +
        'ponieważ wszystkie te zajęcia odbywają się po godzinach pracy. Poniżej przedstawiam zakres ' +
        'mojej obecnej wiedzy technicznej. Nieustannie uczę się nowych funkcjonalności oraz sposobów ' +
        'tworzenia czystego i wydajnego kodu.',
    link: 'https://github.com/Atlon1',
    cv: [CvPL],
    img: Image,
    certificate: [SiiDyp, SiiExam, CLDyp, CLSup1, CLSup2]

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


export const AboutPl: aboutType = {
    singleWord: ['Technologie:', 'Mój obecny stack technologiczny to:', 'Lata', 'Doświadczenia', '++', 'Projekty', 'Gotowe', 'Usatysfakjonowani', 'klienci', 'Kontakt', 'My Portfolio'],
    description: 'JavaScript (ścieżka, komendy, moduły FS, interfejs wiersza poleceń), React (AOS, Firebase, TypeScript, ' +
        'tworzenie responsywnych stron internetowych, animacje za pomocą Motion, modale), ' +
        'Node.js (MongoDB z wykorzystaniem Mongoose, Axios, Express), MySql, Prisma, TypeScript, ' +
        'Tailwind CSS, Strapi, Next.js. Moim kolejnym celem jest poznanie języka C# oraz .Net.',
    github: 'https://github.com/Atlon1',
    count: [2,8, 10],
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
            text: "Java Script",
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
            text: "Github",
            stars: [<RiStarSFill/>, <RiStarSFill/>, <RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 7,
            url: "https://skillicons.dev/icons?i=ts",
            text: "Typescript",
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
            text: "Next JS",
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
            text: "Net",
            stars: [<RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
        },
        {
            id: 16,
            url: "https://skillicons.dev/icons?i=mysql",
            text: "MySql",
            stars: [<RiStarSFill/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>, <RiStarSLine/>]
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

export const workContModal: WorkContProps[] = [
    {
        id: 6,
        img: WorkImg6,
        title: 'Lukasz portfolio - Projekt',
        project: 'Portfolio projekt',
        description: {
            text: 'Portfolio',
            description1: 'Technologie:',
            description2: 'Witajcie na moim portfolio! Jestem, technologiem i programistą CNC z pasją do precyzyjnego inżynieringu. Moje umiejętności obejmują specjalizację w kodzie G, oprogramowaniu CAM i obsłudze maszyn CNC. Przedstawiam tutaj swoje doświadczenie w różnorodnych projektach, od komponentów lotniczych po innowacyjne rozwiązania narzędziowe. Zapraszam do eksploracji mojego portfolio, aby zobaczyć precyzję i innowacyjność, które wnoszę do każdego projektu. Śledźcie mojego bloga, aby być na bieżąco z trendami branżowymi, i śmiało kontaktujcie się w sprawie potencjalnych współprac w dynamicznym świecie technologii CNC.',
            technology: ['React scroll', 'React Switch', 'React-Router', 'Motion div', 'UseParams', 'TransformedAnimation'],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: 'Portfolio Live Demo',
            link: "https://atlon1.github.io/lukaszL-portfolio/",
            img: WorkImg6
        },
    },
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
            description2: 'Nasza strona internetowa to miejsce, gdzie znajdziesz najnowsze trendy w modzie na każdą okazję. Oferujemy szeroki wybór wysokiej jakości odzieży, od eleganckich sukienek po codzienne ubrania. Nasze kolekcje są starannie dobrane, aby sprostać oczekiwaniom zarówno miłośników klasyki, jak i tych, którzy kochają eksperymentować z stylem. Dzięki prostemu interfejsowi i wygodnym opcjom wyszukiwania znajdziesz szybko to, czego szukasz. Zachęcamy do odwiedzenia naszej strony i odkrycia inspirujących outfitów, które podkreślą Twój unikalny styl.',
            technology: ['ReactScroll', 'Fetch Get-POST', 'FireBase', 'HashLink', 'Context-API', 'RWD'],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: 'E-commerence Live Demo',
            link: "https://atlon1.github.io/first-e-comerance-shop/",
            img: WorkImg2
        },
    },
    {
        id: 3,
        img: WorkImg3,
        title: 'Estate website',
        project: 'Portfolio project',
        description: {
            text: 'Estate website:',
            description1: 'Technologie:',
            description2: 'Nasza strona internetowa jest wiodącym źródłem nieruchomości w Stanach Zjednoczonych i Kanadzie, ' +
                'oferując szeroki wybór atrakcyjnych ofert na rynku nieruchomości. Działamy w obu krajach, umożliwiając klientom dostęp do różnorodnych nieruchomości,' +
                ' od luksusowych domów po mieszkania i działki inwestycyjne. Nasza platforma jest łatwa w obsłudze, a zaawansowane narzędzia wyszukiwania pozwalają szybko znaleźć ' +
                'idealną nieruchomość. Ponadto, dostarczamy najnowsze informacje o rynku nieruchomości oraz doradztwo dotyczące zakupu, sprzedaży i ' +
                'inwestycji. Jesteśmy partnerem w Twojej podróży w poszukiwaniu wymarzonej nieruchomości w Stanach i Kanadzie.',
            technology: ['Fetch', 'React-Router', 'ContextAPI', 'UseParams', 'DataBase'],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: 'Estate Live Demo',
            link: "https://atlon1.github.io/estate-website/",
            img: WorkImg3
        },
    },
    {
        id: 4,
        img: WorkImg4,
        title: 'Gym-me',
        project: 'Portfolio project',
        description: {
            text: 'Gym-me',
            description1: 'Technologie:',
            description2: 'Nasza siłownia to miejsce, gdzie Twoje cele fitness stają się rzeczywistością. Oferujemy nowoczesny i dobrze wyposażony obiekt, który jest idealnym miejscem ' +
                'do kształtowania swojej sylwetki, poprawy wytrzymałości i zdrowia. Nasz zespół doświadczonych instruktorów jest gotowy, by pomóc Ci osiągnąć swoje cele treningowe i dostosować ' +
                'programy do Twoich indywidualnych potrzeb. Nasza atmosfera sprzyja motywacji i rozwojowi, zapewniając komfort i poczucie bezpieczeństwa. Bez względu na to, czy jesteś ' +
                'doświadczonym sportowcem czy dopiero zaczynasz swoją przygodę z fitness, u nas znajdziesz wszystko, czego potrzebujesz, by być w formie i cieszyć się zdrowym stylem życia. ' +
                'Dołącz do naszej społeczności i zacznij pracować nad sobą już dziś!',
            technology: ['React-Router', 'ContextAPI', 'UseParams', 'DataBase', 'Local Storage', 'Acordion', 'React-Switch', 'FormValidation'],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: 'Gym-me Live Demo',
            link: "https://atlon1.github.io/gym-site/",
            img: WorkImg4
        },
    },
    {
        id: 5,
        img: WorkImg5,
        title: 'Photoland',
        project: 'Portfolio projekt',
        description: {
            text: 'Photoland',
            description1: 'Technologie:',
            description2: 'Nasza strona to raj dla pasjonatów fotografii, gdzie znajdziesz najwyższej jakości aparaty fotograficzne dostępne na rynku. Oferujemy szeroki wybór aparatów cyfrowych, ' +
                'lustrzanek oraz akcesoriów, które pomogą Ci uwiecznić najpiękniejsze chwile w życiu. Nasza platforma zapewnia łatwą nawigację i szczegółowe opisy produktów, ' +
                'abyś mógł dokładnie znaleźć aparat odpowiedni do swoich potrzeb. Jesteśmy zawsze na bieżąco z nowościami w świecie fotografii, dostarczając Ci informacje o najnowszych modelach i ' +
                'technologiach. Dołącz do naszej społeczności fotografów i zainwestuj w swoją pasję, odkrywając świat poprzez obiektyw aparatu.',
            technology: ['React scroll', 'React Switch', 'Strapi', 'Strape', 'React-Router', 'ContextAPI', 'UseParams'],
            autor: 'Autor:',
            name: 'Maciej Szajstek - solo',
            note: 'Photoland Live Demo',
            link: "https://atlon1.github.io/fotoSite/",
            img: WorkImg5
        },
    },

]
type WorkDescription = {
    singleWord: string[]
}
export const workDescription: WorkDescription = {
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

export const servicesPl: services = {
    singleWord: ['Czym sie zajmuje?', 'Technologia'],
    word: 'Obecnie pracuje jako Technolog CNC, w miedzynarodowej firmie. Dodatkowo kształce się na FreeLance Developer..',
    services: [
        {
            id: 1,
            name: 'Projektowanie stron typu slider',
            description: 'Wykonam Państwa spersonalizowaną wizytówkę firmy lub osoby na stronie internetowej. Pozwólcie nam zaistnieć w wirtualnym świecie i zaprezentować się jako profesjonaliści.',
            link: ""
        },
        {
            id: 2,
            name: 'Zakładanie sklepów internetowych',
            description: 'Oferuję kompleksową usługę tworzenia stron e-commerce. Przełamcie barierę sprzedaży online i oszczędzajcie na opłatach abonamentowych.',
            link: ""
        },
        {
            id: 3,
            name: 'Aplikacje edukacyjne',
            description: 'Zaprojtkuje stornę która będzie prowadzić kursy online. Oferuje niezawodne rozwiązania pozwalające na maksymalizację zysków.',
            link: ""
        },
        {
            id: 4,
            name: 'Aplikacja dla pizzerii',
            description: 'Zapraszam do wspólnego projektu, jeśli marzycie o wejściu w świat gastronomii i przyjmowaniu zamówień online poprzez stronę internetową.',
            link: ""
        },
        {
            id: 5,
            name: 'Spersonalizowana aplikacja',
            description: 'Jestem gotowy stworzyć dla Państwa spersonalizowany projekt, dostosowany do indywidualnych potrzeb. Wystarczy nam powiedzieć, czego potrzebujecie, a my zrealizujemy Wasze marzenia.',
            link: ""
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

export const contactPl : contactType = {

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


