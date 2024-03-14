import icon from '../../assets/icon2.png'
import { HiOutlineArrowLongRight } from "react-icons/hi2";

import './FeaturedProject.css'
const FeaturedProject = () => {
    return (
        <div className=' pt-44 min-h-screen '>
            <div className='flex p-10 pb-16  space-x-2 items-center'>
                <img width={15} src={icon} alt="" />
                <p className='text-[1vw] '>FEATURED PROJECTS</p>
            </div>

            {/* List div */}
            <div className=''>
                <div id='listCon' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>SOHO NYC</h2>
                </div>
                <div id='listCon' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>Air Force 12021</h2>
                </div>
                <div id='listCon' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>SOHO 2023</h2>
                </div>
                <div id='listCon' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>50th Anniversary</h2>
                </div>
                <div id='listCon' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>Makers Studio HOI</h2>
                </div>
                <div id='listCon' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>NYFW Popup</h2>
                </div>
                <div id='listCon' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>Play New Kidvision</h2>
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