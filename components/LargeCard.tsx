import { NextPage } from "next"
import Image from "next/image"

const LargeCard: NextPage<any> = props => {
  const { img, title, description, buttonText } = props
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px] ">
        <Image className="rounded-2xl object-cover" src={img} alt={title} fill />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p>{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 mt-2 rounded-lg active:scale-90 transition duration-150">
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
