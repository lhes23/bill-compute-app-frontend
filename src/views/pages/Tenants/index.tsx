import PageLayout from "layouts/PageLayout"
import React, { useEffect } from "react"
import { getAllTenants } from "redux/tenantSlice"
import { useAppDispatch, useAppSelector } from "store"

const Tenants = () => {
  const dispatch = useAppDispatch()
  const { tenants } = useAppSelector((state) => state.tenants)

  useEffect(() => {
    dispatch(getAllTenants())
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
            {tenants?.map((tenant) => (
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
