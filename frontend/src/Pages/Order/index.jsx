import React, { useEffect, useState } from 'react'
import { FaCopy } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate()
    const [copied, setCopied] = useState(false);
    const tranxId = 'bc1q6gtdj00kqy5u9dau5p0vtjefa0d4ljnhln0gpe';

    const { user, isError, message, isRegistered } = useSelector((state) => state.auth)

    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])

    const handleCopy = () => {
        navigator.clipboard.writeText(tranxId)
            .then(() => {
                setCopied(true);
                setTimeout(() => {
                    setCopied(false);
                }, 1500); // Reset copied state after 2 seconds
            })
            .catch((error) => {
                console.error('Failed to copy:', error);
            });
    };
    return (
        <div className="max-w-6xl mx-auto px-3 lg:px-0 py-5 md:py-12 lg:py-16 flex justify-center">
            <div className="w-full max-w-2xl py-3 px-4 bg-white rounded">
                <div className=" mb-8">
                    <p className='font-medium'>Order Requirements:</p>
                    <input type="text" className='border border-gray-400 w-full h-20 rounded my-2' />
                    <button className='bg-primary px-5 py-1 text-white rounded'>Submit</button>
                </div>
                <p className='my-2 font-medium underline underline-offset-4 decoration-gray-300'>Order Details:</p>
                <div className="grid grid-cols-12">
                    <div className="pr-10 col-span-12 md:col-span-5">
                        <div className="flex justify-between">
                            <p>Total amount</p>
                            <div className="flex flex-col">
                                <p>700 USD</p>
                                <p>0.0100 BTC</p>
                            </div>
                        </div>
                        <p className='text-primary'><span className='text-red-500'>*</span>10% amounts of the website includes</p>
                    </div>
                    <div className="md:border-l md:px-2 col-span-12 md:col-span-7">
                        <p>Please send to address:</p>
                        <div className="flex flex-col md:flex-row gap-2 items-center">
                            <p className='px-2 py-1 border border-dashed rounded text-sm break-all'>{tranxId}</p>
                            <p onClick={handleCopy} className={`${copied ? 'text-primary' : 'cursor-pointer'} self-start md:self-center`}>{copied ? 'Copied' : <FaCopy className='h-5 w-5' />}</p>
                        </div>
                        <p className='my-2'>Or Scan the QR Code:</p>
                        <div className='w-20 h-20 p-2 border border-primary'>
                            <img src="/assets/qrCode.jpeg" className='h-full w-full' alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order