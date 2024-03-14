import './GroupOfDesign.css'
import img1 from '../../assets/2ndimg.webp'
const GroupOfDesign = () => {
    return (
        <div className='p-28  '>
            <div id='fDiv' className='flex  justify-between  items-end '>
                <div id='mainDiv' className='' >
                    <p className='text-[4vw]  w-[55vw] leading-none'>
                        We are a group of design-driven, goal-focused creators, producers, and designers <br /> who  believe that the details make all the difference.
                    </p>

                </div>

                {/* img div */}
                <div className=' flex h-[1vh] justify-center flex-col '>
                    <img className='rounded-xl' width={370} src={img1} alt="" />
                    <p className='leading-none text-[1vw] mt-10 w-[20vw]'>
                        We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.
                    </p>
                </div>
            </div>
            <div id='heroShape1'>
                <div id='animDiv1'>
                </div>
                <div id='animDiv2'>
                </div>
            </div>
        </div>
    );
};

export default GroupOfDesign;