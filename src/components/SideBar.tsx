import React from "react"
// import { BsArrowLeftSquare, BsArrowRightSquare } from "react-icons/bs"
import { AiOutlineDashboard } from "react-icons/ai"
import { FaWpforms } from "react-icons/fa"

const SideBar = ({ showSidebar }: { showSidebar: boolean }) => {
  return (
    <>
      {showSidebar && (
        <aside className="z-20 w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0">
          <div className="py-4 text-gray-500 dark:text-gray-400">
            <div className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200">
              Windmill
            </div>
            <ul className="mt-6">
              <li className="relative px-6 py-3">
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
                <a
                  className="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                  href="index.html"
                >
                  <AiOutlineDashboard size={30} />
                  <span className="ml-4">Dashboard</span>
                </a>
              </li>
            </ul>
            <ul>
              <li className="relative px-6 py-3">
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="forms.html"
                >
                  <FaWpforms size={30} />
                  <span className="ml-4">Forms</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      )}
    </>
  )
}

export default SideBar
