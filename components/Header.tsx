import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { DateRangePicker } from "react-date-range"

import { SearchIcon, UsersIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"

import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file

const Header: NextPage<any> = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuest, setNoOfGuest] = useState(1)
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }

  const handleOnChange = (e: any) => {
    setSearchInput(e.target.value)
  }

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const handleReset = () => {
    setSearchInput("")
  }

  const handleSearch = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuest: noOfGuest,
      },
    })
  }

  return (
    <>
      <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md p-5 md:px-10 bg-white">
        {/* left */}
        <div className="relative flex items-center my-auto" onClick={() => router.push("/")}>
          <Image
            className="cursor-pointer"
            src="https://links.papareact.com/qd3"
            alt="Airbnb logo"
            width="110"
            height="110"
          />
        </div>
        {/* middle - search*/}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
          <input
            className="pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400"
            type="text"
            placeholder={placeholder || "Start your search"}
            value={searchInput}
            onChange={handleOnChange}
          />
          <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </div>
        {/* right */}
        <div className="flex items-center justify-end space-x-4 text-gray-500">
          <p className="hidden md:inline cursor-pointer">Become a host</p>
          <GlobeAltIcon className="h-6 cursor-pointer" />
          <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
            <MenuIcon className="h-6 cursor-pointer" />
            <UserCircleIcon className="h-6 cursor-pointer" />
          </div>
        </div>
      </header>

      {searchInput && (
        <div className="absolute z-40 w-full flex">
          <div className="mx-auto bg-white">
            <div>
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
              />
              <div className="flex items-center border-b mb-4 pb-2">
                <h2 className="text-2xl font-semibold flex-grow">Number of Guests</h2>
                <UsersIcon className="h-5" />
                <input
                  type="number"
                  value={noOfGuest}
                  onChange={(e: any) => {
                    setNoOfGuest(e.target.value)
                  }}
                  min={1}
                  className="w-12 pl-2 outline-none text-lg text-red-400"
                />
              </div>
              <div className="flex mb-4">
                <button className="flex-grow text-gray-500" onClick={handleReset}>
                  Cancel
                </button>
                <button className="flex-grow text-red-400" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
