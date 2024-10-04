import Logo from "@/components/shared/logo";
import NavMenu from "@/components/shared/nav-menu";
import INavMenuProps from "@/components/shared/nav-menu/menu-props";
import { Badge } from "@/components/ui/badge"

export default function ProfileMenu({ items }: INavMenuProps) {
    return (
        <div className="w-full px-6 py-8">
            <div className="flex justify-between container mx-auto">
                <div className="flex gap-2 items-center justify-center">
                    <Logo />
                    <Badge variant={"outline"} className="text-sm">
                        @gabrielmeiradev
                    </Badge>
                </div>
                <NavMenu items={items} />
            </div>
        </div>
    )
}