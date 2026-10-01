// "use client";

// import { authClient } from "@/lib/auth-client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { BookingCancelAlert } from "@/components/BookingCancelAlert";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";

// const MyBookingsPage = async() => {
//     const { data: session } = await authClient.useSession();

//     const [bookings, setBookings] =await useState([]);

//     const user = session?.user;
//     const { data: tokenData } =await  authClient.token();
    
//     const requestHeaders = await headers();
    
//       let token = "";
//       try {
//         const tokenRes = await auth.api.getToken({
//           headers: requestHeaders,
//         });
//         token = tokenRes?.token || "";
//       } catch (error) {
//         console.error("Token Fetch Error:", error);
//       }

//     useEffect(() =>  {
//         if (!user?.id) return;

//         fetch(`http://localhost:5000/booking?userId=${user.id}`
//             // ,{
//             // headers:{
//             //     authorization: `Bearer ${token}`
//             // }}
//         )
//             .then((res) => res.json())
//             .then((data) => {
//                 setBookings(data);
//                 console.log(data);
//             });
//              }, [user?.id]);
//     const handleDelete = async (id) => {
//     const res = await fetch(`http://localhost:5000/booking/${id}`, {
//         method: "DELETE",
//     });

//     const data = await res.json();

//     if (data.deletedCount > 0) {
//         setBookings(bookings.filter((booking) => booking._id !== id));
//     }
// };
//     return (
//     <div className="min-h-screen bg-gray-50">

//         {/* Banner */}
//         <section
//             className="relative flex h-72 w-full items-center justify-center bg-cover bg-center"
//             style={{
//                 backgroundImage: "url('/assets/car16.jpg')",
//             }}
//         >
//             {/* Dark Overlay */}
//             <div className="absolute inset-0 bg-black/60"></div>

//             {/* Banner Title */}
//             <h1 className="relative z-10 text-4xl font-bold text-white md:text-5xl">
//                 My Bookings
//             </h1>
//         </section>

//         {/* Bookings Content */}
//         <section className="px-4 py-12 md:px-10 lg:px-20">

//             <div className="mb-10">
//                 <h2 className="text-3xl font-bold text-gray-900">
//                     My Bookings
//                 </h2>

//                 <p className="mt-2 text-gray-500">
//                     Manage your upcoming and previous car bookings.
//                 </p>
//             </div>

//             {/* Bookings */}
//             <div className="space-y-5">
//                 {bookings.length > 0 ? (
//                     bookings.map((booking) => (
//                         <div
//                             key={booking._id}
//                             className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md md:flex-row"
//                         >
//                             {/* Car Image */}
//                             <div className="h-56 w-full shrink-0 overflow-hidden md:h-48 md:w-64">
//                                 <Image
//                                     src={booking.imageUrl}
//                                     alt={booking.carName}
//                                     width={400}
//                                     height={300}
//                                     className="h-full w-full object-cover transition duration-500 hover:scale-105"
//                                 />
//                             </div>

//                             {/* Car Information */}
//                             <div className="flex flex-1 items-center justify-between gap-5 p-6">
//                                 <div>
//                                     <h2 className="text-2xl font-bold text-gray-900">
//                                         {booking.carName}
//                                     </h2>

//                                     <div className="mt-4 space-y-2">
//                                         <p className="text-sm text-gray-500">
//                                             Rental Price
//                                         </p>

//                                         <p className="text-lg font-semibold text-[#C41E3A]">
//                                             ${booking.price}
//                                         </p>
//                                     </div>

//                                     <div className="mt-4">
//                                         <p className="text-sm text-gray-500">
//                                             Rental Date
//                                         </p>

//                                         <p className="mt-1 font-medium text-gray-800">
//                                             {booking.rentalDate}
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <BookingCancelAlert
//                                     bookingId={booking._id}
//                                     onDelete={handleDelete}
//                                 />
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
//                         <h2 className="text-xl font-semibold text-gray-800">
//                             No bookings found
//                         </h2>

//                         <p className="mt-2 text-gray-500">
//                             You haven't booked any cars yet.
//                         </p>
//                     </div>
//                 )}
//             </div>
//         </section>
//     </div>
// );
// }


// export default MyBookingsPage;


// "use client";

