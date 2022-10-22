import React from "react"
import { AiOutlineDashboard } from "react-icons/ai"
import { FaWpforms } from "react-icons/fa"
import { Link } from "react-router-dom"

const SideBar = ({ showSidebar }: { showSidebar: boolean }) => {
  return (
    <>
      {showSidebar && (
        <aside className="relative z-20 w-48 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
          <div className="py-4 text-gray-500 dark:text-gray-400">
            <div className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
              Windmill
            </div>
            <ul className="mt-6">
              <li className="relative px-3 py-2">
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                  to="/"
                >
                  <AiOutlineDashboard size={25} />
                  <span className="ml-4">Dashboard</span>
                </Link>
              </li>
              <li className="relative px-3 py-2">
                <Link
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  to="/add-reading"
                >
                  <FaWpforms size={25} />
                  <span className="ml-4">Forms</span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </>
  )
}

export default SideBar
