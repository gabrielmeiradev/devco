import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
  
  export default function HowWorksButton() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="link">Como funciona?</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Que bom que clicou!</AlertDialogTitle>
            <AlertDialogDescription>
              O Devco é uma plataforma que servirá como um portfólio para você dev.
              <br /><br />
              <strong>São só alguns passos para você criar seu portfólio:</strong>
              <ol className="list-decimal ml-5 mt-2">
                <li>Associe sua conta do Github</li>
                <li>Crie seu primeiro portfólio</li>
                <li>Customize-o</li>
                <li>Compartilhe seu link personalizado</li>
              </ol>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Fechar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  