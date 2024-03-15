import Navbar from './src/Components/Navbar/Navbar';
import Banner from './src/Components/Banner/Banner';
import { useEffect, useRef, useState } from 'react';
import useScroll from './src/Hooks/UseScroll';
import LocomotiveScroll from 'locomotive-scroll';
import MyMarquee from './src/Components/Marquee/MyMarquee';
import GroupOfDesign from './src/Components/GroupOfDesign/GroupOfDesign';
import FeaturedProject from './src/Components/FeaturedProject/FeaturedProject';
import DesignProject from './src/Components/DesignProject/DesignProject';
import WhoWeWork from './src/Components/WhoWeWork/WhoWeWork';
import CustomCursor from 'custom-cursor-react';
import './src/CSS/cursor.css'




const App = () => {

    // const [preLoader, setPreLoader] = useState(true)
    // useScroll(!preLoader)
    // const [timer, setTimer] = useState(3)

    // const id = useRef(null)
    // const clear = () => {
    //     window.clearInterval(id.current)
    //     setPreLoader(false)
    // }
    // useEffect(() => {
    //     id.current = window.setInterval(() => {
    //         setTimer((prevTimer) => {
    //             if (prevTimer === 0) {
    //                 clear();
    //                 return prevTimer; // Return current value if already zero
    //             }
    //             return prevTimer - 1; // Decrement timer otherwise
    //         });
    //     }, 1000);

    //     return () => {
    //         window.clearInterval(id.current);
    //     };
    // }, []);

    // console.log(timer);

    // const scroll = new LocomotiveScroll({
    //     el: document.querySelector('[data-scroll-container]'),
    //     smooth: true
    // })

    return (
        <>
            {/* {
                preLoader ? <div>
                    <h1 className='text-center text-5xl'>Loading</h1>
                </div>
                    :
                    <div id='main'
                        data-scroll-container
                    >
                        <Navbar></Navbar>
                        <Banner></Banner>
                    </div>
            } */}
            <div id='mainD'
                data-scroll-container
            >
                <Navbar></Navbar>
                <Banner></Banner>
                <MyMarquee></MyMarquee>
                <GroupOfDesign></GroupOfDesign>
                <FeaturedProject></FeaturedProject>
                <DesignProject></DesignProject>
                <WhoWeWork></WhoWeWork>
            </div>
        </>
    );
};

export default App;