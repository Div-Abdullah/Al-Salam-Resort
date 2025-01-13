import Image from "next/image";
import React from "react";
import HeroImage from "./Heroimage";
import { HeroData } from "../../../constants/index";

const Hero = () => {
    const { sectionOne, sectionTwo, sectionThree } = HeroData;

    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-4 w-[70%]">
            <div className="flex lg:flex-col gap-4 p-4">
                {sectionOne.map((item) => (
                    <div
                        key={item.id}
                        className={`hidden sm:flex items-center ${item.reverse ? "flex-row-reverse" : ""
                            } justify-center`} 
                    >
                        <span className="text-thirdColor font-bold text-4xl">
                            {item.text}
                        </span>

                        <Image
                            src={item.img}
                            width={item.imgWidth}
                            height={item.imgHeight}
                            alt="pic"
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-row lg:flex-col items-center text-center p-4">
                <Image
                    src={sectionTwo.logo}
                    height={sectionTwo.logoHeight}
                    width={sectionTwo.logoWidth}
                    alt="logo"
                />
                <p
                    className="text-[#279196] w-full font-extrabold"
                    dangerouslySetInnerHTML={{ __html: sectionTwo.description }}
                ></p>
            </div>

            <div className="flex flex-col gap-4 items-end p-4 text-mainColor">
                <h2 className="text-maincolor text-2xl font-extrabold">
                    {sectionThree.title}
                </h2>
                <div className="flex flex-row gap-2">
                    {sectionThree.teamImages.map((img) => (
                        <Image
                            key={img.id}
                            src={img.src}
                            height={img.height}
                            width={img.width}
                            alt="team"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;