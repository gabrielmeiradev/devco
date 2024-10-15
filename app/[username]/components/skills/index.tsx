import ISkill from "@/app/_interfaces/skill";
export default function Skills({ skills }: { skills: ISkill[] }) {

    return (
        <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => 
                <h2 
                    key={index}
                    className="hover:text-primary cursor-default text-base font-semibold text-white transition-colors duration-200"
                >
                    {skill.name}
                </h2>
            )}
        </div>
    );
}
