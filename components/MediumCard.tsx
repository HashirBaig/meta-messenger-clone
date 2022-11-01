import { NextPage } from "next"
import Image from "next/image"

const SmallCard: NextPage<any> = props => {
  const { img, title } = props
  return (
    <div className="space-x-4 rounded-xl cursor-pointer hover:scale-105 transition transform duration-300 ease-out text-center">
      <div className="relative h-80 w-80">
        <Image className="rounded-lg" src={img} alt={title} fill />
      </div>
      <h3 className="text-3xl mt-3">{title}</h3>
    </div>
  )
}

export default SmallCard
