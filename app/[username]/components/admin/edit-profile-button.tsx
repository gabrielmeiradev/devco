import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PencilIcon, PlusIcon, TrashIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { IUserInApp } from "@/app/_interfaces/user"
import { useForm, Controller, useFieldArray } from "react-hook-form"
import getLinkIcon from "@/app/_utils/get-link-icon"

export default function EditProfileButton({ className, user }: { className?: string, user: IUserInApp }) {
  const [isOpen, setIsOpen] = useState(false)
  const { control, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      name: user.name,
      bio: user.bio,
      role: user.role,
      avatarSrc: user.avatarSrc,
      links: user.links,
      skills: user.skills,
    },
  })

  const { fields: linkFields, append: appendLink, remove: removeLink } = useFieldArray({
    control,
    name: "links",
  })

  const { fields: skillFields, append: appendSkill, remove: removeSkill } = useFieldArray({
    control,
    name: "skills",
  })

  const onSubmit = (data: Partial<IUserInApp>) => {
    console.log(data)
    setIsOpen(false)
  }

  const watchLinks = watch("links")

  useEffect(() => {
    watchLinks.forEach((link, index) => {
      const type = detectLinkType(link.link)
      if (type !== link.type) {
        setValue(`links.${index}.type`, type)
      }
    });
  }, [watchLinks, setValue]);

  const detectLinkType = (url: string) => {
    url = url.toLowerCase()
    if (url.includes("github.com")) return "github"
    if (url.includes("linkedin.com")) return "linkedin"
    if (url.includes("twitter.com")) return "twitter"
    if (url.includes("instagram.com")) return "instagram"
    if (url.includes("facebook.com")) return "facebook"
    return "link"
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={`${className} z-[999]`}>
           <PencilIcon className="w-4 h-4 mr-2" /> Editar perfil
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-auto max-h-screen max-w-screen md:max-h-[80vh] md:max-w-[50vw] z-[1000]">
        <DialogHeader>
          <DialogTitle>Editar perfil</DialogTitle>
          <DialogDescription>
            Faça alterações no seu perfil aqui. Clique em salvar quando terminar.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 py-4 mt-4">
          <div className="flex flex-col gap-4 items-start">
            <Label htmlFor="name">Nome completo</Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => <Input {...field} className="col-span-3" />}
            />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Label htmlFor="bio">Sobre você (bio)</Label>
            <Controller
              name="bio"
              control={control}
              render={({ field }) => <Textarea {...field} className="col-span-3" />}
            />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Label htmlFor="role">Cargo</Label>
            <Controller
              name="role"
              control={control}
              render={({ field }) => <Input {...field} className="col-span-3" />}
            />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Label htmlFor="avatarSrc">URL da imagem de perfil</Label>
            <Controller
              name="avatarSrc"
              control={control}
              render={({ field }) => <Input {...field} className="col-span-3" />}
            />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Label>Links</Label>
            {linkFields.map((field, index) => (
              <div key={field.id} className="flex gap-2 w-full items-center">
                <Controller
                  name={`links.${index}.title`}
                  control={control}
                  render={({ field }) => <Input {...field} placeholder="Título" />}
                />
                <Controller
                  name={`links.${index}.link`}
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center w-full">
                      <Input {...field} placeholder="URL" onChange={(e) => {
                        field.onChange(e);
                        setValue(`links.${index}.type`, detectLinkType(e.target.value));
                      }} />
                    </div>
                  )}
                />
                <Controller
                  name={`links.${index}.type`}
                  control={control}
                  render={({ field }) => (
                    <div className="flex items-center">
                      {getLinkIcon(field.value) && React.createElement(getLinkIcon(field.value) || 'div')}
                      <Input {...field} placeholder="Tipo" className="hidden" />
                    </div>
                  )}
                />
                <Button type="button" variant="destructive" onClick={() => removeLink(index)}>
                  <TrashIcon className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => appendLink({ title: "", link: "", type: "link" })}
            >
              <PlusIcon className="w-4 h-4 mr-2" /> Adicionar link
            </Button>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <Label>Habilidades</Label>
            {skillFields.map((field, index) => (
              <div key={field.id} className="flex gap-2 w-full items-center">
                <Controller
                  name={`skills.${index}.name`}
                  control={control}
                  render={({ field }) => <Input {...field} placeholder="Nome da habilidade" />}
                />
                <Button type="button" variant="destructive" onClick={() => removeSkill(index)}>
                  <TrashIcon className="w-4 h-4" />
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => appendSkill({ name: "" })}
            >
              <PlusIcon className="w-4 h-4 mr-2" /> Adicionar habilidade
            </Button>
          </div>
          <DialogFooter>
            <Button type="submit">Salvar alterações</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
