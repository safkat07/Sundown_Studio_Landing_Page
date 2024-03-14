import icon from '../../assets/icon2.png'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import './FeaturedProject.css'
import { useState } from 'react';
const FeaturedProject = () => {

    const [isEntered, setIsEntered] = useState(false);
    const [bgImage, setBgImage] = useState(null);

    const handleMouseEnter = (imageUrl) => {
        setIsEntered(true);
        setBgImage(imageUrl);
        console.log("bgImage", bgImage);
    };

    const handleMouseLeave = () => {
        setIsEntered(false);
        setBgImage(null);
    };

    return (
        <div className=' pt-44 min-h-screen '>

            {/*  bg-[url('https://www.insplosion.com/blog/wp-content/uploads/2020/04/street-style-in-contemporary-interior-design-insplosion-9-scaled.jpg')] */}
            {/* bg-[url(${bgImage}')] */}
            {/* fixed image div */}
            <div id='fixedImg'  style={{ backgroundImage: `url(${bgImage})` }}  className={isEntered ? `block fixed  ` : " hidden  fixed"}>


            </div>


            {/* feature project text */}
            <div className='flex  p-10 pb-16  space-x-2 items-center'>
                <img width={15} src={icon} alt="" />
                <p className='text-[1vw] '>FEATURED PROJECTS</p>
            </div>

            {/* List div */}
            <div
                onMouseEnter={() => setIsEntered(true)}
                onMouseLeave={() => setIsEntered(false)}
                className=''>
                <div id='listCon'

                    onMouseEnter={() => handleMouseEnter('https://www.insplosion.com/blog/wp-content/uploads/2020/04/street-style-in-contemporary-interior-design-insplosion-9-scaled.jpg')} onMouseLeave={handleMouseLeave}

                    className='flex justify-between'  >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>SOHO NYC</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>NIKE</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
                <div id='listCon' onMouseEnter={() => handleMouseEnter('https://pressbooks.cuny.edu/app/uploads/sites/93/2022/08/thanuj-mathew-8CSTVoDMEXg-unsplash-2048x1365.jpg')} onMouseLeave={handleMouseLeave} className='flex justify-between'>
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>Air Force 12021</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>AFTERPARTY</p>
                        <p className='opacity-0'>Experiental</p>
                    </div>
                </div>
                <div id='listCon'

                    onMouseEnter={() => handleMouseEnter('https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg')} onMouseLeave={handleMouseLeave}
                    className='flex justify-between' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>SOHO 2023</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>NIKE</p>
                        <p className='opacity-0'>Experiental</p>
                    </div>

                </div>
                <div id='listCon' className='flex justify-between' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>50th Anniversary</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>NIKE</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
                <div id='listCon' className='flex justify-between' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>Makers Studio HOI</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>CONVERSE</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
                <div id='listCon' className='flex justify-between' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>NYFW Popup</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>NIKE</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
                <div id='listCon' className='flex justify-between' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>Play New Kidvision</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>ARCTERYX</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
            </div>

            <div id='btnCon' className='p-10 relative pt-20'>
                <button id='btn' className='flex gap-x-2 items-center'>
                    <span className='text-[1vw] z-20'>All Projects</span> <span className='text-[3vw] z-20'><HiOutlineArrowLongRight></HiOutlineArrowLongRight></span>
                </button>
            </div>

        </div>
    );
};

export default FeaturedProject; 