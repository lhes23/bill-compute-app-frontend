import React from "react"
import { IHouse } from "../App"

interface IProps {
  house: IHouse
  setHouse: React.Dispatch<React.SetStateAction<IHouse>>
}

const HouseComponent = ({ house, setHouse }: IProps) => {
  return (
    <>
      <h2 className="p-2">{house.name}</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-3 mt-2 mb-2">
          <div className="relative">
            <input
              type="number"
              id="previous_reading"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Previous Reading"
              value={house.previous}
              onChange={(e) =>
                setHouse({ ...house, previous: Number(e.target.value) })
              }
            />
            <label
              htmlFor="previous_reading"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Previous Reading
            </label>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mt-2 mb-2">
          <div className="relative">
            <input
              type="number"
              id="present_reading"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Present Reading"
              value={house.present}
              onChange={(e) =>
                setHouse({ ...house, present: Number(e.target.value) })
              }
            />
            <label
              htmlFor="present_reading"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
            >
              Present Reading
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default HouseComponent
