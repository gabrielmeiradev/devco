import IUser, { IUserInApp } from "@/app/_interfaces/user";

export function getUserInApp(user: IUser): IUserInApp {
    return {...user, isAdmin: user.username === "gabrielmeiradev"};
}