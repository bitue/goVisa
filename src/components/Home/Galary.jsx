import React from 'react';

export default function Galary() {
    const data = [
        {
            img: '/canada-ff.jpg'
        },
        {
            img: '/canada-f.jpg'
        },
        {
            img: '/canada-ff.jpg'
        }
    ];
    return (
        <div>
            <h1 className="text-3xl text-bold text-center my-3 "> Gallery</h1>
            <div className="flex justify-between items-center mx-14">
                {data.map((ele, idx) => {
                    return (
                        <div key={idx}>
                            <img src={ele.img} alt="" height={300} width={400} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
