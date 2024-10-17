import IUser from "../_interfaces/user";
import getThemeById from "./get-theme-by-id";

export default function getUserByUsername(username: string): { user: IUser | undefined }   {
    // TODO: make this service get theme by username at the server
    let user: IUser | undefined;

    const userThemeId = "1";
    const theme = getThemeById(userThemeId);

    if(username == "gabrielmeiradev") {
        user = {
            username: "gabrielmeiradev",
            name: "Gabriel Meira",
            role: "Desenvolvedor Full Stack",
            avatarSrc: "https://github.com/gabrielmeiradev.png",
            theme: theme,
            links: [
                {
                    type: "link",
                    title: "Portfólio",
                    link: "https://gabrielmeiradev.github.io"
                },
                {
                    type: "linkedin",
                    title: "Linkedin",
                    link: "https://www.linkedin.com/in/gabrielmeiradev/"
                },
                {
                    type: "github",
                    title: "Github",
                    link: "https://www.github.com/gabrielmeiradev/"
                }
            ],
            bio: "Desenvolvedor web há 9 anos e desde os 12 anos venho aprimorando minhas habilidades com objetivo na fluência do inglês e outras linguas. Tenho um grande conhecimento em programação web, utilizo as maiores e mais eficientes tecnologias do mercado, como: React, Vue, Angular, e Node.js.",
            experiences: [
                {
                    company: "Meliora Consultoria",
                    description: "Atuando no desenvolvimento do PALM — um aplicativo destinado à integração de processos junto aos principais ERPs do mercado — utilizando Flutter para criação de interfaces multiplataforma e o desenvolvimento de microsserviços com Typescript e Node.js.",
                    from: new Date(),
                    companyLogoSrc: "/images/meliora.jpeg",
                    role: "Full Stack Software Engineer",
                    to: "atualmente"
                },
                {
                    company: "Meliora Consultoria",
                    description: "Atuando no desenvolvimento do PALM — um aplicativo destinado à integração de processos junto aos principais ERPs do mercado — utilizando Flutter para criação de interfaces multiplataforma e o desenvolvimento de microsserviços com Typescript e Node.js.",
                    from: new Date(),
                    companyLogoSrc: "/images/meliora.jpeg",
                    role: "Full Stack Software Engineer",
                    to: "atualmente"
                },
            ],
            articles: [
                {
                    id: "1",
                    title: "The two types of quality",
                    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, voluptas. Totam ad temporibus assumenda cumque eaque qui atque, doloribus facere?",
                    readTime: 30 
                },
                {
                    id: "1",
                    title: "The two types of quality",
                    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, voluptas. Totam ad temporibus assumenda cumque eaque qui atque, doloribus facere?",
                    readTime: 8 * 60 
                },
                {
                    id: "1",
                    title: "The two types of quality",
                    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, voluptas. Totam ad temporibus assumenda cumque eaque qui atque, doloribus facere?",
                    readTime: 8 * 60 
                },
                {
                    id: "1",
                    title: "The two types of quality",
                    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, voluptas. Totam ad temporibus assumenda cumque eaque qui atque, doloribus facere?",
                    readTime: 8 * 60 
                },
                {
                    id: "1",
                    title: "The two types of quality",
                    content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, voluptas. Totam ad temporibus assumenda cumque eaque qui atque, doloribus facere?",
                    readTime: 8 * 60 
                }
            ],
            projects: [
                {
                    id: "1",
                    title: "Project 1",
                    coverImgSrc: "/images/300.png",
                    description: "Uma descricao de um projeto"
                }
            ],
            skills: [
                {
                    name: "Pix",
                },
                {
                    name: "Vue",
                },
                {
                    name: "Angular",
                },
                {
                    name: "Node.js",
                },
                {
                    name: "Typescript",
                },
                
            ]
        }
    }

    return { user };
}