import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import INavMenuProps from "./menu-props";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MenuMobile({ items }: INavMenuProps) {
    return (
        <Sheet>
        <SheetTrigger asChild>
            <Button variant={"outline"}><Menu /></Button>
        </SheetTrigger>
        <SheetContent side={"top"} className="flex flex-col">
            {items.map((item, i) => (
                <Link href={item.link} legacyBehavior passHref key={i}>
                    <span className={"font-medium text-lg"}>
                        {item.title}
                    </span>
                </Link>
            ))}
        </SheetContent>
        </Sheet>
    )
}