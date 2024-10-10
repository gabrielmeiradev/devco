import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ProfileLink from "../profile-link";
import IUser from "@/app/_interfaces/user";
import getLinkIcon from "@/app/_utils/get-link-icon";


export default function UserProfileHeader({ user }: { user: IUser }) {
    const profileTheme = user.theme;

    return (
        <div className="flex flex-col items-center mt-16">
            <div className="flex lg:flex-row flex-col gap-5 items-center w-full justify-center">
                <Avatar className="size-20">
                    <AvatarImage src={user.avatarSrc} alt={user.name} />
                    <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-center lg:text-left">
                    <h2 className="text-xl lg:text-2xl font-semibold">{user.name}</h2>
                    <h3 className="text-lg lg:text-xl font-medium" style={{ color: profileTheme?.primaryColor }}>{user.role}</h3>
                </div>
            </div>
            <div className="flex flex-wrap justify-center mt-6 gap-2">
                {user.links.map((link, index) => (
                    <ProfileLink label={link.title} key={index} to={link.link} icon={getLinkIcon(link.type)} textColor={profileTheme.primaryColor} />
                ))}
            </div>
        </div>
    );
};

