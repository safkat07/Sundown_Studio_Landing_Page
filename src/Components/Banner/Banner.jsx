import video from '../../assets/home_video.mp4'
import './banner.css'
const Banner = () => {

    return (
        <div  className='p-10'>
            <div className='flex mt-28 border-b-2 pb-[2.5vw] border-orange-500 min-h-[65vh] w-full  items-end justify-between'>
                <div >
                    <h3 className="w-[25vw] text-[1.8vw] leading-[2vw]">
                        Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.

                    </h3>
                </div>
                <div>
                    <h1 className="text-[10vw] text-right leading-[9vw]">
                        SPACES      <br />
                        THAT <br />
                        INSPIRE
                    </h1>
                </div>
            </div>


            {/* animation part */}
            <div id='heroShape'>
                <div id="hero1"></div>
                <div id="hero2"></div>
                <div id="hero3"></div>
            </div>


            <div className="mt-[3vw] relative ">
                <video autoPlay loop muted className="rounded-2xl" src={video}></video>
            </div>
        </div>
    );
};

export default Banner;