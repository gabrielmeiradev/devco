import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function GithubButton() {
    return (
        <Button variant={"outline"} onClick={() => window.location.href = '/gabrielmeiradev'}>
            <Github className="mr-2 h-4 w-4" />
            Entrar com o Github
        </Button>
    )
}