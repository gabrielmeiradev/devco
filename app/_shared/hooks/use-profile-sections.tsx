import Articles from "@/app/[username]/components/articles";
import Experiences from "@/app/[username]/components/experiences";
import Projects from "@/app/[username]/components/projects";
import Skills from "@/app/[username]/components/skills";
import { IUserInApp } from "@/app/_interfaces/user";
import { useMemo } from "react";

const useProfileSections = (user: IUserInApp) => {
    return useMemo(() => {
        const sectionConfigs = [
            {
                key: "skills", title: "Habilidades", component: user.skills.length > 0 ?
                    <Skills skills={user.skills} /> : null
            },
            { key: "experience", title: "Experiência", component: user.experiences.length > 0 ? <Experiences experiences={user.experiences} canAdd={user.isAdmin} /> : null },
            { key: "projects", title: "Projetos", component: user.projects.length > 0 ? <Projects projects={user.projects} canAdd={user.isAdmin} /> : null },
            { key: "articles", title: "Artigos", component: user.articles.length > 0 ? <Articles articles={user.articles} canAdd={user.isAdmin} /> : null },

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

export default useProfileSections;