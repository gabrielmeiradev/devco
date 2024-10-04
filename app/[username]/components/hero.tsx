import { useUser } from "@/app/providers/user";
import ProfileMenu from "./menu";
import UserProfileHeader from "./user-profile-header";

function HeroEffect() {
    return (
        <div 
            className="
                absolute 
                inset-0 
                z-0 
                bg-gradient-to-b 
                from-transparent 
                to-background 
                backdrop-contrast-100 
                backdrop-brightness-[0.7]
            "
        />
    );
}
export default function Hero() {
    const user = useUser();

    const headerItems = [
        {
            title: "Sobre",
            link: "#about"        
        },
        {
            title: "Experiência",
            link: "#experience"
        },
        {
            title: "Projetos",
            link: "#projects"
        },
        {
            title: "Artigos",
            link: "#articles"
        }
    ]


    return (
        <div 
            className="
                relative 
                pb-[25vh] 
                bg-cover 
            "
            style={{ backgroundImage: `url(${user.theme.backgroundImage})` }}
        >
            <div className="relative z-10">
                <ProfileMenu items={headerItems} />
                <div className="max-w-3xl mx-auto px-6">
                    <UserProfileHeader />
                </div>
            </div>
            <HeroEffect />
        </div>
    );
}
