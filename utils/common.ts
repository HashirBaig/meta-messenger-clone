import { format } from "date-fns"

export const capitalize = (s: string) => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const getFormattedDate = (date: string) => {
  if (typeof date !== "string") return date

  return format(new Date(date), "dd MMMM yy")
}
