import axios from "axios"

const API_URL = "http://localhost:8000/api/users"

// login user
const login = async (userData) => {
  //   const response = await axios.post(API_URL + "login", userData)

  //   if (response.data) {
  //     localStorage.setItem("user", JSON.stringify(response.data))
  //   }
  //   return response.data

  try {
    const response = await axios.post(API_URL + "/login", userData)
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data))
    }
    return response.data
  } catch (error) {
    console.log(error.response)
    if (error.response.status === 404) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("An error occurred while registering the user")
    }
  }
}

// get user
const getUser = async () => {
    const user = JSON.parse(localStorage.getItem("user"))
    return user
    // try {
    //   const response = await axios.post(API_URL, data)
    //   console.log(response)
    //   return response.data.message
    // } catch (error) {
    //   console.log(error.response)
    //   if (error.response.status === 404) {
    //     throw new Error(error.response.data.message)
    //   } else {
    //     throw new Error("An error occurred while registering the user")
    //   }
    // }
  }

// register user
const register = async (data) => {
  try {
    const response = await axios.post(API_URL, data)
    console.log(response)
    return response.data.message
  } catch (error) {
    console.log(error.response)
    if (error.response.status === 404) {
      throw new Error(error.response.data.message)
    } else {
      throw new Error("An error occurred while registering the user")
    }
  }
}

// logout user
const logout = () => {
  localStorage.removeItem("user")
  return null
}

// update user
const update = async (userData) => {
  const token = JSON.parse(localStorage.getItem("user"))["token"]
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const response = await axios.post(API_URL + "me/update", userData, config)
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

const authService = {
  login,
  register,
  logout,
  update,
  getUser
}

export default authService
