// import { Helmet } from 'react-helmet-async'
{/* <Helmet>
        <title>Home - Dylan Luper</title>
        <link rel="canonical" href="https://www.dylanluper.com" />
      </Helmet> */}
import { FaLock } from 'react-icons/fa'
import { RiArrowDownSFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 lg:px-0 grid grid-cols-2 gap-20 text-white py-5 md:py-12 lg:py-20">
      <div className="col-span-2 md:col-span-1 flex flex-col gap-5 md:pr-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl pr-0 md:pr-5 lg:pr-28 font-semibold">Never buy or sell online without using Cryptooescrow.com</h1>
        <p>With Cryptooescrow.com you can buy and sell anything safely without the risk of chargebacks. Truly secure payments.</p>
        <div className="flex flex-col gap-3">
          <div className="relative flex bg-white rounded">
            <div className="inset-y-0 left-0 pl-3 flex items-center">
              {/* <HiOutlineMail className="w-5 h-5 text-[#3aba5d]" /> */}
              <p className="text-black text-sm font-medium block">I&apos;m <span className='text-[#0381fe]'>selling</span></p>
              <RiArrowDownSFill className='h-5 w-5 text-black' />
              <div className="ml-1 h-6 w-[1px] bg-gray-200"></div>
            </div>
            <input
              className="appearance-none rounded flex-1 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-[100px]"
              id="email"
              name="email"
              type="text"
              placeholder="Domain names, Vehicles..."
            // value={email}
            // onChange={onChange}
            />
            <div className="flex items-center px-2">
              <RiArrowDownSFill className='h-5 w-5 text-black' />
            </div>
          </div>
          <div className="relative flex bg-white rounded">
            <div className="inset-y-0 left-0 pl-3 flex items-center">
              {/* <HiOutlineMail className="w-5 h-5 text-[#3aba5d]" /> */}
              <p className="text-black text-sm font-medium block">For $ 800</p>
              <RiArrowDownSFill className='h-5 w-5 text-black' />
            </div>
            <input
              className="appearance-none rounded flex-1 py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline min-w-[100px]"
              id="email"
              name="email"
              type="text"
            // placeholder="Domain names, Vehicles..."
            // value={email}
            // onChange={onChange}
            />
            <div className="flex items-center gap-3 px-2">
              <div className="ml-1 h-6 w-[1px] bg-gray-200"></div>
              <p className='uppercase text-black'>usd</p>
              <RiArrowDownSFill className='h-5 w-5 text-black' />
            </div>
          </div>
          <Link to="/login"
            className="bg-primary text-center hover:bg-hover text-white bg-[#3aba5d] w-full md:w-1/2 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Get started now
          </Link>
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="flex items-center gap-5">
          <div className="relative h-28 w-36">
            <div className="absolute flex justify-center h-28 w-36">
              <div className="h-full w-full rounded-[999px] bg-[rgba(255,228,111,0.5)]"></div>
            </div>
            <div className="absolute flex justify-center h-28 w-36">
              <div className="h-full w-32 rounded-[999px] bg-[rgba(255,228,111,0.7)]"></div>
            </div>
            <div className="absolute flex justify-center h-28 w-36">
              <div className="h-full w-28 rounded-[999px] bg-[rgba(255,228,111,0.99)]"></div>
            </div>
            <div className="absolute flex justify-center items-center h-28 w-36">
              <p className='uppercase text-[#ea8907] text-3xl font-bold'>.com</p>
            </div>
          </div>
          <p className='font-semibold text-2xl px-10'>Buy or sell domains and websites securely</p>
        </div>
        <div className="font-medium text-gray-400 flex flex-col gap-3 px-10 py-10">
          <p className='flex gap-2 items-center font-semibold text-white'> <img src="/assets/security2.svg" className='h-4 w-4' alt="" /> Buyer and seller agree on terms</p>
          <p className='flex gap-2 items-center'><img src="/assets/security.svg" className='h-4 w-4' alt="" /> Buyer pays Cryptooescrow.com</p>
          <p className='flex gap-2 items-center'><img src="/assets/security.svg" className='h-4 w-4' alt="" /> Seller transfers the domain name</p>
          <p className='flex gap-2 items-center'><img src="/assets/security.svg" className='h-4 w-4' alt="" /> Buyer approves the domain name</p>
          <p className='flex gap-2 items-center'><img src="/assets/security.svg" className='h-4 w-4' alt="" /> Cryptooescrow.com pays the seller</p>
        </div>
      </div>
    </div>
  )
}

export default Home