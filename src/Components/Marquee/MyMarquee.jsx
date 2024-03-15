import Marquee from "react-fast-marquee";

const MyMarquee = () => {
    return (
        <div className=''>
            <Marquee
                speed={350}
            >
                <div className=" flex  space-x-10 items-center justify-center">
                    <h1 className="text-[8vw] pl-10">EXPERIENCES</h1>
                    <div className="h-[4vw]  w-[4vw] rounded-full bg-[#FE330A]">
                    </div>
                    <h1 className="text-[8vw]">CONTENT</h1>
                    <div className="h-[4vw]  w-[4vw] rounded-full bg-[#FE330A]">
                    </div>
                    <h1 className="text-[8vw]">ENVIRONMENTS</h1>
                    <div className="h-[4vw]  w-[4vw] rounded-full bg-[#FE330A]">
                    </div>
                </div>


            </Marquee>
        </div>
    );
};

export default MyMarquee;