import { CollapsableList } from "@/components/shared/collapsable-list";
import ArticleCard from "./card";
import IArticle from "@/app/_interfaces/article";

export default function Articles({ articles }: { articles: IArticle[] }) {
    return (
        <div className="flex flex-col gap-3">
            <CollapsableList limit={2}>
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                ))}
            </CollapsableList>

        </div>
    )
}