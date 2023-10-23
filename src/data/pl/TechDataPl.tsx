import WorkImg1 from '../../assets/Oddaj_rzeczy.jpg'
import WorkImg2 from '../../assets/e-commerence.jpg'
import WorkImg3 from '../../assets/Estate-website.jpg';
import WorkImg4 from '../../assets/Gym-image.jpg'
import WorkImg5 from '../../assets/Photoland.jpg'
import Logo from '../../assets/Maciej_logo.png'
import Image from '../../assets/atlon_doit_steampunk_style_7ca45451-cd20-4701-9013-4bc324c64832-removebg-preview.png';
import {RiStarSFill, RiStarSLine} from "react-icons/ri";


export type headerType = {
    img: string,
    text: string,
    linkedIn: string,
    email: string
}

export const headerPlMechanic: headerType = {
    img: Logo,
    text: "Pracuj ze mną!",
    linkedIn: 'https://www.linkedin.com/in/maciej-szajstek-8995b4175/',
    email: 'maciej.szasjtek@gmail.com'
}

export type bannerType = {
    singleWord: string[],
    typed: string[],
    description: string,
    link: string,
    cv: string,
    img: string
}

export const bannerPlMechanic: bannerType = {
    singleWord: ['Maciej', 'Szajstek', 'Jestem:', 'Cześć!', 'Kontakt'],
    typed: ['Programista CAM.', 'Technologiem.', 'Inżynierem.'],
    description: 'Jestem doświadczonym technologiem z 15-letnim stażem zawodowym, specjalizującym się zarówno w programowaniu CAM, zwłaszcza z wykorzystaniem oprogramowania Hyper Mill, ' +
        'jak i w obszarze CAD, gdzie doskonale operuję narzędziem Creo Direct. Moja rola obejmuje projektowanie optymalizacji procesów produkcyjnych oraz zarządzanie magazynem narzędzi ' +
        'skrawających. Tworzę także narzędzia technologiczne, które znacząco przyspieszają procesy produkcyjne.\n' +
        'Jestem współtwórcą projektów realizowanych nocą, które pozwoliły firmie oszczędzić nawet do 100 000 złotych rocznie. Dodatkowo, dzięki negocjacjom cenowym w zakresie narzędzi skrawających, ' +
        'udało mi się osiągnąć oszczędności rzędu 250 000 złotych. Odpowiadam również za prowadzenie ' +
        'międzynarodowych projektów oraz za aktualizację i wdrożenie nowego oprogramowania.\n' +
        'W ramach swojej pracy, pełniłem funkcję lidera w wielu projektach, takich jak wdrażanie nowych technologii obróbki, na przykład VoluMill. Dzięki automatyzacji procesów technologicznych, ' +
        'udało mi się przyspieszyć pracę technologów o około 75%, jednocześnie eliminując powtarzalne czynności.',
    link: 'https://github.com/Atlon1',
    cv: 'https://drive.google.com/file/d/18g4x_tJHOikxTOzYGgOj3k3tYqjRhODm/view?usp=drive_link',
    img: Image
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
}


export const AboutPlMechanic: aboutType = {
    singleWord: ['Technologie:', 'Mój obecny stack technologiczny to:', 'Lata', 'Doświadczenia', '++', 'Projekty', 'Gotowe', 'Usatysfakjonowani', 'klienci', 'Kontakt', 'My Portfolio'],
    description: 'JavaScript (ścieżka, komendy, moduły FS, interfejs wiersza poleceń), React (AOS, Firebase, TypeScript, ' +
        'tworzenie responsywnych stron internetowych, animacje za pomocą Motion, modale), ' +
        'Node.js (MongoDB z wykorzystaniem Mongoose, Axios, Express), MySql, Prisma, TypeScript, ' +
        'Tailwind CSS, Strapi, Next.js. Moim kolejnym celem jest poznanie języka C# oraz .Net.',
    github: 'https://github.com/Atlon1',
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

export const workContModalMechanic: WorkContProps[] = [
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
        project: 'Portfolio project',
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
    }
]
type WorkDescription = {
    singleWord: string[]
}
export const workDescriptionMechanic: WorkDescription = {
    singleWord: ['Moje ostatnie', 'projekty:', 'Jestem otwarty na projekty każdego rodzaju.', 'Wszystkie projekty'],
}

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

export const servicesPlMechanic: services = {
    singleWord: ['Czym sie zajmuje?', 'Technologia'],
    word: 'Obecnie pracuje jako Technolog CNC, w miedzynarodowej firmie. Dodatkowo kształce się na FreeLance Developer..',
    services: [
        {
            name: 'Standaryzacja zakupów narzedzi skrawajacych.',
            description: 'Szczegółowe wyliczenia, pracy przy zakupie narzędzi skrawających. Czas, droga, opis. Opracowano instrukcje po przez przekazanie odpowienich stadnradów zakupwych.',
            link: "https://docs.google.com/presentation/d/1WAkiwveUZdDLS6hEf5K2X5tQFzTpX28f/edit?usp=sharing&ouid=108326513820685031819&rtpof=true&sd=true",
        },
        {
            name: 'Zwiększenie efektywności,maszyn CNC.',
            description: 'Opracowanie oprzyrządowania technologicznego pozwalającego na wykonaywanie jednocześnie kilku elementów na raz. Wydłużenie pracy maszyny o około 40%  w nocy. Możliwość montażu, wszelkiego rodzaju elementów.',
            link: "https://docs.google.com/presentation/d/1vhOrwB_pLfeO0AEj0udgSWfLtJ5OBkEW/edit?usp=sharing&ouid=108326513820685031819&rtpof=true&sd=true",
        },
        {
            name: 'Organizacja pracy maszyn. Layout.',
            description: 'Wyrysowanie planu obszaru pordukcyjnego. Przestawienie maszyn wg. koncjepcji. Opracowanie Harmonogramu Gunta.' +
                ' Nie zakłucając cyklu pordukcyjnego.',
            link: "https://drive.google.com/file/d/1YAwpq1dwBjW5908pk_fGxhCUdbw92j2L/view?usp=sharing",
        },
        {
            name: 'Nowe technologie obróbkowe.',
            description: 'Szczegółowe wyliczenia zakupu nowych technologi obróbki Trochoidalnej. Testy w praktyce.' +
                'Nowa technologia narzedzi skrawających dla nowej strategii obróbki.',
            link: "https://docs.google.com/presentation/d/1mAxj5_qJuB_lBwVAR6FJeGDZtClGsYRT/edit?usp=sharing&ouid=108326513820685031819&rtpof=true&sd=true",
        },
        {
            name: 'Zakup maszyn CNC na potrzeby produkcyjne.',
            description: 'Wytypownie odpowiedniej maszyny, na potrzeby produkcyjne. Negocjacje cenowe dobór odpownienich parametrów maszyny.' +
                'Instalacja. Nadzór nad instalcją w miejscu wskazanym. Podłączenia mediów niezbędnych do pracy.',
            link: "https://docs.google.com/document/d/1v9mfu8JEpAxDnm5dBDthPN3YFefeuInA/edit?usp=drive_link&ouid=108326513820685031819&rtpof=true&sd=true",
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
    singleWord: ['Get in Touch', 'Zacznijmy prace', 'razem!', 'Wyślij wiadomość!', 'Twoje Dane:', 'Adres emial:', 'Wiadomość'],

}


