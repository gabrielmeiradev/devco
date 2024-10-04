import IUser from "../interfaces/user";

export default function getUserByUsername(username: string): { user: IUser | undefined }   {
    // TODO: make this service get theme by username at the server
    let user: IUser | undefined;

    if(username == "gabrielmeiradev") {
        user = {
            theme: {
                backgroundImage: "/images/background/temp-bg.png",
                primaryColor: "#CB4381"
            },
            bio: "Desenvolvedor web há 9 anos e desde os 12 anos venho aprimorando minhas habilidades com objetivo na fluência do inglês e outras linguas. Tenho um grande conhecimento em programação web, utilizo as maiores e mais eficientes tecnologias do mercado, como: React, Vue, Angular, e Node.js.",
            experiences: [
                {
                    company: "Meliora Consultoria",
                    description: "Atuando no desenvolvimento do PALM — um aplicativo destinado à integração de processos junto aos principais ERPs do mercado — utilizando Flutter para criação de interfaces multiplataforma e o desenvolvimento de microsserviços com Typescript e Node.js.",
                    from: new Date(),
                    imageLogoSrc: "",
                    jobTitle: "Full Stack Software Engineer",
                    to: "atualmente"
                }
            ],
            articles: [],
            projects: [
                {
                    title: "Project 1",
                    coverImgSrc: "",
                    description: "Uma descricao de um projeto"
                }
            ],
            skills: [
                {
                    name: "React",
                    howLong: 30 * 14 + 10
                },
                {
                    name: "Vue",
                    howLong: 30 * 4
                },
                {
                    name: "Angular",
                    howLong: 30 * 1
                },
                {
                    name: "Node.js",
                    howLong: 30 * 3
                },
                {
                    name: "Typescript",
                    howLong: 30 * 3
                },
                
            ]
        }
        return { user };
    }

    return { user };
}