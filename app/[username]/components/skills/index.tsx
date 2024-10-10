import ISkill from "@/app/_interfaces/skill";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { useState } from "react";
import ITheme from "@/app/_interfaces/theme";

export default function Skills({ skills, theme }: { skills: ISkill[], theme: ITheme }) {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const howLongFormatter = (howLong: number) => {
        const years = Math.floor(howLong / 365); 
        const remainingDaysAfterYears = howLong % 365;
        const months = Math.floor(remainingDaysAfterYears / 30); 
    
       
        const yearString = years > 0 ? `${years} ano${years !== 1 ? 's' : ''}` : '';
        const monthString = months > 0 ? `${years > 0 ? 'e' : ''} ${months} ${months !== 1 ? 'meses' : 'mês'}` : '';
    
        const parts = [yearString, monthString].filter(e => e !== '');
        return parts.join(' ').trim();
    };

    return (
        <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => 
                <TooltipProvider key={index}>
                    <Tooltip>
                    <TooltipTrigger asChild>
                            <div 
                                key={index}
                                onMouseEnter={() => setHoveredSkill(skill.name)}
                                onMouseLeave={() => setHoveredSkill(null)}
                            >
                            <h2 
                                className="cursor-default text-base font-semibold text-white transition-colors duration-200"
                                style={{ color: hoveredSkill === skill.name ? theme.primaryColor : 'inherit' }}
                            >
                                {skill.name}
                            </h2>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <span className="relative bottom-3 bg-secondary/80 py-2 px-4 rounded-full" style={{ color: theme.primaryColor }}>{howLongFormatter(skill.howLong)}</span>
                    </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
    );
}
