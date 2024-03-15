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
        // console.log("bgImage", bgImage);
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
            <div id='fixedImg' style={{ backgroundImage: `url(${bgImage})` }} className={isEntered ? `block fixed  ` : " hidden  fixed"}>


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

                    onMouseEnter={() => handleMouseEnter('https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163b_Copy-of-IMG_1180.webp')} onMouseLeave={handleMouseLeave}

                    className='flex justify-between'  >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>SOHO NYC</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>NIKE</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
                <div id='listCon' onMouseEnter={() => handleMouseEnter('https://uploads-ssl.webflow.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16c5_Copy%20of%20Nike_Soho_AMD21_0781_LORES.webp')} onMouseLeave={handleMouseLeave} className='flex justify-between'>
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>Air Force 12021</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>AFTERPARTY</p>
                        <p className='opacity-0'>Experiental</p>
                    </div>
                </div>
                <div id='listCon'

                    onMouseEnter={() => handleMouseEnter('https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1644_Copy%20of%20DSC04084.webp')} onMouseLeave={handleMouseLeave}
                    className='flex justify-between' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>SOHO 2023</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>NIKE</p>
                        <p className='opacity-0'>Experiental</p>
                    </div>

                </div>
                <div id='listCon'

                    onMouseEnter={() => handleMouseEnter('https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f4_Copy%20of%20Nike_Soho_50th_SU22_FL1_6176.webp')} onMouseLeave={handleMouseLeave}
                    className='flex justify-between' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>50th Anniversary</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>NIKE</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
                <div id='listCon'
                    onMouseEnter={() => handleMouseEnter('https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1736_Nike_HOI_50th_SU22_FL1_5395.webp')} onMouseLeave={handleMouseLeave}

                    className='flex justify-between' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>Makers Studio HOI</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>CONVERSE</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
                <div id='listCon'
                    onMouseEnter={() => handleMouseEnter('https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1721_005A0462.webp')} onMouseLeave={handleMouseLeave}
                    className='flex justify-between' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>NYFW Popup</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>NIKE</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
                <div id='listCon'

                    onMouseEnter={() => handleMouseEnter('https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16a0_Nike_Soho_Play-New-Kids_10-27-21_2039.webp')} onMouseLeave={handleMouseLeave}
                    className='flex justify-between' >
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