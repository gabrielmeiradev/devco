import { useUser } from "@/app/providers/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GithubIcon, Link2, LinkedinIcon } from "lucide-react";
import ProfileLink from "./profile-link";

export default function UserProfileHeader() {
    const profileTheme = useUser().theme;

    return (
        <div className="flex flex-col items-center mt-16">
            <div className="flex gap-5 items-center w-full justify-center">
                <Avatar className="size-20">
                    <AvatarImage src="https://github.com/gabrielmeiradev.png" alt="@gabrielmeiradev" />
                    <AvatarFallback>g</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-semibold">Gabriel Meira</h2>
                    <h3 className="text-xl font-medium" style={{ color: profileTheme?.primaryColor }}>Desenvolvedor Full Stack</h3>
                </div>
            </div>
            <div className="flex justify-center mt-6 gap-2">
                <ProfileLink to="#" icon={LinkedinIcon} textColor={profileTheme.primaryColor} />
                <ProfileLink to="#" icon={GithubIcon} textColor={profileTheme.primaryColor} />
                <ProfileLink to="#" icon={Link2} label="Meu portfólio" textColor={profileTheme.primaryColor} />
            </div>
        </div>
    );
};

