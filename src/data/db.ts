import type { 
    HeroItem, 
    FirstSections, 
    PlanItems, 
    FooterInfo
} from "../types"

export const heroItems : HeroItem = {
    "title": "1% TRAINING CLUB",
    "subtittle": "By Athletes, For Athletes.",
    "videolink": "/videos/hero-section.mp4"
}

export const firstSection : FirstSections = {
    title: "¿QUIERES SER PARTE DEL 1%?",
    description: "Onepercent Training Club nace con la idea de ser parte del 1% juntando varias disciplinas, con el deporte como contexto.",
    descriptiontwo: "Ser parte del 1% en un  conjunto, fuerza, resistencia, estética, salud, mentalidad y hábitos.",
    linkto: "#formulario",
    imageSection: "first-section"
}

export const planItems : PlanItems[] = [
    {
        id: 1,
        title: "Basic",
        options: [
            "Dieta o entrenamiento",
            "Revisión mensual",
            "Personalización",
            "Dudas",
        ],
        price: 29.90,
        linkto: "https://docs.google.com/forms/d/e/1FAIpQLSdB2XrkjsaPC3Oen-c1sqx-ePUZSQh7vlCQYV__3NChSq199w/viewform",
    },
    {
        id: 2,
        title: "Intermediate",
        options: [
            "Plan nutricional",
            "Entrenamiento",
            "Revisión cada 2 semanas",
            "Personalización",
            "Dudas",
        ],
        price: 49.90,
        linkto: "https://docs.google.com/forms/d/e/1FAIpQLSdB2XrkjsaPC3Oen-c1sqx-ePUZSQh7vlCQYV__3NChSq199w/viewform",
    },
    {
        id: 3,
        title: "1%",
        options: [
            "Plan nutricional",
            "Entrenamiento",
            "Revisión semanal",
            "Personalización",
            "Dudas 24/7",
            "Acceso al 1% training club",
        ],
        price: 69.90,
        linkto: "https://docs.google.com/forms/d/e/1FAIpQLSdB2XrkjsaPC3Oen-c1sqx-ePUZSQh7vlCQYV__3NChSq199w/viewform"
    },
]

export const footerItems : FooterInfo[] = [
    {
        id: 1,
        title: "Correo",
        text: "onepercentrainingclub@gmail.com",
        link: "mailto:onepercentrainingclub@gmail.com"
    },
    {
        id: 2,
        title: "Telegram",
        text: "t.me/onepercentclvb",
        link: "t.me/onepercentclvb"
    },
    {
        id: 3,
        title: "Formulario",
        text: "Clica aquí para rellenar el formulario.",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdB2XrkjsaPC3Oen-c1sqx-ePUZSQh7vlCQYV__3NChSq199w/viewform"
    },
]

