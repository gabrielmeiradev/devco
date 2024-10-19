import IArticle from "../_interfaces/article";

export default function getArticleById(id: string): IArticle {
    console.log(id);
    return {
        title: "Porque eu amo gatos",
        content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatibus, architecto sed voluptate dolores temporibus dolorum vero accusamus cum veniam!",
        date: new Date(),
        username: "gabrielmeiradev"
    }
}