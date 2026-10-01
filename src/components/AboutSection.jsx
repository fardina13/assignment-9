import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="bg-white py-20 md:py-24">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 lg:gap-20">

                {/* Left Content */}
                <div>
                    <p className="mb-3 text-xs font-semibold tracking-[4px] text-[#C41E3A]">
                        DRIVEFLEET
                    </p>

                    <h2 className="text-4xl font-bold leading-tight text-[#001C30] md:text-5xl">
                        We Are More Than
                        <span className="block text-[#C41E3A]">
                            A Car Rental Company
                        </span>
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
                        Experience premium cars, effortless booking, and reliable
                        service designed to make every journey comfortable and
                        memorable. Whether you are travelling for business or
                        exploring a new destination, DriveFleet is ready to move
                        with you.
                    </p>

                    <div className="mt-7 space-y-4">
                        <div className="flex items-center gap-4">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-base text-[#C41E3A]">
                                ✓
                            </span>
                            <span className="text-base text-gray-600">
                                Premium & Luxury Cars
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-base text-[#C41E3A]">
                                ✓
                            </span>
                            <span className="text-base text-gray-600">
                                Reliable & Comfortable Rides
                            </span>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative mx-auto w-full max-w-md">
                    <div className="overflow-hidden rounded-3xl">
                        <Image
                            src="/assets/car21.jpg"
                            alt="DriveFleet car rental"
                            width={700}
                            height={800}
                            className="h-[430px] w-full object-cover transition-transform duration-2000 ease-out hover:scale-110"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;