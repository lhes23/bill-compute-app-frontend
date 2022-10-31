import React from "react"
import { AiOutlineDashboard } from "react-icons/ai"
import { FaWpforms } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"

const Header = ({
  setTheme
}: {
  setTheme: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
      <header className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-primary btn-circle">
              <GiHamburgerMenu size={30} />
            </label>
            <ul tabIndex={0} className={styles.ul}>
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
                <Link className={styles.link} to="/add-tenant">
                  <FaWpforms size={25} />
                  <span className={styles.span}>Add a Tenant</span>
                </Link>
              </li>
              <li className={styles.li}>
                <label tabIndex={0} className={styles.link}>
                  <FaWpforms size={25} />
                  <span className={styles.span}>Themes</span>
                </label>
                <ul tabIndex={0} className={styles.ul}>
                  <li className={styles.li} onClick={() => setTheme("light")}>
                    <span className={styles.span}>Light</span>
                  </li>
                  <li className={styles.li} onClick={() => setTheme("dark")}>
                    <span className={styles.span}>Dark</span>
                  </li>
                  <li
                    className={styles.li}
                    onClick={() => setTheme("valentine")}
                  >
                    <span className={styles.span}>Valentine</span>
                  </li>
                  <li
                    className={styles.li}
                    onClick={() => setTheme("halloween")}
                  >
                    <span className={styles.span}>Halloween</span>
                  </li>
                  <li className={styles.li} onClick={() => setTheme("luxury")}>
                    <span className={styles.span}>Luxury</span>
                  </li>
                  <li className={styles.li} onClick={() => setTheme("winter")}>
                    <span className={styles.span}>Winter</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">Bill Compute App</a>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

const styles = {
  li: "relative px-3 py-2",
  link: "inline-flex items-center w-full text-sm font-semibold transition-colors duration-150",
  span: "ml-4 text-lg",
  ul: "menu w-[60vw] md:w-[25vw] dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box"
}

export default Header
