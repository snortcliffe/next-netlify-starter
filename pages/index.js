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
          Website coming <code> soon </code>
    UNIT1, KINGSWOOD BUSINESS PARK, CONNAUGHT ROAD, KINGSWOOD
              HULL, HU73AP, 01482 373737
        </p>
      </main>

      <Footer />
    </div>
  )
}
