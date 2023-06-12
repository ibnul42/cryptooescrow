import Layout from './Layout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from './features/auth/authSlice'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])
  return (
    <div className={`backgroung`}>
      <Layout />
      <ToastContainer />
    </div>
  )
}

export default App
