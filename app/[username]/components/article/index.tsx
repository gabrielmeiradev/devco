import { CollapsableList } from "@/components/collapsable-list";
import ArticleCard from "./card";
import IArticleInUser from "@/app/_interfaces/article-in-user";
import AddArticleButton from "../admin/add-article-button";

export default function Articles({ articles, username, canAdd }: { articles: IArticleInUser[], username: string, canAdd: boolean }) {
    return (
        <div>
            {canAdd && <AddArticleButton className="w-full h-full mb-4" />}
            <div className="flex flex-col gap-2">
                <CollapsableList limit={2} gap={4}>
                    {articles.map((article, index) => (
                        <ArticleCard key={index} article={article} username={username} />
                    ))}
                </CollapsableList>
            </div>
        </div>
    )
}

