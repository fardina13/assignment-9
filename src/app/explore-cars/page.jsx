import CarCard from "@/components/CarCard";

const ExploreCarsPage = async() => {
    const  res = await fetch('http://localhost:5000/car');
    const cars = await res.json();
    // console.log(cars);
    return (
        <div>
            <section
                className="relative w-full flex h-72 items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/car16.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <h1 className="animate-slide-up delay-5 relative z-10 text-5xl font-bold text-white">
                    Explore Cars
                </h1>
            </section>
            <section className=" max-w-7xl mx-auto py-20">
                <div className='grid grid-cols-3 gap-x-6 gap-y-16'>
                {
                    cars.map(car=>
                        <CarCard key={car._id} car={car} />
                    )
                }
            </div>
            </section>
        </div>
    );
};

export default ExploreCarsPage;