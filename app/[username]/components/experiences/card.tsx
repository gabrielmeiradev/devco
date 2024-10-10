import Image from "next/image";
import IExperience from "@/app/_interfaces/experience";

export default function ExperiencesCard({ experience }: { experience: IExperience }) {
    return (
        <div className="flex gap-4 items-stretch h-full">
            <div className="flex flex-col items-stretch sm:w-2/3 md:w-2/6">
                <Image 
                    src={experience.companyLogoSrc} 
                    height={600} 
                    width={600} 
                    alt={experience.company} 
                    className="rounded-xl" 
                />
                <div className="flex-1 flex flex-col items-center">
                    <div className="flex-1 w-fit border-l-4 border-gray-600 border-dotted"></div>
                </div>
            </div>
            <div className="flex flex-col justify-between h-full pb-8">
                <h2 className="text-primary text-lg font-semibold">{experience.role}</h2>
                <div className="flex flex-col lg:flex-row lg:items-center gap-2 mt-2 mb-3">
                    <span className="flex w-fit text-gray-500 py-1 px-3 rounded-full border border-gray-500">{experience.company}</span>
                    <span className="text-gray-400">dez de 2023 - o momento</span>
                </div>
                <p className="text-base">
                    {experience.description}
                </p>
            </div>
        </div>
    );
}
