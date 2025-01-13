import Image from 'next/image';
import React from 'react';

const Callus = () => {
    return (
        <section className='bg-[#f5e0ce]'>
            <article className='flex flex-col lg:flex-row lg:justify-around gap-5 py-20'>
                <h2 className='text-thirdColor font-extrabold text-2xl'>
                    وسائل التواصل الاجتماعي<br />
                    <span className='font-extrabold text-7xl'>اتصل بنا</span><br />
                    <span className='font-light text-1xl text-mainColor'>ملهمة منك دائما #منتجع السلام</span>
                </h2>
                <Image src='/ambrella.png' width={200} height={200} alt='logo' className='hidden lg:block' />
            </article>

            <div className='flex gap-5 overflow-x-auto scrollbar-hidden px-5 pb-20'>
                {['/social1.png', '/social2.png', '/social3.png'].map((src, index) => (
                    <div key={index} className='relative w-[500px] h-[500px] flex-shrink-0'>
                        <Image
                            src='/instaicon.png'
                            width={40}
                            height={40}
                            alt='instagram'
                            className='absolute top-2 left-2 z-10 p-1 shadow-lg'
                        />
                        <Image
                            src={src}
                            alt={`social ${index + 1}`}
                            fill
                            className='object-cover'
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Callus;
