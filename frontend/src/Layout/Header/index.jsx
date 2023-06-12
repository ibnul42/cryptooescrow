import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'
import { useDispatch, useSelector } from "react-redux"
import { FiLogOut } from 'react-icons/fi'
import { logout, reset } from "../../features/auth/authSlice"
import { toast } from "react-toastify"

function Header({ open, setOpen, headerStyle, isHomePage }) {
  const dispatch = useDispatch()
  const { user, isLoggedOut } = useSelector((state) => state.auth)
  // const [activeId, setActiveId] = useState('/')
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#dba124" : "",
      // borderBottom: isActive ? "3px solid #6366f1" : null,
    }
  }

  useEffect(() => {
    if (isLoggedOut) {
      toast.success('Logged out')
      dispatch(reset())
    }
  }, [isLoggedOut, dispatch])
  const links = [
    // { name: "home", link: "/" },
    // { name: "photography", link: "/photography" },
    // { name: "about", link: "/about" },
  ]

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div className={`z-40 bg-primary text-white ${headerStyle} px-3`} id="header">
      <div className="max-w-6xl mx-auto px-3 lg:px-0 flex justify-between py-1">
        <div className="flex items-center cursor-pointer">
          {/* <p className="font-bold text-2xl">Logo</p> */}
          {/* <img src="/assets/ui_logo.svg" className='h-10 w-10' alt="logo" /> */}
          <NavLink to="/" className="text-xl font-bold">
            <img src={`${isHomePage ? '/assets/logo.svg' : '/assets/logo_bg.svg'}`} className="w-36 h-12" alt="cryptoscarecrow" />
          </NavLink>
        </div>
        {/* <div
          className={`h-12 w-12 absolute top-3 right-5 flex flex-col justify-between items-center rounded cursor-pointer md:hidden border ${open ? "p-2" : "p-3"
            } z-50`}
          onClick={() => setOpen(!open)}
        >
          <div
            className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${open ? "rotate-45 mt-4 block" : ""
              }`}
          ></div>
          <div
            className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${open ? "hidden mb-5" : ""
              }`}
          ></div>
          <div
            className={`w-full h-1 rounded-2xl bg-white transition-all duration-200 ease-in ${open ? "-rotate-45 mb-3 inline-block" : ""
              }`}
          ></div>
        </div> */}
        <ul
          className={`flex flex-col gap-3 md:flex-row items-start md:items-center pt-10 md:pt-0 justify-start md:justify-center absolute left-0 md:static w-3/4 h-screen md:h-auto md:w-auto transition-all duration-500 ease-in ${open
            ? "opacity-100 top-[65px] bg-primary lg:bg-transparent h-[calc(100vh-65px)]"
            : "opacity-0 md:opacity-100 top-[65px] left-[-500px]"
            } z-50`}
        >
          {links.map((item, index) => (
            <div key={index}>
              <NavLink
                to={item.link}
                className={`px-3 text-md font-noramal md:font-semibold py-3 md:my-0 cursor-pointer uppercase hover:text-red-600 md:hover:text-[#af811d]`}
                style={navLinkStyles}
                onClick={() => setOpen(!open)}
              >
                {item.name}
              </NavLink>
              {/* {links.length !== index + 1 && ( */}
              {/* <div className="border-t border-red-500 mx-3 w-3/4 md:hidden"></div> */}
              {/* )} */}
            </div>
          ))}
        </ul>
        {user ?
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full overflow-hidden cursor-pointer">
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className="h-full w-full object-cover object-top" alt="" />
            </div>
            <div className="cursor-pointer" onClick={logoutHandler}>
              <FiLogOut className="w-6 h-6 text-black" />
            </div>
          </div>
          :
          <div className="flex gap-3 items-center">
            <Link to="" className="flex items-center justify-center"><AiOutlineSearch fill={`${isHomePage ? 'white' : 'black'}`} className="h-5 w-5" /></Link>
            <Link to="/login" className="bg-[rgba(59,185,93,0.8)] hover:bg-[rgba(59,185,93,1)] text-black rounded px-5 py-1 font-medium flex justify-center items-center h-10" >Login</Link>
            <Link to="/register" className={`${isHomePage ? 'bg-transparent border-white text-white ' : 'bg-white text-black'} border rounded px-5 py-1 font-medium flex justify-center items-center h-10`} >Signup</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Header