import React from "react"
import { AiOutlineDashboard } from "react-icons/ai"
import { FaWpforms } from "react-icons/fa"
import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className={styles.ul}>
          {/* <!-- Sidebar content here --> */}
          <li className={styles.li}>
            <Link className={styles.link} to="/">
              <AiOutlineDashboard size={25} />
              <span className={styles.span}>Dashboard</span>
            </Link>
          </li>
          <li className={styles.li}>
            <Link className={styles.link} to="/add-reading">
              <FaWpforms size={25} />
              <span className={styles.span}>Add a Reading</span>
            </Link>
          </li>
          <li className={styles.li}>
            <div
              className={`${styles.link} dropdown dropdown-bottom`}
              tabIndex={0}
            >
              <FaWpforms size={25} />
              <span className={styles.span}>Theme</span>

              <ul tabIndex={0} className="rounded-box bg-base-100 p-2">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

const styles = {
  li: "relative px-3 py-2",
  link: "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150",
  span: "ml-4 text-xl",
  ul: "menu p-4 overflow-y-auto w-[60vw] md:w-[25vw] bg-base-100 text-base-content"
}

export default SideBar
