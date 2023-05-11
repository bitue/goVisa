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
        <div id="galary" className="w-11/12 mx-auto">
            <h1 className="text-3xl text-bold text-center my-12 "> Gallery</h1>
            <div className="flex flex-col  md:flex-row  items-center  justify-between  ">
                {data.map((ele, idx) => {
                    return (
                        <div key={idx} className="my-3">
                            <img src={ele.img} alt="" height={300} width={400} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
