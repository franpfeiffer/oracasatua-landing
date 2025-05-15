"use client"

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "Amenities", path: "/apartment-amenities" },
        { name: "Floor Plans", path: "/floor-plans" },
        { name: "Renderings", path: "/renderings" },
        { name: "Deposit Structure", path: "/deposit-structure" },
        { name: "Fact Sheet", path: "https://faenaresidencesmia.com/wp-content/uploads/2025/02/Fact-Sheet-English.pdf" }
    ];

    return (
        <nav className="bg-white shadow-lg lg:py-6 fixed top-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <img
                                src="logo.png"
                                alt="Logo"
                                className="h-12 lg:h-20"
                            />
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-8">
                        <ul className="flex space-x-8 text-xl font-neue-plak-black">
                            {menuItems.map(({ name, path }) => (
                                <li key={name} className="relative group">
                                    {name === "Fact Sheet" ? (
                                        <a
                                        href="https://faenaresidencesmia.com/wp-content/uploads/2025/02/Fact-Sheet-English.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-700 hover:text-gray-900 font-medium"
                                    >
                                    {name.toUpperCase()}
                                    </a>
                                ) : (
                            <Link href={path} className="text-gray-700 hover:text-gray-900 font-medium">
                                {name.toUpperCase()}
                            </Link>
                            )}
                        </li>
                    ))}
                    </ul>
                    </div>
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="bg-[#000] text-white font-neue-plak-black px-6 py-2 border-2 border-[#000] hover:bg-[#fff] hover:text-[#000]">
                            SCHEDULE A VISIT
                        </button>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                            title="Toggle Menu"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú Móvil */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="p-4">
                    {/* Botón de Cerrar */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        title="Close Menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    {/* Logo en el menú móvil */}
                    <div className="mt-2 mb-8">
                        <h2 className="text-xl font-bold text-gray-800">FAENA RESIDENCES</h2>
                    </div>

                    {/* Items del Menú */}
                    <ul className="space-y-4">
                        {menuItems.map(({ name, path }) => (
                            <li key={name}>
                                <Link
                                    href={path}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded"
                                >
                                    {name.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
