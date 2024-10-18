import IArticle from "../_interfaces/article";

export default function getArticleById(id: string): IArticle {
    console.log(id);
    return {
        content: "",
        date: new Date(),
        username: "gabrielmeiradev"
    }
}