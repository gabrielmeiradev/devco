import ExperiencesCard from "./card";
import IExperience from "@/app/_interfaces/experience";
import AddExperienceButton from "../admin/add-experience-button";

export default function Experiences({ experiences, canAdd }: { experiences: IExperience[], canAdd: boolean }) {
    return <div className="flex flex-col">
        {experiences.map((experience, index) => (
            <ExperiencesCard key={index} experience={experience} />
        ))}
        {canAdd && <AddExperienceButton className="mt-4" />}
    </div>
}

