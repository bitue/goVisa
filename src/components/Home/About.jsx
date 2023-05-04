import React from 'react';

export default function About() {
    return (
        <div className="my-12 mx-14 flex justify-around items-center">
            <div className="w-1/2">
                <img
                    src="https://image3.jdomni.in/banner/13042022/65/93/A1/821803B0CB489DF2C0301C8076_1649830130025.jpg?output-format=webp"
                    alt=""
                    className="rounded-xl "
                />
            </div>
            <div className="w-1/2">
                <div>
                    <h1 className="text-3xl text-bold text-center my-3">About Us</h1>
                    <h2 className="text-1xl  text-center my-3">
                        GoVisa Consultancy GoVisa Consultancy is your trusted partner for
                        Immigration. Our expert team specializes in Canada immigration and Visit
                        Visa applications (Canada, USA, Australia,UK). Let us help you achieve your
                        dream of living or visiting in your desired destination.
                    </h2>
                </div>
            </div>
        </div>
    );
}
