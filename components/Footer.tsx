import { NextPage } from "next"
import { footerData } from "../utils/data"

const Footer: NextPage<any> = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      {footerData?.map(({ title, tree }, idx) => (
        <div key={`footer-${idx}`} className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">{title}</h5>
          {tree.map(({ title }, idx) => (
            <p key={`p-${idx}`}>{title}</p>
          ))}
        </div>
      ))}
    </footer>
  )
}

export default Footer
