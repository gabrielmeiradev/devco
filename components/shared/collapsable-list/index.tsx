import { ChevronsDownUp, ChevronsUpDown } from "lucide-react";
import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ICollapsableListProps {
    children: ReactNode;
    limit: number;
    expandText?: string;
    collapseText?: string;
    className?: string;
    animationDuration?: number;
    gap?: number;
}

export function CollapsableList({
    children,
    limit,
    expandText = "ver todos",
    collapseText = "ver menos",
    className = "",
    gap = 2,
    animationDuration = 0.3
}: ICollapsableListProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const childrenArray = React.Children.toArray(children);
    const displayedChildren = childrenArray.slice(0, limit);
    const hiddenChildren = childrenArray.slice(limit);

    const variants = {
        hidden: { opacity: 0, height: 0 },
        visible: { opacity: 1, height: "auto" }
    };

    return (
        <div className={`flex flex-col gap-${gap} ${className}`}>
            {displayedChildren.map((child, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    {child}
                </motion.div>
            ))}

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className={`flex flex-col gap-${gap}`}
                        transition={{ duration: animationDuration }}
                    >
                        {hiddenChildren.map((child, index) => (
                            <motion.div
                                key={index + limit}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                                {child}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {childrenArray.length > limit && (
                <motion.button
                    className="text-gray-500 text-sm font-semibold mt-2 w-fit flex items-center gap-2 hover:text-gray-700 transition-colors duration-200"
                    onClick={() => setIsExpanded(!isExpanded)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isExpanded ? (
                        <>
                            <ChevronsDownUp className="w-4 h-4" /> {collapseText}
                        </>
                    ) : (
                        <>
                            <ChevronsUpDown className="w-4 h-4" /> {expandText} ({childrenArray.length})
                        </>
                    )}
                </motion.button>
            )}
        </div>
    );
}
