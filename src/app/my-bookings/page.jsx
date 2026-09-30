"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BookingCancelAlert } from "@/components/BookingCancelAlert";

const MyBookingsPage = () => {
    const { data: session } = authClient.useSession();

    const [bookings, setBookings] = useState([]);

    const user = session?.user;

    useEffect(() => {
        if (!user?.id) return;

        fetch(`http://localhost:5000/booking?userId=${user.id}`)
            .then((res) => res.json())
            .then((data) => {
                setBookings(data);
                console.log(data);
            });
             }, [user?.id]);
    const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
        setBookings(bookings.filter((booking) => booking._id !== id));
    }
};
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12 md:px-10 lg:px-20">
            {/* Page Header */}
            <div className="mb-10 mt-20">
                <h1 className="text-3xl font-bold text-gray-900 md:text-4xl"> My Bookings </h1>
                <p className="mt-2 text-gray-500"> Manage your upcoming and previous car bookings. </p>
            </div>
            {/* Bookings */}
            <div className="space-y-5"> 
                {bookings.length > 0 ? ( bookings.map((booking) => 
                    ( <div key={booking._id} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md md:flex-row" > 
                    {/* Car Image */} 
                    <div className="h-56 w-full shrink-0 overflow-hidden md:h-48 md:w-64">
                       <Image
                         src={booking.imageUrl}
                         alt={booking.carName}
                         width={400}
                         height={300}
                         className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    </div>
                    {/* Car Information */}
                    <div className="flex flex-1 items-center justify-between gap-5 p-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900"> {booking.carName} </h2>
                            <div className="mt-4 space-y-2">
                                <p className="text-sm text-gray-500"> Rental Price </p>
                                <p className="text-lg font-semibold text-[#C41E3A]"> ${booking.price} </p>
                            </div>
                            <div className="mt-4">
                               <p className="text-sm text-gray-500"> Rental Date </p>
                               <p className="mt-1 font-medium text-gray-800"> {booking.rentalDate} </p>
                            </div>
                        </div>
                        {/* Delete Button */} 
                        <BookingCancelAlert bookingId={booking._id} onDelete={handleDelete}/>
                        </div>
   </div> 
   )) 
) : 
( <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
    <h2 className="text-xl font-semibold text-gray-800"> No bookings found </h2>
    <p className="mt-2 text-gray-500"> You haven't booked any cars yet. </p>
  </div> 
  )} 
  </div> 
  </div>
  );
};


export default MyBookingsPage;