import { AxiosError, AxiosResponse } from "axios"
import client from "axiosClient/client"
import React, { useEffect, useState } from "react"
import Select from "react-select"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai"

interface IOption {
  id: string
  name: string
  is_occupied: boolean
  color: string
}

const TenantForm = () => {
  const [options, setOptions] = useState<IOption[] | any>([])

  const [name, setName] = useState<string>("")
  const [fb, setFb] = useState<string>("")
  const [houseId, setHouseId] = useState<number>()

  const [isSuccess, setIsSuccess] = useState<boolean | null>(null)

  useEffect(() => {
    client
      .get("houses/")
      .then((res: AxiosResponse) => {
        let opt: any = []
        res.data.map((d: any) => {
          return opt.push({
            label: d.name,
            value: d.id
          })
        })
        setOptions(opt)
      })
      .catch((err: AxiosError) => console.log(err))
  }, [])

  const submitHandler = () => {
    client
      .post("tenants/", { name, fb_messenger: fb, house_id: houseId })
      .then((res) => setIsSuccess(true))
      .catch((err) => setIsSuccess(false))

    setName("")
    setFb("")
    setHouseId(0)
  }

  return (
    <>
      <div>
        <h2 className="my-6 text-2xl font-semibold">Add a Tenant</h2>
        <div className="flex justify-center">
          <div className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md md:w-[50vw]">
            {isSuccess && (
              <div
                className={`alert alert-${
                  isSuccess ? "success" : "error"
                } shadow-lg`}
              >
                <div>
                  {isSuccess && <AiOutlineCheckCircle />}
                  {isSuccess && <span>Successfully Added</span>}
                  {!isSuccess && isSuccess != null && <AiOutlineCloseCircle />}
                  {!isSuccess && isSuccess != null && (
                    <span>There is an Error</span>
                  )}
                </div>
              </div>
            )}
            <h4 className="text-2xl my-4">Tenant Info</h4>
            <div className="grid grid-cols-2 gap-2 md:gap-4 w-full">
              <div className="relative">
                <label className={styles.label}>
                  <span className="">Name</span>
                </label>

                <input
                  type="text"
                  id="previous_reading"
                  className={styles.input}
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative">
                <label className={styles.label}>
                  <span className="">FB Messenger</span>
                </label>

                <input
                  type="text"
                  id="present_reading"
                  className={styles.input}
                  placeholder=""
                  value={fb}
                  onChange={(e) => setFb(e.target.value)}
                />
              </div>
            </div>
            <div className="relative my-4">
              <label className={styles.label}>
                <span className="">House</span>
              </label>
              <Select
                options={options}
                value={options.filter((obj: any) => obj.value === houseId)}
                onChange={(e) => setHouseId(e.value)}
              />
            </div>

            <div className="px-4 py-3 text-right sm:px-6 flex justify-center">
              <button
                type="submit"
                className="btn btn-outline btn-primary btn-wide"
                onClick={submitHandler}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const styles = {
  input:
    "block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
  label:
    "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1",
  radio:
    "text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray",
  submitBtn:
    "relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800",
  submitSpan:
    "relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 font-medium"
}

export default TenantForm
