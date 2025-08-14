
export default function HeroSection() {
    return (
        <section className="hero-section text-center  py-16 ">
            <h5 className="text-sky-500 font-semibold">#1 JOB PORTAL</h5>
            <h1 className="text-3xl font-bold mt-2">
                Find Your <span className="text-sky-500 text-3xl font-semibold">Dream Job</span>Without
            </h1>
            <h1 className="text-3xl font-bold mt-2">Any Hassle</h1>
            <p className="text-gray-600 mt-3 text-xl font-semibold">
                Discover your next career move with confidence and ease.
            </p>

            <div className="flex justify-center mt-6 px-4">
                <div className="w-full max-w-3xl bg-white border border-[#63C9F8] shadow-lg flex flex-col md:flex-row items-center gap-2 rounded-xl p-2">
                   
                    <input
                        type="text"
                        className="w-full md:w-1/2 py-3 px-5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                        placeholder="Enter Skills / Company / Jobs"
                    />                   
                    <input
                        type="text"
                        className="w-full md:w-1/2 py-3 px-5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
                        placeholder="Enter Location"
                    />
                  
                    <button className="w-full md:w-auto bg-sky-500 cursor-pointer text-white px-8 py-3 rounded-lg hover:bg-sky-600 transition flex items-center justify-center">
                        Search
                    </button>
                </div>
            </div>



        </section>
    );
}
