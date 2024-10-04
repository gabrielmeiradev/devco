import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { useUser } from "../../providers/user";
import { useState } from "react";

export default function Skills() {
    const user = useUser();
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const howLongFormatter = (howLong: number) => {
        const years = Math.floor(howLong / 365); 
        const remainingDaysAfterYears = howLong % 365;
        const months = Math.floor(remainingDaysAfterYears / 30); 
        const remainingDays = remainingDaysAfterYears % 30;
    
       
        const yearString = years > 0 ? `${years} ano${years !== 1 ? 's' : ''}` : '';
        const monthString = months > 0 ? `${years > 0 ? 'e' : ''} ${months} ${months !== 1 ? 'meses' : 'mês'}` : '';
        const dayString = remainingDays > 0 ? `e ${remainingDays} ${remainingDays !== 1 ? 'dias' : 'dia'}` : '';
    
        const parts = [yearString, monthString, dayString].filter(e => e !== '');
        return parts.join(' ').trim();
    };

    return (
        <div className="w-full">
            <h1 className="text-base font-semibold text-muted-foreground mb-4">Skills</h1>
            <div className="flex flex-wrap gap-4">
                {user.skills.map((skill, index) => 
                    <TooltipProvider key={index}>
                        <Tooltip>
                        <TooltipTrigger asChild>
                                <div 
                                    key={index}
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                >
                                <h2 
                                    className="cursor-default text-base font-semibold text-white mb-4 transition-colors duration-200"
                                    style={{ color: hoveredSkill === skill.name ? user.theme.primaryColor : 'inherit' }}
                                >
                                    {skill.name}
                                </h2>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <span className="relative bottom-3 bg-secondary/80 py-2 px-4 rounded-full" style={{ color: user.theme.primaryColor }}>{howLongFormatter(skill.howLong)}</span>
                        </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )}
            </div>
        </div>
    );
}
