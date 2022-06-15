// import { getSession } from "next-auth/react"
import prisma from "@modules/prisma"

export default async function handler(req, res) {
    // const session = await getSession({ req })
    // if (!session) {
    //     res.status(400).send("Not logged in")
    // }
    console.log(req.query)
    const recipe = await prisma.recipe.findUnique({
        where: { id: req.query.id },
        include: {
            author: true,
        },
    })

    if (recipe) {
        res.status(200).send({ recipe })
    } else {
        res.status(404).send("Recipe not found")
    }
}
