import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Project Furnishings" />
        <p className="description">
    https://github.com/snortcliffe/next-netlify-starter/blob/main/project%20holding%20page.jpg
          <code> website coming soon, contact 01482 373737  </code>
               </p>
      </main>

      <Footer />
    </div>
  )
}
