import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Customer = () => {
    const [type, setType] = useState(null)
    return (
        <div className="max-w-6xl mx-auto px-3 lg:px-0 text-white py-5 md:py-12 lg:py-16 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
                <h1 className='font-semibold text-lg text-center'>Choose a vendor if you are a buyer</h1>
                <p className='text-center'>If you are a vendor is to post your services note that the website charges of the payment</p>
            </div>
            <div className="px-2 rounded bg-white w-full">
                <div className="flex gap-3">
                    <p className="text-gray-700 text-sm font-medium mb-2 capitalize block my-3">I am a:</p>
                    <div className="flex items-center gap-2 pt-1">
                        <p className="font-normal text-sm text-black">Buyer</p>
                        <div onClick={() => setType('buyer')} className="flex justify-center items-center cursor-pointer">
                            <div className="h-4 w-4 border border-[#3aba5d] rounded flex justify-center items-center">
                                <div className={`h-3 w-3 ${type === 'buyer' ? 'bg-[#3aba5d]' : ''} rounded`}></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                        <p className="font-normal text-sm text-black">Vendor</p>
                        <div onClick={() => setType('vendor')} className="flex justify-center items-center cursor-pointer">
                            <div className="h-4 w-4 border border-[#3aba5d] rounded flex justify-center items-center">
                                <div className={`h-3 w-3 ${type === 'vendor' ? 'bg-[#3aba5d]' : ''} rounded`}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {type &&
                <div className="">
                    <p className='underline underline-offset-4 decoration-primary my-3'> {type == 'buyer' ? 'Vendor' : 'Buyer'} List :</p>
                    <div className="py-3 px-2 flex flex-col md:flex-row gap-3 bg-white rounded">
                        <div className="md:w-auto flex justify-center items-center overflow-hidden rounded">
                            <img src="https://images.unsplash.com/photo-1686166113835-5ae3a533828c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" className='h-32 w-32 border border-primary rounded-lg object-top object-cover' alt="" />
                        </div>
                        <div className="flex-1 flex flex-col gap-[6px] text-black">
                            <p className='font-semibold'>Lorem Ipsum</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsam placeat aliquid laudantium numquam, doloribus eum reiciendis quia qui quo. Consectetur asperiores veniam labore quia eius voluptates unde exercitationem consequatur. Perferendis distinctio obcaecati, ipsa perspiciatis corrupti dolore neque voluptate quae libero eum aspernatur fuga! Perferendis quis obcaecati inventore eum esse.</p>
                            <Link to="/order" className='bg-primary text-white w-fit px-3 rounded py-1 place-self-center md:place-self-start'>Choose this vendor</Link>
                        </div>
                    </div>
                </div>}
        </div>
    )
}

export default Customer