import "../styles/globals.css"
import { SWRConfig } from "swr"

import type { AppProps } from "next/app"

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <SWRConfig>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default MyApp
