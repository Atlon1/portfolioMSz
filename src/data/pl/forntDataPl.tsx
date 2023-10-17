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