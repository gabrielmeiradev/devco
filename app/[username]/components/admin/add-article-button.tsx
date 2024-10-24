import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import React from "react";
import MarkdownEditor from "@/app/_shared/components/md-editor";


export default function AddArticleButton({ className }: { className: string }) {
    const [open, setOpen] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Lógica para adicionar o artigo
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className={`${className} w-fit`}>
                    <SquarePen className="w-4 h-4 mr-2" />
                    Escrever novo
                </Button>
            </DialogTrigger>
            <DialogContent className="w-screen h-screen max-w-full max-h-full p-0 rounded-none border-none overflow-y-auto z-[1000]">
                <div className="h-full flex flex-col">
                    <DialogHeader className="p-6">
                        <DialogTitle>Escrevendo novo artigo</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="flex-grow flex flex-col p-6">
                        <div className="space-y-4 flex-grow">
                            <div>
                                <Input id="title" placeholder="Título" required />
                            </div>
                            <MarkdownEditor className={"flex flex-grow mb-6 gap-4"} />
                        </div>
                        <Button type="submit">Adicionar Artigo</Button>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}