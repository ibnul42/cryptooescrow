import Layout from './Layout'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className={`backgroung`}>
      <Layout />
      <ToastContainer />
    </div>
  )
}

export default App
