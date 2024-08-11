export type HeroItem = {
    title: string,
    subtittle: string,
    videolink: string
}

export type FirstSections = {
    title: string,
    description: string,
    descriptiontwo: string,
    linkto: string,
    imageSection: string
}

export type PlanItems = {
    id: number,
    title: string,
    options: string[],
    price: number,
    linkto: string
}

export type FooterInfo = {
    id: number,
    title: string,
    text: string,
    link: string
}

/* export type OrderItem = MenuItem & { // agregamos todo lo que tiene el - type MenuItem - y se lo agregamos añadiendo quantity en la order
    quantity: number
} */