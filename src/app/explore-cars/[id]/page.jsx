import BookingCard from "@/components/BookingCard";
import CarGallery from "@/components/CarGallery";
import { EditModal } from "@/components/EditModal";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";


const CarDetailsPage = async({params}) => {
    const {id} = await params;
    // console.log(id);
    // const token = await auth.api.getToken({
    //     headers: headers()
    // })
    // console.log(token);

    const requestHeaders = await headers();

const {token} = await auth.api.getToken({
    headers: requestHeaders
});

console.log(token);
    const res = await fetch(`http://localhost:5000/car/${id}`,{
        headers:{
            authorization: `Bearer ${token}`
        }
    });
    const car = await res.json();
    // console.log(car);
    const images = [
        car.imageUrl,
        ...(car.galleryImages || []),
    ];
    
    return (
        <div className="bg-white">

            {/* Hero */}
            <section
                className="relative flex h-[500px] items-end bg-cover bg-center"
                style={{
                    backgroundImage: `url(${car.imageUrl})`,
                }}
            >
                <div className="absolute inset-0 bg-black/55"></div>

                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20">
                    <p className="mb-3 text-sm font-semibold tracking-[5px] text-[#C41E3A]">
                        PREMIUM CARS
                    </p>

                    <h1 className="text-5xl font-bold text-white">
                        {car.carName}
                    </h1>
                </div>
            </section>


            {/* Main Content */}
            <section className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">

                    {/* Left */}
                    <div>

                        <h2 className="text-2xl font-bold text-[#001C30]">
                            General Information
                        </h2>

                        <p className="mt-5 max-w-2xl leading-7 text-gray-500">
                            {car.description}
                        </p>

                        <div className="mt-7 space-y-4 text-sm text-gray-600">
                            <p>✓ 24/7 Roadside Assistance</p>
                            <p>✓ Free Cancellation & Return</p>
                            <p>✓ Rent Now, Pay When You Arrive</p>
                        </div>

                        {/* Gallery */}
                        <h2 className="mb-6 mt-14 text-2xl font-bold text-[#001C30]">
                            Image Gallery
                        </h2>

                        <CarGallery images={images} />

                        {/* Rental Conditions */}
                        <h2 className="mb-6 mt-14 text-2xl font-bold text-[#001C30]">
                            Rental Conditions
                        </h2>

                        <div className="space-y-3">
                            {[
                                "Contract and Annexes",
                                "Driving License and Age",
                                "Prices",
                                "Payments",
                                "Delivery",
                                "Traffic Fines",
                                "Cancellation",
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between rounded-xl bg-gray-100 px-6 py-5"
                                >
                                    <p className="font-medium text-[#001C30]">
                                        <span className="mr-3 text-[#C41E3A]">
                                            {index + 1}.
                                        </span>
                                        {item}
                                    </p>

                                    <span className="text-[#C41E3A]">
                                        ›
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Right Booking Card */}
                    <BookingCard car={car}/>

                </div>
            </section>
        </div>
    );
};




export default CarDetailsPage;