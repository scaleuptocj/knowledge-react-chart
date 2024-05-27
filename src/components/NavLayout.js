"use client"
import React, { useState } from 'react'
import { GrMenu } from "react-icons/gr";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline, IoMdClose } from "react-icons/io";
import { HiMiniUsers } from "react-icons/hi2";
import Image from "next/image";

const navitems = [{ title: 'Dashbord', link: '/' }]

const NavLayout = ({ children }) => {
    const [openNav, setOpenNav] = useState(false)
    return (
        <div className="flex w-full">
            <div className={`block lg:hidden fixed transition-all duration-300 ease-in w-[230px] h-screen bg-black z-50 text-white ${openNav ? 'left-0' : 'left-[-300px]'}`}>
                <div className="text-center font-bold h-[10vh] min-h-[80px] border-b flex items-center justify-start px-7 relative">
                    <h2>Dashbord</h2>
                    <IoMdClose size={20} className='absolute top-3 right-3 cursor-pointer' onClick={() => setOpenNav(false)} />
                </div>
                <div className="py-8 px-1">
                    {navitems?.map(i => <p className="cursor-pointer py-4 px-6 bg-blue-600 transition-all duration-300 ease-in rounded text-sm" onClick={() => setOpenNav(false)}>{i.title}</p>)}
                </div>
            </div>
            <div className='hidden lg:block left-0 w-[20%] h-screen bg-black text-white'>
                <div className="text-center text-lg font-bold h-[10vh] min-h-[80px] border-b flex items-center justify-center">
                    <h2>Dashbord</h2>
                </div>
                <div className="py-8 px-1">
                    {navitems?.map(i => <p className="cursor-pointer py-4 px-6 bg-blue-600 transition-all duration-300 ease-in rounded">{i.title}</p>)}
                </div>
            </div>
            <div className="w-full lg:w-[80%]">
                <div className="border-b h-[10vh] min-h-[80px] w-full flex items-center justify-between px-8">
                    <button className="block lg:hidden" onClick={() => setOpenNav(true)}>
                        <GrMenu size={25} />
                    </button>
                    <button className="lg:block hidden">
                        <CiSearch size={25} />
                    </button>
                    <div className="flex gap-8 items-center">
                        <HiMiniUsers size={28} />
                        <IoIosNotificationsOutline size={28} />
                        <Image width={40} height={40} src='/profile.jpg' alt='profile' className="rounded-full cursor-pointer" />
                    </div>
                </div>
                <div className="overflow-scroll h-[90vh] pb-20">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default NavLayout