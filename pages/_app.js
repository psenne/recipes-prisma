import { SessionProvider } from "next-auth/react"
import { SWRConfig } from "swr"
import axios from "axios"
import "/node_modules/normalize.css/normalize.css"
import "@styles/globals.css"

export default function App({ Component, pageProps: { session, ...pageProps } }) {
    return (
        <SessionProvider session={session}>
            <SWRConfig
                value={{
                    refreshInterval: 3000,
                    fetcher: (resource, init) => axios(resource, init).then((res) => res.data),
                }}
            >
                <Component {...pageProps} />
            </SWRConfig>
        </SessionProvider>
    )
}
