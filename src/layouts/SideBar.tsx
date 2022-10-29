import React from "react"
import { AiOutlineDashboard } from "react-icons/ai"
import { FaWpforms } from "react-icons/fa"
import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-[60vw] md:w-[25vw] bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="relative px-3 py-2">
            <Link
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
              to="/"
            >
              <AiOutlineDashboard size={25} />
              <span className="ml-4 text-xl">Dashboard</span>
            </Link>
          </li>
          <li className="relative px-3 py-2">
            <Link
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
              to="/add-reading"
            >
              <FaWpforms size={25} />
              <span className="ml-4 text-xl">Forms</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SideBar
