"use client";

import CarCard from "@/components/CarCard";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";


const ExploreCarsPage = () => {
    const [cars, setCars] = useState([]);
    const [categories, setCategories] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    // Get categories
    useEffect(() => {
        fetch("http://localhost:5000/car")
            .then((res) => res.json())
            .then((data) => {
                setCategories([...new Set(data.map((car) => car.category))]);
            });
    }, []);

    // Search + Filter
    useEffect(() => {
        const params = new URLSearchParams();

        if (search) params.set("search", search);
        if (category) params.set("category", category);

        fetch(`http://localhost:5000/car?${params.toString()}`)
            .then((res) => res.json())
            .then((data) => {
                setCars(data);
            });
    }, [search, category]);

    return (
        <div>

            {/* Banner */}
            <section
                className="relative flex h-[500px] w-full items-center justify-center bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/car16.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <h1 className="relative z-10 text-5xl font-bold text-white">
                    Explore Cars
                </h1>
            </section>

            {/* Cars Area */}
            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">

                    {/* Search & Filter Card */}
                    
<aside className="relative z-20 -mt-47 h-fit overflow-hidden rounded-2xl shadow-lg">

    {/* Search Area */}
    <div className="bg-[#C41E3A] p-7">

        <div className="relative">
            <input
                type="text"
                placeholder="Type here ..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border-none bg-white px-5 py-4 pr-14 text-sm text-gray-700 outline-none placeholder:text-gray-400"
            />

            <button
    type="button"
    className="absolute right-1 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#001C30]"
>
    <Search size={20} strokeWidth={2} />
</button>
        </div>

    </div>

    {/* Categories */}
    <div className="bg-[#f3f3f3] px-7 py-8">

        <h2 className="mb-6 text-lg font-bold text-[#001C30]">
            Categories
        </h2>

        <div className="space-y-5">

            {/* All Cars */}
            <button
                onClick={() => setCategory("")}
                className="flex items-center gap-3 text-sm text-gray-600 transition hover:text-[#C41E3A]"
            >
                <span
                    className={`h-3 w-3 rounded-full border ${
                        category === ""
                            ? "border-[#C41E3A] bg-[#C41E3A]"
                            : "border-[#C41E3A]"
                    }`}
                ></span>

                All Cars
            </button>

            {/* Categories */}
            {categories.map((item) => (
                <button
                    key={item}
                    onClick={() => setCategory(item)}
                    className={`flex items-center gap-3 text-sm transition ${
                        category === item
                            ? "font-medium text-[#C41E3A]"
                            : "text-gray-600 hover:text-[#C41E3A]"
                    }`}
                >
                    <span
                        className={`h-3 w-3 rounded-full border ${
                            category === item
                                ? "border-[#C41E3A] bg-[#C41E3A]"
                                : "border-[#C41E3A]"
                        }`}
                    ></span>

                    {item}
                </button>
            ))}

        </div>

    </div>

</aside>

                    {/* Cars */}
                    <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
                        {cars.map((car) => (
                            <CarCard key={car._id} car={car} />
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
};

export default ExploreCarsPage;