// import { authClient } from "@/lib/auth-client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { BookingCancelAlert } from "@/components/BookingCancelAlert";

// const MyBookingsPage = () => {
//   // ক্লায়েন্ট সাইড সেশন হুক
//   const { data: session, isPending } = authClient.useSession();
//   const [bookings, setBookings] = useState([]);
//   const user = session?.user;

//   useEffect(() => {
//     if (!user?.id) return;

//     // সেশন থেকে অথবা লোকাল স্টোরেজ থেকে আপনার টোকেনটি যেভাবে পান তা এখানে নিন
//     // সাধারণত authClient এর সেশনে একটা এক্সেস টোকেন বা সেশন আইডি থাকে।
//     // উদাহরণস্বরূপ: session?.token বা localStorage.getItem("token")
//     const token = session?.token || ""; 

//     // ডাটা ফেচিং (টোকেন সহ)
//     fetch(`http://localhost:5000/booking?userId=${user.id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         // এখানে Bearer Token পাঠানো হচ্ছে
//         "Authorization": `Bearer ${token}` 
//       }
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Unauthorized or Fetch Failed");
//         return res.json();
//       })
//       .then((data) => {
//         setBookings(data);
//       })
//       .catch((err) => console.error("Fetch Error:", err));
//   }, [user?.id, session?.token]); // সেশন বা টোকেন পরিবর্তন হলে আবার কল হবে

//   const handleDelete = async (id) => {
//     const token = session?.token || "";

//     try {
//       const res = await fetch(`http://localhost:5000/booking/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Authorization": `Bearer ${token}`
//         }
//       });
      
//       if (!res.ok) throw new Error("Delete failed");
      
//       const data = await res.json();
//       if (data.deletedCount > 0) {
//         setBookings(bookings.filter((booking) => booking._id !== id));
//       }
//     } catch (error) {
//       console.error("Delete Error:", error);
//     }
//   };

//   if (isPending) {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Banner */}
//       <section
//         className="relative flex h-72 w-full items-center justify-center bg-cover bg-center"
//         style={{ backgroundImage: "url('/assets/car16.jpg')" }}
//       >
//         <div className="absolute inset-0 bg-black/60"></div>
//         <h1 className="relative z-10 text-4xl font-bold text-white md:text-5xl">
//           My Bookings
//         </h1>
//       </section>

//       {/* Bookings Content */}
//       <section className="px-4 py-12 md:px-10 lg:px-20">
//         <div className="mb-10">
//           <h2 className="text-3xl font-bold text-gray-900">My Bookings</h2>
//           <p className="mt-2 text-gray-500">
//             Manage your upcoming and previous car bookings.
//           </p>
//         </div>

//         {/* Bookings */}
//         <div className="space-y-5">
//           {bookings.length > 0 ? (
//             bookings.map((booking) => (
//               <div
//                 key={booking._id}
//                 className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md md:flex-row"
//               >
//                 {/* Car Image */}
//                 <div className="h-56 w-full shrink-0 overflow-hidden md:h-48 md:w-64">
//                   <Image
//                     src={booking.imageUrl || "/assets/placeholder.jpg"}
//                     alt={booking.carName || "Car"}
//                     width={400}
//                     height={300}
//                     className="h-full w-full object-cover transition duration-500 hover:scale-105"
//                   />
//                 </div>

//                 {/* Car Information */}
//                 <div className="flex flex-1 items-center justify-between gap-5 p-6">
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-900">
//                       {booking.carName}
//                     </h2>
//                     <div className="mt-4 space-y-2">
//                       <p className="text-sm text-gray-500">Rental Price</p>
//                       <p className="text-lg font-semibold text-[#C41E3A]">
//                         \${booking.price}
//                       </p>
//                     </div>
//                     <div className="mt-4">
//                       <p className="text-sm text-gray-500">Rental Date</p>
//                       <p className="mt-1 font-medium text-gray-800">
//                         {booking.rentalDate}
//                       </p>
//                     </div>
//                   </div>
//                   <BookingCancelAlert
//                     bookingId={booking._id}
//                     onDelete={handleDelete}
//                   />
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
//               <h2 className="text-xl font-semibold text-gray-800">
//                 No bookings found
//               </h2>
//               <p className="mt-2 text-gray-500">
//                 You haven't booked any cars yet.
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MyBookingsPage;


