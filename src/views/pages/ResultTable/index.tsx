import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../store"

const months = [
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

const ResultTable = () => {
  const store = useSelector((state: RootState) => state.houses)
  const { dueDate, startDate, endDate } = store.totalReadings

  const getDateValue = (date: Date) => {
    return (
      months[date.getMonth()] + "/" + date.getDate() + "/" + date.getFullYear()
    )
  }

  const dueDateVal = getDateValue(dueDate)
  const startDateVal = getDateValue(startDate)
  const endDateVal = getDateValue(endDate)

  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Result
      </h2>
      {store.houses.map((house) => (
        <>
          <div
            key={house.name}
            className="max-w-md mx-auto bg-gradient-to-tr from-slate-100 via-blue-100  to-slate-200 my-4 rounded-xl shadow-lg overflow-hidden md:max-w-2xl"
          >
            <div className="">
              <div className="px-2 py-4">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  Due Date: {dueDateVal}
                </div>
                <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {house.name} - {house.tenant}
                </div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto">
                    <div className="py-2 inline-block min-w-full px-2">
                      <div className="overflow-hidden">
                        <table className="min-w-full">
                          <thead className="bg-white border-b"></thead>
                          <tbody>
                            <tr className="bg-white border-b">
                              <td className={styles.divLabel}>
                                Date Covered From:
                              </td>
                              <td className={styles.divValue}>
                                {startDateVal}
                              </td>
                            </tr>
                            <tr className="bg-gray-100 border-b">
                              <td className={styles.divLabel}>
                                Date Covered to:
                              </td>
                              <td className={styles.divValue}>{endDateVal}</td>
                            </tr>
                            <tr className="bg-white border-b">
                              <td className={styles.divLabel}>
                                Previous Reading:
                              </td>
                              <td className={styles.divValue}>
                                {house.previous}
                              </td>
                            </tr>
                            <tr className="bg-gray-100 border-b">
                              <td className={styles.divLabel}>
                                Present Reading:
                              </td>
                              <td className={styles.divValue}>
                                {house.present}
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <td className={styles.divLabel}>Consumption:</td>
                              <td className={styles.divValue}>
                                {house.consumption}
                              </td>
                            </tr>
                            <tr className="bg-gray-100 border-b">
                              <td className={styles.divLabel}>
                                Peso Per Consumption:
                              </td>
                              <td className={styles.divValue}>
                                ₱ {store.pesoPer}
                              </td>
                            </tr>
                            <tr className="bg-white border-b">
                              <td className={styles.divLabel}>Total Bill:</td>
                              <td
                                className={`${styles.divValue} font-bold text-2xl`}
                              >
                                ₱ {house.bill}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  )
}

const styles = {
  divContainer: "grid grid-cols-3 gap-2",
  divLabel: "text-md text-gray-900 px-6 py-4 text-left",
  divValue: "text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap"
}

export default ResultTable
