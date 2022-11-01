import React from "react"
import Dashboard from "../Dashboard"
import { Routes, Route } from "react-router-dom"
import HouseForm from "../HouseForm"
import ResultTable from "../ResultTable"
import TenantForm from "../TenantForm"
import Tenants from "../Tenants"

const Main = () => {
  return (
    <>
      <main className="h-full">
        <div className="px-6 mx-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add-reading" element={<HouseForm />} />
            <Route path="/result" element={<ResultTable />} />
            <Route path="/add-tenant" element={<TenantForm />} />
            <Route path="/tenants" element={<Tenants />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default Main
