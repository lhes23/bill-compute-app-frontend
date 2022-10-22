import React, { FormEvent, useState } from "react"
import { IHouseReading, Reading } from "../../interfaces"
import HouseComponent from "../HouseComponent"
import TotalReading from "../TotalReading"

interface IProps {
  setHouseReadings: React.Dispatch<React.SetStateAction<Reading[]>>
  setPesoPer: React.Dispatch<React.SetStateAction<number>>
}

const HouseForm = ({ setHouseReadings, setPesoPer }: IProps) => {
  const [totalReading, setTotalReading] = useState<Reading>({
    name: "main",
    previous: 0,
    present: 0,
    consumption: 0,
    bill: 0
  })

  const [houseA, setHouseA] = useState<IHouseReading>({
    name: "House A",
    previous: 0,
    present: 0
  })
  const [houseB, setHouseB] = useState<IHouseReading>({
    name: "House B",
    previous: 0,
    present: 0
  })
  const [houseC, setHouseC] = useState<IHouseReading>({
    name: "House C",
    previous: 0,
    present: 0
  })
  const [houseD, setHouseD] = useState<IHouseReading>({
    name: "House D",
    previous: 0,
    present: 0
  })

  const totalConsumption = totalReading.present - totalReading.previous
  const pesoper = Math.round(totalReading.bill / totalConsumption)

  const formHandler = async (e: FormEvent) => {
    e.preventDefault()

    const houseAConsumption = houseA.present - houseA.previous
    const houseABill = houseAConsumption * pesoper
    const houseBConsumption = houseB.present - houseB.previous
    const houseBBill = houseBConsumption * pesoper
    const houseCConsumption = houseC.present - houseC.previous
    const houseCBill = houseCConsumption * pesoper
    const houseDConsumption = houseD.present - houseD.previous
    const houseDBill = houseDConsumption * pesoper

    setPesoPer(pesoper)
    setHouseReadings([
      {
        name: houseA.name,
        previous: houseA.previous,
        present: houseA.present,
        consumption: houseAConsumption,
        bill: houseABill
      },
      {
        name: houseB.name,
        previous: houseB.previous,
        present: houseB.present,
        consumption: houseBConsumption,
        bill: houseBBill
      },
      {
        name: houseC.name,
        previous: houseC.previous,
        present: houseC.present,
        consumption: houseCConsumption,
        bill: houseCBill
      },
      {
        name: houseD.name,
        previous: houseD.previous,
        present: houseD.present,
        consumption: houseDConsumption,
        bill: houseDBill
      }
    ])
  }

  return (
    <>
      <div>
        <div className="flex justify-center bg-gray-50">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form
              className="w-full max-w-lg justify-center"
              onSubmit={formHandler}
            >
              <TotalReading
                totalReading={totalReading}
                setTotalReading={setTotalReading}
              />

              <HouseComponent house={houseA} setHouse={setHouseA} />
              <HouseComponent house={houseB} setHouse={setHouseB} />
              <HouseComponent house={houseC} setHouse={setHouseC} />
              <HouseComponent house={houseD} setHouse={setHouseD} />

              <div className="px-4 py-3 text-right sm:px-6 flex justify-center">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-medium">
                    Submit
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
          Elements
        </h4>
        <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
          <label className="block text-sm">
            <span className="text-gray-700 dark:text-gray-400">Name</span>
            <input
              className="block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
              placeholder="Jane Doe"
            />
          </label>
          <div className="mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Account Type
            </span>
            <div className="mt-2">
              <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
                <input
                  type="radio"
                  className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  name="accountType"
                  defaultValue="personal"
                />
                <span className="ml-2">Personal</span>
              </label>
              <label className="inline-flex items-center ml-6 text-gray-600 dark:text-gray-400">
                <input
                  type="radio"
                  className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
                  name="accountType"
                  defaultValue="busines"
                />
                <span className="ml-2">Business</span>
              </label>
            </div>
          </div>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Requested Limit
            </span>
            <select className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-select focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray">
              <option>$1,000</option>
              <option>$5,000</option>
              <option>$10,000</option>
              <option>$25,000</option>
            </select>
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">
              Multiselect
            </span>
            <select
              className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-multiselect focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              multiple
            >
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </select>
          </label>
          <label className="block mt-4 text-sm">
            <span className="text-gray-700 dark:text-gray-400">Message</span>
            <textarea
              className="block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              rows={3}
              placeholder="Enter some long form content."
              defaultValue={""}
            />
          </label>
          <div className="flex mt-6 text-sm">
            <label className="flex items-center dark:text-gray-400">
              <input
                type="checkbox"
                className="text-purple-600 form-checkbox focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              />
              <span className="ml-2">
                I agree to the
                <span className="underline">privacy policy</span>
              </span>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default HouseForm
