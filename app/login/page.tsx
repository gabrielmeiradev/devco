"use client";

import Link from "next/link"
import { UserAuthForm } from "./components/user-auth-form"
import Logo from "./components/logo"
import { motion } from "framer-motion"

export default function AuthenticationPage() {
  return (
    <>
      <div className="md:container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <motion.div
          className="relative bg-black hidden h-full flex-col p-10 text-white dark:border-r lg:flex"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-35" style={{
            backgroundImage: "url('/images/background/login-screen-anime-bg.jpg')",
            backgroundSize: "cover"
          }}/>
          <div className="relative z-20">
            <Logo />
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2 opacity-80">
              <p className="text-lg ">
                Compartilhe seu portfólio com outras pessoas, aqui nós queremos que você tenha um lugar para poder compartilhar seus projetos, sua experiência profissional e suas conquistas.
              </p>
              <footer className="text-sm">— Equipe Devco</footer>
            </blockquote>
          </div>
        </motion.div>
        
        <motion.div
          className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px] px-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo(a)
            </h1>
            <p className="text-sm text-muted-foreground">
              Clique no botão e entre na sua conta Github
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            Ao clicar em entrar você concorda com os{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de serviço
            </Link>{" "}
            e{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de privacidade
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </>
  )
}
