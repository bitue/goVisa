import React from 'react';

export default function About() {
    return (
        <div
            id="about"
            className="w-11/12 mx-auto  flex flex-col  md:flex-row justify-between items-center  my-10"
        >
            <div className="  md:w-1/2">
                <img
                    src="https://image3.jdomni.in/banner/13042022/65/93/A1/821803B0CB489DF2C0301C8076_1649830130025.jpg?output-format=webp"
                    alt=""
                    className="rounded-xl "
                />
            </div>
            <div className=" md:p-10 p-3 md:w-1/2">
                <h1 className="text-3xl text-bold text-center my-3">About Us</h1>
                <h2 className="text-1xl   my-3">
                    GoVisa Consultancy is your trusted partner for Immigration. Our expert team
                    specializes in Canada immigration and Visit Visa applications (Canada, USA,
                    Australia,UK).Our expert Team will consult with each client to understand their
                    needs and interests and provide customized solutions to reach those personalized
                    goals. We help submitting your applications, complying with the requirements,
                    understanding migration law in Canada and its provinces, providing suggestions
                    before you land in the country of destination. Call us immediately and let us
                    help you achieve your dream of living or visiting in your desired destination.
                </h2>
            </div>
        </div>
    );
}
