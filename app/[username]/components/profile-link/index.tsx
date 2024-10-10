import Link from "next/link";
import { ElementType } from "react";

interface IProfileLinkProps {
    label?: string,
    icon?: ElementType,
    to: string,
    textColor?: string,
}

export default function ProfileLink({ label, icon: Icon, to, textColor }: IProfileLinkProps) {
    return (
        <Link 
        href={to} 
        className="
            flex gap-2 items-center bg-white/5 
            p-3 px-5 rounded-full font-medium 
            text-base border border-transparent 
            hover:bg-white/10 hover:border-white/5 
            data-[state=open]:bg-white/10 data-[state=open]:border-white/5
            focus:bg-white/10 focus:border-white/5
            transition-colors outline-none 
        " 
        style={{ color: textColor }}>
            {Icon && <Icon className={"h-5"} />}
            {label}
        </Link>
    );
}
