import About from '@/components/Home/About';
import Banner from '@/components/Home/Banner';

import CardLayOut from '@/components/Home/CardLayOut';
import ContactUs from '@/components/Home/ContactUs';
import Footer from '@/components/Home/Footer';
import Galary from '@/components/Home/Galary';
import Why from '@/components/Home/Why';
import NavBar from '@/components/shared/Navbar/NavBar';

export default function Home() {
    return (
        <div className="">
            <Banner></Banner>
            <CardLayOut></CardLayOut>
            <About></About>
            <Why></Why>
            <Galary></Galary>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
}
