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
import ReactMarkdown from 'react-markdown'

export default function ArticlePage() {
    const { slug } = useParams();
    if (typeof slug != "string") return redirect("../");

    const article = getArticleById(slug)
    const { user } = getUserByUsername(article.username);

    if(!user || user == undefined) return redirect("../");
    const userInApp = getUserInApp(user);
    const { menuItems } = useProfileSections(userInApp);

    let markdown_temp = `
        Os gatos são criaturas fascinantes que conquistaram o coração de milhões de pessoas ao redor do mundo. Minha paixão por eles vai além de sua aparência encantadora; é uma combinação de suas personalidades únicas, comportamentos intrigantes e o carinho que eles oferecem. Aqui estão algumas razões pelas quais eu amo gatos.

        ![Cute Cat](https://gallerypng.com/wp-content/uploads/2024/03/cat-png-cute-cat-free-hd-download-transparent-png-45943-936x1024.png)

        ## 1. Personalidade Independente
        
        Uma das características mais cativantes dos gatos é sua independência. Eles não são como cães, que frequentemente buscam a atenção constante de seus donos. Gatos podem ser mais autossuficientes, o que permite que tenham sua própria personalidade e modo de viver. Essa independência não significa que eles não gostem de companhia; pelo contrário, muitos gatos são carinhosos e adoram passar tempo com seus humanos, mas sempre do seu jeito.

        ## 2. Comportamentos Divertidos

        Os gatos são, sem dúvida, algumas das criaturas mais divertidas de se observar. Suas brincadeiras podem variar de uma corrida maluca pela casa a uma investigação minuciosa de uma caixa de papelão. Cada movimento é uma nova oportunidade de entretenimento, e suas travessuras nunca deixam de me fazer sorrir. Além disso, a maneira como eles se espreguiçam, ronronam e se enroscam é uma dança que só eles sabem executar.

        ## 3. Carinho e Afeto

        Embora os gatos sejam conhecidos por sua natureza independente, muitos deles são extremamente carinhosos. Um gato que ronrona ao se aconchegar no colo ou que se esfrega contra as pernas é uma demonstração clara de afeto. Esse carinho, muitas vezes sutil, é um lembrete constante de que eles valorizam a companhia humana e criam laços especiais com seus donos.

        ## 4. Baixa Manutenção

        Comparados a muitos outros animais de estimação, os gatos exigem menos manutenção. Eles não precisam de passeios diários e são geralmente muito limpos, cuidando de sua higiene pessoal com frequência. Isso torna a convivência com eles mais prática, especialmente para quem tem uma rotina agitada.

        ## 5. Conexão Espiritual

        Para muitos, a presença de um gato em casa traz uma sensação de paz e tranquilidade. O ato de acariciar um gato pode ser incrivelmente terapêutico, ajudando a aliviar o estresse e a ansiedade. Os gatos têm um jeito especial de se conectar com as emoções humanas, e sua presença pode ser reconfortante em momentos difíceis.

        ## 6. Mitos e Mistérios

        Os gatos estão envolvidos em muitos mitos e lendas, o que os torna ainda mais fascinantes. Desde a antiguidade, eles têm sido associados à magia e ao mistério. A maneira como eles se movem com graça e a habilidade de se esgueirar em lugares inusitados acrescentam uma aura de enigma à sua personalidade. Cada gato parece carregar consigo um mundo de histórias não contadas.

        ## Conclusão

        Amo gatos por uma infinidade de razões que vão desde sua independência até o carinho que oferecem. Eles são companheiros leais, com personalidades ricas e intrigantes. Para mim, ter um gato não é apenas ter um animal de estimação; é ter um amigo especial que transforma a vida cotidiana em uma aventura cheia de amor e alegria.
    `

    return (
        <>
            <ProfileMenu items={menuItems} username={userInApp.username} />
            <Wrapper>
                <div 
                    style={{ "--primary": hexToHSL(user.theme.primaryColor!) } as React.CSSProperties }
                >
                    
                    <div className="text-center">
                        <h1 className="text-3xl font-extrabold">{article.title}</h1>
                        <p className="text-gray-400">Por <Link href={`/${user.username}`} className={`py-2 border-b-2 border-dashed hover:text-primary hover:border-primary-foreground transition`}>{user.username}</Link> em {getDateFormatted(article.date, "dd/mm/yy")}</p>
                    </div>
                    <div className="mt-12 prose-sm dark:prose-invert">
                        {<ReactMarkdown>{markdown_temp}</ReactMarkdown>}
                    </div>
                </div>
            </Wrapper>
        </>
    )
}