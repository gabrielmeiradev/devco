import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu";
  import Link from "next/link";
import INavMenuProps from "./menu-props";

export default function MenuDesktop({ items }: INavMenuProps) {
    return (
      <NavigationMenu>
        <NavigationMenuList>
          {items.map((item, i) => (
            <NavigationMenuItem key={i}>
              <Link href={item.link} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    );
}