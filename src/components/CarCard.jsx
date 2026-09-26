import Image from "next/image";
import Link from "next/link";

const CarCard = ({ car }) => {
    return (
        <div className="group overflow-hidden rounded-2xl bg-[#f5f5f5] shadow-sm transition-shadow duration-300 hover:shadow-lg">

    <div className="h-52 overflow-hidden">
        <Image
            src={car.imageUrl}
            alt={car.carName}
            width={500}
            height={300}
            className="h-full w-full object-cover transition-transform duration-1500 group-hover:scale-110"
        />
    </div>

    <div className="p-4">
        <h2 className="text-xl font-bold text-[#001C30]">
            {car.carName}
        </h2>

        
        <div className="mt-5 flex justify-between text-sm text-gray-500">
            <span> Brand</span>
            <span>{car.brand}</span>
        </div>
        <div className="mt-5 flex justify-between text-sm text-gray-500">
            <span> Category</span>
            <span>{car.category}</span>
        </div>
        <div className="mt-5 flex justify-between text-sm text-gray-500">
            <span> Fuel Type</span>
            <span>{car.fuelType}</span>
        </div>
        <div className="mt-5 flex justify-between text-sm text-gray-500">
            <span> Seat</span>
            <span>{car.seats}</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
            <p className="text-xl font-bold text-[#C41E3A]">
                ${car.price}
                <span className="text-sm font-normal text-gray-500"> / day</span>
            </p>

            <Link
                href={`/explore-cars/${car._id}`}
                className="rounded-full bg-[#C41E3A] px-6 py-3 text-sm text-white"
            >
                Details
            </Link>
        </div>
    </div>
</div>
    );
};

export default CarCard;