import Link from "next/link"
import Markdown from "marked-react"
import styles from "@styles/recipesummary.module.css"
import { format } from "date-fns"

function RecipeSummary({ recipe }) {
    return (
        <div className={styles.recipe}>
            <header>
                <img src="https://picsum.photos/300?random=1"></img>
            </header>
            <p>
                <h2>
                    <Link href={`/recipes/${recipe.id}`}>
                        <a>{recipe.title}</a>
                    </Link>
                </h2>
                <Markdown>{recipe.content}</Markdown>
            </p>
            <footer className={styles.footer}>
                by {recipe.author?.name} on {format(new Date(recipe.updatedAt), "MMM d, yyyy")}
            </footer>
        </div>
    )
}

export default RecipeSummary
