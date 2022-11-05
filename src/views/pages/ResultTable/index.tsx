import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "store"
import { FcElectricity } from "react-icons/fc"
import { IoWaterSharp } from "react-icons/io5"
import { useNavigate } from "react-router-dom"
import client from "axiosClient/client"

const ResultTable = () => {
  const navigate = useNavigate()
  const store = useSelector((state: RootState) => state)
  const { houses, pesoPer } = store.houses
  const { dueDate, startDate, endDate, billType } = store.houses.totalReadings

  // const { bill, consumption, name, present, previous } = store.totalReadings

  const confirmHandler = () => {
    console.log({ store })

    // client
    //   .post("readings/", {
    //     house_id: 5,
    //     tenant_id: 6,
    //     bill_type: billType,
    //     due_date: dueDate,
    //     start_date: startDate,
    //     end_date: endDate,
    //     previous_reading: previous,
    //     present_reading: present,
    //     consumption,
    //     peso_per_consumption: store.pesoPer,
    //     bill,
    //     status: "unpaid"
    //   })
    //   .then((res) => {
    //     if (!res.status) {
    //       console.log("Something went wrong")
    //     }
    //     navigate("/")
    //   })
    //   .catch((err) => console.log(err))
  }
  return (
    <>
      <h2 className="my-6 text-2xl font-semibold">Result</h2>
      {houses.map((house) => (
        <div
          key={house.name}
          className="max-w-md mx-auto my-4 rounded-xl shadow-lg overflow-hidden md:max-w-2xl"
        >
          <div data-theme="light">
            <div className="px-2 py-4">
              <div className="flex justify-center">
                {billType === "Electric" ? (
                  <FcElectricity
                    color="red"
                    size={40}
                    className="bg-green-500 rounded-full"
                  />
                ) : (
                  <IoWaterSharp
                    color="white"
                    size={40}
                    className="bg-blue-500 rounded-full"
                  />
                )}
              </div>
              <div className="uppercase tracking-wide text-lg md:text-2xl font-semibold text-center">
                {billType} Consumption Bill
              </div>
              <div className="uppercase tracking-wide text-md md:text-lg font-bold text-center">
                {house.name}
              </div>

              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <div className="py-2 inline-block min-w-full px-2">
                    <div className="overflow-hidden">
                      <table className="table table-zebra w-full">
                        <tbody>
                          <tr className="">
                            <td>Due Date:</td>
                            <td className={`text-lg font-semibold`}>
                              {dueDate}
                            </td>
                          </tr>
                          <tr className="">
                            <td>Name of Tenant:</td>
                            <td className={styles.divValue}>{house.tenant}</td>
                          </tr>
                          <tr className="">
                            <td>Date From:</td>
                            <td className={styles.divValue}>{startDate}</td>
                          </tr>
                          <tr className="">
                            <td>Date To:</td>
                            <td className={styles.divValue}>{endDate}</td>
                          </tr>
                          <tr className="">
                            <td>Previous Reading:</td>
                            <td className={styles.divValue}>
                              {house.previous}
                            </td>
                          </tr>
                          <tr className="">
                            <td>Present Reading:</td>
                            <td className={styles.divValue}>{house.present}</td>
                          </tr>
                          <tr className="">
                            <td>Consumption:</td>
                            <td className={styles.divValue}>
                              {house.consumption}
                            </td>
                          </tr>
                          <tr className="">
                            <td>
                              Peso / {billType === "Electric" ? "kW" : "cm"}:
                            </td>
                            <td className={styles.divValue}>₱ {pesoPer}</td>
                          </tr>
                          <tr className="">
                            <td>Total Bill:</td>
                            <td
                              className={`${styles.divValue} font-bold text-2xl`}
                            >
                              ₱ {house.bill}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center mb-8 p-4">
        <button
          className="btn btn-outline btn-warning btn-wide mx-2"
          onClick={() => navigate("/add-reading")}
        >
          Go Back
        </button>
        <button
          onClick={confirmHandler}
          className="btn btn-primary btn-wide mx-2"
        >
          Confirm
        </button>
      </div>
    </>
  )
}

const styles = {
  divValue: "text-md font-light p-2 whitespace-nowrap"
}

export default ResultTable
