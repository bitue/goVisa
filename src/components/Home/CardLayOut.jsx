import React from 'react';
import Card from './Card';

export default function CardLayOut() {
    const data = [
        {
            img: '/canada-f.jpg',
            des: 'We are an immigration firm dealing with providing study permits for students aspiring to study abroad.',
            title: 'Student Visa'
        },
        {
            img: '/approved.jpg',
            des: 'We are an immigration firm dealing with providing study permits for students aspiring to study abroad.',
            title: 'Permanent Visa'
        },
        {
            img: '/canada-ff.jpg',
            des: 'We are an immigration firm dealing with providing study permits for students aspiring to study abroad.',
            title: 'Counseling for Migration'
        }
    ];
    return (
        <div>
            <h1 className="text-3xl text-bold text-center my-3">Services</h1>
            <div className="flex md:flex-row justify-around ">
                {data.map((ele, idx) => {
                    return <Card ele={ele}></Card>;
                })}
            </div>
        </div>
    );
}
