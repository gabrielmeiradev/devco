import Logo from "@/components/logo";
import NavMenu from "@/components/nav-menu";
import IMenuItem from "@/app/_interfaces/menu-item";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function ProfileMenu({ username, items }: { username: string, items: IMenuItem[] }) {
    return (
        <>
            <div className="w-full z-[1000] px-6 py-8 fixed top-0 bg-gradient-to-b from-background to-transparent">
                <div className="flex justify-between container mx-auto">
                    <div className="flex gap-2 items-center justify-center">
                        <Logo width={80} />
                        <Link href={`/${username}`}>
                            <Badge variant={"outline"} className="text-sm">
                                @{username}
                            </Badge>
                        </Link>
                    </div>
                    <NavMenu items={items} />
                </div>
            </div>
            <div className="h-40"></div>
        </>
    );
}
