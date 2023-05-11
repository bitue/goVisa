import Link from 'next/link';
import React from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';

export default function Footer() {
    return (
        <div>
            <div className="  bg-orange-600 grid md:grid-cols-3 grid-cols-1    px-5 py-10 ">
                <div className="px-5">
                    <h1 className="font-bold text-2xl text-green">GO VISA CONSULTANCY</h1>
                    <p className="">
                        GoVisa Consultancy is your trusted partner for Immigration. Our expert team
                        specializes in Canada immigration and Visit Visa applications (Canada, USA,
                        Australia,UK)
                    </p>
                    <p className="font-bold ">HOTLINE +880100000000</p>
                </div>

                <div className="quick-links px-5">
                    <h2 className="font-bold text-2xl">Quick Links</h2>
                    <ul className="flex justify-between md:items-center md:flex-row flex-col items-left  ">
                        <Link href="/#about" scroll={false}>
                            Home
                        </Link>

                        <Link href="/#services" scroll={false}>
                            Services
                        </Link>
                        <Link href="/#about" scroll={false}>
                            About us
                        </Link>
                        <Link href="/#why" scroll={false}>
                            Why Us
                        </Link>
                        <Link href="/#galary" scroll={false}>
                            Galary
                        </Link>
                        <Link href="/#videos" scroll={false}>
                            Videos
                        </Link>

                        <Link href="/#contact" scroll={false}>
                            Contact Us
                        </Link>
                    </ul>
                </div>

                <div className="px-5">
                    <h2 className="font-bold text-2xl">Get Us</h2>
                    <p>
                        {' '}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>{' '}
                        House D, 36 Zakir Hossain Road, Dhaka 1205
                    </p>

                    <p>
                        {' '}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>{' '}
                        +8801700000
                    </p>

                    <p>
                        {' '}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 inline"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                        </svg>
                        info@govisaconsultancy.com
                    </p>
                </div>
            </div>
        </div>
        // <div className="flex px-14  flex-row justify-between items-center bg-orange-600  ">
        //     <div className="bg-orange-600 w-1/2  ">
        //         <ul className="flex justify-between items-center md:flex-row flex-col  ">
        //             <Link href="/#about" scroll={false}>
        //                 Home
        //             </Link>

        //             <Link href="/#services" scroll={false}>
        //                 Services
        //             </Link>
        //             <Link href="/#about" scroll={false}>
        //                 About us
        //             </Link>
        //             <Link href="/#why" scroll={false}>
        //                 Why Us
        //             </Link>
        //             <Link href="/#galary" scroll={false}>
        //                 Galary
        //             </Link>
        //             <Link href="/#videos" scroll={false}>
        //                 Videos
        //             </Link>

        //             <Link href="/#contact" scroll={false}>
        //                 Contact Us
        //             </Link>
        //         </ul>
        //     </div>
        //     <div className="social w-1/2 items-center">
        //         <div>
        //             <div className="items-center my-2">
        //                 <a
        //                     href="https://www.facebook.com/profile.php?id=100092382004048"
        //                     target="_blank"
        //                     className=""
        //                 >
        //                     <img src="./ff.webp" alt="" height={30} width={30} />
        //                 </a>
        //             </div>
        //             <div>
        //                 <p>info@govisaconsultancy.com</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
