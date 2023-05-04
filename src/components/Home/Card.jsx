import React from 'react';

export default function Card({ ele }) {
    const { img, des, title } = ele;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{des}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Enquiry Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
