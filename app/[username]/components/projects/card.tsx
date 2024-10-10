import Image from "next/image";
import Link from "next/link";
import IProject from "@/app/_interfaces/project";

export default function ProjectCard({ project }: { project: IProject }) {
    return (
        <Link href={`/projects/${project.id}`}>
            <div className="bg-secondary/30 rounded-xl p-3 cursor-pointer duration-150 border-secondary/20 border ease-in-out transition hover:bg-secondary/80 hover:border hover:border-secondary hover:scale-105">
                <div className="w-full h-32 relative mb-4">
                    <Image
                        src={project.coverImgSrc}
                        alt={project.title}
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>
                <h3 className="text-sm font-semibold text-muted-foreground">{project.title}</h3>
            </div>
        </Link>
    );
}