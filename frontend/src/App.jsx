import Layout from './Layout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='bg-teal-300'>
      <Layout />
      <ToastContainer />
    </div>
  )
}

export default App
