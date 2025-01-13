'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleItemClick = (index: any) => {
        setActiveIndex(index);
    };

    // تفعيل AOS عند تحميل الصفحة
    useEffect(() => {
        AOS.init({
            duration: 1000, // مدة التأثير
            easing: 'ease-in-out', // نوع التأثير
            once: true, // لتطبيق التأثير مرة واحدة فقط
        });
    }, []);

    return (
        <div className="container mx-auto bg-bgColor py-30">
            <h2
                className="text-center text-5xl text-thirdColor py-16"
                data-aos="fade-up" // تأثير الظهور من الأسفل
                data-aos-delay="100" // تأخير قليل لتطبيق التأثير على العناصر بعد بعضها
            >
                "منتجع السلام" هي قصيدة للإكتشاف رسالة حب<br /> للحياة تعيش على الحدود
            </h2>
            <div className="flex items-center justify-center flex-col lg:flex-row gap-10">
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="py-20"
                >
                    <Image
                        src="/about.png"
                        width={600}
                        height={600}
                        alt="About"
                    />
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="animate__animated animate__fadeIn animate__delay-2s"
                >
                    <span className="text-mainColor font-extrabold text-2xl">
                        الغرف
                    </span>
                    <p className="text-mainColor font-light text-3xl">
                        <span className="text-thirdColor font-extrabold text-5xl">ابقي معنا</span>
                        <br />
                        مكان آمن في وسط مدينة (سكوتسديل) التاريخية
                    </p>
                    <ul className="py-7">
                        {[
                            "قاعة المشاهدة الجماعية",
                            "غرفة عرض البحيرة",
                            "غرفة الفناء",
                            "غرفة البدلات",
                        ].map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleItemClick(index)}
                                className={`cursor-pointer font-extrabold p-3 underline-offset-8 text-4xl transition-all duration-300 ease-in-out transform hover:scale-110 ${
                                    activeIndex === index
                                        ? "text-thirdColor underline"
                                        : "text-[#ebc0a0] opacity-60"
                                }`}
                                data-aos="fade-up"
                                data-aos-delay={`${index * 100 + 500}`} // تأخير مختلف لكل عنصر
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
