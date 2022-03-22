export const heroSection = {
    title: "MOBILIARIO",
    subText: `Diseño y fabricación de muebles en Guatemala. Desarrollamos proyectos a la medida y a tu inversión.`,
    slideShowImages: [
        "./images/office.jpg",
        "./images/clothing_showroom_2.jpg",
        "./images/conference_room_2.jpg",
        "./images/conference_room_light.jpg",
        "./images/conference_room.jpg",
        "./images/office_rendering.jpg"
    ],
    contactButtons: [
        {
            text: "Facebook Messenger",
            url: "https://m.me/EUROLAMY"
        },
        {
            text: "Whatsapp",
            url: "https://wa.me/+50250006820?text=Hola,%20quiziera%20saber%20mas%20informacion%20acerca%20de%20sus%20servicios."
        }
    ]
};

export interface IFinishedProject {
    name: string;
    description: string;
    images: string[];
};

export const finishedProjects: IFinishedProject[] = [
    {
        name: "Estación de trabajo y sala de reuniones, oficina gerencia general G&T Continental.",
        description: "Nuestras partes y componentes crean ambientes de trabajo con ergonomía.",
        images: [
            "./images/conference_room_2.jpg",
            "./images/conference_room_light.jpg",
            "./images/conference_room.jpg",
        ]
    }
];