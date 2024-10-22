"use client"

import getArticleById from "@/app/_services/get-article-by-id";
import getUserByUsername from "@/app/_services/get-user-by-username";
import { getUserInApp } from "@/app/_services/get-user-in-app";
import useProfileSections from "@/app/_shared/hooks/use-profile-sections";
import { redirect, useParams } from "next/navigation";
import ProfileMenu from "../../components/menu";
import getDateFormatted from "@/app/_utils/get-date-formatted";
import Link from "next/link";
import { hexToHSL } from "@/app/_utils/color-converter";
import Wrapper from "@/components/wrapper";
import ReactMarkdown from "react-markdown"
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function ArticlePage() {
    const { slug } = useParams();
    if (typeof slug != "string") return redirect("../");

    const article = getArticleById(slug)
    const { user } = getUserByUsername(article.username);

    if (!user || user == undefined) return redirect("../");
    const userInApp = getUserInApp(user);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { menuItems } = useProfileSections(userInApp);

    return (
        <>
            <ProfileMenu items={menuItems} username={userInApp.username} />
            <Wrapper>
                <div
                    style={{ "--primary": hexToHSL(user.theme.primaryColor!) } as React.CSSProperties}
                >

                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold">{article.title}</h1>
                        <p className="text-gray-400">Por <Link href={`/${user.username}`} className={`py-2 border-b-2 border-dashed hover:text-primary hover:border-primary-foreground transition`}>{user.username}</Link> em {getDateFormatted(article.date, "dd/mm/yy")}</p>
                    </div>
                    <div className="mt-12 prose-sm dark:prose-invert">
                        {<ReactMarkdown>{article.content}</ReactMarkdown>}
                    </div>
                    <div className="mt-10">
                        <h3 className="text-base font-semibold">Autor:</h3>
                        <div className="flex items-center gap-3 mt-2">
                            <Avatar>
                                <AvatarImage src={user.avatarSrc} />
                            </Avatar>
                            <div className="flex flex-col">
                                <p>Gabriel Meira</p>
                                <span className="text-gray-400">@gabrielmeiradev</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="mt-10 flex gap-2 items-center">
                        <h3 className="font-semibold">Mais desse autor:</h3>
                        <Link href={"#"}>
                            <Button variant={"link"}>
                                O que são redes neurais
                            </Button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}