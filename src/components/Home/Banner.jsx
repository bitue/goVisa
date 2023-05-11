import React from 'react';
import NavBar from '../shared/Navbar/NavBar';

const Banner = () => {
    return (
        <div className="bg-banner-img h-[90vh]">
            <NavBar></NavBar>
            <div className="flex justify-between items-center h-full p-5 ">
                <div className="">
                    <h1 className="text-2xl font-semibold capitalize my-5">
                        let us help you achieve your dream of living or visiting in your desired
                        destination.
                    </h1>
                    <button className="btn btn-primary">Enquiry Now!</button>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
};

export default Banner;
