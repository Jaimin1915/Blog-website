import React, { useState } from "react"

const Register = ({ onClose, onRegister }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    // Check if user already exists
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    if (users.some((user) => user.email === email)) {
      alert("User already exists. Please login.")
      return
    }

    // Add new user
    users.push({ email, password })
    localStorage.setItem("users", JSON.stringify(users))

    alert("Registration successful. Please login.")
    onRegister()
  }

  return (
    <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 mt-6 mb-5 uppercase text-white">Register</h2>
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
            Register
          </button>
        </div>
      </form>
      <button className="mt-4 text-white underline" onClick={onClose}>
        Back to Login
      </button>
    </div>
  )
}

export default Register

