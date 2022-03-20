export const heroSection = {
    title: "MOBILIARIO",
    subText: `Diseño y fabricación de muebles, desarrollamos proyectos a la medida y a tu inversión.`,
    slideShowImages : [
        "./images/office.jpg",
        "./images/clothing_showroom_2.jpg",
        "./images/conference_room_2.jpg",
        "./images/conference_room_light.jpg",
        "./images/conference_room.jpg",
        "./images/office_rendering.jpg"
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