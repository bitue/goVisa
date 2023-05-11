import React from 'react';
import Card from './Card';

export default function CardLayOut() {
    const data = [
        {
            img: '/canada-f.jpg',
            des: 'We are an immigration firm dealing with providing study permits for students aspiring to study abroad.',
            title: 'Skilled'
        },
        {
            img: '/approved.jpg',
            des: 'We are an immigration firm dealing with providing study permits for students aspiring to study abroad.',
            title: 'Visa'
        },
        {
            img: '/canada-ff.jpg',
            des: 'We are an immigration firm dealing with providing study permits for students aspiring to study abroad.',
            title: 'Counseling for Migration'
        }
    ];
    return (
        <div id="services" className="w-11/12 mx-auto">
            <h1 className="text-3xl text-bold text-center my-5">Services</h1>
            <div className="  flex flex-col  md:flex-row  items-center  justify-between  ">
                {data.map((ele, idx) => {
                    return <Card key={idx} ele={ele}></Card>;
                })}
            </div>
        </div>
    );
}