// "use client";

// import { authClient } from "@/lib/auth-client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { BookingCancelAlert } from "@/components/BookingCancelAlert";

// const MyBookingsPage = () => {
//   const { data: session, isPending } = authClient.useSession();
//   const [bookings, setBookings] = useState([]);
//   const user = session?.user;

//   useEffect(() => {
//     if (!user?.id) return;

//     // Better Auth ক্লায়েন্ট থেকে একটিভ সেশন টোকেন/আইডি নেওয়ার উপায়
//     // (লাইব্রেরি ভেদে এটি session.session.token বা session.token হতে পারে, নিশ্চিত হতে console.log(session) করে দেখতে পারেন)
//     const token = session?.session?.token || session?.token || ""; 

//     fetch(`http://localhost:5000/booking?userId=${user.id}`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         "Authorization": `Bearer ${token}` // ব্যাকএন্ডের verifyToken-এর জন্য
//       }
//     })
//       .then((res) => {
//         if (!res.ok) throw new Error("Unauthorized");
//         return res.json();
//       })
//       .then((data) => setBookings(data))
//       .catch((err) => console.error("Fetch Error:", err));
//   }, [user?.id, session]);

//   const handleDelete = async (id) => {
//     const token = session?.session?.token || session?.token || "";

//     try {
//       const res = await fetch(`http://localhost:5000/booking/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         }
//       });
      
//       if (!res.ok) throw new Error("Delete failed");
      
//       const data = await res.json();
//       if (data.deletedCount > 0) {
//         setBookings(bookings.filter((booking) => booking._id !== id));
//       }
//     } catch (error) {
//       console.error("Delete Error:", error);
//     }
//   };

//   if (isPending) {
//     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Banner */}
//       <section className="relative flex h-72 w-full items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assets/car16.jpg')" }}>
//         <div className="absolute inset-0 bg-black/60"></div>
//         <h1 className="relative z-10 text-4xl font-bold text-white md:text-5xl">My Bookings</h1>
//       </section>

//       {/* Bookings Content */}
//       <section className="px-4 py-12 md:px-10 lg:px-20">
//         <div className="mb-10">
//           <h2 className="text-3xl font-bold text-gray-900">My Bookings</h2>
//           <p className="mt-2 text-gray-500">Manage your upcoming and previous car bookings.</p>
//         </div>

//         {/* Bookings */}
//         <div className="space-y-5">
//           {bookings.length > 0 ? (
//             bookings.map((booking) => (
//               <div key={booking._id} className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-md md:flex-row">
//                 <div className="h-56 w-full shrink-0 overflow-hidden md:h-48 md:w-64">
//                   <Image src={booking.imageUrl || "/assets/placeholder.jpg"} alt={booking.carName || "Car"} width={400} height={300} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
//                 </div>
//                 <div className="flex flex-1 items-center justify-between gap-5 p-6">
//                   <div>
//                     <h2 className="text-2xl font-bold text-gray-900">{booking.carName}</h2>
//                     <div className="mt-4 space-y-2">
//                       <p className="text-sm text-gray-500">Rental Price</p>
//                       <p className="text-lg font-semibold text-[#C41E3A]">\${booking.price}</p>
//                     </div>
//                     <div className="mt-4">
//                       <p className="text-sm text-gray-500">Rental Date</p>
//                       <p className="mt-1 font-medium text-gray-800">{booking.rentalDate}</p>
//                     </div>
//                   </div>
//                   <BookingCancelAlert bookingId={booking._id} onDelete={handleDelete} />
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-20 text-center">
//               <h2 className="text-xl font-semibold text-gray-800">No bookings found</h2>
//               <p className="mt-2 text-gray-500">You haven't booked any cars yet.</p>
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MyBookingsPage; 


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
        // Better Auth-এর JWT প্লাগইন থেকে আসল টোকেন জেনারেট করা হচ্ছে
        const tokenRes = await authClient.token();
        const token = tokenRes?.data?.token || ""; 

        const res = await fetch(`http://localhost:5000/booking?userId=${user.id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` // ব্যাকএন্ডের verifyToken-এর জন্য
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
      // ডিলিট করার সময়ও একই নিয়মে টোকেন জেনারেট হবে
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


