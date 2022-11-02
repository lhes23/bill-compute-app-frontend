import { AxiosError, AxiosResponse } from "axios"
import client from "axiosClient/client"
import PageLayout from "layouts/PageLayout"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setAllTenants } from "redux/tenantSlice"
import { RootState } from "store"

const Tenants = () => {
  const dispatch = useDispatch()
  const store = useSelector((state: RootState) => state.tenants)

  useEffect(() => {
    client
      .get("tenants/")
      .then((res: AxiosResponse) => {
        console.log(res.data)
        dispatch(setAllTenants(res.data))
      })
      .catch((err: AxiosError) => console.log(err))
  }, [])

  return (
    <PageLayout title="All Tenants">
      <div className="flex justify-center">
        <table className="table table-zebra">
          <thead>
            <tr>
              <td>Name</td>
              <td>FB Messenger</td>
              <td>House</td>
              <td>Status</td>
              <td>Date Started</td>
            </tr>
          </thead>
          <tbody>
            {store.tenants?.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.name}</td>
                <td>{tenant.fb_messenger}</td>
                <td>{tenant.house_id}</td>
                <td>{tenant.is_active ? "Active" : "Inactive"}</td>
                <td>{tenant.date_started}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageLayout>
  )
}

export default Tenants
