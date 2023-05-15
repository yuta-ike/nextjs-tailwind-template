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

export const metadata = {
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
  themeColor: "#fafaf9",
}
