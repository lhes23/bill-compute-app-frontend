import React from "react"
import { Reading } from "../interfaces"

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
          className="max-w-md mx-auto bg-gradient-to-tr from-slate-100 via-blue-100  to-slate-200 my-4 rounded-xl shadow-lg overflow-hidden md:max-w-2xl"
        >
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuYWRhJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                alt="Modern building architecture"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Due Date: {house.name}
              </div>
              <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                {house.name}
              </div>
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
        </div>
      ))}
    </>
  )
}

const styles = {
  divContainer: "grid grid-cols-3 gap-2",
  divLabel:
    "col-span-2 mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 align-middle",
  divValue: "text-gray-700 align-bottom"
}

export default ResultTable
