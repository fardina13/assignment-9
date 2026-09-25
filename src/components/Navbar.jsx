// "use client";

// import { Avatar, Button } from '@heroui/react';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//     return (
//         <div className='fixed top-0 left-0 z-50 w-full bg-transparent py-3'>
//             <nav className='flex items-center justify-between max-w-7xl mx-auto'>
//                 <div>
//                     <Image
//                       src='/assets/DriveFleet-logo.png'
//                       height={200}
//                       width={200}
//                       alt='logo'
//                       style={{ height: 'auto' }}
//                     />
//                 </div>

//                 <ul className='flex gap-12'>
//                   <li><Link href={"/"}>Home</Link></li>
//                   <li><Link href={"/explore-cars"}>Explore Cars</Link></li>
//                   <li><Link href={"/add-car"}>Add Car</Link></li>
//                   <li><Link href={"/profile"}>Profile</Link></li>
//                   <li><Link href={"/login"}>Login</Link></li>
//                   <li><Link href={"/register"}>Register</Link></li>
//                 </ul>
//            </nav>
//         </div>
//     );
// };

// export default Navbar;

// "use client";

// import { Avatar, Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 50);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <div
//             className={`fixed top-0 left-0 z-50 w-full py-3 transition-all duration-300 ${
//                 scrolled
//                     ? "bg-white shadow-md"
//                     : "bg-transparent"
//             }`}
//         >
//             <nav className="flex items-center justify-between max-w-7xl mx-auto px-4">

//                 {/* Logo */}
//                 <div>
//                     <Image
//                         src="/assets/DriveFleetW.png"
//                         height={200}
//                         width={200}
//                         alt="DriveFleet logo"
//                         style={{ height: "auto" }}
//                     />
//                 </div>

//                 {/* Navigation Links */}
//                 <ul
//                     className={`flex gap-12 font-regular transition-colors duration-300 ${
//                         scrolled ? "text-black" : "text-white"
//                     }`}
//                 >
//                     <li>
//                         <Link href="/">Home</Link>
//                     </li>

//                     <li>
//                         <Link href="/explore-cars">Explore Cars</Link>
//                     </li>

//                     <li>
//                         <Link href="/add-car">Add Car</Link>
//                     </li>

//                     <li>
//                         <Link href="/profile">Profile</Link>
//                     </li>

//                     <li>
//                         <Link href="/login">Login</Link>
//                     </li>

//                     <li>
//                         <Link href="/register">Register</Link>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;
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
                    <li>
                        <Link href="/">Home</Link>
                    </li>

                    <li>
                        <Link href="/explore-cars">
                            Explore Cars
                        </Link>
                    </li>

                    <li>
                        <Link href="/add-car">
                            Add Car
                        </Link>
                    </li>

                    <li>
                        <Link href="/profile">
                            Profile
                        </Link>
                    </li>

                    <li>
                        <Link href="/login">
                            Login
                        </Link>
                    </li>

                    <li>
                        <Link href="/register">
                            Register
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;