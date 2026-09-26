import CarGallery from "@/components/CarGallery";


const CarDetailsPage = async({params}) => {
    const {id} = await params;
    // console.log(id);
    const res = await fetch(`http://localhost:5000/car/${id}`);
    const car = await res.json();
    console.log(car);
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
                    <div className="relative z-20 -mt-45">
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

                                <button className="mt-5 w-full rounded-full bg-[#C41E3A] py-4 font-semibold text-white transition hover:bg-[#a91831]">
                                    Rent Now
                                </button>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};




export default CarDetailsPage;