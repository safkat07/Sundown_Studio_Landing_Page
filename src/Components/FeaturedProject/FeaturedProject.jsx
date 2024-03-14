import icon from '../../assets/icon2.png'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import './FeaturedProject.css'
import { useState } from 'react';
const FeaturedProject = () => {

    const [isEntred, setIsEntred] = useState(false)

    return (
        <div className=' pt-44 min-h-screen '>

            {/* fixed image div */}
            <div id='fixedImg' className={isEntred ? "block fixed" : " hidden fixed"}>


            </div>


            {/* feature project text */}
            <div className='flex  p-10 pb-16  space-x-2 items-center'>
                <img width={15} src={icon} alt="" />
                <p className='text-[1vw] '>FEATURED PROJECTS</p>
            </div>

            {/* List div */}
            <div

                onMouseEnter={() => setIsEntred(true)}
                onMouseLeave={() => setIsEntred(false)}
                className=''>
                <div id='listCon' data-img='' className='flex justify-between'  >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>SOHO NYC</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>NIKE</p>
                        <p className='opacity-0'>Environment</p>
                    </div>
                </div>
                <div id='listCon' className='flex justify-between'>
                    <div className="overlay" ></div>
                    <h2 className='text-[3vw] relative z-10'>Air Force 12021</h2>
                    <div className='flex z-10 items-end flex-col'>
                        <p className='text-left'>AFTERPARTY</p>
                        <p className='opacity-0'>Experiental</p>
                    </div>
                </div>
                <div id='listCon' className='flex justify-between' >
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