"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react"
import { EditModal } from "./EditModal"
import { useState } from "react";
import toast from "react-hot-toast";

const BookingCard = ({car})=>{
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [rentalDate, setRentalDate] = useState(null);
    // console.log(new Date(rentalDate));

    const handleBooking = async () => {
    const bookingData = {
        userId: user?.id,
        userImage: user?.image,
        userName: user?.name,

        carId: car._id,
        carName: car.carName,
        price: car.price,
        imageUrl: car.imageUrl,
        brand: car.brand,
        category: car.category,

        rentalDate: new Date(rentalDate),
    };
    const {data:tokenData} = await authClient.token();
    // console.log(tokenData);
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
    method: "POST",
    headers: {
        "content-type": "application/json",
        authorization:`Bearer ${tokenData?.token}`
    },
    body: JSON.stringify(bookingData),
});

const data = await res.json();
toast.success("You booked successfully!")

console.log(data);
    }
    return(
        <Card>
            <div className="relative z-20 -mt-49">
                        <div className="overflow-hidden rounded-2xl bg-gray-100 shadow-lg">

                            <div className="bg-[#C41E3A] px-7 py-7 text-center">
                                <p className="text-3xl font-bold text-white">
                                    ${car.price}
                                </p>

                                <span className="text-sm text-white/80">
                                    / rent per day
                                </span>
                            </div>

                            <div className="space-y-5 p-7">

                                

                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                         Brand
                                    </span>
                                    <span className="font-medium">
                                        {car.brand}
                                    </span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                         Category
                                    </span>
                                    <span className="font-medium">
                                        {car.category}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                         Fuel Type
                                    </span>
                                    <span className="font-medium">
                                        {car.fuelType}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">
                                         Seats
                                    </span>
                                    <span className="font-medium">
                                        {car.seats}
                                    </span>
                                </div>
                                <div className="flex items-center justify-between">
    <Label className="text-gray-500">
        Rental Date
    </Label>

    <DateField onChange={setRentalDate}  name="date" aria-label="Rental Date" className="w-auto">
        <DateField.Group
            variant="secondary"
            className="border-0 bg-transparent p-0 shadow-none outline-none"
        >
            <DateField.Input
                className="border-0 bg-transparent p-0 shadow-none outline-none"
            >
                {(segment) => (
                    <DateField.Segment
                        segment={segment}
                        className="text-sm font-medium text-gray-700"
                    />
                )}
            </DateField.Input>
        </DateField.Group>
    </DateField>
</div>

                                <div className="mt-8 flex justify-center">
    <div className="mt-8 flex items-center justify-center ">
    <EditModal car={car}/>

    <span className="text-sm font-semibold text-[#001C30]">
        &
    </span>
    <Button onPress={handleBooking} className={'rounded-l-none rounded-r-full bg-[#C41E3A] px-5 py-3 text-sm text-white'}>Book Now</Button>

    
</div>
</div>

                            </div>
                        </div>
                    </div>
        </Card>
    )
};
export default BookingCard;