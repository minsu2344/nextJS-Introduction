import Head from "next/head";

export default function Seo({title}) {
  return (
    <Head>
      <link rel="icon" href="/netflix_icon.png" />
      <title>{title} | Next Movies</title>
    </Head>
  )
}