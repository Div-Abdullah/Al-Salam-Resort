'use client';
import React from 'react';
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image';
import { heroData } from '../../../constants/index';

const HeroImage = () => {
    const getIconComponent = (iconName: string) => {
        switch (iconName) {
            case "HiOutlineCalendarDateRange":
                return <HiOutlineCalendarDateRange className="text-thirdColor text-lg md:text-3xl lg:text-4xl" />;
            case "BsPerson":
                return <BsPerson className="text-thirdColor text-lg md:text-3xl lg:text-4xl" />;
            case "IoIosSearch":
                return <IoIosSearch className="text-lg md:text-3xl lg:text-4xl" />;
            default:
                return null;
        }
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-center lg:-mb-72 md:-mb-52 -mb-60 inset-1 mx-4 md:px-8 lg:px-16">
                <Image
                    src={heroData.image} 
                    alt="hero"
                    width={1000}
                    height={1000}
                    className="z-0 bottom-7"
                />
            </div>

            <div className="relative flex flex-col items-center justify-end w-full lg:-bottom-52 md:-bottom-44 -bottom-52 z-10">
                <div className="flex flex-row items-center gap-2 md:gap-8 bg-white px-2 md:px-6 py-2 md:py-4 shadow-lg">
                    {heroData.items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex flex-row text-mainColor items-center gap-1 md:gap-4 ${item.border ? "p-2 md:p-5 border-x-[1px] border-thirdColor" : ""}`}
                        >
                            {getIconComponent(item.icon)}
                            <div className="text-right">
                                <p className="text-xs md:text-xl lg:text-2xl font-extrabold">{item.title}</p>
                                <span className="text-[10px] font-medium md:text-base lg:text-lg text-thirdColor">{item.subtitle}</span>
                            </div>
                        </div>
                    ))}

                    <div className="flex items-center justify-center w-8 h-8 md:w-14 md:h-14 text-white bg-mainColor shadow-lg">
                        {getIconComponent(heroData.searchButton.icon)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroImage;