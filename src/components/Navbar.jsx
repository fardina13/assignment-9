"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
                    className={`flex gap-12 font-regular transition-colors duration-300 ${
                        scrolled ? "text-black" : "text-white"
                    }`}
                >
                    <li><Link href="/" className="transition-colors duration-200 hover:text-[#C41E3A]">Home</Link></li>
                    <li><Link href="/explore-cars" className="transition-colors duration-200 hover:text-[#C41E3A]">Explore Cars</Link></li>
                    <li><Link href="/add-car" className="transition-colors duration-200 hover:text-[#C41E3A]"> Add Car</Link></li>
                    <li><Link href="/my-bookings" className="transition-colors duration-200 hover:text-[#C41E3A]"> My Bookings</Link></li>
                    <li><Link href="/profile" className="transition-colors duration-200 hover:text-[#C41E3A]">Profile</Link></li>
                    <li><Link href="/login" className="transition-colors duration-200 hover:text-[#C41E3A]">Login</Link></li>
                    <li><Link href="/register" className="transition-colors duration-200 hover:text-[#C41E3A]">Register</Link></li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;