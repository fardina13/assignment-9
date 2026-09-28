"use client";

import {authClient} from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import { useSession } from "@/lib/auth-client"; 

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const { data: session,
     } =authClient.useSession();
    // console.log(session);
    const user = session?.user;
    // console.log(user);

    const handleLogOut= async() =>{
        await authClient.signOut();
    }



    return (
        <div
            className={`fixed top-0 left-0 z-50 w-full  transition-all duration-300 ${
                scrolled
                    ? "bg-white shadow-md"
                    : "bg-transparent"
            }`}
        >
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4">

                {/* Logo */}
                <div>
                    <Image
                        src={
                            scrolled
                                ? "/assets/DriveFleet-logo.png"
                                : "/assets/DriveFleetW.png"
                        }
                        height={200}
                        width={200}
                        alt="DriveFleet logo"
                        style={{ height: "auto" }}
                    />
                </div>

                {/* Navigation */}
                <ul
                    className={`flex gap-12 font-regular items-center transition-colors duration-300 ${
                        scrolled ? "text-black" : "text-white"
                    }`}
                >
                    <li><Link href="/" className="transition-colors duration-200 hover:text-[#C41E3A]">Home</Link></li>
                    <li><Link href="/explore-cars" className="transition-colors duration-200 hover:text-[#C41E3A]">Explore Cars</Link></li>
                    <li><Link href="/add-car" className="transition-colors duration-200 hover:text-[#C41E3A]"> Add Car</Link></li>
                    <li><Link href="/my-bookings" className="transition-colors duration-200 hover:text-[#C41E3A]"> My Bookings</Link></li>
                    <li><Link href="/profile" className="transition-colors duration-200 hover:text-[#C41E3A]">Profile</Link></li>
                    
                    {user ? 
                     <>
                      <li>
                        <Link onClick={(e) => {
    e.preventDefault();
    handleLogOut();
  }} 
  href="#"  className='transition-colors duration-200 hover:text-[#C41E3A]'>Logout</Link>
                      </li>
                      <li>
                        <Avatar>
                        <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                        <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                      </li>
                    </>
                    :
                     <>
                      <li><Link href="/login" className="transition-colors duration-200 hover:text-[#C41E3A]">Login</Link></li>
                      <li><Link href="/register" className="transition-colors duration-200 hover:text-[#C41E3A]">Register</Link></li>
                     </>}
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;