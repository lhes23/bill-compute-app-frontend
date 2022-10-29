import { IData, months } from "./components/LineChart"

export const electricData: IData = {
  labels: months,
  datasets: [
    {
      label: "Electric Consumption",
      data: [
        5314.58, 5984.37, 6428.09, 6973.48, 8775.29, 6955.25, 8932.45, 9121.88,
        6986.52
      ],
      backgroundColor: ["green"],
      borderColor: ["green"],
      borderWidth: 1
    }
  ]
}

export const waterData: IData = {
  labels: months,
  datasets: [
    {
      label: "Water Consumption",
      data: [
        2327.49, 2450.37, 2371.45, 2415.41, 641.45, 4041.91, 2285.11, 2285.11
      ],
      backgroundColor: ["blue"],
      borderColor: ["blue"],
      borderWidth: 1
    }
  ]
}
