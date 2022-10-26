import React from "react"
import { Chart as ChartJS, registerables } from "chart.js"
import { Line } from "react-chartjs-2"
ChartJS.register(...registerables)

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

interface IData {
  labels: string[]
  datasets: {
    label: string
    data: number[]
    backgroundColor: string[]
    borderColor: string[]
    borderWidth: number
  }[]
}

// const ConsumptionChart = ({ dataSets }: { dataSets: number[] }) => {
const ConsumptionChart = () => {
  const options = {
    maintainAspectRatio: true,
    responsive: true
  }

  const data: IData = {
    labels: months,
    datasets: [
      {
        label: "Electric Consumption",
        data: [
          5314.58, 5984.37, 6428.09, 6973.48, 8775.29, 6955.25, 8932.45,
          9121.88, 6986.52
        ],
        backgroundColor: ["green"],
        borderColor: ["green"],
        borderWidth: 1
      },
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

  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Yearly Consumptions
      </h2>
      <div className="py-2 my-4">
        <Line data={data} height="40%" width="100%" options={options} />
      </div>
    </>
  )
}

export default ConsumptionChart
