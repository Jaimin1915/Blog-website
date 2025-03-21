import React, { useState } from "react"
import Register from "./Register"

const Modal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isRegistering, setIsRegistering] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const user = users.find((u) => u.email === email && u.password === password)

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user))
      onLogin(true)
      onClose()
    } else {
      alert("Invalid email or password. Please try again.")
    }
  }

  const toggleRegister = () => {
    setIsRegistering(!isRegistering)
  }

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>
      <div className="modal-container">
        {isRegistering ? (
          <Register onClose={toggleRegister} onRegister={toggleRegister} />
        ) : (
          <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
            <h2 className="text-xl font-semibold mb-4 mt-6 mb-5 uppercase text-white">Please Login here!</h2>
            <form className="px-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md bg-white py-3 px-6
                                    text-base font-medium text-[#6B7280] outline-none focus:border-[#3B82F6] focus:shadow-md"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md bg-white py-3 px-6
                                    text-base font-medium text-[#6B7280] outline-none focus:border-[#3B82F6] focus:shadow-md"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="hover:shadow-md rounded-md bg-orange-500 hover:bg-orange-600 py-2 px-8 font-semibold text-white"
                >
                  Login
                </button>
              </div>
            </form>
            <button className="mt-4 text-white underline" onClick={toggleRegister}>
              Register
            </button>
          </div>
        )}
        <button className="absolute top-3 right-3 p-2" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Modal

