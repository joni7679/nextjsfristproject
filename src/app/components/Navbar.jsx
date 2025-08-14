import React from "react";

export default function Navbar() {
    return (
        <nav className="container mx-auto p-6">
            <div className="flex justify-between items-center py-4 px-6 bg-white shadow-lg rounded-xl">
                <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg text-sky-500">JOB</span>
                </div>

                <ul className="hidden md:flex space-x-6 text-gray-600">
                    <li className="cursor-pointer hover:text-sky-500">Home</li>
                    <li className="cursor-pointer hover:text-sky-500">About us</li>
                    <li className="cursor-pointer hover:text-sky-500">Jobs</li>
                    <li className="cursor-pointer hover:text-sky-500">Companies</li>
                </ul>

                <div className="space-x-3">
                    <button className="bg-[#2BAAE4] text-white px-8 py-2 rounded cursor-pointer">
                        Register
                    </button>
                    <button className="border px-8 py-2 text-[#2BAAE4] border-[#2BAAE4] rounded cursor-pointer">
                        Log in
                    </button>
                </div>
            </div>

        </nav>
    );
}
