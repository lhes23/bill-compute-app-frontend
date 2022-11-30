import React, { useState, useEffect } from "react"
import { IReading } from "interfaces"
import client from "axiosClient/client"
import { AxiosError, AxiosResponse } from "axios"
import { useAppSelector } from "store"

const ActiveReadingsTable = () => {
  const { allHouses } = useAppSelector((state) => state.houses)
  const [activeReadings, setActiveReadings] = useState<IReading[]>([])

  useEffect(() => {
    client
      .get("readings/active/")
      .then((res: AxiosResponse) => setActiveReadings(res.data))
      .catch((err: AxiosError) => console.log(err))
  }, [])

  const getHouseName = (id: number) => {
    return allHouses?.filter((h) => h.id === id).map((n) => n.name)
  }

  const paidHandler = (id: number) => {
    console.log(id)
    client
      .patch(`readings/${id}/`, { status: "paid" })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <>
      <h3 className="my-6 text-xl font-semibold">Active Readings</h3>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Name of Tenant</th>
                <th className="px-4 py-3">House</th>
                <th className="px-4 py-3">Bill</th>
                <th className="px-4 py-3">Due Date</th>
                <th className="px-4 py-3 text-center" colSpan={2}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {activeReadings.map((activeReading) => (
                <tr className="" key={activeReading.id}>
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
                      {/* Avatar with inset shadow */}
                      <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">
                          {activeReading.house_id}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          10x Developer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {getHouseName(activeReading.house_id)}
                  </td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight  text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                      {activeReading.bill}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    {activeReading.due_date}
                  </td>
                  <td className="px-4 py-3 text-sm">Edit</td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      className="btn btn-outline btn-error"
                      onClick={() => paidHandler(activeReading.id)}
                    >
                      Paid
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ActiveReadingsTable
