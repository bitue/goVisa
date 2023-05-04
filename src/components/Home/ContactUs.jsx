import React from 'react';
import Head from 'next/head';
export default function ContactUs() {
    const data = [
        {
            img: 'https://image3.jdomni.in/banner/13042022/38/5B/5D/01E51D60D47B0846B1253E41A4_1649832093752.png?output-format=webp',
            title: 'Our Timing',
            des: 'Sun - Mon 9 :00 am to 6 pm'
        },
        {
            img: 'https://image2.jdomni.in/banner/13042022/0E/2C/08/636E73CA2D6F6467617FAAC3D7_1649832062549.png?output-format=webp',
            title: 'Call Us',
            des: '+880-1700-0000000'
        },
        {
            img: 'https://image3.jdomni.in/banner/13042022/F7/26/C4/3DC853928D9A93D6F034D52214_1649832054215.png?output-format=webp',
            title: 'General Query',
            des: 'info@govisaconsultancy.com'
        },
        {
            img: 'https://image3.jdomni.in/banner/13042022/53/D5/BA/7CEF68F77F56F972DCA900A632_1649832039208.png?output-format=webp',
            title: 'Office Address',
            des: 'House D, 36 Zakir Hossain Road, Dhaka 1205'
        }
    ];
    return (
        <div>
            <Head>
                <script
                    async
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.2325405872622!2d90.36720448208212!3d23.75733911668912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfe1ad267c5b%3A0xd1c93b35f1cd2042!2sENGLISH%20HUB%20%26%20CONSULTANT!5e0!3m2!1sen!2sbd!4v1683196331630!5m2!1sen!2sbd"
                    height="400"
                    width="600"
                />
            </Head>
            <div className="mx-14 my-12 w-9/12 ">
                <h2 className="text-3xl text-bold text-center my-12">Contact Us</h2>
                <div className="flex justify-between items-center">
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.2325405872622!2d90.36720448208212!3d23.75733911668912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfe1ad267c5b%3A0xd1c93b35f1cd2042!2sENGLISH%20HUB%20%26%20CONSULTANT!5e0!3m2!1sen!2sbd!4v1683196331630!5m2!1sen!2sbd"
                            width="600"
                            height="400"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div>
                        {data.map((ele) => {
                            return (
                                <div className="flex  items-center px-3 py-5">
                                    <div className="mx-5">
                                        <img src={ele.img} height={50} width={50}></img>
                                    </div>
                                    <div className="">
                                        <h1>{ele.title}</h1>
                                        <h1>{ele.des}</h1>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
