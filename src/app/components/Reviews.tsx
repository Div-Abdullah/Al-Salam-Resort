'use client';
import Image from 'next/image';
import { reviewsData } from '../../../constants/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Reviews = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            easing: 'ease-in-out', 
            once: true, 
        });
    }, []);

    return (
        <section className="bg-bgColor">
            <div className="container mx-auto py-10">
                <article
                    className="flex flex-col lg:flex-row lg:justify-around gap-5 py-14"
                    data-aos="fade-up" 
                    data-aos-delay="100"
                >
                    <h2 className="text-thirdColor md:text-2xl font-extrabold text-2xl">
                        المراجعات
                        <br />
                        <span className="md:text-7xl font-extrabold text-7xl">لحظاتي</span>
                    </h2>
                    <Image
                        src="/logo3.png"
                        width={150}
                        height={150}
                        alt="logo"
                        className="hidden lg:block"
                    />
                </article>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10">
                    {reviewsData.map((review, index) => (
                        <div
                            key={review.id}
                            className="w-full md:w-[400px] flex flex-col items-center"
                            data-aos="fade-up" 
                            data-aos-delay={`${index * 100 + 300}`} 
                        >
                            {review.extraImage && (
                                <Image
                                    src={review.extraImage}
                                    width={200}
                                    height={200}
                                    alt={review.alt}
                                    className="hidden lg:flex"
                                />
                            )}
                            <Image
                                src={review.image}
                                width={800}
                                height={800}
                                alt={review.alt}
                                className="w-full h-auto"
                            />
                            <p className="text-mainColor text-base md:text-2xl py-5 md:py-10 text-center">
                                {review.text}
                            </p>
                            <span className="text-thirdColor text-xl md:text-3xl font-extrabold underline underline-offset-8">
                                {review.linkText}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
