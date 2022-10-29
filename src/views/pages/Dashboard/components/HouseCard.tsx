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
      <div className="flex items-center p-4 bg-white rounded-lg shadow-lg">
        <div
          className={`p-3 mr-4 text-${house.color}-500 bg-${house.color}-100 rounded-full`}
        >
          <FaHouseUser />
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600">{house.name}</p>
          <p className="text-lg font-semibold text-gray-700">
            {house.isOccupied ? "Occupied" : "Vacant"}
          </p>
        </div>
      </div>
    </>
  )
}

export default HouseCard
