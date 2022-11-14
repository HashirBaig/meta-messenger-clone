import { NextPage } from "next"
import { useRouter } from "next/router"
import { Header, Footer, InfoCard } from "../components"

import { capitalize, getFormattedDate } from "../utils/common"
import { searchData } from "../utils/data"

const Search: NextPage<any> = () => {
  const router = useRouter()
  const { location, startDate, endDate, noOfGuest } = router.query
  const range = `${getFormattedDate(startDate)} - ${getFormattedDate(endDate)}`

  const position = [51.505, -0.09]
  return (
    <div>
      <Header placeholder={`${capitalize(location)} | ${range} | ${noOfGuest}`} />
      <main className="flex mb-7">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ stays - {range} - for {noOfGuest} people
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {capitalize(location)}</h1>
          <div className="hidden lg:flex mb-5 space-x-3 text-gray-500 whitespace-nowrap">
            <p className="filter-button">Cancellation Flexibility</p>
            <p className="filter-button">Type of place</p>
            <p className="filter-button">Price</p>
            <p className="filter-button">Rooms and Beds</p>
            <p className="filter-button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchData.map((data, idx) => (
              <InfoCard key={`info-card-${idx}`} {...data} />
            ))}
          </div>
        </section>
        {/* ADD MAP HERE */}
      </main>
      <Footer />
    </div>
  )
}

export default Search
