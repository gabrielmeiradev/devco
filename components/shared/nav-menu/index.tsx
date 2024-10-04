import { useEffect, useState } from "react";
import INavMenuProps from "./menu-props";
import MenuDesktop from "./desktop";
import MenuMobile from "./mobile";

export default function NavMenu({ items }: INavMenuProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);

    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  return isDesktop ? <MenuDesktop items={items} /> : <MenuMobile items={items} />;
}
