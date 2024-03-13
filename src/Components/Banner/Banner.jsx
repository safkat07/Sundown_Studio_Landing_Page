
const Banner = () => {
    return (
        <div>
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
            <div className="my-16 ">
                <video  className="rounded-2xl" src="https://player.vimeo.com/progressive_redirect/playback/915350257/rendition/1080p/file.mp4?loc=external&signature=768f26c5396775e76c340cb808a897a724e78acb8231106dd94af9d732695176"></video>
            </div>
        </div>
    );
};

export default Banner;