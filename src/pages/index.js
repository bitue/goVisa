import About from '@/components/Home/About';
import Banner from '@/components/Home/Banner';
import Card from '@/components/Home/Card';
import CardLayOut from '@/components/Home/CardLayOut';
import ContactUs from '@/components/Home/ContactUs';
import Galary from '@/components/Home/Galary';
import Why from '@/components/Home/Why';
import NavBar from '@/components/shared/Navbar/NavBar';
import Image from 'next/image';

export default function Home() {
    return (
        <div className="">
            <NavBar></NavBar>
            <Banner></Banner>
            <CardLayOut></CardLayOut>
            <About></About>
            <Why></Why>
            <Galary></Galary>
            <ContactUs></ContactUs>
        </div>
    );
}
