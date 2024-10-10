import { createContext, useContext, ReactNode } from "react";
import IUser from "../_interfaces/user";

const UserContext = createContext<IUser | null>(null);

export const UserProvider = ({ children, user }: { children: ReactNode, user: IUser }) => (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
);

export const useUser = (): IUser => {
    const context = useContext(UserContext);
    if (context === null) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};