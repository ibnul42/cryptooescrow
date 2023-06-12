import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login } from "../../features/auth/authSlice"
import { HiOutlineMail } from 'react-icons/hi'
import { FaLock } from 'react-icons/fa'

const Login = () => {
  const location = useLocation()
  const [logoutUser, setLogoutUser] = useState(
    location?.state?.logout ? true : false
  )
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  })

  const { email, password } = inputValue

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, isError, message, isLoggedIn } =
    useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    // if (logoutUser) {
    //   toast.success("Logout successfull!")
    // }
    if (user && logoutUser === false) {
      toast.success("Login successfull!")
      navigate("/")
    }
  }, [user, isSuccess, isError, logoutUser])

  const onChange = (e) => {
    const { name, value } = e.target
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setLogoutUser(false)
    dispatch(login(inputValue))
  }

  return (
    <div className="flex flex-col py-2 justify-center items-center">
      <form
        onSubmit={onSubmit} className="bg-white shadow-md rounded px-5 md:px-16 lg:px-24 pt-6 pb-8 my-10 max-w-3xl w-full mx-auto">
        <p className="text-center text-xl font-bold my-5">Login to Cryptooescrow.com</p>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium mb-2 capitalize"
            htmlFor="username"
          >
            Please enter your email Address <span className="text-red-600">*</span>
          </label>

          <div className="relative">
            <input
              className=" appearance-none border border-gray-200 rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              // placeholder="Email"
              value={email}
              onChange={onChange}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiOutlineMail className="w-5 h-5 text-primary" />
              <div className="ml-1 h-6 w-[1px] bg-gray-200"></div>
            </div>
          </div>

        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium mb-2 capitalize"
            htmlFor="password"
          >
            please enter your password <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <input
              className=" appearance-none border border-gray-200 rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              // placeholder="******************"
              value={password}
              onChange={onChange}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaLock className="w-5 h-5 text-primary" />
              <div className="ml-1 h-6 w-[1px] bg-gray-200"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-center">
          <button
            className="hover:bg-hover text-white bg-primary w-full font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
            type="submit"
          >
            log in
          </button>

          <p className="uppercase text-center">- or -</p>

          <Link to="/register"
            className="hover:bg-hover text-primary border border-primary w-full font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center"
          >
            Register an Account
          </Link>
          {/* <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a> */}
        </div>
      </form>
    </div>
  )
}

export default Login
