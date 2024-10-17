import ProjectCard from "./card";
import IProject from "@/app/_interfaces/project";
import AddProjectButton from "../admin/add-project-button";

export default function Projects({ projects, canAdd }: { projects: IProject[], canAdd: boolean  }) {
    return (
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
            ))}
            {canAdd && <AddProjectButton className="w-full h-full" />}
        </div>
    )
}
