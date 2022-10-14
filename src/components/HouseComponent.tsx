import React from "react"

interface IProps {
  name: string
  present: number
  previous: number
  setPresent: React.Dispatch<React.SetStateAction<number>>
  setPrevious: React.Dispatch<React.SetStateAction<number>>
}

const HouseComponent = ({
  name,
  present,
  previous,
  setPresent,
  setPrevious
}: IProps) => {
  return (
    <>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <h2>{name}</h2>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Previous Reading
          </label>
          <div className="relative">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="Previous Reading"
              value={previous}
              onChange={(e) => setPrevious(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Present Reading
          </label>
          <div className="relative">
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="number"
              placeholder="Present Reading"
              value={present}
              onChange={(e) => setPresent(Number(e.target.value))}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HouseComponent
