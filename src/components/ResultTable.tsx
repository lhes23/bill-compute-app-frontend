import React from "react"
import { Reading } from "../App"

const ResultTable = ({
  houseReadings,
  pesoper
}: {
  houseReadings: Reading[]
  pesoper: number
}) => {
  return (
    <>
      {houseReadings.map((house) => (
        <div
          key={house.name}
          className="md:flex items-center bg-white rounded-lg border shadow-md w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mx-4"
        >
          <div className="flex flex-col justify-around p-4 leading-normal">
            <h2>Due Date:</h2>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {house.name}
            </h5>
            <div className={styles.divContainer}>
              <div className={styles.divLabel}>Previous Reading : </div>
              <div className={styles.divValue}>{house.previous}</div>
            </div>
            <div className={styles.divContainer}>
              <div className={styles.divLabel}>Present Reading : </div>
              <div className={styles.divValue}>{house.present}</div>
            </div>
            <div className={styles.divContainer}>
              <div className={styles.divLabel}>Consumption : </div>
              <div className={styles.divValue}>{house.consumption}</div>
            </div>
            <div className={styles.divContainer}>
              <div className={styles.divLabel}>Peso per Consumption : </div>
              <div className={styles.divValue}>₱ {pesoper}</div>
            </div>
            <div className={styles.divContainer}>
              <div className={styles.divLabel}>Total Bill : </div>
              <div className={`${styles.divValue} font-bold text-2xl`}>
                ₱ {house.bill}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const styles = {
  divContainer: "grid grid-cols-3 gap-2 sm:grid-cols-2",
  divLabel:
    "col-span-2 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
  divValue: "text-gray-700"
}

export default ResultTable
