"use client";

import Image from "next/image";
import { useState } from "react";

const CarGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <>
            <div className="grid grid-cols-2 gap-5">
                {images.map((image, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className="group h-56 cursor-pointer overflow-hidden rounded-2xl"
                    >
                        <Image
                            src={image}
                            alt="Car"
                            width={600}
                            height={600}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-6 top-6 text-4xl text-white"
                    >
                        ×
                    </button>

                    <div className="relative max-h-[85vh] max-w-5xl">
                        <Image
                            src={selectedImage}
                            alt="Car preview"
                            width={1200}
                            height={800}
                            className="max-h-[85vh] w-auto rounded-xl object-contain"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default CarGallery;