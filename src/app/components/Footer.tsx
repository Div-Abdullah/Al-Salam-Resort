import React from 'react';
import { footerData } from '../../../constants/index';
import Image from 'next/image';
import { IoMdArrowBack } from 'react-icons/io';
import { FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className='flex flex-col items-center justify-between py-4 border-y-2 border-solid border-thirdColor my-10'>
            <div className='flex flex-col lg:flex-row items-center justify-around w-full'>
                <div className="flex justify-center items-center mb-10 lg:mb-0">
                    <Image src='/footerimg.png' width={600} height={600} alt='contact US' />
                </div>

                <div className="flex flex-col gap-6 items-center  lg:items-start ">
                    {footerData.sections.map((section, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 w-auto  justify-between text-mainColor">
                            <div className="text-3xl text-right  flex-1">{section.title}</div>

                            <div className="flex items-center justify-center bg-mainColor text-white rounded-full flex-shrink-0 w-12 h-12">
                                <section.icon className="text-2xl" />
                            </div>

                            <div className="text-thirdColor text-xl  font-light text-left flex-wrap">{section.text}</div>
                        </div>
                    ))}
                </div>




            </div>

            <div className='conatainer mx-auto flex  md:flex-col lg:flex-row-reverse flex-row-reverse  justify-around items-center w-full'>
                <div className='flex  flex-col  justify-center py-5'>
                    <ul className='flex flex-col md:flex-row lg:flex-row gap-10 text-thirdColor text-xl'>
                        {footerData.navLinks.map((link, index) => (
                            <li key={index} className='hover:text-mainColor transition duration-300'>
                                <a href={`#${link}`}>{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='flex flex-col  justify-between py-5'>
                    <div className='flex flex-col md:flex-row lg:flex-row gap-10'>
                        {footerData.socialLinks.map((link, index) => {
                            const Icon = link.icon;
                            return (
                                <div key={index} className='flex items-center justify-center w-12 h-12 rounded-full bg-thirdColor'>
                                    <Icon className='text-white text-2xl' />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;