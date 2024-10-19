import Link from "next/link";
import IArticleInUser from "@/app/_interfaces/article-in-user";

export default function ArticleCard({ article, username }: { article: IArticleInUser, username: string }) {
    return (

        <div className="flex flex-col gap-1">
            <div className="flex gap-2 lg:items-center lg:flex-row flex-col items-start">
                <Link href={`${username}/article/${article.id}`}>
                    <h2 className="text-lg font-semibold text-base hover:underline-offset-4 hover:underline decoration-wavy hover:decoration-primary hover:text-primary">{article.title}</h2>
                </Link>

                <span className="text-gray-500 text-sm">
                    {article.readTime < 60
                        ? `${article.readTime} segundos de leitura`
                        : `${Math.round(article.readTime / 60)} min de leitura`}
                </span>
            </div>
            <p className="text-gray-400 text-sm">{article.content}</p>
        </div>
    )
}