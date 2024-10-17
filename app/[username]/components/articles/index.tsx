import { CollapsableList } from "@/components/shared/collapsable-list";
import ArticleCard from "./card";
import IArticle from "@/app/_interfaces/article";
import AddArticleButton from "../admin/add-article-button";

export default function Articles({ articles, canAdd }: { articles: IArticle[], canAdd: boolean }) {
    return (
        <div>
            {canAdd && <AddArticleButton className="w-full h-full mb-4" />}
            <div className="flex flex-col gap-2">
                <CollapsableList limit={2} gap={4}>
                {articles.map((article, index) => (
                    <ArticleCard key={index} article={article} />
                    ))}
                </CollapsableList>
            </div>
        </div>
    )
}

