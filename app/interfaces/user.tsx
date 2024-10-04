import IArticle from "./article";
import IExperience from "./experience";
import IProject from "./project";
import ISkill from "./skill";

export default interface IUser {
    theme: {
        backgroundImage?: string,
        primaryColor?: string,
    },
    bio: string,
    skills: ISkill[],
    experiences: IExperience[],
    projects: IProject[],
    articles: IArticle[],
}