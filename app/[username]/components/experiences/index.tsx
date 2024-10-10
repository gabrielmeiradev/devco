import ExperiencesCard from "./card";
import IExperience from "@/app/_interfaces/experience";

export default function Experiences({ experiences }: { experiences: IExperience[] }) {
    return <div className="flex flex-col">
        {experiences.map((experience, index) => (
            <ExperiencesCard key={index} experience={experience} />
        ))}
    </div>
}