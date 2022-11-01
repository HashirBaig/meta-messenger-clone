import { NextPage } from "next"
import Image from "next/image"

const Banner: NextPage<any> = () => {
  return (
    <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-auto">
      <Image className="object-fill" src={"https://links.papareact.com/0fm"} alt="banner" fill />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-2 border-2 hover:shadow-xl active:scale-90 transition duration-150">
          I'm Flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
