import Head from "next/head"

import type { NextPage } from "next"

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sample Next App</title>
        <meta name="description" content="sample next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="m-4">
          <p className="text-red-400">Hello, world</p>
        </div>
      </main>
    </>
  )
}

export default Index
