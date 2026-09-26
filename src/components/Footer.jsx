"use client";
import Image from "next/image";
import { Link } from "@heroui/react";

const Footer = () => {
  return (
    <footer className="bg-[#001C30] text-white mt-20">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Logo & Contact */}
          <div>
            <div className="">
              <Image
                src="/assets/DriveFleetW.png"
                alt="DriveFleet"
                width={170}
                height={85}
                className="h-auto w-[170px] object-contain"
              />
            </div>

            <h3 className="mb-6 text-[15px] font-semibold">
              Visit our location
            </h3>

            <p className="max-w-[220px] text-sm leading-6 text-gray-300">
              17110 116TH AVE SE UNIT A
              <br />
              RENTON, WA 98058-5055
            </p>

            <p className="mt-6 text-sm font-semibold">
              Call Us{" "}
              <span className="text-gray-300">
                +789 678 567 333
              </span>
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="mb-8 text-base font-semibold">
              Our Services
            </h3>

            <div className="flex flex-col gap-6">
              <Link
                href="#"
                className="text-xs font-semibold uppercase tracking-[4px] text-white hover:text-[#C41E3A]"
              >
                Luxury Rental
              </Link>

              <Link
                href="#"
                className="text-xs font-semibold uppercase tracking-[4px] text-white hover:text-[#C41E3A]"
              >
                Business Rentals
              </Link>

              <Link
                href="#"
                className="text-xs font-semibold uppercase tracking-[4px] text-white hover:text-[#C41E3A]"
              >
                Airport Pickups
              </Link>

              <Link
                href="#"
                className="text-xs font-semibold uppercase tracking-[4px] text-white hover:text-[#C41E3A]"
              >
                Safari Rentals
              </Link>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="mb-8 text-base font-semibold">
              Useful links
            </h3>

            <div className="flex flex-col gap-6">
              <Link
                href="#"
                className="text-xs font-semibold uppercase tracking-[4px] text-white hover:text-[#C41E3A]"
              >
                About DriveFleet
              </Link>

              <Link
                href="#"
                className="text-xs font-semibold uppercase tracking-[4px] text-white hover:text-[#C41E3A]"
              >
                Rental Requirements
              </Link>

              <Link
                href="#"
                className="text-xs font-semibold uppercase tracking-[4px] text-white hover:text-[#C41E3A]"
              >
                Membership Details
              </Link>

              <Link
                href="#"
                className="text-xs font-semibold uppercase tracking-[4px] text-white hover:text-[#C41E3A]"
              >
                Contact Details
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-8 text-base font-semibold">
              Newsletter
            </h3>

            <p className="text-sm text-gray-300">
              *Subscribe to get all the offers
            </p>

            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-500 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-400 focus:border-[#C41E3A]"
              />

              <button
                type="button"
                className="bg-[#C41E3A] px-5 text-sm font-semibold transition hover:bg-[#a81830]"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/5 bg-[#0D2A40]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 lg:flex-row lg:px-8">

          {/* Copyright */}
          <p className="text-sm text-gray-300">
            © 2025,{" "}
            <span className="font-semibold text-white">
              DriveFleet
            </span>
            , All rights reserved
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <Link
              href="#"
              aria-label="Facebook"
              className="text-sm font-bold text-white hover:text-[#C41E3A]"
            >
              f
            </Link>

            <Link
              href="#"
              aria-label="Google"
              className="text-sm font-bold text-white hover:text-[#C41E3A]"
            >
              G+
            </Link>

            <Link
              href="#"
              aria-label="Instagram"
              className="text-sm font-bold text-white hover:text-[#C41E3A]"
            >
              ◎
            </Link>

            <Link
              href="#"
              aria-label="Pinterest"
              className="text-sm font-bold text-white hover:text-[#C41E3A]"
            >
              P
            </Link>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-wrap justify-center gap-5 text-xs text-gray-300">
            <Link
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="text-gray-300 hover:text-white"
            >
              Terms & Condition
            </Link>

            <span>
              *Promo T&Cs Apply
            </span>
          </div>
        </div>
      </div>

      {/* Back To Top */}
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#C41E3A] bg-[#001C30] text-lg text-white transition hover:bg-[#C41E3A]"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;