import Error from "next/error"
import Header from "@components/Header"
import useSWR from "swr"
import RecipeSummary from "@components/RecipeSummary"

export default function Home() {
    const { data, error } = useSWR("/api/recipes")

    if (error) {
        return <Error statusCode={404} />
    }
    if (data) {
        const { recipes } = data
        return (
            <>
                <Header />
                <main>
                    <section className="recipes-main">
                        {recipes &&
                            recipes.map((recipe) => {
                                return <RecipeSummary recipe={recipe} key={recipe.id} />
                            })}
                    </section>
                </main>
            </>
        )
    }
}
