 "use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BookingCancelAlert } from "@/components/BookingCancelAlert";

const MyBookingsPage = () => {
  const { data: session, isPending } = authClient.useSession();
  const [bookings, setBookings] = useState([]);
  const user = session?.user;

  useEffect(() => {
    if (!user?.id) return;

    const fetchBookings = async () => {
      try {
        const tokenRes = await authClient.token();
        const token = tokenRes?.data?.token || ""; 

        const res = await fetch(`http://localhost:5000/booking?userId=${user.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        });

        if (!res.ok) throw new Error("Unauthorized or Fetch Failed");
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Fetch Error:", err);
      }
    };

    fetchBookings();
  }, [user?.id]);

  const handleDelete = async (id) => {
    try {
      const tokenRes = await authClient.token();
      const token = tokenRes?.data?.token || "";

      const res = await fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      });
      
      if (!res.ok) throw new Error("Delete failed");
      
      const data = await res.json();
      if (data.deletedCount > 0) {
        setBookings(bookings.filter((booking) => booking._id !== id));
      }
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  if (isPending) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <section className="relative flex h-72 w-full items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/car16.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className="relative z-10 text-4xl font-bold text-white md:text-5xl">My Bookings</h1>
      </section>

      {/* Bookings Content */}
      <section className="px-4 py-12 md:px-10 lg:px-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">My Bookings</h2>
          <p className="mt-2 text-gray-500">Manage your upcoming and previous car bookings.</p>
        </div>

        {/* Bookings */}
        <div className="space-y-5">
          {bookings.length > 0 ? (
            bookings.map((booking) => (
              <div key={booking._id} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md md:flex-row">
                <div className="h-56 w-full shrink-0 overflow-hidden md:h-48 md:w-64">
                  <Image src={booking.imageUrl || "/assets/placeholder.jpg"} alt={booking.carName || "Car"} width={400} height={300} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="flex flex-1 items-center justify-between gap-5 p-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{booking.carName}</h2>
                    <div className="mt-4 space-y-2">
                      <p className="text-sm text-gray-500">Rental Price</p>
                      <p className="text-lg font-semibold text-[#C41E3A]">${booking.price}</p>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm text-gray-500">Rental Date</p>
                      <p className="mt-1 font-medium text-gray-800">{booking.rentalDate}</p>
                    </div>
                  </div>
                  <BookingCancelAlert bookingId={booking._id} onDelete={handleDelete} />
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
              <h2 className="text-xl font-semibold text-gray-800">No bookings found</h2>
              <p className="mt-2 text-gray-500">You haven't booked any cars yet.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyBookingsPage;


