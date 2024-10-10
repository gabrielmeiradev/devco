"use client"

import React, { useMemo } from "react";
import { useParams } from 'next/navigation'
import { UserProvider, useUser } from "../_providers/user";
import { hexToHSL } from "../_utils/color-converter";
import IUser from "../_interfaces/user";
import { IProfileSection } from "../_interfaces/profile-section";

// Components
import Hero from "./components/hero/";
import Bio from "./components/bio/";
import Section from "./components/section";
import Skills from "./components/skills/";
import Articles from "./components/articles/";
import Projects from "./components/projects/";
import Experiences from "./components/experiences";
import getUserByUsername from "../_services/get-user-by-username";

const App = () => {
    const { username } = useParams();
    const { user } = getUserByUsername(username as string);

    if (!user) return <UserNotFound />;

    return (
        <UserProvider user={user}>
            <ProfilePage />
        </UserProvider>
    );
};

const UserNotFound = () => (
    <div className="w-full h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold">Usuário não encontrado</h1>
    </div>
);

const ProfilePage = () => {
    const user = useUser();
    const { profileSections, menuItems } = useProfileSections(user);

    return (
        <div className="w-full">
            <Hero menuItems={menuItems} user={user} />
            <Details user={user} sections={profileSections} />
        </div>
    );
};

const useProfileSections = (user: IUser) => {
    return useMemo(() => {
        const sectionConfigs = [
            { key: "experience", title: "Experiência", component: user.experiences.length > 0 ? <Experiences experiences={user.experiences} /> : null },
            { key: "projects", title: "Projetos", component: user.projects.length > 0 ? <Projects projects={user.projects} /> : null },
            { key: "articles", title: "Artigos", component: user.articles.length > 0 ? <Articles articles={user.articles} /> : null },
            { key: "skills", title: "Habilidades", component: user.skills.length > 0 ? <Skills skills={user.skills} theme={user.theme} /> : null }
        ];

        const profileSections = sectionConfigs
            .filter(config => config.component)
            .map(({ key, title, component }) => ({
                title,
                link: `#${key}`,
                component,
            }));

        const menuItems = profileSections.map(({ title, link }) => ({ title, link }));

        return { profileSections, menuItems };
    }, [user]);
};

const Details = React.memo(({ user, sections }: { user: IUser, sections: IProfileSection[] }) => (
    <div 
        style={{ "--primary": hexToHSL(user.theme.primaryColor!) } as React.CSSProperties} 
        className="px-6 py-10 flex flex-col items-center justify-center gap-10 -mt-24 z-30 relative max-w-3xl mx-auto"
    >   
        <Bio bio={user.bio} />
        {sections.map((section, index) => 
            section.component && (
                <Section key={index} name={section.title} id={section.link.substring(1)}>
                    {section.component}
                </Section>
            )
        )}
    </div>
));

Details.displayName = 'Details';

export default App;
