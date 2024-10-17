import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";

export default function AddExperienceButton({ className }: { className: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Lógica para adicionar a experiência
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" className={`${className} w-fit`}>
                    <PlusIcon className="w-4 h-4 mr-2" />
                    Adicionar experiência
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Adicionar nova experiência</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input id="company" placeholder="Nome da empresa" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="role">Cargo</Label>
                        <Input id="role" placeholder="Seu cargo na empresa" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Descrição</Label>
                        <Textarea id="description" placeholder="Descreva suas responsabilidades" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="from">Data de início</Label>
                        <Input id="from" type="date" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="to">Data de término</Label>
                        <Input id="to" type="date" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="companyLogoSrc">URL do logo da empresa</Label>
                        <Input id="companyLogoSrc" placeholder="https://exemplo.com/logo.png" />
                    </div>
                    <Button type="submit">Salvar experiência</Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

