import type { NextPage } from "next"
import Head from "next/head"

import { Header, Banner, SmallCard, MediumCard, LargeCard, Footer } from "../components"
import { exploreData, cardsData } from "../utils/data"

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-6xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-xl font-bold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {exploreData?.map(({ img, location, distance }, idx) => (
              <SmallCard key={`small-card-${idx}`} img={img} distance={distance} location={location} />
            ))}
          </div>
        </section>
        <section className="pt-6">
          <h2 className="text-xl font-bold pb-5">Live Anywhere</h2>
          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }, idx) => (
              <MediumCard key={`medium-card-${idx}`} img={img} title={title} />
            ))}
          </div>
        </section>
        <LargeCard
          img={"https://links.papareact.com/4cj"}
          title={"The Greatest Outdoors"}
          description={"Wishlist curated by Airbnb"}
          buttonText={"Get Inspired"}
        />
      </main>
      <Footer />
    </div>
  )
}

export default Home
