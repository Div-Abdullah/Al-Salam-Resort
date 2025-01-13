"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiDish, BiMenu } from "react-icons/bi"; 
import { HeaderItems } from '../../../constants/index';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="container mx-auto flex justify-between items-center py-4 w-[70%] relative">
            <ul className="hidden lg:flex items-center gap-12">
                {HeaderItems.slice(0, 3).map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.link}
                            className="relative text-secondaryColor font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-300 hover:after:w-full"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="flex justify-center">
                {HeaderItems.map((item) =>
                    item.isLogo && (
                        <div key={item.id}>
                            <Image src="/logo.svg" width={200} height={200} alt="Logo"  />
                        </div>
                    )
                )}
            </div>

            <ul className="hidden lg:flex items-center gap-12">
                {HeaderItems.slice(3).map((item) =>
                    item.isButton ? (
                        <li key={item.id}>
                            <button
                                className="bg-thirdColor py-4 px-8 text-white"
                                onClick={() => (window.location.href = item.link)}
                            >
                                {item.label}
                            </button>
                        </li>
                    ) : (
                        <li key={item.id}>
                            <Link
                                href={item.link}
                                className="relative text-secondaryColor font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {item.label === "الحجوزات" ? (
                                    <span className="flex items-center gap-2">
                                        <BiDish /> {item.label}
                                    </span>
                                ) : (
                                    item.label
                                )}
                            </Link>
                        </li>
                    )
                )}
            </ul>

            <button
                className="lg:hidden text-secondaryColor focus:outline-none"
                onClick={toggleMenu}
            >
                <BiMenu size={30} />
            </button>

            {isMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        {HeaderItems.map((item) =>
                            item.isButton ? (
                                <li key={item.id}>
                                    <button
                                        className="bg-thirdColor py-2 px-6 text-white"
                                        onClick={() => (window.location.href = item.link)}
                                    >
                                        {item.label}
                                    </button>
                                </li>
                            ) : (
                                <li key={item.id}>
                                    <Link
                                        href={item.link}
                                        className="relative text-secondaryColor font-extrabold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-secondaryColor after:transition-all after:duration-300 hover:after:w-full"
                                    >
                                        {item.label === "الحجوزات" ? (
                                            <span className="flex items-center gap-2">
                                                <BiDish /> {item.label}
                                            </span>
                                        ) : (
                                            item.label
                                        )}
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;