"use client"

import getArticleById from "@/app/_services/get-article-by-id";
import { redirect, useParams } from "next/navigation";

export default function ArticlePage() {
    const { slug } = useParams();
    if (typeof slug != "string") return redirect("../")
    const article = getArticleById(slug)
    console.log(article)
    return <h1>Página de artigo</h1>
}