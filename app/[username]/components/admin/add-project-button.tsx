import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function AddProjectButton({ className }: { className: string }) {
    const [open, setOpen] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Lógica para adicionar o projeto
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" className={`${className}`}>
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Novo projeto
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar Novo Projeto</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="title">Título</Label>
                            <Input id="title" required />
                        </div>
                        <div>
                            <Label htmlFor="description">Descrição</Label>
                            <Textarea id="description" />
                        </div>
                        <div>
                            <Label htmlFor="imageUrl">URL da Imagem</Label>
                            <Input id="imageUrl" type="url" />
                        </div>
                        <div>
                            <Label htmlFor="projectUrl">URL do Projeto</Label>
                            <Input id="projectUrl" type="url" />
                        </div>
                        <Button type="submit">Adicionar Projeto</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}