import type { Metadata, Viewport } from "next/types"

const Index = () => {
  return (
    <main>
      <div className="m-4">
        <p className="text-red-400">Hello, world</p>
      </div>
    </main>
  )
}

export default Index

export const metadata: Metadata = {
  title: "Awesome Service Name",
  description: "This is awesome service.",
  openGraph: {
    title: "Awesome Service Name",
    description: "This is awesome service.",
    type: "website",
    locale: "ja_JP",
  },
  appleWebApp: {
    title: "Awesome Service Name",
  },
}

export const viewport: Viewport = {
  themeColor: "#fafaf9",
}
