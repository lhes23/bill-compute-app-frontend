import React, { useState } from "react"
import { AiOutlineDashboard } from "react-icons/ai"
import { FaWpforms } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"

const SideBar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true)
  return (
    <>
      {showSidebar ? (
        <aside
          className={`top-0 left-0 w-[45vw] md:w-[20vw] bg-slate-200  p-10 text-purple-600 fixed h-screen z-40 transition duration-500 ease-in-out ${
            showSidebar ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <GiHamburgerMenu
            className={styles.hamburgMenu}
            size={30}
            onClick={() => setShowSidebar(!showSidebar)}
          />
          <div className="ml-6 text-lg font-bold">Bill Compute App</div>
          <ul className="mt-6">
            <li className="relative px-3 py-2">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <Link
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
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
        </aside>
      ) : (
        <div className="">
          <GiHamburgerMenu
            className={styles.hamburgMenu}
            size={30}
            onClick={() => setShowSidebar(!showSidebar)}
          />
        </div>
      )}
    </>
  )
}

const styles = {
  hamburgMenu: "top-4 left-4 fixed z-40"
}

export default SideBar
