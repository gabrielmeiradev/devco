import IMenuItem from "@/app/_interfaces/menu-item";
import ProfileMenu from "../menu";
import UserProfileHeader from "./user-profile-header";
import IUser from "@/app/_interfaces/user";

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
export default function Hero({ menuItems, user }: { menuItems: IMenuItem[], user: IUser }) {

    return (
        <div 
            className="
                relative
                pb-[24vh] 
                bg-cover 
            "
            style={{ backgroundImage: `url(${user.theme.backgroundImage})` }}
        >
            <div className="relative z-50">
                <ProfileMenu username={user.username} items={menuItems} />
                <div className="max-w-3xl mx-auto px-6">
                    <UserProfileHeader user={user} />
                </div>
            </div>
            <HeroEffect />
        </div>
    );
}
