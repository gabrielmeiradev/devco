import Image from "next/image";

interface ILogoProps {
    height?: number,
    width?: number
}

export default function Logo({ width = 90}: ILogoProps) {
    return (<Image src={"/images/brand/devco_logo.svg"} height={0} width={width} alt="" />)
}