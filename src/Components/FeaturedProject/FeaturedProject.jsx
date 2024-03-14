import icon from '../../assets/icon2.png'
import './FeaturedProject.css'
const FeaturedProject = () => {
    return (
        <div className=' pt-28 min-h-screen '>
            <div className='flex p-10 pb-44 space-x-2 items-center'>
                <img width={15} src={icon} alt="" />
                <p className='text-[1vw] '>FEATURED PROJECTS</p>
            </div>

            {/* List div */}
            <div>
                <div id='listCon' >
                    <div className="overlay"></div>
                    <h2 className='text-[3vw] relative z-10'>Makers Studio HOI</h2>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProject; 