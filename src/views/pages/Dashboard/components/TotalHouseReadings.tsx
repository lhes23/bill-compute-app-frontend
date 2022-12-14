import React, { useEffect } from "react"
import { AxiosError, AxiosResponse } from "axios"
import client from "axiosClient/client"
import { getAllReadings } from "redux/houseSlice"
import { useAppDispatch, useAppSelector } from "store"
import { IReading } from "interfaces"

const TotalHouseReadings = () => {
  const dispatch = useAppDispatch()
  const { allReadings } = useAppSelector((state) => state.houses)

  useEffect(() => {
    dispatch(getAllReadings())
  }, [dispatch])

  const deleteHandler = (id: number) => {
    client
      .delete(`readings/${id}`)
      .then((res: AxiosResponse) => {
        if (!res.status) {
          console.log(res)
        }
        dispatch(getAllReadings())
      })
      .catch((err: AxiosError) => console.log(err))
  }

  return (
    <>
      <h3 className="my-6 text-xl font-semibold">All House Readings</h3>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-center" colSpan={2}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {allReadings?.map((reading: IReading) => (
                <tr
                  key={reading.id}
                  className="text-gray-700 dark:text-gray-400"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center text-sm">
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
                        <p className="font-semibold">{reading.bill_type}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          10x Developer
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm">??? {reading.bill}</td>
                  <td className="px-4 py-3 text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight rounded-full alert alert-warning">
                      {reading.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">{reading.due_date}</td>
                  <td className="px-4 py-3 text-sm">Edit</td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      className="btn btn-outline btn-error"
                      onClick={() => deleteHandler(reading.id)}
                    >
                      Delete
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

export default TotalHouseReadings
