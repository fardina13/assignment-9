import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <main className="min-h-screen bg-white">

            {/* Full Width Banner */}
            <div className="relative h-64 w-full overflow-hidden md:h-80">
                <Image
                    src="/assets/car21.jpg"
                    alt="DriveFleet car"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/55"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-7xl font-black tracking-tight text-white md:text-9xl">
                        404
                    </h1>
                </div>
            </div>

            {/* Content */}
            <div className="flex min-h-[420px] items-center justify-center px-6 py-16">
                <div className="w-full max-w-xl text-center">

                    <p className="text-sm font-semibold tracking-[5px] text-[#C41E3A]">
                        DRIVEFLEET
                    </p>

                    <h2 className="mt-4 text-3xl font-bold text-[#001C30] md:text-4xl">
                        Page Not Found
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-gray-500">
                        Sorry, the page you are looking for doesn't exist
                        or may have been moved.
                    </p>

                    <div className="mt-8">
                        <Link
                            href="/"
                            className="inline-flex rounded-lg bg-[#C41E3A] px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#a81830]"
                        >
                            Back to Home
                        </Link>
                    </div>

                </div>
            </div>

        </main>
    );
};

export default NotFoundPage;
