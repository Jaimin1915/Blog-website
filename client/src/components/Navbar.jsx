import React, { useState, useEffect } from "react"
import { FaFacebook, FaDribbble, FaTwitter, FaBars, FaXmark } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import Modal from "./Modal"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    if (user) {
      setIsLoggedIn(true)
      setCurrentUser(user)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
    { href: "/about", text: "About" },
    { href: "/blog", text: "Blogs" },
    { href: "/contact", text: "Contact" },
  ]

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleLogin = (loginStatus) => {
    setIsLoggedIn(loginStatus)
    if (loginStatus) {
      const user = JSON.parse(localStorage.getItem("currentUser"))
      setCurrentUser(user)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("currentUser")
    setIsLoggedIn(false)
    setCurrentUser(null)
  }

  return (
    <div>
      <header className="bg-black text-white fixed top-0 left-0 right-0">
        <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
          <NavLink to="/" className="text-xl font-bold text-white">
            Design<span className="text-orange-500">DK</span>
          </NavLink>

          {/* nav items for large devices */}
          <ul className="md:flex gap-12 text-lg hidden">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 border-b-2 border-orange-500" : "text-white"
                  }
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* menu icons */}
          <div className="text-white lg:flex gap-4 items-center hidden">
            <NavLink to="/" className="hover:text-orange-500">
              <FaFacebook />
            </NavLink>
            <NavLink to="/" className="hover:text-orange-500">
              <FaDribbble />
            </NavLink>
            <NavLink to="/" className="hover:text-orange-500">
              <FaTwitter />
            </NavLink>
            {isLoggedIn ? (
              <>
                <span>Welcome, {currentUser.email}</span>
                <button
                  onClick={handleLogout}
                  className="bg-orange-500 px-6 py-2 rounded font-medium hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={openModal}
                className="bg-orange-500 px-6 py-2 rounded font-medium hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in"
              >
                Login
              </button>
            )}
          </div>

          {/* our modal */}
          <Modal isOpen={isModalOpen} onClose={closeModal} onLogin={handleLogin} />

          {/* mobile menu button, display mobile screen */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* menu items only for mobile */}
        <div>
          <ul
            className={`md:hidden w-full gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 transition-all ease-out duration-250" : "hidden"}`}
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 border-b-2 border-orange-500" : "text-black"
                  }
                  onClick={toggleMenu}
                >
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Navbar

