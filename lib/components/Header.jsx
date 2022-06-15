import { useSession } from "next-auth/react"
import Link from "next/link"
import styles from "@styles/header.module.css"

function Header() {
    const { data: session, status } = useSession()

    let userinfo = (
        <Link href="/api/auth/signin">
            <a href="/api/auth/signin">Login</a>
        </Link>
    )
    if (status === "authenticated") {
        const user = session.user

        userinfo = (
            <picture title="Sign out">
                <a href="/api/auth/signout">
                    <source srcSet={user.image} />
                    <img src={user.image} className={styles.avatar} />
                </a>
            </picture>
        )
    }

    return (
        <header className={styles.header}>
            <h1>Parker recipes</h1>
            {userinfo}
        </header>
    )
}

export default Header
