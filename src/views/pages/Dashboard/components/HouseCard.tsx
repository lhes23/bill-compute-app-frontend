import React from "react"
import { FaHouseUser } from "react-icons/fa"

interface IHouse {
  id: string
  name: string
  isOccupied: boolean
  color: string
}

const HouseCard = ({ house }: { house: IHouse }) => {
  return (
    <>
      <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div
          className={`p-3 mr-4 text-${house.color}-500 bg-${house.color}-100 rounded-full dark:text-orange-100 dark:bg-orange-500`}
        >
          <FaHouseUser />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {house.name}
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {house.isOccupied ? "Occupied" : "Vacant"}
          </p>
        </div>
      </div>
    </>
  )
}

export default HouseCard
