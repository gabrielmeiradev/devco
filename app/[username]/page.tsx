"use client"
import { UserProvider, useUser } from "../providers/user";
import Bio from "./components/bio";
import Hero from "./components/hero";
import Skills from "./components/skills";

export default function App() {
    return (
        <UserProvider username="gabrielmeiradev">
            <Hero />
            <Details />
        </UserProvider>
    );
}

function Details() {
    const user = useUser();

    return (
        <div className="px-6 flex flex-col items-center justify-center gap-16 -mt-24 z-30 relative max-w-3xl mx-auto">
             <Bio />
             {user.skills.length > 0 && <Skills />}
        </div>
    );
}
