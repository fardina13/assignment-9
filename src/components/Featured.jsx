import Image from "next/image";
import Link from "next/link";

const Featured = async () => {
    const res = await fetch("http://localhost:5000/featured");
    const cars = await res.json();

    return (
        <section className="bg-white px-6 py-20 md:px-10 lg:px-20">
            <div className="mx-auto max-w-7xl">

                {/* Section Heading */}
                <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <p className="mb-2 text-sm font-semibold tracking-[4px] text-[#C41E3A]">
                            FEATURED COLLECTION
                        </p>

                        <h2 className="text-3xl font-bold text-[#001C30] md:text-4xl">
                            Explore Our Featured Cars
                        </h2>

                        <p className="mt-3 max-w-xl text-gray-500">
                            Discover our handpicked selection of premium cars,
                            ready for your next journey.
                        </p>
                    </div>

                    <Link
                        href="/explore-cars"
                        className="font-semibold text-[#C41E3A] transition hover:underline"
                    >
                        View All Cars →
                    </Link>
                </div>

                {/* Cars Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {cars.map((car) => (
                        <div
                            key={car._id}
                            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:shadow-xl"
                        >
                            {/* Image */}
                            <div className="relative h-60 overflow-hidden">
                                <Image
                                    src={car.imageUrl}
                                    alt={car.carName}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition duration-2000 group-hover:scale-105"
                                />

                                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#001C30] shadow-sm">
                                    {car.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#001C30]">
                                    {car.carName}
                                </h3>

                                <div className="mt-4 flex items-end justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">
                                            Starting from
                                        </p>

                                        <p className="mt-1 text-xl font-bold text-[#C41E3A]">
                                            ${car.price}
                                            <span className="ml-1 text-sm font-normal text-gray-400">
                                                /day
                                            </span>
                                        </p>
                                    </div>

                                    <Link
                                        href={`/explore-cars/${car._id}`}
                                        className="rounded-lg bg-[#C41E3A] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#a81830]"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Featured;