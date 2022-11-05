export interface IHouseReading {
  name: string
  house_id: number
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
  id: number
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

export interface IInitialState {
  houses: {
    house_id: number
    tenant_id: number
    name: string
    tenant: string
    previous: number
    present: number
    consumption: number
    bill: number
  }[]
  pesoPer: number
  totalReadings: {
    name: string
    billType: string
    previous: number
    present: number
    consumption: number
    bill: number
    dueDate: string
    startDate: string
    endDate: string
  }
  allHouses: IHouse[]
}

export interface ITenant {
  id: string
  name: string
  house_id: number
  fb_messenger: string
  is_active: boolean
  date_started: string
}
