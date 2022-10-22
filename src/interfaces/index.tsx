export interface IHouseReading {
  name: string
  tenant: string
  previous: number
  present: number
}

export interface Reading extends IHouseReading {
  consumption: number
  bill: number
}
