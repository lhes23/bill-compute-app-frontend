export interface IHouseReading {
  name: string
  tenant: string
  previous: number
  present: number
}

export interface Reading extends IHouseReading {
  consumption: number
  bill: number
  dueDate: Date
  startDate: Date
  endDate: Date
}

export interface IHouse {
  id: string
  name: string
  is_occupied: boolean
  color: string
}

export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]
