import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, register, reset } from "../../features/auth/authSlice"
import { HiOutlineMail } from 'react-icons/hi'
import { FaLock } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { RxCross2 } from 'react-icons/rx'

const Register = () => {
    const location = useLocation()
    const [logoutUser, setLogoutUser] = useState(
        location?.state?.logout ? true : false
    )
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
    })

    const { email, password } = inputValue


    const upLowReges = /^(?=.*[a-z])(?=.*[A-Z]).+$/
    const containsSpecialChars = (str) => {
        const specialChars = "[`!@#$%^&*()_+-=[]{};':\"\\|,.<>/?~]/"
        const numbers = "1234567890"
        return specialChars.split("").some((specialChar) => str.includes(specialChar)) || numbers.split("").some((number) => str.includes(number))
    }

    const [type, setType] = useState(null)
    const [charCheck, setCharCheck] = useState({
        sevenChar: false,
        upLowerCase: false,
        special: false
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isError, message, isRegistered } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        // if (logoutUser) {
        //   toast.success("Logout successfull!")
        // }
        if (isRegistered) {
            toast.success(message)
            dispatch(reset())
            navigate("/login")
        }
        if (user) {
            navigate("/")
        }
        return () => {
            dispatch(reset())
        }
    }, [user, isError, dispatch, message, navigate, isRegistered])

    const onChange = (e) => {
        const { name, value } = e.target
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }))
        if (name === 'password') {
            value.length >= 7 ? setCharCheck(prev => ({ ...prev, sevenChar: true })) : setCharCheck(prev => ({ ...prev, sevenChar: false }))
            upLowReges.test(value) === true ? setCharCheck(prev => ({ ...prev, upLowerCase: true })) : setCharCheck(prev => ({ ...prev, upLowerCase: false }))
            containsSpecialChars(value) === true ? setCharCheck(prev => ({ ...prev, special: true })) : setCharCheck(prev => ({ ...prev, special: false }))
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (charCheck.sevenChar && charCheck.upLowerCase && charCheck.upLowerCase) {
            dispatch(register({ ...inputValue, type }))
        }
        // setLogoutUser(false)
        // dispatch(login(inputValue))
    }

    return (
        <div className="flex flex-col py-2 justify-center items-center">
            <form
                onSubmit={onSubmit} className="bg-white shadow-md rounded px-5 md:px-16 lg:px-24 pt-6 pb-8 my-10 max-w-3xl w-full mx-auto">
                <p className="text-center text-xl font-bold my-3">Create an Account on Cryptooescrow.com</p>
                <div className="mb-4 flex gap-5">
                    <p className="text-gray-700 text-sm font-medium mb-2 capitalize block my-3">Register as:</p>
                    <div className="flex items-center gap-2 pt-1">
                        <p className="font-normal text-sm">Buyer</p>
                        <div onClick={() => setType('buyer')} className="flex justify-center items-center cursor-pointer">
                            <div className="h-4 w-4 border border-primary rounded flex justify-center items-center">
                                <div className={`h-3 w-3 ${type === 'buyer' ? 'bg-primary' : ''} rounded`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                        <p className="font-normal text-sm">Seller</p>
                        <div onClick={() => setType('seller')} className="flex justify-center items-center cursor-pointer">
                            <div className="h-4 w-4 border border-primary rounded flex justify-center items-center">
                                <div className={`h-3 w-3 ${type === 'seller' ? 'bg-primary' : ''} rounded`}></div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            required
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
                            required
                            value={password}
                            onChange={onChange}
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FaLock className="w-5 h-5 text-primary" />
                            <div className="ml-1 h-6 w-[1px] bg-gray-200"></div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <p className="text-primary">Strong passwords have: </p>
                    <p className="flex items-center"> <span>{charCheck.sevenChar === true ? <TiTick className="text-primary" /> : <RxCross2 className="text-red-600 font-bold" />} </span>At least 7 characters</p>
                    <p className="flex items-center"><span>{charCheck.upLowerCase === true ? <TiTick className="text-primary" /> : <RxCross2 className="text-red-600 font-bold" />} </span>At least one uppercase and one lowercase character</p>
                    <p className="flex items-center"><span>{charCheck.special === true ? <TiTick className="text-primary" /> : <RxCross2 className="text-red-600 font-bold" />} </span>At least one number or special character</p>
                </div>
                <div className="flex flex-col gap-5 items-center justify-center">
                    <button
                        className="bg-primary hover:bg-hover text-white w-full font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline uppercase"
                        type="submit"
                    >
                        Sign up
                    </button>

                    <p className="text-gray-600 text-center">By registering you agree to the Cryptooescrow.com's <span className="text-[#3a88f5] font-semibold cursor-pointer">Terms of Using the Cryptooescrow Platform</span> and <span className="text-[#3a88f5] font-semibold cursor-pointer">Privacy Policy</span></p>

                    <Link to="/login"
                        className="hover:bg-hover text-primary font-medium rounded focus:outline-none focus:shadow-outline"
                    >
                        Login to Cryptooescrow.com
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

export default Register
