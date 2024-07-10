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
    <img alt="" src="https://lh7-us.googleusercontent.com/bosZKOsPpsRq9q2rxOc1YqxZISBNmJqdYC5J4gZ4u8vKWO-XIKsDx2SRD8zKwzzpu6Zw06fGcbINBs4KDvFjywlfKXgmkmSEHVDGKYdWRA_oKDjLXCyB_nmo-WB42iCYRmOStILuqPi-q1Di7A_NXCM" style="width: 621.33px; height: 349.50px; margin-left: 0.00px; margin-top: 0.00px; transform: rotate(0.00rad) translateZ(0px); -webkit-transform: rotate(0.00rad) translateZ(0px);" title="">
          <code> website coming soon, contact 01482 373737  </code>
               </p>
      </main>

      <Footer />
    </div>
  )
}
