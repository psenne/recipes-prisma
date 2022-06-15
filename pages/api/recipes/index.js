import { getSession } from "next-auth/react"
import prisma from "@modules/prisma"

export default async function handler(req, res) {
    // const session = await getSession({ req })
    // if (!session) {
    //     res.status(400).send("Not logged in")
    // }
    const recipes = await prisma.recipe.findMany({
        include: {
            author: true,
        },
    })

    if (recipes) {
        res.status(200).send({ recipes })
    } else {
        res.status(404).send("No recipes in this site.")
    }
}
