import IArticle from "./article";
import IExperience from "./experience";
import ILink from "./link";
import IProject from "./project";
import ISkill from "./skill";
import ITheme from "./theme";

export default interface IUser {
    username: string,
    name: string, 
    role: string,
    avatarSrc: string,
    links: ILink[],
    theme: ITheme,
    bio: string,
    skills: ISkill[],
    experiences: IExperience[],
    projects: IProject[],
    articles: IArticle[],
}

export interface IUserInApp extends IUser {
    isAdmin: boolean;
}   