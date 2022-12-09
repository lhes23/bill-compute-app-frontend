import React from "react"

interface IProps {
  houseName: string
  tenantName: string
  children: React.ReactNode
}

const HouseComponent = ({ houseName, tenantName, children }: IProps) => {
  return (
    <>
      <h2 className="p-2">{houseName}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
        <div className="relative">
          <h2 className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
            {tenantName}
          </h2>
          <label
            htmlFor="previous_reading"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
          >
            Name of tenant
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">{children}</div>

      <div className="sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  )
}

export default HouseComponent
