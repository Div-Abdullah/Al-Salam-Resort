

import { BiDish } from "react-icons/bi";
export const HeaderItems = [
    { id: 1, label: "العطلة", link: "/#", isButton: false },
    { id: 2, label: "الأنشطة", link: "/#", isButton: false },
    { id: 3, label: "جولة إفتراضية", link: "/#", isButton: false },
    { id: 4, label: "", link: "/#", isLogo: true },
    { id: 5, label: "الحجوزات", icon: '<BiDish />', link: "/#", isButton: false },
    { id: 6, label: "احجز الآن", link: "/#", isButton: true },
];


export const HeroData = {
    sectionOne: [
        { id: 1, text: "أجد", img: "/find.png", imgWidth: 90, imgHeight: 90 },
        { id: 2, text: "نفسك", img: "/find1.png", imgWidth: 50, imgHeight: 50, reverse: true },
        { id: 3, text: "هنا", img: "/find2.png", imgWidth: 90, imgHeight: 90 },
    ],
    sectionTwo: {
        logo: "/logo2.png",
        logoWidth: 120,
        logoHeight: 120,
        description:
            "اجعلوا عطلتكم الخاصة مصممة لتتمكنوا من<br/>الغوص واستكشاف أفضل ما في منتجع السلام.",
    }, 
    sectionThre: {
        title: "التعرف على خبرائنا",
        teamImages: [
            { id: 1, src: "/person.png", width: 40, height: 40 },
            { id: 2, src: "/person1.png", width: 40, height: 40 },
            { id: 3, src: "/person2.png", width: 40, height: 40 },
            { id: 4, src: "/person3.png", width: 40, height: 40 },
        ],
    },
    sectionThree: {
        title: "التعرف على خبرائنا",
        teamImages: [
            { id: 1, src: "/person.png", width: 40, height: 40 },
            { id: 2, src: "/person1.png", width: 40, height: 40 },
            { id: 3, src: "/person2.png", width: 40, height: 40 },
            { id: 4, src: "/person3.png", width: 40, height: 40 },
        ],
    },

};


export const heroData = {
    image: "/hero.png", 
    items: [
        {
            icon: "HiOutlineCalendarDateRange", 
            title: "تسجيل الدخول",
            subtitle: "حدد تاريخك",
        },
        {
            icon: "HiOutlineCalendarDateRange", 
            title: "تحقق من ذلك",
            subtitle: "حدد تاريخك",
            border: true, 
        },
        {
            icon: "BsPerson", 
            title: "المسافرون",
            subtitle: "إضافة ضيف",
        },
    ],
    searchButton: {
        icon: "IoIosSearch", 
    },
};
export const packages = [
    {
        id: 1,
        image: '/pakge.png',
        title: 'ابقَ أطول، ادخر أكثر',
        description: 'زروا عدو منتجع فيلا ناتو بقدر ما تريدون، كلما بقيتم أطول، كلما ادخرتم أكثر!',
        buttonText: 'احجز الآن',
    },
    {
        id: 2,
        image: '/pakge1.png',
        title: 'هروب الأصدقاء',
        description: 'احصل على هروب الأصدقاء للهروب إلى سكوتسديل بما في ذلك خصم في الغداء والعشاء!',
        buttonText: 'احجز الآن',
    },
    {
        id: 3,
        image: '/pakge2.png',
        title: 'ائتمان المأكولات والمشروبات',
        description: 'تذوق شيء لذيذ في مطعم نادي القنال أو بجانب حمام السباحة. أو تختار أن تسترخي في غرفتك.',
        buttonText: 'احجز الآن',
    },
    {
        id: 4,
        image: '/pakge3.png',
        title: 'ابقَ أطول، ادخر أكثر',
        description: 'زروا عدو منتجع فيلا ناتو بقدر ما تريدون، كلما بقيتم أطول، كلما ادخرتم أكثر!',
        buttonText: 'احجز الآن',
    },
];



export const reviewsData = [
    {
        id: 1,
        image: '/review.png',
        text: 'بيتي الروحي مكاني فوق الغيوم أجد سعادتي قلبي يدق بقوة هنا أحلامي تنمو لها أجنحة هنا',
        linkText: 'استكشاف المنتجع',
        alt: 'review',
    },
    {
        id: 2,
        image: '/review1.png',
        text: 'أريد أن أتذوق كل لحظة تذوق طعم جنوب التيرول على جرسى اكتشف طعم الجنوب المشمس',
        linkText: 'استكشاف المطبخ',
        alt: 'review',
        extraImage: '/smreview.png', 
    },
    {
        id: 3,
        image: '/review2.png',
        text: 'بيتي الروحي مكاني فوق الغيوم أجد سعادتي قلبي يدق بقوة هنا أحلامي تنمو لها أجنحة هنا',
        linkText: 'استكشاف المنتجع',
        alt: 'review',
    },
];

import { IoMdArrowBack } from 'react-icons/io'; 
import { FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaSquareXTwitter } from "react-icons/fa6";
export const footerData = {
    sections: [
        {
            title: "الزيارة",
            icon: IoMdArrowBack,
            text: "Porongos 5782 المركبة 90001",
        },
        {
            title: "اكتب",
            icon: IoMdArrowBack,
            text: "Hello@alsalam.com",
        },
        {
            title: "اتصلي",
            icon: IoMdArrowBack,
            text: "P598-9873-9313",
        },
    ],
    socialLinks: [
        { icon: FaYoutube },
        { icon: FaSquareXTwitter },
        { icon: FaInstagram },
        { icon: FaFacebookF },
    ],
    navLinks: ["العطلة", "الأنشطة", "جولة افتراضية", "الاستوديو", "العبوات"],
};



