import React from 'react';
import Image from 'next/image';

const Banner = () => {
    const myLoader = ({ src, width, quality }) => {
        return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
    };
    return <div className="bg-banner-img h-[90vh]"></div>;
};

export default Banner;
