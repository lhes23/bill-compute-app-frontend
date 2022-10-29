import React from "react"
import { Chart as ChartJS, registerables } from "chart.js"
import { Line } from "react-chartjs-2"
import type { ChartData, ChartOptions } from "chart.js"

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

export type IData = ChartData<"line">

const LineChart = ({ data }: { data: ChartData<"line"> }) => {
  const options: ChartOptions<"line"> = {
    maintainAspectRatio: true,
    responsive: true
  }

  return <Line data={data} height="40%" width="100%" options={options} />
}

export default LineChart
