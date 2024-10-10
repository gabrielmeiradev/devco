import { GithubIcon, Link2, LinkedinIcon } from "lucide-react";

export default function getLinkIcon(type: string) {
    switch (type) {
        case "linkedin":
            return LinkedinIcon;
        case "github":
            return GithubIcon;
        case "link":
            return Link2;
    }
}