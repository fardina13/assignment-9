import Link from "next/link";

const NotFoundPage = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
            <div className="w-full max-w-xl text-center">

                <p className="text-sm font-semibold tracking-[5px] text-[#C41E3A]">
                    DRIVEFLEET
                </p>

                <h1 className="mt-5 text-8xl font-black tracking-tight text-[#001C30] md:text-9xl">
                    404
                </h1>

                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#C41E3A]"></div>

                <h2 className="mt-7 text-2xl font-bold text-gray-900 md:text-3xl">
                    Page Not Found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-gray-500">
                    Sorry, the page you are looking for doesn't exist or
                    may have been moved.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link
                        href="/"
                        className="rounded-lg bg-[#C41E3A] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#a81830]"
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/explore-cars"
                        className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-[#001C30] transition duration-300 hover:border-[#C41E3A] hover:text-[#C41E3A]"
                    >
                        Explore Cars
                    </Link>
                </div>

            </div>
        </main>
    );
};

export default NotFoundPage;