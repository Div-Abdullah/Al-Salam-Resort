import Image from 'next/image';
import React from 'react';
import { packages } from '../../../constants/index';

const Packages = () => {
    return (
        <section className="bg-mainColor overflow-hidden">
            <div className="container mx-auto text-white font-bold py-10">
                <article className="flex flex-col lg:flex-row lg:justify-around gap-5 py-14">
                    <h2 className="font-extrabold text-2xl">
                        العبوات <br />
                        <span className="font-extrabold text-7xl">عالج نفسك</span>
                    </h2>
                    <p className="font-light text-base md:text-2xl pb-14">
                        ولكي نجعل إقامتكم خاصة ــ وأكثر تذكرا ــ فقد أنشأنا حزم العطلات المصممة
                        <br /> للسماح لكم بالغوص في واستكشاف أفضل ما في منتجع السلام.
                    </p>
                </article>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center items-center">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="w-full md:w-[500px] flex flex-col flex-nowrap py-4 gap-5 overflow-hidden text-center"
                        >
                            <Image
                                src={pkg.image}
                                width={150}
                                height={150}
                                alt="cards"
                                className="w-full"
                            />
                            <h2 className="text-2xl md:text-3xl">{pkg.title}</h2>
                            <p className="font-light py-2 text-base md:text-2xl">{pkg.description}</p>
                            <button className="bg-bgColor w-[150px] text-thirdColor py-2 md:py-3 px-6 md:px-8 mx-auto">
                                {pkg.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;