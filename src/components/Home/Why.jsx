import React from 'react';

export default function Why() {
    const data = [
        {
            des: 'Are ethical, open and honest with every client.',
            img: 'https://image3.jdomni.in/banner/13042022/4E/60/AA/4382511E81838E57B742277428_1649830937923.png?output-format=webp'
        },
        {
            des: 'Are qualified to interpret immigration laws and policy',
            img: 'https://image1.jdomni.in/banner/13042022/2A/D7/42/D4E1363A1126CBDA3643298B7A_1649831064620.png?output-format=webp'
        },
        {
            des: 'Have an excellent track record to provide immigration services.',
            img: 'https://image2.jdomni.in/banner/13042022/10/29/08/393F2F8E8AFAC05E62F1E83675_1649831044312.png?output-format=webp'
        }
    ];
    return (
        <div id="why">
            <h1 className="text-3xl text-bold text-center my-3">Why Us</h1>
            <div className="w-11/12 mx-auto flex flex-col  md:flex-row  items-center  justify-between ">
                {data.map((ele, key) => {
                    return (
                        <>
                            <div key={key}>
                                <div className="card card-compact w-96 bg-base-100 shadow-xl my-3">
                                    <figure>
                                        <img src={ele.img} alt="Shoes" height={80} width={100} />
                                    </figure>
                                    <div className="card-body text-center">
                                        <h2 className=" text-2xl ">{ele.des}</h2>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}
