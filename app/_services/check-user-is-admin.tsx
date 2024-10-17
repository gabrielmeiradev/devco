import IUser from "@/app/_interfaces/user";

export function isAdmin(user: IUser) {
    return user.username === "gabrielmeiradev";
}