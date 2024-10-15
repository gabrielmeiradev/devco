import IMenuItem from "@/app/_interfaces/menu-item";
import ProfileMenu from "../menu";
import UserProfileHeader from "./user-profile-header";
import { IUserInApp } from "@/app/_interfaces/user";

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
                backdrop-brightness-[0.5]
            "
        />
    );
}
export default function Hero({ menuItems, user }: { menuItems: IMenuItem[], user: IUserInApp }) {

    return (
        <div 
            className="
                relative
                pb-[24vh] 
                bg-cover 
                bg-center
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
