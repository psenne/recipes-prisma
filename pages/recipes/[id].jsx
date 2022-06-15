import { useRouter } from "next/router"
import Error from "next/error"
import Markdown from "marked-react"
import Header from "@components/Header"
import useSWR from "swr"

export default function Home() {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useSWR(`/api/recipes/${id}`)

    if (error) {
        return <Error statusCode={404} />
    }
    if (data) {
        const { recipe } = data
        return (
            <main>
                <Header />
                <section>
                    {recipe && (
                        <div className="recipe" key={recipe.id}>
                            <h2>{recipe.title}</h2>
                            <Markdown>{recipe.content}</Markdown>
                            <p>
                                by {recipe.author?.name} on {recipe.updatedAt}
                            </p>
                        </div>
                    )}
                </section>
            </main>
        )
    }
}
