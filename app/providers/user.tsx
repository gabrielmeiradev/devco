import { createContext, useContext, ReactNode } from "react";
import IProfile from "../interfaces/user";
import getUserByUsername from "../services/get-user-by-username";

const UserContext = createContext<IProfile>({
    theme: {
        backgroundImage: undefined,
        primaryColor: undefined
    },
    bio: "",
    skills: [],
    experiences: [],
    projects: [],
    articles: []
});

export const UserProvider = ({ children, username }: { children: ReactNode, username: string }) => {

    const { user } = getUserByUsername(username);

    if(user) return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};